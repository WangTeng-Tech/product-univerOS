"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

interface ErrorDisplayProps {
  code: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
}

export default function ErrorDisplay({
  code,
  titleZh,
  titleEn,
  descZh,
  descEn,
}: ErrorDisplayProps) {
  const { language } = useLanguage();

  const title = language === "zh" ? titleZh : titleEn;
  const desc = language === "zh" ? descZh : descEn;
  const backHomeText = language === "zh" ? "返回主页" : "Back to Home";
  const contactText = language === "zh" ? "联系技术支持" : "Contact Support";

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      padding: "2rem",
      backgroundColor: "var(--color-bg-primary)",
      color: "var(--color-text-secondary)",
      fontFamily: "var(--font-sans), sans-serif",
      textAlign: "center"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        marginBottom: "1.5rem",
        flexWrap: "wrap"
      }}>
        <h1 style={{
          fontSize: "4rem",
          fontWeight: 700,
          margin: 0,
          color: "var(--color-text-primary)",
          borderRight: "1px solid var(--color-border)",
          paddingRight: "1.5rem",
          lineHeight: "1.2"
        }}>
          {code}
        </h1>
        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: 500,
          margin: 0,
          color: "var(--color-text-primary)",
          lineHeight: "1.2"
        }}>
          {title}
        </h2>
      </div>
      
      <p style={{
        fontSize: "1rem",
        color: "var(--color-text-muted)",
        maxWidth: "600px",
        lineHeight: "1.6",
        marginBottom: "2.5rem"
      }}>
        {desc}
      </p>

      <div style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        <Link href="/" className="btn-primary">
          {backHomeText}
        </Link>
        <a href="mailto:support@univeros.cn" className="btn-secondary">
          {contactText}
        </a>
      </div>
      
      <div style={{
        marginTop: "4rem",
        fontSize: "0.8rem",
        color: "var(--color-text-muted)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "1.5rem",
        width: "100%",
        maxWidth: "600px"
      }}>
        <p>univerOS Shield Gateway Security • Event ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
      </div>
    </div>
  );
}
