import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Factory Growth Engine",
  description: "AI CMO workspace for Project Factory products",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
