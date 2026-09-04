import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Бронирование столика",
  description: "Онлайн-бронирование столика в ресторане",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
