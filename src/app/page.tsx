// PageBudget:
//   summary_cards: 4
//   charts:        0
//   tables:        0
//   forms:         0
"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import ConsoleBlock from "../components/ConsoleBlock";
import { useTranslation } from "../context/LanguageContext";
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Network, 
  Bot, 
  Sparkles, 
  FileText, 
  Globe, 
  Headphones, 
  Database, 
  Workflow, 
  Radio, 
  Key, 
  Zap, 
  Server, 
  CheckCircle2 
} from "lucide-react";

// SVG icons for cards
const CFIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="var(--color-accent-main)" strokeWidth="2" />
    <polygon points="10 8 16 12 10 16 10 8" fill="var(--color-text-secondary)" />
  </svg>
);

const IBIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="var(--color-accent-main)" strokeWidth="2" />
    <path d="M12 6v12M8 10l4-4 4 4" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RDIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="var(--color-accent-main)" strokeWidth="2" />
    <path d="M7 8h10M7 12h7M7 16h10" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CompanyLogoIcon = ({ slug }: { slug: string; name: string }) => {
  switch (slug) {
    case "nvidia":
      return (
        <svg width="28" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M12.4 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4.3 12.6c-.6.6-1.5 1-2.4 1v-2.3c.4 0 .8-.2 1.1-.5.6-.6.6-1.5 0-2.1l-2.6-2.6v-2.8c2.2.4 3.9 2.3 3.9 4.6 0 1.8-.8 3.5-2.1 4.7z" fill="#76B900" />
        </svg>
      );
    case "tesla":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M12 2C6.5 2 2 2.8 2 2.8l1.6 3.1s3.6-.9 8.4-.9c4.8 0 8.4.9 8.4.9L22 2.8S17.5 2 12 2zm0 4.8c-3.1 0-5.8.5-7.6 1.3l.8 2.2c1.4-.6 3.7-1 6.8-1 3.1 0 5.4.4 6.8 1l.8-2.2c-1.8-.8-4.5-1.3-7.6-1.3zm-1 4.5v10.7h2V11.3h-2z" fill="#E82127" />
        </svg>
      );
    case "meta":
      return (
        <svg width="28" height="20" viewBox="0 0 24 16" fill="none" className="shrink-0">
          <path d="M16.5 2C14.2 2 12.4 3.6 11.2 5.5 10 3.6 8.2 2 5.9 2 2.6 2 0 4.7 0 8s2.6 6 5.9 6c2.3 0 4.1-1.6 5.3-3.5 1.2 1.9 3 3.5 5.3 3.5 3.3 0 5.9-2.7 5.9-6S19.8 2 16.5 2zm-10.6 9.6C3.9 11.6 2.2 9.9 2.2 8s1.7-3.6 3.7-3.6c1.6 0 3 1.1 3.9 2.6-.9 1.5-2.3 2.6-3.9 2.6zm10.6 0c-1.6 0-3-1.1-3.9-2.6.9-1.5 2.3-2.6 3.9-2.6 2 0 3.7 1.7 3.7 3.6s-1.7 3.6-3.7 3.6z" fill="#0081FB" />
        </svg>
      );
    case "apple":
      return (
        <svg width="22" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-1 2.97 1.07.08 2.15-.57 2.81-1.37z" fill="var(--color-text-primary)" />
        </svg>
      );
    case "oracle":
      return (
        <svg width="42" height="24" viewBox="0 0 100 40" fill="none" className="shrink-0">
          <rect width="100" height="40" rx="8" fill="#F80000" />
          <text x="50" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">ORACLE</text>
        </svg>
      );
    default:
      return null;
  }
};

