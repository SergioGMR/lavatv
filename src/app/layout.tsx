import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions';
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/ui/Nav";

const interItalic = localFont({
  src: "./fonts/Inter-Italic.woff2",
  variable: "--font-inter-italic",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/Inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="es">
        <body
          className={`${inter.variable} ${interItalic.variable} antialiased`}
        >
          <div className="container mx-auto">
            <Nav />
            <main className="container mx-auto">{children}</main>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
