import type { Metadata } from "next";

import ApplicationForm from "@/components/modules/ApplicationForm";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export const metadata: Metadata = {
  title: "Заявка на перевозку — Феникс Логистикс",
  description:
    "Заполните форму и скачайте готовую заявку на перевозку груза в формате DOCX.",
};

export default function FormsPage() {
  return (
    <>
      <Header />
      <main className="forms-page">
        <div className="wrap">
          <div className="forms-hero">
            <span className="tag">Онлайн-заявка</span>
            <h1>Заявка на перевозку груза</h1>
            <p>
              Заполните все поля формы — мы автоматически сформируем документ
              Word на основе вашего шаблона. Скачивание начнётся сразу после
              генерации.
            </p>
          </div>

          <ApplicationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
