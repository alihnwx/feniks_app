"use client";

import { useMemo, useState } from "react";

import {
  EMPTY_APPLICATION_FORM,
  type ApplicationFormData,
  isApplicationFormValid,
} from "@/lib/application-form";

type FormSection = {
  title: string;
  description: string;
  fields: {
    key: keyof ApplicationFormData;
    label: string;
    type?: "text" | "textarea";
    placeholder?: string;
    fullWidth?: boolean;
  }[];
};

const FORM_SECTIONS: FormSection[] = [
  {
    title: "Общие данные груза",
    description: "Основная информация о перевозимом грузе и условиях доставки.",
    fields: [
      {
        key: "naimenovanieGruza",
        label: "Наименование груза",
        placeholder: "Например: строительные материалы",
      },
      {
        key: "harakteristikaGruza",
        label: "Характеристика груза",
        placeholder: "Описание, упаковка, особенности",
        type: "textarea",
        fullWidth: true,
      },
      {
        key: "massaGruza",
        label: "Масса груза",
        placeholder: "Например: 12 т",
      },
      {
        key: "plata",
        label: "Плата за перевозку",
        placeholder: "Сумма и условия оплаты",
      },
      {
        key: "usloviyaOsushchestvleniya",
        label: "Условия осуществления",
        placeholder: "Условия перевозки",
        type: "textarea",
        fullWidth: true,
      },
      {
        key: "trebovaniyaTransportu",
        label: "Требования к транспорту",
        placeholder: "Тип кузова, температура и т.д.",
        type: "textarea",
        fullWidth: true,
      },
      {
        key: "kommentariy",
        label: "Комментарий",
        placeholder: "Дополнительная информация",
        type: "textarea",
        fullWidth: true,
      },
    ],
  },
  {
    title: "Место погрузки",
    description: "Кто отправляет груз и где происходит погрузка.",
    fields: [
      {
        key: "gruzootpravitel",
        label: "Грузоотправитель",
        placeholder: "Наименование и реквизиты",
        fullWidth: true,
      },
      {
        key: "adresPogruzki",
        label: "Адрес погрузки",
        placeholder: "Город, улица, склад",
        fullWidth: true,
      },
      {
        key: "dataPogruzki",
        label: "Дата и время погрузки",
        placeholder: "Например: 24.06.2026, 14:30",
      },
      {
        key: "telefonPogruzki",
        label: "Контакты погрузки",
        placeholder: "+7 (___) ___-__-__",
      },
    ],
  },
  {
    title: "Место разгрузки",
    description: "Кто принимает груз и куда его нужно доставить.",
    fields: [
      {
        key: "gruzopoluchatel",
        label: "Грузополучатель",
        placeholder: "Наименование и реквизиты",
        fullWidth: true,
      },
      {
        key: "adresRazgruzki",
        label: "Адрес разгрузки",
        placeholder: "Город, улица, склад",
        fullWidth: true,
      },
      {
        key: "dataRazgruzki",
        label: "Дата и время разгрузки",
        placeholder: "Например: 25.06.2026, 10:00",
      },
      {
        key: "telefonRazgruzki",
        label: "Контакты разгрузки",
        placeholder: "+7 (___) ___-__-__",
      },
    ],
  },
  {
    title: "Данные транспорта и перевозчика",
    description: "Информация о перевозчике, транспортном средстве и водителе.",
    fields: [
      {
        key: "perevozchik",
        label: "Перевозчик",
        placeholder: "Наименование перевозчика",
        fullWidth: true,
      },
      {
        key: "modelNomer",
        label: "Модель и номер ТС",
        placeholder: "Марка, модель, гос. номер",
      },
      {
        key: "dannyeVoditelya",
        label: "Данные водителя",
        placeholder: "ФИО, телефон, удостоверение",
        type: "textarea",
        fullWidth: true,
      },
      {
        key: "pib",
        label: "ПИБ",
        placeholder: "ФИО ответственного лица",
        fullWidth: true,
      },
    ],
  },
];

function Spinner() {
  return <span className="form-spinner" aria-hidden="true" />;
}

export default function ApplicationForm() {
  const [formData, setFormData] =
    useState<ApplicationFormData>(EMPTY_APPLICATION_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isValid = useMemo(() => isApplicationFormValid(formData), [formData]);

  function updateField(
    key: keyof ApplicationFormData,
    value: string,
  ): void {
    setFormData((current) => ({ ...current, [key]: value }));
    setErrorMessage(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/generate-docx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        throw new Error(
          payload?.error ?? "Не удалось сгенерировать документ. Попробуйте снова.",
        );
      }

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Zayavka_na_perevozku.docx";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Произошла непредвиденная ошибка.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate>
      {FORM_SECTIONS.map((section) => (
        <section key={section.title} className="form-section">
          <div className="form-section-head">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>

          <div className="form-grid">
            {section.fields.map((field) => {
              const fieldId = `field-${field.key}`;
              const value = formData[field.key];
              const isFilled = value.trim().length > 0;

              return (
                <label
                  key={field.key}
                  className={`form-field${field.fullWidth ? " form-field--full" : ""}`}
                  htmlFor={fieldId}
                >
                  <span className="form-label">
                    {field.label}
                    <span className="form-required" aria-hidden="true">
                      *
                    </span>
                  </span>

                  {field.type === "textarea" ? (
                    <textarea
                      id={fieldId}
                      name={field.key}
                      value={value}
                      onChange={(event) =>
                        updateField(field.key, event.target.value)
                      }
                      placeholder={field.placeholder}
                      rows={4}
                      className={isFilled ? "is-filled" : ""}
                      required
                    />
                  ) : (
                    <input
                      id={fieldId}
                      name={field.key}
                      type={field.type ?? "text"}
                      value={value}
                      onChange={(event) =>
                        updateField(field.key, event.target.value)
                      }
                      placeholder={field.placeholder}
                      className={isFilled ? "is-filled" : ""}
                      required
                    />
                  )}
                </label>
              );
            })}
          </div>
        </section>
      ))}

      <div className="form-actions">
        {errorMessage ? (
          <p className="form-error" role="alert">
            {errorMessage}
          </p>
        ) : (
          <p className="form-hint">
            {isValid
              ? "Все поля заполнены — можно скачать заявку."
              : "Заполните все обязательные поля, чтобы скачать документ."}
          </p>
        )}

        <button
          type="submit"
          className="btn-primary form-submit"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner />
              Генерация документа...
            </>
          ) : (
            "Скачать готовую заявку →"
          )}
        </button>
      </div>
    </form>
  );
}