export default function Home() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"infra" | "worker" | "ecosystem">("infra");

  return (
    <div>
      {/* Section A: Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Hero copy */}
          <div className="hero-copy animate-fade-in">
            <span className="hero-tag">
              {t("hero.tag")}
            </span>
            
            <h1 className="hero-title">
              {t("hero.title") ? <>{t("hero.title")}<br /></> : null}
              <span className="hero-title-highlight">{t("hero.titleHighlight")}</span>
            </h1>
            
            <p className="hero-desc">
              {t("hero.desc")}
            </p>

            <div className="hero-actions">
              <a href="https://app.univeros.cn/explore" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary hero-btn">
                  {t("hero.btnPricing")}
                </button>
              </a>
              <Link href="/partner#apply-form">
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

        {/* Big Tech Infinite Marquee Logo Wall */}
        <div className="tech-marquee-wrapper">
          <p className="tech-marquee-title">
            {t("customers.techWallTitle")}
          </p>

          <div className="tech-marquee-track-container">
            <div className="tech-marquee-track">
              <div className="tech-marquee-content">
                {[
                  { name: "NVIDIA", slug: "nvidia" },
                  { name: "Tesla", slug: "tesla" },
                  { name: "Meta", slug: "meta" },
                  { name: "Apple", slug: "apple" },
                  { name: "Oracle", slug: "oracle" }
                ].map((logo, index) => (
                  <div key={index} className="tech-logo-item">
                    <CompanyLogoIcon slug={logo.slug} name={logo.name} />
                    <span className="font-bold text-lg tracking-tight text-[var(--color-text-primary)]">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="tech-marquee-content" aria-hidden="true">
                {[
                  { name: "NVIDIA", slug: "nvidia" },
                  { name: "Tesla", slug: "tesla" },
                  { name: "Meta", slug: "meta" },
                  { name: "Apple", slug: "apple" },
                  { name: "Oracle", slug: "oracle" }
                ].map((logo, index) => (
                  <div key={`dup-${index}`} className="tech-logo-item">
                    <CompanyLogoIcon slug={logo.slug} name={logo.name} />
                    <span className="font-bold text-lg tracking-tight text-[var(--color-text-primary)]">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Three Core SOP Product Lines (三大核心业务产线首屏聚焦) */}
      <section id="features" className="site-section site-section-primary">
        <div className="container">
          <div className="site-section-header">
            <h2 className="site-section-title">
              {t("features.title")}
            </h2>
            <p className="site-section-desc">
              {t("features.desc")}
            </p>
          </div>

          <div className="grid-cols-3">
            {/* CF: 内容工厂 */}
            <ProductCard 
              number="01"
              title={t("features.cf.title")}
              description={t("features.cf.desc")}
              tags={[t("features.cf.tag1"), t("features.cf.tag2"), t("features.cf.tag3")]}
              icon={<CFIcon />}
            />
            {/* IB: 认知感知 */}
            <ProductCard 
              number="02"
              title={t("features.ib.title")}
              description={t("features.ib.desc")}
              tags={[t("features.ib.tag1"), t("features.ib.tag2"), t("features.ib.tag3")]}
              icon={<IBIcon />}
            />
            {/* RD: 软件研发 */}
            <ProductCard 
              number="03"
              title={t("features.rd.title")}
              description={t("features.rd.desc")}
              tags={[t("features.rd.tag1"), t("features.rd.tag2"), t("features.rd.tag3")]}
              icon={<RDIcon />}
            />
          </div>
        </div>
      </section>

      {/* Section C: Full-Stack Architecture Matrix (3 Tabs × 6 Cards) */}
      <section id="architecture" className="site-section site-section-secondary">
        <div className="container">
          <div className="site-section-header">
            <h2 className="site-section-title">
              {t("architectureTabs.title")}
            </h2>
            <p className="site-section-desc-wide">
              {t("architectureTabs.desc")}
            </p>
          </div>

          <div className="arch-tabs-container">
            {/* Tabs Navigation */}
            <div className="arch-tabs-nav">
              <button 
                className={`arch-tab-btn ${activeTab === "infra" ? "active" : ""}`}
                onClick={() => setActiveTab("infra")}
              >
                <ShieldCheck style={{ width: 18, height: 18 }} />
                {t("architectureTabs.tabInfra")}
              </button>
              <button 
                className={`arch-tab-btn ${activeTab === "worker" ? "active" : ""}`}
                onClick={() => setActiveTab("worker")}
              >
                <Bot style={{ width: 18, height: 18 }} />
                {t("architectureTabs.tabWorker")}
              </button>
              <button 
                className={`arch-tab-btn ${activeTab === "ecosystem" ? "active" : ""}`}
                onClick={() => setActiveTab("ecosystem")}
              >
                <Network style={{ width: 18, height: 18 }} />
                {t("architectureTabs.tabEcosystem")}
              </button>
            </div>

            {/* Tab 1: Infra */}
            {activeTab === "infra" && (
              <div className="arch-cards-grid animate-fade-in">
                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><ShieldCheck size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.infra.c1Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.infra.c1Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Key size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.infra.c2Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.infra.c2Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Cpu size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.infra.c3Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.infra.c3Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Zap size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.infra.c4Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.infra.c4Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Database size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.infra.c5Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.infra.c5Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Layers size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.infra.c6Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.infra.c6Desc")}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Worker */}
            {activeTab === "worker" && (
              <div className="arch-cards-grid animate-fade-in">
                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Globe size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.worker.c1Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.worker.c1Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Bot size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.worker.c2Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.worker.c2Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><FileText size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.worker.c3Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.worker.c3Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Sparkles size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.worker.c4Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.worker.c4Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Server size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.worker.c5Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.worker.c5Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Cpu size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.worker.c6Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.worker.c6Desc")}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Ecosystem Connectors */}
            {activeTab === "ecosystem" && (
              <div className="arch-cards-grid animate-fade-in">
                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Server size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.ecosystem.c1Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.ecosystem.c1Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Workflow size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.ecosystem.c2Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.ecosystem.c2Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Radio size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.ecosystem.c3Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.ecosystem.c3Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Globe size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.ecosystem.c4Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.ecosystem.c4Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Headphones size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.ecosystem.c5Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.ecosystem.c5Desc")}</p>
                  </div>
                </div>

                <div className="arch-card">
                  <div>
                    <div className="arch-card-header">
                      <div className="arch-card-icon"><Network size={20} /></div>
                      <h3 className="arch-card-title">{t("architectureTabs.ecosystem.c6Title")}</h3>
                    </div>
                    <p className="arch-card-desc">{t("architectureTabs.ecosystem.c6Desc")}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section D: Enterprise Scale & Customers Section */}
      <section id="customers" className="site-section site-section-primary">
        <div className="container">
          <div className="site-section-header">
            <h2 className="site-section-title">
              {t("customers.title")}
            </h2>
            <p className="site-section-desc">
              {t("customers.desc")}
            </p>
          </div>

          <div className="customer-grid">
            <div className="customer-card">
              <div>
                <span className="customer-badge">{t("customers.opc.badge")}</span>
                <h3 className="customer-title">{t("customers.opc.title")}</h3>
                <p className="customer-desc">{t("customers.opc.desc")}</p>
              </div>
            </div>

            <div className="customer-card">
              <div>
                <span className="customer-badge">{t("customers.sme.badge")}</span>
                <h3 className="customer-title">{t("customers.sme.title")}</h3>
                <p className="customer-desc">{t("customers.sme.desc")}</p>
              </div>
            </div>

            <div className="customer-card">
              <div>
                <span className="customer-badge">{t("customers.trad.badge")}</span>
                <h3 className="customer-title">{t("customers.trad.title")}</h3>
                <p className="customer-desc">{t("customers.trad.desc")}</p>
              </div>
            </div>

            <div className="customer-card">
              <div>
                <span className="customer-badge">{t("customers.enterprise.badge")}</span>
                <h3 className="customer-title">{t("customers.enterprise.title")}</h3>
                <p className="customer-desc">{t("customers.enterprise.desc")}</p>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-wrapper">
            <h3 className="stats-title">{t("stats.title")}</h3>
            <p className="stats-subtitle">{t("stats.subtitle")}</p>
            <div className="stats-grid">
              <div>
                <div className="stats-number">{t("stats.num1")}</div>
                <div className="stats-label">{t("stats.label1")}</div>
              </div>
              <div>
                <div className="stats-number">{t("stats.num2")}</div>
                <div className="stats-label">{t("stats.label2")}</div>
              </div>
              <div>
                <div className="stats-number">{t("stats.num3")}</div>
                <div className="stats-label">{t("stats.label3")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section E: CTA */}
      <section id="contact" className="site-section site-section-secondary">
        <div className="container">
          <div className="contact-container text-center" style={{ textAlign: 'center' }}>
            <h2 className="contact-title">{t("partner.title")}</h2>
            <p className="contact-desc">{t("partner.desc")}</p>
            <div className="contact-btn-wrapper">
              <Link href="/partner#apply-form">
                <button className="btn-primary contact-btn">
                  {t("partner.formTitle")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
