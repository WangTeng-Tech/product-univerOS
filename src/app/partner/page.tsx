"use client";

import Link from "next/link";
import { useTranslation } from "../../context/LanguageContext";

const localTranslations = {
  zh: {
    tag: "合作伙伴生态招募",
    title: "加入univerOS 代理商计划",
    desc: "与我们一起推动企业 SOP 流程的智能化改造。我们通过“代理商生态计划”为合作伙伴（包含核心合伙人、标准合伙人、BYOK 技术伙伴）提供透明、长期的多维度代理分成机制。",
    benefit1Title: "首次订阅分润 40% 与长尾 25%",
    benefit1Desc: "核心渠道推广获得直接回报：成功邀请客户首次订阅席位直接享受 40% 的高额分润；后续长尾算力续充消耗享受永久 25% 持续分润，锁死长尾收益。",
    benefit2Title: "Reality Ledger 账本公开",
    benefit2Desc: "分润记录严格绑定财务订单哈希链，账目不可篡改。代理商可在后台随时审计对应客户的实际调用频次，透明可追溯。",
    benefit3Title: "三级伙伴加盟体系",
    benefit3Desc: "提供灵活的选择：核心合伙人（49,800 元/年）、标准合伙人（19,800 元/年）以及 BYOK 技术伙伴（9,800 元/年），充分赋能不同规模的技术与咨询团队。",
    benefit4Title: "按月对账线下结算",
    benefit4Desc: "佣金流水在每月最后一个工作日完成审计核算，核查完毕后由平台运营经理进行离线转账结算，安全合规。",
    ctaTitle: "开启您的合作伙伴之旅",
    ctaDesc: "现在注册或登录代理商平台，一键生成属于您的专属客户推广链接。",
    btnEnter: "进入代理商平台",
    btnContact: "联系合作专员"
  },
  en: {
    tag: "Partner Ecosystem Recruitment",
    title: "Join univerOS Partner Program",
    desc: "Partner with us to accelerate enterprise SOP automation. We offer transparent and recurring multi-dimensional sharing structures for partners (including Core Partners, Standard Partners, and BYOK Technical Partners).",
    benefit1Title: "40% Referral & 25% Compute Share",
    benefit1Desc: "Earn direct high returns on core channel referrals: get 40% immediate revenue share on initial seat subscriptions, and 25% perpetual lifetime share on subsequent compute and token overage consumption.",
    benefit2Title: "Reality Ledger Open Book",
    benefit2Desc: "Referral logs are bound to billing order hash chains, ensuring immutable logs. Partners can inspect client workflow usage records transparently anytime.",
    benefit3Title: "Three-Tier Partner Program",
    benefit3Desc: "Flexible partnership choices: Core Partner (49,800 RMB/year), Standard Partner (19,800 RMB/year), and BYOK Tech Partner (9,800 RMB/year) to empower teams of all sizes.",
    benefit4Title: "Monthly Audit & Offline Settlement",
    benefit4Desc: "Commission pools are audited on the last working day of each month, followed by direct offline settlements from our operations team for regulatory safety.",
    ctaTitle: "Begin Your Partnership Journey",
    ctaDesc: "Sign up or log in to the partner console now to generate your unique customer referral link with one click.",
    btnEnter: "Go to Partner Console",
    btnContact: "Contact Support Agent"
  }
};

export default function PartnerPage() {
  const { language } = useTranslation();
  const t = localTranslations[language];

  return (
    <div style={{ padding: '4rem 0', background: 'var(--color-bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
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
            {t.tag}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            {t.title}
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
            {t.desc}
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
              {t.benefit1Title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              {t.benefit1Desc}
            </p>
          </div>

          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
              {t.benefit2Title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              {t.benefit2Desc}
            </p>
          </div>

          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
              {t.benefit3Title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              {t.benefit3Desc}
            </p>
          </div>

          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
              {t.benefit4Title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              {t.benefit4Desc}
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div style={{
          textAlign: 'center',
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '3rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            {t.ctaDesc}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/partner/login">
              <button className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
                {t.btnEnter}
              </button>
            </Link>
            <Link href="/console/login">
              <button className="btn-secondary" style={{ padding: '0.75rem 2rem' }}>
                {t.btnContact}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
