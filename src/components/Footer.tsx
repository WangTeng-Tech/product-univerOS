"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "../context/LanguageContext";

const PixelPalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="4" width="20" height="14" fill="#4b5563" stroke="#8c9ba5" strokeWidth="2" />
    <rect x="6" y="8" width="4" height="4" fill="#8c9ba5" />
    <rect x="14" y="8" width="4" height="4" fill="#8c9ba5" />
    <rect x="4" y="20" width="4" height="2" fill="#8c9ba5" />
    <rect x="16" y="20" width="4" height="2" fill="#8c9ba5" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <footer style={{
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border)',
      paddingTop: '4rem',
      position: 'relative'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '3rem',
        paddingBottom: '4rem'
      }}>
        {/* Brand Meta */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
            <PixelPalIcon />
            <span style={{ 
              fontFamily: 'var(--font-outfit)', 
              fontWeight: 700, 
              color: 'var(--color-text-primary)', 
              letterSpacing: '0.05em' 
            }}>{t("common.brand")}</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: '280px', lineHeight: '1.6' }}>
            {t("common.brandDesc")}
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', marginTop: '1.5rem', alignItems: 'center' }}>
            <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Slack">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111.756 8.43 1.68 8.43h1.682zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682zm6.749 1.682c0-.926.755-1.682 1.68-1.682S16 4.964 16 5.889s-.756 1.681-1.68 1.681h-1.681zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68s.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681z"/>
              </svg>
            </a>
            <a href="https://github.com/WangTeng-Tech/product-univerOS" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="X">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
          </div>
          <span style={{ display: 'block', marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            {t("footer.copyright")}
          </span>
        </div>
        
        {/* Link Columns */}
        <div className="footer-nav" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Terms</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/terms">{t("footer.terms")}</Link></li>
              <li><Link href="/privacy">{t("footer.privacy")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resources</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="https://docs.univeros.cn" target="_blank" rel="noopener noreferrer">{t("footer.manual")}</a></li>
              <li><Link href="/changelog">{t("footer.changelog")}</Link></li>
              <li><a href="https://github.com/WangTeng-Tech/product-univerOS" target="_blank" rel="noopener noreferrer">{t("footer.github")}</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li><a href="mailto:us@wangteng.tech" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>us@wangteng.tech</a></li>
              <li><a href="mailto:press@wangteng.tech" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>press@wangteng.tech</a></li>
              <li><a href="mailto:support@wangteng.tech" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>support@wangteng.tech</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant Branding Banner */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: 'var(--color-accent-main)',
          width: '100%',
          padding: '1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          userSelect: 'none',
          position: 'relative',
          cursor: 'default'
        }}
      >
        {/* Glow overlay following mouse */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 80%)`,
          mixBlendMode: 'screen',
          zIndex: 2
        }} />

        <span style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '11vw',
          fontWeight: '900',
          color: '#101418',
          lineHeight: '0.8',
          letterSpacing: '-0.03em',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1
        }}>
          UNIVEROS
        </span>
      </div>
    </footer>
  );
}
