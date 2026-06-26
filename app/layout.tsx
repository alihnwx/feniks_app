import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feniks Logistics. Международные грузоперевозки",
  description:
    "Международные грузоперевозки под ключ: расчёт маршрута, таможенное оформление и доставка.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
