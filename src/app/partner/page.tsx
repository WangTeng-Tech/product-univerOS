"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const localTranslations = {
  zh: {
    tag: "合作伙伴生态招募 | Partner Program",
    title: "加入 univerOS 代理商计划",
    subtitle: "共享万亿级 SOP 自动化计算市场红利",
    desc: "与我们一起推动企业 SOP 流程的智能化改造。我们通过“代理商生态计划”为合作伙伴（核心合伙人、标准合伙人、BYOK 技术伙伴）提供透明、长期的多维度代理分成机制。",
    tierTitle: "灵活的三级伙伴加盟体系",
    tierDesc: "针对不同规模的技术与咨询团队，提供针对性赋能方案与算力赠送支持",
    tier1Name: "BYOK 技术伙伴",
    tier1Price: "¥9,800/年",
    tier1Focus: "技术集成与私网并网方案",
    tier2Name: "标准合伙人",
    tier2Price: "¥19,800/年",
    tier2Focus: "区域市场及标准云端代销",
    tier3Name: "核心合伙人",
    tier3Price: "¥49,800/年",
    tier3Focus: "跨国及集团级整装定制集成",
    popular: "热门推荐",
    benefitsTitle: "四大核心合作权益",
    benefit1Title: "首次订阅分润 40% 与长尾 25%",
    benefit1Desc: "核心渠道推广直接回报：成功邀请客户首次订阅席位直接享受 40% 的高额分润；后续长尾算力续充消耗享受永久 25% 持续分润，锁定长尾收益。",
    benefit2Title: "Reality Ledger 账本公开",
    benefit2Desc: "分润记录严格绑定财务订单哈希链，账目不可篡改。代理商可在后台随时审计对应客户的实际调用频次，透明可追溯。",
    benefit3Title: "完全自主的推广控制台",
    benefit3Desc: "提供专属代理商控制台，一键生成您的专属客户推广链接。实时监控佣金收益、生成对账账单并管理二级渠道代理商。",
    benefit4Title: "按月对账线下结算",
    benefit4Desc: "佣金流水在每月最后一个工作日完成审计核算，核查完毕后由平台运营经理进行离线转账结算，安全合规。",
    ctaTitle: "开启您的合作伙伴之旅",
    ctaDesc: "现在注册或登录代理商平台，一键生成属于您的专属客户推广链接。",
    btnEnter: "进入代理商后台",
    btnContact: "联系合作专员"
  },
  en: {
    tag: "Partner Ecosystem Recruitment | Partner Program",
    title: "Join univerOS Partner Program",
    subtitle: "Share the Dividends of SOP Automation Market",
    desc: "Partner with us to accelerate enterprise SOP automation. We offer transparent and recurring multi-dimensional sharing structures for partners (including Core Partners, Standard Partners, and BYOK Technical Partners).",
    tierTitle: "Three-Tier Partner Program",
    tierDesc: "Flexible partnership choices to empower teams of all sizes with dedicated compute credits",
    tier1Name: "BYOK Tech Partner",
    tier1Price: "¥9,800/year",
    tier1Focus: "Integration & Private On-Premise",
    tier2Name: "Standard Partner",
    tier2Price: "¥19,800/year",
    tier2Focus: "Regional Sales & Standard Reselling",
    tier3Name: "Core Partner",
    tier3Price: "¥49,800/year",
    tier3Focus: "Enterprise Customization & Solution",
    popular: "POPULAR",
    benefitsTitle: "Four Core Partner Benefits",
    benefit1Title: "40% Referral & 25% Compute Share",
    benefit1Desc: "Earn direct high returns on core channel referrals: get 40% immediate revenue share on initial seat subscriptions, and 25% perpetual lifetime share on subsequent compute consumption.",
    benefit2Title: "Reality Ledger Open Book",
    benefit2Desc: "Referral logs are bound to billing order hash chains, ensuring immutable logs. Partners can inspect client workflow usage records transparently anytime.",
    benefit3Title: "Autonomous Partner Console",
    benefit3Desc: "Provide dedicated dashboard to generate unique referral links with one click, track commissions in real-time, and manage sub-channels.",
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

  // Features list for each tier
  const tierFeatures = {
    tier1: language === "zh" 
      ? ["赠送 1,000,000 调试积分", "自持 API 密钥并网支持", "核心系统功能抢先测试", "5 个席位免费试用配额"]
      : ["1,000,000 debug credits", "BYOK keys integration", "Early beta features access", "5 seat free trial quota"],
    tier2: language === "zh"
      ? ["赠送 3,000,000 调试积分", "区域二级渠道分润资质", "提供标准推广营销素材", "15 个席位免费试用配额", "专属渠道经理对接支持"]
      : ["3,000,000 debug credits", "Sub-channel commission rights", "Standard marketing materials", "15 seat free trial quota", "Dedicated channel manager support"],
    tier3: language === "zh"
      ? ["赠送 10,000,000 调试积分", "无限级二级渠道招募资质", "特许高级定制接口集成", "50 个席位免费试用配额", "7*24 架构师技术直连支持"]
      : ["10,000,000 debug credits", "Unlimited sub-channel recruitment", "Custom premium APIs integration", "50 seat free trial quota", "7*24 Architect direct support"]
  };

  return (
    <div style={{ padding: '6rem 0', background: '#09090b', color: '#fafafa', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Global CSS Inject */}
      <style>{`
        .partner-glow-card {
          position: relative;
          background: rgba(18, 18, 22, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        .partner-glow-card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 10px 30px -15px rgba(99, 102, 241, 0.2);
        }
        .partner-glow-card.active {
          border-color: rgba(99, 102, 241, 0.5);
          background: rgba(99, 102, 241, 0.02);
          box-shadow: 0 0 40px -15px rgba(99, 102, 241, 0.25);
        }
        .partner-glow-card.active:hover {
          border-color: rgba(99, 102, 241, 0.7);
          box-shadow: 0 15px 40px -12px rgba(99, 102, 241, 0.35);
        }
        .btn-glowing-primary {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }
        .btn-glowing-primary:hover {
          background: #4338ca;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(79, 70, 229, 0.45);
        }
        .btn-glowing-secondary {
          background: transparent;
          color: #a1a1aa;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-glowing-secondary:hover {
          color: white;
          border-color: rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.03);
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* 1. Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            background: 'rgba(79, 70, 229, 0.1)',
            color: '#818cf8',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            display: 'inline-block',
            marginBottom: '1.5rem',
            border: '1px solid rgba(79, 70, 229, 0.25)',
            letterSpacing: '0.05em'
          }}>
            {t.tag}
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.75rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
            {t.title}
          </h1>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', color: '#a1a1aa' }}>
            {t.subtitle}
          </h3>
          <p style={{ color: '#71717a', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '780px', margin: '0 auto' }}>
            {t.desc}
          </p>
        </div>

        {/* 2. Three-Tier Partner Cards */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>{t.tierTitle}</h2>
            <p style={{ fontSize: '0.875rem', color: '#71717a' }}>{t.tierDesc}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Tier 1 */}
            <div className="partner-glow-card">
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>{t.tier1Name}</div>
                <div style={{ fontSize: '0.75rem', color: '#71717a', marginBottom: '1.25rem' }}>{t.tier1Focus}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>{t.tier1Price}</span>
                </div>
              </div>
              <ul style={{ padding: 0, margin: '0 0 2rem 0', listStyle: 'none', spaceY: '0.75rem' }}>
                {tierFeatures.tier1.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '0.8rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="partner-glow-card">
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>{t.tier2Name}</div>
                <div style={{ fontSize: '0.75rem', color: '#71717a', marginBottom: '1.25rem' }}>{t.tier2Focus}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>{t.tier2Price}</span>
                </div>
              </div>
              <ul style={{ padding: 0, margin: '0 0 2rem 0', listStyle: 'none', spaceY: '0.75rem' }}>
                {tierFeatures.tier2.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '0.8rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tier 3: Core Partner (Premium) */}
            <div className="partner-glow-card active">
              {/* Floating label */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: '#4f46e5',
                color: '#ffffff',
                fontSize: '8px',
                fontWeight: 900,
                padding: '3px 8px',
                borderRadius: '4px',
                letterSpacing: '0.05em'
              }}>
                {t.popular}
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#818cf8', marginBottom: '0.5rem' }}>{t.tier3Name}</div>
                <div style={{ fontSize: '0.75rem', color: '#818cf8/80', marginBottom: '1.25rem' }}>{t.tier3Focus}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', fontFamily: 'monospace' }}>{t.tier3Price}</span>
                </div>
              </div>
              <ul style={{ padding: 0, margin: '0 0 2rem 0', listStyle: 'none', spaceY: '0.75rem' }}>
                {tierFeatures.tier3.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '0.8rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Check className="h-3.5 w-3.5 text-indigo-500 shrink-0 animate-pulse" />
                    <span className="font-bold text-zinc-100">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Partner Benefits Grid */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{t.benefitsTitle}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '2.5rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                {t.benefit1Title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: '1.7' }}>
                {t.benefit1Desc}
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                {t.benefit2Title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: '1.7' }}>
                {t.benefit2Desc}
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                {t.benefit3Title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: '1.7' }}>
                {t.benefit3Desc}
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '16px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                {t.benefit4Title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: '1.7' }}>
                {t.benefit4Desc}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Call to Action (CTA) */}
        <div style={{
          background: 'radial-gradient(circle at top left, rgba(79, 70, 229, 0.12), transparent 60%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '4rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', color: '#ffffff' }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            {t.ctaDesc}
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/partner/login">
              <button className="btn-glowing-primary">
                {t.btnEnter}
              </button>
            </Link>
            <Link href="/console/login">
              <button className="btn-glowing-secondary">
                {t.btnContact}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
