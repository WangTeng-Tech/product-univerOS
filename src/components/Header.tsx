"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "../context/LanguageContext";

const PixelPalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="4" width="20" height="14" fill="var(--color-bg-primary)" stroke="#00c981" strokeWidth="2" />
    <rect x="6" y="8" width="4" height="4" fill="#00c981" />
    <rect x="14" y="8" width="4" height="4" fill="#00c981" />
    <rect x="4" y="20" width="4" height="2" fill="#00c981" />
    <rect x="16" y="20" width="4" height="2" fill="#00c981" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Header() {
  const { language, setLanguage, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        {/* Brand Logo */}
        <Link href="/" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PixelPalIcon />
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            letterSpacing: '0.05em'
          }}>{t("common.brand")}</span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="header-nav desktop-only" style={{ 
          gap: '2.5rem', 
          fontSize: '0.9rem', 
          fontWeight: 500 
        }}>
          <Link href="/#features">{t("nav.features")}</Link>
          <Link href="/pricing">{t("nav.pricing")}</Link>
          <Link href="/security">{t("nav.security")}</Link>
          <Link href="/partner">{t("nav.partner")}</Link>
          <Link href="/#contact">{t("nav.contact")}</Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="desktop-only" style={{ gap: '1rem', alignItems: 'center' }}>
          <ThemeToggle />
          <button 
            onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
            className="lang-toggle-btn"
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

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="mobile-toggle mobile-toggle-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: 'transparent',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
            padding: '6px',
            color: 'var(--color-text-primary)',
            cursor: 'pointer',
            height: '38px',
            width: '38px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        {/* Mobile Dropdown Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-dropdown" style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            background: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            zIndex: 200,
            backdropFilter: 'blur(16px)'
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem' }}>
              <Link href="/#features" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text-primary)' }}>
                {t("nav.features")}
              </Link>
              <Link href="/pricing" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text-primary)' }}>
                {t("nav.pricing")}
              </Link>
              <Link href="/security" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text-primary)' }}>
                {t("nav.security")}
              </Link>
              <Link href="/partner" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text-primary)' }}>
                {t("nav.partner")}
              </Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--color-text-primary)' }}>
                {t("nav.contact")}
              </Link>
            </nav>

            <div style={{ height: '1px', background: 'var(--color-border)', width: '100%' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>主题与语言</span>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <ThemeToggle />
                <button 
                  onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    cursor: 'pointer'
                  }}
                >
                  {language === "zh" ? "English (EN)" : "中文 (ZH)"}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <Link href="/partner/login" onClick={() => setIsMenuOpen(false)} style={{ width: '100%' }}>
                <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center', height: '42px' }}>
                  {t("nav.login")}
                </button>
              </Link>
              <Link href="/console/login" onClick={() => setIsMenuOpen(false)} style={{ width: '100%' }}>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', height: '42px' }}>
                  {t("nav.apply")}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
