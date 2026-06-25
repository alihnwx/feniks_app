import Docxtemplater from "docxtemplater";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import PizZip from "pizzip";

import {
  type ApplicationFormData,
  isApplicationFormValid,
  mapFormDataToTemplate,
} from "@/lib/application-form";
import { injectPlaceholders } from "@/lib/prepare-docx-template";

export const runtime = "nodejs";

const TEMPLATE_PATH = path.join(process.cwd(), "public", "template.docx");

function isApplicationFormData(value: unknown): value is ApplicationFormData {
  if (!value || typeof value !== "object") {
    return false;
  }

  const keys: (keyof ApplicationFormData)[] = [
    "naimenovanieGruza",
    "harakteristikaGruza",
    "massaGruza",
    "usloviyaOsushchestvleniya",
    "trebovaniyaTransportu",
    "gruzootpravitel",
    "adresPogruzki",
    "dataPogruzki",
    "telefonPogruzki",
    "gruzopoluchatel",
    "adresRazgruzki",
    "dataRazgruzki",
    "telefonRazgruzki",
    "kommentariy",
    "plata",
    "perevozchik",
    "modelNomer",
    "dannyeVoditelya",
    "pib",
  ];

  return keys.every((key) => typeof (value as ApplicationFormData)[key] === "string");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Некорректный JSON в теле запроса." },
      { status: 400 },
    );
  }

  if (!isApplicationFormData(body)) {
    return NextResponse.json(
      { error: "Отсутствуют обязательные поля формы." },
      { status: 400 },
    );
  }

  if (!isApplicationFormValid(body)) {
    return NextResponse.json(
      { error: "Все поля формы должны быть заполнены." },
      { status: 400 },
    );
  }

  let templateBuffer: Buffer;

  try {
    templateBuffer = await readFile(TEMPLATE_PATH);
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException;

    if (nodeError.code === "ENOENT") {
      return NextResponse.json(
        { error: "Файл шаблона template.docx не найден." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { error: "Не удалось прочитать файл шаблона." },
      { status: 500 },
    );
  }

  try {
    const zip = new PizZip(templateBuffer);
    const documentFile = zip.file("word/document.xml");

    if (!documentFile) {
      return NextResponse.json(
        { error: "Некорректная структура шаблона template.docx." },
        { status: 500 },
      );
    }

    zip.file("word/document.xml", injectPlaceholders(documentFile.asText()));

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    const templateData = mapFormDataToTemplate(body);

    // Оба ключа заполняются: {телефон_погрузки} и {телефон_разгрузки}.
    doc.render(templateData);

    const output = doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    return new NextResponse(new Uint8Array(output), {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition":
          'attachment; filename="Zayavka_na_perevozku.docx"',
      },
    });
  } catch (error) {
    console.error("DOCX generation failed:", error);

    return NextResponse.json(
      { error: "Ошибка при генерации документа. Проверьте шаблон." },
      { status: 500 },
    );
  }
}
