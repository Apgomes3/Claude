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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full"
        style={{ background: "var(--surface)", color: "var(--on-surface)" }}
      >
        {children}
      </body>
    </html>
  );
}
