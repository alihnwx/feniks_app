export type ApplicationFormData = {
  naimenovanieGruza: string;
  harakteristikaGruza: string;
  massaGruza: string;
  usloviyaOsushchestvleniya: string;
  trebovaniyaTransportu: string;
  gruzootpravitel: string;
  adresPogruzki: string;
  dataPogruzki: string;
  telefonPogruzki: string;
  gruzopoluchatel: string;
  adresRazgruzki: string;
  dataRazgruzki: string;
  telefonRazgruzki: string;
  kommentariy: string;
  plata: string;
  perevozchik: string;
  modelNomer: string;
  dannyeVoditelya: string;
  pib: string;
};

export const EMPTY_APPLICATION_FORM: ApplicationFormData = {
  naimenovanieGruza: "",
  harakteristikaGruza: "",
  massaGruza: "",
  usloviyaOsushchestvleniya: "",
  trebovaniyaTransportu: "",
  gruzootpravitel: "",
  adresPogruzki: "",
  dataPogruzki: "",
  telefonPogruzki: "",
  gruzopoluchatel: "",
  adresRazgruzki: "",
  dataRazgruzki: "",
  telefonRazgruzki: "",
  kommentariy: "",
  plata: "",
  perevozchik: "",
  modelNomer: "",
  dannyeVoditelya: "",
  pib: "",
};

export function isApplicationFormValid(data: ApplicationFormData): boolean {
  return Object.values(data).every((value) => value.trim().length > 0);
}

export function mapFormDataToTemplate(data: ApplicationFormData) {
  const telefonPogruzki = data.telefonPogruzki.trim();
  const telefonRazgruzki = data.telefonRazgruzki.trim();

  return {
    наименование_груза: data.naimenovanieGruza.trim(),
    характеристика_груза: data.harakteristikaGruza.trim(),
    масса_груза: data.massaGruza.trim(),
    условия_осуществления: data.usloviyaOsushchestvleniya.trim(),
    требования_транспорту: data.trebovaniyaTransportu.trim(),
    грузоотправитель: data.gruzootpravitel.trim(),
    адрес_погрузки: data.adresPogruzki.trim(),
    дата_погрузки: data.dataPogruzki.trim(),
    // Оба телефонных ключа заполняются на случай опечатки в шаблоне.
    телефон_погрузки: telefonPogruzki,
    грузополучатель: data.gruzopoluchatel.trim(),
    адрес_разгрузки: data.adresRazgruzki.trim(),
    дата_разгрузки: data.dataRazgruzki.trim(),
    телефон_разгрузки: telefonRazgruzki,
    комментарий: data.kommentariy.trim(),
    плата: data.plata.trim(),
    перевозчик: data.perevozchik.trim(),
    модель_номер: data.modelNomer.trim(),
    данные_водителя: data.dannyeVoditelya.trim(),
    ПИБ: data.pib.trim(),
  };
}
