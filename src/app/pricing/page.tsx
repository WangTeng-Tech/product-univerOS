"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

export default function PricingPage() {
  const { t } = useTranslation();
  const [mode, setMode] = useState<"byok" | "hosted">("byok");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <div className="pricing-page-container">
      <div className="container">
        {/* Header section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            background: 'var(--color-accent-light)',
            color: 'var(--color-accent-hover)',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'inline-block',
            marginBottom: '1rem',
            border: '1px solid rgba(0, 201, 129, 0.2)'
          }}>
            {t("pricing.header.tag")}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
            {t("pricing.header.title")}
          </h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {t("pricing.header.desc")}
          </p>
        </div>

        {/* Pricing Controls */}
        <div className="pricing-controls">
          {/* 1. BYOK vs Hosted Mode Toggle */}
          <div className="pricing-pill-toggle">
            <button
              className={`pricing-pill-btn ${mode === "byok" ? "active" : ""}`}
              onClick={() => setMode("byok")}
            >
              {t("pricing.modeToggle.byok")}
            </button>
            <button
              className={`pricing-pill-btn ${mode === "hosted" ? "active" : ""}`}
              onClick={() => setMode("hosted")}
            >
              {t("pricing.modeToggle.hosted")}
            </button>
          </div>

          {/* 2. Monthly vs Annual Billing Toggle */}
          <div className="pricing-pill-toggle">
            <button
              className={`pricing-pill-btn ${billingCycle === "monthly" ? "active" : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              {t("pricing.billingToggle.monthly")}
            </button>
            <button
              className={`pricing-pill-btn ${billingCycle === "annual" ? "active" : ""}`}
              onClick={() => setBillingCycle("annual")}
            >
              {t("pricing.billingToggle.annual")}
              <span className="pricing-discount-badge">
                {t("pricing.billingToggle.annualDiscount")}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Tiers) */}
        <div className="pricing-grid-v3">
          {/* Tier 1: Starter */}
          <div className="pricing-card-v3">
            <div>
              <h3 className="pricing-card-title">{t("pricing.cards.starter.title")}</h3>
              <p className="pricing-card-desc">{t("pricing.cards.starter.desc")}</p>

              <div className="pricing-price-box">
                <span className="pricing-price-num">
                  {mode === "byok" 
                    ? (billingCycle === "annual" ? "¥249" : t("pricing.cards.starter.priceMonthByok"))
                    : (billingCycle === "annual" ? "¥499" : t("pricing.cards.starter.priceMonthHosted"))}
                </span>
                <span className="pricing-price-period">{t("pricing.cards.starter.period")}</span>
              </div>
              <div className="pricing-annual-note">{t("pricing.cards.starter.annualNote")}</div>

              <ul className="pricing-feature-list">
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.starter.f1")}</li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.starter.f2")}</li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.starter.f3")}</li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.starter.f4")}</li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.starter.f5")}</li>
              </ul>
            </div>

            <a href="https://app.univeros.cn/explore" target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                {t("pricing.cards.starter.btn")}
              </button>
            </a>
          </div>

          {/* Tier 2: Pro (Highlighted) */}
          <div className="pricing-card-v3 highlighted">
            <div>
              <h3 className="pricing-card-title">{t("pricing.cards.pro.title")}</h3>
              <p className="pricing-card-desc">{t("pricing.cards.pro.desc")}</p>

              <div className="pricing-price-box">
                <span className="pricing-price-num">
                  {mode === "byok" 
                    ? (billingCycle === "annual" ? "¥799" : t("pricing.cards.pro.priceMonthByok"))
                    : (billingCycle === "annual" ? "¥1,599" : t("pricing.cards.pro.priceMonthHosted"))}
                </span>
                <span className="pricing-price-period">{t("pricing.cards.pro.period")}</span>
              </div>
              <div className="pricing-annual-note">{t("pricing.cards.pro.annualNote")}</div>

              <ul className="pricing-feature-list">
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.pro.f1")}</li>
                <li className="pricing-feature-item"><Check size={16} /><strong>{t("pricing.cards.pro.f2")}</strong></li>
                <li className="pricing-feature-item"><Check size={16} /><strong>{t("pricing.cards.pro.f3")}</strong></li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.pro.f4")}</li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.pro.f5")}</li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.pro.f6")}</li>
              </ul>
            </div>

            <a href="https://app.univeros.cn/explore" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {t("pricing.cards.pro.btn")}
              </button>
            </a>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="pricing-card-v3">
            <div>
              <h3 className="pricing-card-title">{t("pricing.cards.enterprise.title")}</h3>
              <p className="pricing-card-desc">{t("pricing.cards.enterprise.desc")}</p>

              <div className="pricing-price-box">
                <span className="pricing-price-num">{t("pricing.cards.enterprise.priceMonthByok")}</span>
              </div>
              <div className="pricing-annual-note">{t("pricing.cards.enterprise.annualNote")}</div>

              <ul className="pricing-feature-list">
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.enterprise.f1")}</li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.enterprise.f2")}</li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.enterprise.f3")}</li>
                <li className="pricing-feature-item"><Check size={16} /><strong>{t("pricing.cards.enterprise.f4")}</strong></li>
                <li className="pricing-feature-item"><Check size={16} />{t("pricing.cards.enterprise.f5")}</li>
              </ul>
            </div>

            <Link href="/partner#apply-form">
              <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                {t("pricing.cards.enterprise.btn")}
              </button>
            </Link>
          </div>
        </div>

        {/* Pricing FAQ Section */}
        <div style={{ maxWidth: '850px', margin: '0 auto', borderTop: '1px solid var(--color-border)', paddingTop: '3.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--color-text-primary)' }}>
            {t("pricing.faq.title")}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{t("pricing.faq.q1")}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{t("pricing.faq.a1")}</p>
            </div>

            <div style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{t("pricing.faq.q2")}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{t("pricing.faq.a2")}</p>
            </div>

            <div style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{t("pricing.faq.q3")}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{t("pricing.faq.a3")}</p>
            </div>

            <div style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{t("pricing.faq.q4")}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{t("pricing.faq.a4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
