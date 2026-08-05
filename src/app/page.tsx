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

            <span className="hero-tip">
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
              gap: '3.5rem',
              animation: 'marqueeRoll 50s linear infinite',
              width: 'max-content',
              alignItems: 'center'
            }}>
              {[
                { name: "NVIDIA", icon: "https://api.iconify.design/simple-icons:nvidia.svg?color=%2376b900" },
                { name: "Tesla", icon: "https://api.iconify.design/simple-icons:tesla.svg?color=%23e82127" },
                { name: "Meta", icon: "https://api.iconify.design/simple-icons:meta.svg?color=%230081fb" },
                { name: "Apple", icon: "https://api.iconify.design/simple-icons:apple.svg?color=%23000000" },
                { name: "Oracle", icon: "https://api.iconify.design/simple-icons:oracle.svg?color=%23f80000" },
                { name: "SAP", icon: "https://api.iconify.design/simple-icons:sap.svg?color=%230faaff" },
                { name: "Pfizer", icon: "https://api.iconify.design/simple-icons:pfizer.svg?color=%23000036" },
                { name: "Accenture", icon: "https://api.iconify.design/simple-icons:accenture.svg?color=%23a100ff" },
                { name: "Chevron", icon: "https://api.iconify.design/simple-icons:chevron.svg?color=%23005a9c" },
                { name: "AT&T", icon: "https://api.iconify.design/simple-icons:att.svg?color=%2300a8e0" },
                { name: "Dropbox", icon: "https://api.iconify.design/simple-icons:dropbox.svg?color=%230061ff" },
                { name: "Nike", icon: "https://api.iconify.design/simple-icons:nike.svg?color=%23000000" },
                { name: "Chase", icon: "https://api.iconify.design/simple-icons:chase.svg?color=%231175e8" },
                { name: "Wise", icon: "https://api.iconify.design/simple-icons:wise.svg?color=%23163300" },

                // Duplicate array for seamless infinite marquee loop
                { name: "NVIDIA", icon: "https://api.iconify.design/simple-icons:nvidia.svg?color=%2376b900" },
                { name: "Tesla", icon: "https://api.iconify.design/simple-icons:tesla.svg?color=%23e82127" },
                { name: "Meta", icon: "https://api.iconify.design/simple-icons:meta.svg?color=%230081fb" },
                { name: "Apple", icon: "https://api.iconify.design/simple-icons:apple.svg?color=%23000000" },
                { name: "Oracle", icon: "https://api.iconify.design/simple-icons:oracle.svg?color=%23f80000" },
                { name: "SAP", icon: "https://api.iconify.design/simple-icons:sap.svg?color=%230faaff" },
                { name: "Pfizer", icon: "https://api.iconify.design/simple-icons:pfizer.svg?color=%23000036" },
                { name: "Accenture", icon: "https://api.iconify.design/simple-icons:accenture.svg?color=%23a100ff" },
                { name: "Chevron", icon: "https://api.iconify.design/simple-icons:chevron.svg?color=%23005a9c" },
                { name: "AT&T", icon: "https://api.iconify.design/simple-icons:att.svg?color=%2300a8e0" },
                { name: "Dropbox", icon: "https://api.iconify.design/simple-icons:dropbox.svg?color=%230061ff" },
                { name: "Nike", icon: "https://api.iconify.design/simple-icons:nike.svg?color=%23000000" },
                { name: "Chase", icon: "https://api.iconify.design/simple-icons:chase.svg?color=%231175e8" },
                { name: "Wise", icon: "https://api.iconify.design/simple-icons:wise.svg?color=%23163300" }
              ].map((logo, index) => (
                <div key={index} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.4rem 0.5rem',
                  opacity: 0.9,
                  transition: 'all 0.3s ease'
                }}>
                  <img 
                    src={logo.icon} 
                    alt={logo.name} 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    style={{ width: '32px', height: '32px', objectFit: 'contain', flexShrink: 0 }} 
                  />
                  <span style={{
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    letterSpacing: '-0.02em',
                    color: 'var(--color-text-primary)'
                  }}>
                    {logo.name}
                  </span>
                </div>
              ))}
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
            <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>01 / DISPATCH</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.brain")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.brainDesc")}</p>
            </div>
            {/* Agent */}
            <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>02 / SWARM</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.agent")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.agentDesc")}</p>
            </div>
            {/* Skills */}
            <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>03 / SKILLS</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.skills")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.skillsDesc")}</p>
            </div>
            {/* Memory */}
            <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>04 / MEMORY</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.memory")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.memoryDesc")}</p>
            </div>
            {/* Self-Healing */}
            <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>05 / HEALING</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("architecture.healing")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("architecture.healingDesc")}</p>
            </div>
            {/* CUP Isolation */}
            <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>06 / ISOLATION</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("trust.t1.title")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("trust.t1.desc")}</p>
            </div>
            {/* Append-only Ledger */}
            <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>07 / LEDGER</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t("trust.t2.title")}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t("trust.t2.desc")}</p>
            </div>
            {/* Safe Deployment */}
            <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '1.5rem' }}>
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
            {t("partner.title")} & {t("nav.contact")}
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {t("partner.desc")} 专属客户经理与技术顾问 24/7 为您提供严肃企业级 AI Workforce 落地咨询与解决方案架构支持。
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <Link href="/partner">
              <button className="btn-primary" style={{ padding: '0.75rem 2.5rem', fontSize: '0.95rem' }}>
                {t("partner.btn")}
              </button>
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            textAlign: 'left'
          }}>
            <div style={{ background: 'var(--color-bg-secondary)', padding: '1.75rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>BUSINESS & SALES</div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>商务对接与方案咨询</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>sales@univeros.cn</p>
            </div>

            <div style={{ background: 'var(--color-bg-secondary)', padding: '1.75rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-main)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>PARTNER ECOSYSTEM</div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>代理加盟与渠道合作</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>partner@univeros.cn</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
