import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laser Hub School Management Dashboard",
  description: "Next.js School Management System",
};

/**
 * Root layout component for the application.
 *
 * @param children - The React node(s) to be rendered within the layout.
 * @returns The root layout structure, including the ClerkProvider for authentication context,
 *          the HTML structure with language set to English, and the Inter font applied to the body.
 *          Also includes a ToastContainer for displaying notifications at the bottom-right with a dark theme.
 *
 * @remarks
 * - Wraps the entire application with authentication and notification providers.
 * - Ensures consistent font styling and notification placement across all pages.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children} <ToastContainer position="bottom-right" theme="dark" />
        </body>
      </html>
    </ClerkProvider>
  );
}