import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomerService from "../components/CustomerService";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { LanguageProvider } from "../context/LanguageContext";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "univerOS | 企业级多职能 AI Workforce 交付系统",
  description: "自备算力，物理隔离。univerOS 基于真实的产线席位与工作流调用，将 AI 规划转化为确定性的业务交付。融合软件研发、内容矩阵营销与全域认知感知。",
  keywords: "univerOS, AI Workforce, 交付系统, SOP Agent, 工作流执行引擎, 自动研发, 视频生产流水线, 内容分发, CUP协议, 凭证主权",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })()
            `
          }}
        />
      </head>
      <body style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        background: "var(--color-bg-primary)" 
      }}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <LanguageProvider>
          <Header />
          <div style={{ flexGrow: 1, paddingTop: "70px" }}>
            {children}
          </div>
          <Footer />
          <CustomerService />
        </LanguageProvider>
      </body>
    </html>
  );
}

