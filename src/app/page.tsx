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

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '6rem 0',
        background: 'radial-gradient(ellipse at top right, var(--color-accent-light) 0%, transparent 60%)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4rem'
        }}>
          {/* Left Hero copy */}
          <div className="animate-fade-in" style={{ flex: '1 1 500px' }}>
            <span style={{
              background: 'var(--color-accent-light)',
              color: 'var(--color-accent-hover)',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '1.25rem',
              border: '1px solid rgba(0, 201, 129, 0.15)'
            }}>
              {t("hero.tag")}
            </span>
            
            <h1 style={{
              fontSize: '3rem',
              lineHeight: '1.15',
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-outfit)'
            }}>
              {t("hero.title")}<br />
              <span style={{ color: 'var(--color-accent-main)' }}>{t("hero.titleHighlight")}</span>
            </h1>
            
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.7',
              maxWidth: '520px',
              marginBottom: '2rem'
            }}>
              {t("hero.desc")}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <Link href="/console/login">
                <button className="btn-primary" style={{ padding: '0.8rem 1.75rem' }}>
                  {t("hero.btnApply")}
                </button>
              </Link>
              <Link href="/pricing">
                <button className="btn-secondary" style={{ padding: '0.8rem 1.75rem' }}>
                  {t("hero.btnPricing")}
                </button>
              </Link>
            </div>

            <span style={{ 
              fontSize: '0.75rem', 
              color: 'var(--color-text-muted)',
              display: 'block'
            }}>
              {t("hero.tip")}
            </span>
          </div>

          {/* Right Console block */}
          <div className="animate-fade-in delay-2" style={{ 
            flex: '1 1 450px',
            display: 'flex',
            justifyContent: 'center'
          }}>
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

      {/* Credentials and Security Section */}
      <section style={{
        padding: '5rem 0',
        background: 'var(--color-bg-primary)',
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
            background: 'var(--color-bg-secondary)',
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
        background: 'var(--color-bg-secondary)',
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
        background: 'var(--color-bg-primary)'
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
              paddingBottom: '0.5rem'
            }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                {t("faq.q3")}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                {t("faq.a3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
