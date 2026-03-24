import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Playful Vault",
  description: "Your money, your adventure!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full"
        style={{ background: "var(--surface)", color: "var(--on-surface)" }}
      >
        {children}
      </body>
    </html>
  );
}
