const VALUE_LINE_STYLE =
  '<w:pPr><w:rPr><w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="ru-RU"/></w:rPr></w:pPr>';

function valueParagraph(placeholder: string): string {
  return `<w:p>${VALUE_LINE_STYLE}<w:r><w:rPr><w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="ru-RU"/></w:rPr><w:t>{${placeholder}}</w:t></w:r></w:p>`;
}

function injectValueAfterParagraphEnd(
  xml: string,
  paragraphEnd: string,
  placeholder: string,
): string {
  if (!xml.includes(paragraphEnd)) {
    return xml;
  }

  return xml.replace(
    paragraphEnd,
    `${paragraphEnd}${valueParagraph(placeholder)}`,
  );
}

function insertPageBreakBeforeParagraph(
  xml: string,
  paragraphMarker: string,
): string {
  const paragraphStart = xml.indexOf(paragraphMarker);

  if (paragraphStart === -1) {
    return xml;
  }

  const paragraphOpenEnd = xml.indexOf(">", paragraphStart);

  if (paragraphOpenEnd === -1) {
    return xml;
  }

  const paragraphClose = xml.indexOf("</w:p>", paragraphOpenEnd);

  if (paragraphClose === -1) {
    return xml;
  }

  const paragraph = xml.slice(paragraphStart, paragraphClose + "</w:p>".length);

  if (paragraph.includes("<w:pageBreakBefore")) {
    return xml;
  }

  let updatedParagraph = paragraph;

  if (paragraph.includes("<w:pPr>")) {
    updatedParagraph = paragraph.replace(
      "<w:pPr>",
      "<w:pPr><w:pageBreakBefore/>",
    );
  } else {
    updatedParagraph = paragraph.replace(
      ">",
      `><w:pPr><w:pageBreakBefore/></w:pPr>`,
      1,
    );
  }

  return (
    xml.slice(0, paragraphStart) +
    updatedParagraph +
    xml.slice(paragraphClose + "</w:p>".length)
  );
}

const PLACEHOLDER_INJECTIONS: Array<{
  paragraphEnd: string;
  placeholder: string;
}> = [
  {
    paragraphEnd:
      '<w:t xml:space="preserve">Наименование груза: </w:t></w:r><w:r w:rsidR="000B7746" w:rsidRPr="00BE1C22"><w:rPr><w:b/><w:bCs/><w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="ru-RU"/></w:rPr><w:tab/></w:r></w:p>',
    placeholder: "наименование_груза",
  },
  {
    paragraphEnd: "<w:t>Характеристика груза:</w:t></w:r></w:p>",
    placeholder: "характеристика_груза",
  },
  {
    paragraphEnd: "<w:t>Масса груза, т:</w:t></w:r></w:p>",
    placeholder: "масса_груза",
  },
  {
    paragraphEnd: "<w:t>погрузочно-разгрузочных работ:</w:t></w:r></w:p>",
    placeholder: "условия_осуществления",
  },
  {
    paragraphEnd:
      "<w:t>Требования к транспортному средству:</w:t></w:r></w:p>",
    placeholder: "требования_транспорту",
  },
  {
    paragraphEnd: "<w:t>оотправитель:</w:t></w:r></w:p>",
    placeholder: "грузоотправитель",
  },
  {
    paragraphEnd: "<w:t>Адрес пункта погрузки:</w:t></w:r></w:p>",
    placeholder: "адрес_погрузки",
  },
  {
    paragraphEnd: "<w:t>Дата–время погрузки:</w:t></w:r></w:p>",
    placeholder: "дата_погрузки",
  },
  {
    paragraphEnd: "<w:t>Грузополучатель:</w:t></w:r></w:p>",
    placeholder: "грузополучатель",
  },
  {
    paragraphEnd: "<w:t>Адрес пункта разгрузки:</w:t></w:r></w:p>",
    placeholder: "адрес_разгрузки",
  },
  {
    paragraphEnd: "<w:t>Дата–время разгрузки:</w:t></w:r></w:p>",
    placeholder: "дата_разгрузки",
  },
  {
    paragraphEnd: "<w:t>Комментарий к рейсу:</w:t></w:r></w:p>",
    placeholder: "комментарий",
  },
  {
    paragraphEnd: "<w:t>Размер платы за перевозку груза:</w:t></w:r></w:p>",
    placeholder: "плата",
  },
  {
    paragraphEnd: "<w:t>Наименование перевозчика:</w:t></w:r></w:p>",
    placeholder: "перевозчик",
  },
  {
    paragraphEnd: "<w:t>транспортного средства:</w:t></w:r></w:p>",
    placeholder: "модель_номер",
  },
  {
    paragraphEnd: "<w:t>телефон водителя:</w:t></w:r></w:p>",
    placeholder: "данные_водителя",
  },
  {
    paragraphEnd: "<w:t>лица Отправителя:</w:t></w:r></w:p>",
    placeholder: "ПИБ",
  },
];

const CONTACT_LOADING_PARAGRAPH_END =
  "<w:t>Конт. лицо/телефон:</w:t></w:r></w:p>";
const UNLOADING_SECTION_PARAGRAPH =
  '<w:p w14:paraId="7C0A2F9B"';

export function injectPlaceholders(documentXml: string): string {
  let xml = documentXml;

  for (const { paragraphEnd, placeholder } of PLACEHOLDER_INJECTIONS) {
    xml = injectValueAfterParagraphEnd(xml, paragraphEnd, placeholder);
  }

  const firstContactIndex = xml.indexOf(CONTACT_LOADING_PARAGRAPH_END);

  if (firstContactIndex !== -1) {
    xml =
      xml.slice(0, firstContactIndex) +
      "<w:t>Конт. лицо/телефон:</w:t></w:r></w:p>" +
      valueParagraph("телефон_погрузки") +
      xml.slice(firstContactIndex + CONTACT_LOADING_PARAGRAPH_END.length);

    const secondContactIndex = xml.indexOf(CONTACT_LOADING_PARAGRAPH_END);

    if (secondContactIndex !== -1) {
      xml =
        xml.slice(0, secondContactIndex) +
        "<w:t>Конт. лицо/телефон:</w:t></w:r></w:p>" +
        valueParagraph("телефон_разгрузки") +
        xml.slice(secondContactIndex + CONTACT_LOADING_PARAGRAPH_END.length);
    }
  }

  // Вторая страница шаблона начинается с блока «Место разгрузки».
  xml = insertPageBreakBeforeParagraph(xml, UNLOADING_SECTION_PARAGRAPH);

  return xml;
}
