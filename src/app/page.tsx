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

            <div style={{ marginTop: '1rem' }}>
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
          </div>

          {/* Right Console block */}
          <div className="hero-visual animate-fade-in delay-2">
            <ConsoleBlock />
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section id="features" style={{
        padding: '5rem 0',
        background: 'var(--color-bg-secondary)',
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

          {/* Big Tech Infinite Marquee Logo Wall */}
          <div style={{ marginTop: '4.5rem', paddingTop: '2.5rem', borderTop: '1px dashed var(--color-border)' }}>
            <p style={{
              textAlign: 'center',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--color-text-secondary)',
              textTransform: 'uppercase',
              marginBottom: '2rem'
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
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'
            }}>
              <div style={{
                display: 'inline-flex',
                gap: '2.5rem',
                animation: 'marqueeRoll 25s linear infinite',
                width: 'max-content'
              }}>
                {[
                  { name: "NVIDIA", tag: "AI Computing" },
                  { name: "Tesla", tag: "Automotive & Energy" },
                  { name: "Meta", tag: "AI & Social" },
                  { name: "Apple", tag: "Consumer Tech" },
                  { name: "Oracle", tag: "Enterprise Cloud" },
                  { name: "SAP", tag: "Enterprise ERP" },
                  { name: "Pfizer", tag: "BioPharma" },
                  { name: "Accenture", tag: "Global Consulting" },
                  { name: "Ping An", tag: "Financial Tech" },
                  { name: "China Construction Bank", tag: "Global Banking" },
                  { name: "Chevron", tag: "Energy & Energy" },
                  { name: "AT&T", tag: "Telecom Network" },
                  { name: "Dropbox", tag: "Cloud Storage" },
                  { name: "Nike", tag: "Global Sportswear" },
                  { name: "Chase", tag: "Global Financial" },
                  { name: "Wise", tag: "Cross-Border FinTech" },

                  // Duplicate array for seamless infinite marquee loop
                  { name: "NVIDIA", tag: "AI Computing" },
                  { name: "Tesla", tag: "Automotive & Energy" },
                  { name: "Meta", tag: "AI & Social" },
                  { name: "Apple", tag: "Consumer Tech" },
                  { name: "Oracle", tag: "Enterprise Cloud" },
                  { name: "SAP", tag: "Enterprise ERP" },
                  { name: "Pfizer", tag: "BioPharma" },
                  { name: "Accenture", tag: "Global Consulting" },
                  { name: "Ping An", tag: "Financial Tech" },
                  { name: "China Construction Bank", tag: "Global Banking" },
                  { name: "Chevron", tag: "Energy & Energy" },
                  { name: "AT&T", tag: "Telecom Network" },
                  { name: "Dropbox", tag: "Cloud Storage" },
                  { name: "Nike", tag: "Global Sportswear" },
                  { name: "Chase", tag: "Global Financial" },
                  { name: "Wise", tag: "Cross-Border FinTech" }
                ].map((logo, index) => (
                  <div key={index} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '30px',
                    opacity: 0.85,
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: 'var(--color-text-primary)'
                    }}>
                      {logo.name}
                    </span>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '0.1rem 0.4rem',
                      background: 'var(--color-accent-light)',
                      color: 'var(--color-accent-main)',
                      borderRadius: '10px',
                      fontWeight: 600
                    }}>
                      {logo.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Delivery Assurance Section */}
      <section id="trust" style={{
        padding: '5rem 0',
        background: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
              {t("trust.title")}
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              {t("trust.desc")}
            </p>
          </div>

          <div className="grid-cols-3">
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <ShieldCheckIcon />
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--color-accent-light)', color: 'var(--color-accent-main)', borderRadius: '4px', fontWeight: 600 }}>
                    {t("trust.t1.badge")}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                  {t("trust.t1.title")}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {t("trust.t1.desc")}
                </p>
              </div>
            </div>

            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <ShieldCheckIcon />
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--color-accent-light)', color: 'var(--color-accent-main)', borderRadius: '4px', fontWeight: 600 }}>
                    {t("trust.t2.badge")}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                  {t("trust.t2.title")}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {t("trust.t2.desc")}
                </p>
              </div>
            </div>

            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <ShieldCheckIcon />
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--color-accent-light)', color: 'var(--color-accent-main)', borderRadius: '4px', fontWeight: 600 }}>
                    {t("trust.t3.badge")}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                  {t("trust.t3.title")}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {t("trust.t3.desc")}
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
        </div>
      </section>

      {/* Partner Banner Section */}
      <section style={{
        padding: '5rem 0',
        background: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            {t("partner.title")}
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {t("partner.desc")}
          </p>
          <Link href="/partner">
            <button className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
              {t("partner.btn")}
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '5rem 0',
        background: 'var(--color-bg-secondary)'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3.5rem', color: 'var(--color-text-primary)' }}>
            {t("faq.title")}
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ 
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                {t("faq.q1")}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                {t("faq.a1")}
              </p>
            </div>

            <div style={{ 
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                {t("faq.q2")}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                {t("faq.a2")}
              </p>
            </div>

            <div style={{ 
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                {t("faq.q3")}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                {t("faq.a3")}
              </p>
            </div>

            <div style={{ 
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                {t("faq.q4")}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                {t("faq.a4")}
              </p>
            </div>

            <div style={{ 
              paddingBottom: '0.5rem'
            }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                {t("faq.q5")}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                {t("faq.a5")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
