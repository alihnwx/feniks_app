// app/api/generate-docx/route.ts
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { mapFormDataToTemplate, type ApplicationFormData } from "@/lib/application-form";
import { generateDocx } from "@/lib/docx-generator";

export async function POST(request: Request) {
  try {
    // 1. Получаем данные из тела запроса
    const body: ApplicationFormData = await request.json();

    // 2. Валидируем на стороне сервера (минимальная проверка)
    if (!body) {
      return NextResponse.json({ error: "Данные формы пусты" }, { status: 400 });
    }

    // 3. Формируем путь к шаблону в папке public
    const templatePath = path.join(process.cwd(), "public", "template.docx");
    
    // Читаем файл шаблона
    let templateBuffer: Buffer;
    try {
      templateBuffer = await fs.readFile(templatePath);
    } catch (fsError) {
      console.error("Ошибка чтения файла шаблона:", fsError);
      return NextResponse.json({ error: "Шаблон документа не найден на сервере" }, { status: 500 });
    }

    // 4. Маппим данные формы в кириллические плейсхолдеры для шаблона
    const templateData = mapFormDataToTemplate(body);

    // 5. Генерируем заполненный документ
    const outputBuffer = generateDocx(templateBuffer, templateData);

    // 6. Формируем заголовки для скачивания файла браузером
    const headers = new Headers();
    headers.set(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    headers.set(
      "Content-Disposition",
      `attachment; filename="Zayavka_na_perevozku.docx"`
    );

    // Возвращаем буфер файла
    return new NextResponse(new Uint8Array(outputBuffer), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Ошибка при генерации DOCX:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера при генерации документа" },
      { status: 500 }
    );
  }
};