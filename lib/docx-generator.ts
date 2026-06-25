// lib/docx-generator.ts
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

/**
 * Принимает бинарный буфер оригинального .docx шаблона и объект с данными формы,
 * возвращает буфер готового сгенерированного документа.
 */
export function generateDocx(templateBuffer: Buffer, data: Record<string, any>): Buffer {
  // 1. Загружаем docx файл как zip-архив
  const zip = new PizZip(templateBuffer);

  // 2. Инициализируем docxtemplater с дефолтными настройками
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // 3. Передаем данные для рендеринга (маппинг из mapFormDataToTemplate)
  doc.render(data);

  // 4. Генерируем финальный node-буфер
  const generatedBuffer = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });

  return generatedBuffer;
}