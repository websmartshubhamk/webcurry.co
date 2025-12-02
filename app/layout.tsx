import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Webcurry.co — Modern web builds with CRO, chat, and tools",
  description: "Full-width, conversion-first web experiences with mega menus, chatbots, WhatsApp, popups, sliders, and niche tools."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
