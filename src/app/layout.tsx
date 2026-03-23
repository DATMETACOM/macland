import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ChatbotWidget from "@/components/contact/ChatbotWidget";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Macland - Bất Động Sản Công Nghiệp",
  description: "Tư vấn và xúc tiến đầu tư bất động sản công nghiệp uy tín tại Việt Nam",
  keywords: "bất động sản công nghiệp, khu công nghiệp, đất nền, nhà xưởng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <ChatbotWidget />
        <Footer />
      </body>
    </html>
  );
}
