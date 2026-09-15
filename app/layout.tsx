import type { Metadata } from "next";
import { Baloo_Bhaijaan_2, Tajawal } from "next/font/google";
import { AudioPlayer } from "@/components/AudioPlayer";
import { asset } from "@/lib/basePath";
import "@/styles/globals.css";

const baloo = Baloo_Bhaijaan_2({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "متعة التعلم — تعلم الحروف العربية",
  description:
    "متعة التعلم: موقع تفاعلي لتعليم الأطفال الحروف والمقاطع العربية بالصوت والصورة.",
  icons: {
    icon: asset("/assets/favicon.png"),
    apple: asset("/assets/favicon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${baloo.variable} ${tajawal.variable}`}>
      <body style={{ fontFamily: "var(--font-baloo), var(--font-tajawal), system-ui, sans-serif" }}>
        <AudioPlayer>{children}</AudioPlayer>
      </body>
    </html>
  );
}
