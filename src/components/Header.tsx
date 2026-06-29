"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "../context/LanguageContext";

const PixelPalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
    {/* 8-bit Robot eye icon */}
    <rect x="2" y="4" width="20" height="14" fill="var(--color-bg-primary)" stroke="#00c981" strokeWidth="2" />
    <rect x="6" y="8" width="4" height="4" fill="#00c981" />
    <rect x="14" y="8" width="4" height="4" fill="#00c981" />
    <rect x="4" y="20" width="4" height="2" fill="#00c981" />
    <rect x="16" y="20" width="4" height="2" fill="#00c981" />
  </svg>
);

export default function Header() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      background: 'var(--color-header-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PixelPalIcon />
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            letterSpacing: '0.05em'
          }}>{t("common.brand")}</span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="header-nav" style={{ 
          display: 'flex', 
          gap: '2.5rem', 
          fontSize: '0.9rem', 
          fontWeight: 500 
        }}>
          <Link href="/#features">{t("nav.features")}</Link>
          <Link href="/pricing">{t("nav.pricing")}</Link>
          <Link href="/security">{t("nav.security")}</Link>
          <Link href="/partner">{t("nav.partner")}</Link>
        </nav>
        
        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ThemeToggle />
          <button 
            onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              padding: '0.45rem 0.65rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-smooth)',
              height: '35px'
            }}
            title={language === "zh" ? "Switch to English" : "切换为中文"}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-text-primary)';
              e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            {language === "zh" ? "EN" : "中"}
          </button>
          <Link href="/partner/login">
            <button className="btn-secondary" style={{ padding: '0.45rem 1rem', fontSize: '0.85rem', height: '35px' }}>
              {t("nav.login")}
            </button>
          </Link>
          <Link href="/console/login">
            <button className="btn-primary" style={{ padding: '0.45rem 1.2rem', fontSize: '0.85rem', height: '35px' }}>
              {t("nav.apply")}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
