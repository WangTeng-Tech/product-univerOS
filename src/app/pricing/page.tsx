"use client";

import PricingCard from "../../components/PricingCard";
import { useTranslation } from "../../context/LanguageContext";

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '4rem 0', background: 'var(--color-bg-primary)' }}>
      <div className="container">
        {/* Header section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            background: 'var(--color-accent-light)',
            color: 'var(--color-accent-hover)',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '1rem',
            border: '1px solid rgba(0, 201, 129, 0.15)'
          }}>
            {t("pricing.header.tag")}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            {t("pricing.header.title")}
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {t("pricing.header.desc")}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
         }}>
          <PricingCard 
            title={t("pricing.cards.rd.title")}
            price={t("pricing.cards.rd.price")}
            quota={t("pricing.cards.rd.quota")}
            overagePrice={t("pricing.cards.rd.overagePrice")}
            features={[
              t("pricing.cards.rd.f1"),
              t("pricing.cards.rd.f2"),
              t("pricing.cards.rd.f3"),
              t("pricing.cards.rd.f4"),
              t("pricing.cards.rd.f5")
            ]}
            checkoutUrl="/checkout?plan=rd"
            buttonText={t("pricing.cards.rd.btn")}
            highlighted={true}
          />
          <PricingCard 
            title={t("pricing.cards.gen.title")}
            price={t("pricing.cards.gen.price")}
            quota={t("pricing.cards.gen.quota")}
            overagePrice={t("pricing.cards.gen.overagePrice")}
            features={[
              t("pricing.cards.gen.f1"),
              t("pricing.cards.gen.f2"),
              t("pricing.cards.gen.f3"),
              t("pricing.cards.gen.f4"),
              t("pricing.cards.gen.f5")
            ]}
            checkoutUrl="/checkout?plan=generator"
            buttonText={t("pricing.cards.gen.btn")}
          />
          <PricingCard 
            title={t("pricing.cards.ing.title")}
            price={t("pricing.cards.ing.price")}
            quota={t("pricing.cards.ing.quota")}
            overagePrice={t("pricing.cards.ing.overagePrice")}
            features={[
              t("pricing.cards.ing.f1"),
              t("pricing.cards.ing.f2"),
              t("pricing.cards.ing.f3"),
              t("pricing.cards.ing.f4"),
              t("pricing.cards.ing.f5")
            ]}
            checkoutUrl="/console/login"
            buttonText={t("pricing.cards.ing.btn")}
          />
        </div>

        {/* Billing Policy Box */}
        <div style={{
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '2.5rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
            {t("pricing.policy.title")}
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            fontSize: '0.85rem', 
            color: 'var(--color-text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            lineHeight: '1.6'
          }}>
            <li>
              {t("pricing.policy.item1")}
            </li>
            <li>
              {t("pricing.policy.item2")}
            </li>
            <li>
              {t("pricing.policy.item3")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
