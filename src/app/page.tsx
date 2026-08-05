"use client";

import Link from "next/link";
import ProductCard from "../components/ProductCard";
import ConsoleBlock from "../components/ConsoleBlock";
import { useTranslation } from "../context/LanguageContext";

// SVG icons for cards
const RDIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="var(--color-accent-main)" strokeWidth="2" />
    <path d="M7 8h10M7 12h7M7 16h10" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GeneratorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="var(--color-accent-main)" strokeWidth="2" />
    <polygon points="10 8 16 12 10 16 10 8" fill="var(--color-text-secondary)" />
  </svg>
);

const IngestorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="var(--color-accent-main)" strokeWidth="2" />
    <path d="M12 6v12M8 10l4-4 4 4" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="var(--color-accent-main)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="var(--color-text-secondary)" strokeWidth="2" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--color-accent-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CompanyLogoIcon = ({ slug, name }: { slug: string; name: string }) => {
  switch (slug) {
    case "nvidia":
      return (
        <svg width="28" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-3.8c1.8.2 3.2 1.4 3.2 3.8h-3.2zm-2.8-5.3c0-2.2 1.8-4 4-4v2.5c-.8 0-1.5.7-1.5 1.5H10.2z" fill="#76B900" />
        </svg>
      );
    case "tesla":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M12 5.2L16.5 2H7.5L12 5.2zm0 2.2L5 3v2l7 4 7-4V3l-7 4.4zM12 10v12h2V10h-2z" fill="#E82127" />
        </svg>
      );
    case "meta":
      return (
        <svg width="28" height="20" viewBox="0 0 24 16" fill="none" style={{ flexShrink: 0 }}>
          <path d="M16.5 2C14.2 2 12.4 3.6 11.2 5.5 10 3.6 8.2 2 5.9 2 2.6 2 0 4.7 0 8s2.6 6 5.9 6c2.3 0 4.1-1.6 5.3-3.5 1.2 1.9 3 3.5 5.3 3.5 3.3 0 5.9-2.7 5.9-6S19.8 2 16.5 2zm-10.6 9.6C3.9 11.6 2.2 9.9 2.2 8s1.7-3.6 3.7-3.6c1.6 0 3 1.1 3.9 2.6-.9 1.5-2.3 2.6-3.9 2.6zm10.6 0c-1.6 0-3-1.1-3.9-2.6.9-1.5 2.3-2.6 3.9-2.6 2 0 3.7 1.7 3.7 3.6s-1.7 3.6-3.7 3.6z" fill="#0081FB" />
        </svg>
      );
    case "apple":
      return (
        <svg width="22" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-1 2.97 1.07.08 2.15-.57 2.81-1.37z" fill="var(--color-text-primary)" />
        </svg>
      );
    case "oracle":
      return (
        <svg width="42" height="24" viewBox="0 0 100 40" fill="none" style={{ flexShrink: 0 }}>
          <rect width="100" height="40" rx="8" fill="#F80000" />
          <text x="50" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">ORACLE</text>
        </svg>
      );
    case "sap":
      return (
        <svg width="40" height="24" viewBox="0 0 100 40" fill="none" style={{ flexShrink: 0 }}>
          <path d="M0 0h100v40H0z" fill="#0FAAFF" />
          <text x="50" y="27" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fontStyle="italic" fill="#FFFFFF" textAnchor="middle">SAP</text>
        </svg>
      );
    case "pfizer":
      return (
        <svg width="38" height="24" viewBox="0 0 120 50" fill="none" style={{ flexShrink: 0 }}>
          <ellipse cx="60" cy="25" rx="55" ry="22" fill="#0072CE" />
          <text x="60" y="33" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fontStyle="italic" fill="#FFFFFF" textAnchor="middle">Pfizer</text>
        </svg>
      );
    case "accenture":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M12 4L20 12L12 20" stroke="#A100FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chevron":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M2 5l10 5 10-5M2 13l10 5 10-5" stroke="#005A9C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "att":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10" fill="#00A8E0" />
          <path d="M2 12h20M3.5 7.5h17M3.5 16.5h17" stroke="#FFFFFF" strokeWidth="1.8" />
        </svg>
      );
    case "dropbox":
      return (
        <svg width="26" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M6 2l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM0 10l6 4 6-4-6-4-6 4zm18-4l-6 4 6 4 6-4-6-4zM6 15l6 4 6-4-6-4-6 4z" fill="#0061FF" />
        </svg>
      );
    case "nike":
      return (
        <svg width="32" height="20" viewBox="0 0 24 16" fill="none" style={{ flexShrink: 0 }}>
          <path d="M21.71 2.29C15.63 7.85 9.8 12.83 2 13.9c6.64 0 13.06-4.5 19.71-11.61z" fill="var(--color-text-primary)" />
        </svg>
      );
    case "chase":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM13 13h7v7h-7zM4 13h7v7H4z" fill="#1175E8" />
        </svg>
      );
    case "wise":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M4 4h16l-6 9h5l-9 9 2-8H7l3-10z" fill="#163300" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Hero copy */}
          <div className="hero-copy animate-fade-in">
            <span className="hero-tag">
              {t("hero.tag")}
            </span>
            
            <h1 className="hero-title">
              {t("hero.title")}<br />
              <span style={{ color: 'var(--color-accent-main)', marginLeft: '130px', display: 'inline-block' }}>{t("hero.titleHighlight")}</span>
            </h1>
            
            <p className="hero-desc">
              {t("hero.desc")}
            </p>

            {/* hero.badge 居右展示于按钮上方 */}
            <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'flex-end' }}>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.25rem 0.75rem',
                background: 'var(--color-accent-light)',
                color: 'var(--color-accent-main)',
                borderRadius: '20px',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                {t("hero.badge")}
              </span>
            </div>

            <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="https://app.univeros.cn/explore" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary hero-btn">
                  {t("hero.btnPricing")}
                </button>
              </a>
              <Link href="/checkout">
                <button className="btn-secondary hero-btn">
                  {t("hero.btnApply")}
                </button>
              </Link>
            </div>

            <span className="hero-tip" style={{ display: 'block', textAlign: 'center', margin: '0.75rem auto 0 auto' }}>
              {t("hero.tip")}
            </span>
          </div>

          {/* Right Console block */}
          <div className="hero-visual animate-fade-in delay-2">
            <ConsoleBlock />
          </div>
        </div>

        {/* Big Tech Infinite Marquee Logo Wall (Merged INTO Hero Section) */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px dashed var(--color-border)',
          width: '100%'
        }}>
          <p style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-text-secondary)',
            textTransform: 'uppercase',
            marginBottom: '1.75rem'
          }}>
            {t("customers.techWallTitle")}
          </p>

          <style>{`
            @keyframes marqueeRoll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .system-feature-card {
              background: var(--color-bg-primary);
              border: 1px solid var(--color-border);
              border-radius: 12px;
              padding: 1.5rem;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: pointer;
            }
            .system-feature-card:hover {
              transform: translateY(-5px);
              border-color: var(--color-accent-main);
              box-shadow: 0 12px 30px rgba(0, 201, 129, 0.15);
            }
          `}</style>

          <div style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}>
            <div style={{
              display: 'inline-flex',
              gap: '4rem',
              animation: 'marqueeRoll 50s linear infinite',
              width: 'max-content',
              alignItems: 'center'
            }}>
              <img 
                src="/Most-Famous-Companies-with-Modern-Logos.png" 
                alt="Most Famous Companies Logos" 
                style={{ height: '42px', objectFit: 'contain', opacity: 0.95 }}
              />
              <img 
                src="/Most-Famous-Companies-with-Modern-Logos.png" 
                alt="Most Famous Companies Logos Duplicate" 
                style={{ height: '42px', objectFit: 'contain', opacity: 0.95 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section id="features" style={{
        padding: '5rem 0',
        background: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
              {t("features.title")}
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              {t("features.desc")}
            </p>
          </div>

          <div className="grid-cols-3">
            <ProductCard 
              number="00"
              title={t("features.rd.title")}
              description={t("features.rd.desc")}
              tags={[t("features.rd.tag1"), t("features.rd.tag2"), t("features.rd.tag3")]}
              icon={<RDIcon />}
            />
            <ProductCard 
              number="01"
              title={t("features.gen.title")}
              description={t("features.gen.desc")}
              tags={[t("features.gen.tag1"), t("features.gen.tag2"), t("features.gen.tag3")]}
              icon={<GeneratorIcon />}
            />
            <ProductCard 
              number="02"
              title={t("features.ing.title")}
              description={t("features.ing.desc")}
              tags={[t("features.ing.tag1"), t("features.ing.tag2"), t("features.ing.tag3")]}
              icon={<IngestorIcon />}
              invited={true}
            />
          </div>
        </div>
      </section>

      {/* Combined: univerOS System Features Section (univerOS 系统特性) */}
      <section style={{
        padding: '5rem 0',
        background: 'var(--color-bg-secondary)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
              {t("systemFeatures.title")}
            </h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              {t("systemFeatures.desc")}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {/* Brain */}
            <div className="system-feature-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>01 / DISPATCH</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.brain")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.brainDesc")}</p>
            </div>
            {/* Agent */}
            <div className="system-feature-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>02 / SWARM</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.agent")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.agentDesc")}</p>
            </div>
            {/* Skills */}
            <div className="system-feature-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>03 / SKILLS</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.skills")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.skillsDesc")}</p>
            </div>
            {/* Memory */}
            <div className="system-feature-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>04 / MEMORY</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.memory")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.memoryDesc")}</p>
            </div>
            {/* Self-Healing */}
            <div className="system-feature-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>05 / HEALING</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.healing")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.healingDesc")}</p>
            </div>
            {/* CUP Isolation */}
            <div className="system-feature-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>06 / ISOLATION</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("trust.t1.title")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("trust.t1.desc")}</p>
            </div>
            {/* Append-only Ledger */}
            <div className="system-feature-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>07 / LEDGER</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("trust.t2.title")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("trust.t2.desc")}</p>
            </div>
            {/* Safe Deployment */}
            <div className="system-feature-card">
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>08 / CONFIRMATION</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("trust.t3.title")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("trust.t3.desc")}</p>
            </div>
          </div>
        </div>
      </section>



      {/* Enterprise Scale & Customers Section */}
      <section id="customers" style={{
        padding: '5rem 0',
        background: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
              {t("customers.title")}
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              {t("customers.desc")}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* OPC */}
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--color-accent-light)', color: 'var(--color-accent-main)', borderRadius: '4px', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
                  {t("customers.opc.badge")}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                  {t("customers.opc.title")}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {t("customers.opc.desc")}
                </p>
              </div>
            </div>

            {/* SME */}
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--color-accent-light)', color: 'var(--color-accent-main)', borderRadius: '4px', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
                  {t("customers.sme.badge")}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                  {t("customers.sme.title")}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {t("customers.sme.desc")}
                </p>
              </div>
            </div>

            {/* Traditional */}
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--color-accent-light)', color: 'var(--color-accent-main)', borderRadius: '4px', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
                  {t("customers.trad.badge")}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                  {t("customers.trad.title")}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {t("customers.trad.desc")}
                </p>
              </div>
            </div>

            {/* Enterprise */}
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--color-accent-light)', color: 'var(--color-accent-main)', borderRadius: '4px', fontWeight: 600, display: 'inline-block', marginBottom: '0.75rem' }}>
                  {t("customers.enterprise.badge")}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                  {t("customers.enterprise.title")}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {t("customers.enterprise.desc")}
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Credentials and Security Section */}
      <section style={{
        padding: '5rem 0',
        background: 'var(--color-bg-secondary)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4rem'
        }}>
          {/* Left Details */}
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
              {t("security.title")}
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {t("security.desc")}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{
                  background: 'var(--color-accent-light)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <SecurityIcon />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    {t("security.cup.title")}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    {t("security.cup.desc")}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{
                  background: 'var(--color-accent-light)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <SecurityIcon />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                    {t("security.ledger.title")}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    {t("security.ledger.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right illustration / Info box */}
          <div style={{ 
            flex: '1 1 400px',
            background: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2.5rem'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
              {t("security.boxTitle")}
            </h3>
            <ul style={{ 
              listStyle: 'none', 
              fontSize: '0.85rem', 
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <li>
                <strong>✓</strong> {t("security.item1")}
              </li>
              <li>
                <strong>✓</strong> {t("security.item2")}
              </li>
              <li>
                <strong>✓</strong> {t("security.item3")}
              </li>
            </ul>
          </div>

          {/* Integrated Stats Data Section (Ref to Image 1 - Upgraded Style) */}
          <div style={{
            width: '100%',
            marginTop: '4rem',
            paddingTop: '3.5rem',
            borderTop: '1px dashed var(--color-border)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
              {t("stats.title")}
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', marginBottom: '3.5rem' }}>
              {t("stats.subtitle")}
            </p>

            {/* Large Numbers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
                  {t("stats.num1")}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                  {t("stats.label1")}
                </p>
              </div>
              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
                  {t("stats.num2")}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                  {t("stats.label2")}
                </p>
              </div>
              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
                  {t("stats.num3")}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>
                  {t("stats.label3")}
                </p>
              </div>
            </div>
          </div>

          {/* Integrated FAQ (Restored Original Clean List Style) */}
          <div style={{
            width: '100%',
            maxWidth: '800px',
            margin: '4rem auto 0 auto',
            paddingTop: '3.5rem',
            borderTop: '1px solid var(--color-border)'
          }}>
            <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3.5rem', color: 'var(--color-text-primary)' }}>
              {t("faq.title")}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {t("faq.q1")}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {t("faq.a1")}
                </p>
              </div>

              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {t("faq.q2")}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {t("faq.a2")}
                </p>
              </div>

              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {t("faq.q3")}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {t("faq.a3")}
                </p>
              </div>

              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {t("faq.q4")}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {t("faq.a4")}
                </p>
              </div>

              <div style={{ paddingBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {t("faq.q5")}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {t("faq.a5")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Partner Ecosystem & Contact Section */}
      <section id="contact" style={{
        padding: '5rem 0',
        background: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            联系我们 共建 AI Workforce 生态
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {t("partner.desc")} 专属客户经理与技术顾问 24/7 为您提供严肃企业级 AI Workforce 落地咨询与解决方案架构支持。
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/partner">
              <button className="btn-primary" style={{ padding: '0.75rem 2.5rem', fontSize: '0.95rem' }}>
                {t("partner.btn")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
