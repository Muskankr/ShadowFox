import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sakthi Dental Clinic | Best Dental Care in Hosur",
  description:
    "Professional dental care in Hosur offering dental implants, root canal treatment, orthodontics, cosmetic dentistry, pediatric dentistry and preventive dental care.",

  keywords: [
    "Sakthi Dental Clinic",
    "Dentist Hosur",
    "Dental Clinic",
    "Root Canal",
    "Dental Implants",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Teeth Cleaning",
  ],

  authors: [
    {
      name: "Sakthi Dental Clinic",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}