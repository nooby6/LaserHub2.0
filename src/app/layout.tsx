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
 * It wraps the entire application with a consistent HTML structure and applies
 * global styles or configurations.
 *
 * @param children - The ReactNode elements to be rendered within the layout.
 *                    Typically, this will include the main content of the page.
 *
 * @returns A JSX element that defines the root structure of the application,
 *          including the `<html>` and `<body>` tags.
 *
 * @remarks
 * - The `lang` attribute in the `<html>` tag is set to "en" for English language support.
 * - The `className` applied to the `<body>` tag is dynamically set using the `inter.className`,
 *   which is likely a reference to a font or global styling.
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