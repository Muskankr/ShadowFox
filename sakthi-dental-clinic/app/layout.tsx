import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sakthi Dental Clinic",
  description:
    "Professional Dental Care with Modern Technology and Compassionate Service.",
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