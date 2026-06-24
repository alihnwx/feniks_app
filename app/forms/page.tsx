import type {Metadata} from "next";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export const metadata: Metadata = {
  title: "Заполните заявку уже сейчас",
  description:
    "Заполните форму и скачайте готовую заявку, за пару минут!",
};

export default function Home() {
    return (
        <>
        <Header />
        <Footer />
        </>
    )
}