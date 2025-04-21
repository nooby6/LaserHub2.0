import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laser Hub School Management Dashboard",
  description: "Next.js School Management System",
};

/**
 * RootLayout component serves as the foundational layout for the application.
 * It wraps the entire application with the necessary HTML structure and applies global styles.
 *
 * @param children - The React node(s) to be rendered within the layout. Typically, this will include the application's main content.
 *
 * @returns A JSX element that includes the HTML structure with a `<html>` tag, a `<body>` tag, and the provided children.
 *
 * @remarks
 * - The `lang` attribute in the `<html>` tag is set to "en" for English language support.
 * - The `className` for the `<body>` tag is dynamically set using the `inter.className`, which likely applies a global font or style.
 * - This layout is intended to be used as the root wrapper for all pages in the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
