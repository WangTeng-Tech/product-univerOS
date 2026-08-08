"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Send, ShieldCheck, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Layers, Users, Zap, CheckCircle2 } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";

const localTranslations = {
  zh: {
    tag: "合作伙伴生态招募 | Partner Program",
    title: "加入 univerOS 代理商计划",
    subtitle: "共享万亿级企业 SOP 自动化计算红利",
    desc: "与我们一起推动企业 SOP 流程的智能化改造。我们通过“代理商生态计划”为合作伙伴（核心合伙人、标准合伙人、BYOK 技术伙伴）提供透明、长期的多维度代理分成机制。",
    tierTitle: "灵活的三级伙伴加盟体系",
    tierDesc: "针对不同规模的技术与咨询团队，提供针对性赋能方案与调试算力赠送支持",
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
    stepsTitle: "三步轻松加入合作伙伴计划",
    step1Title: "1. 提交加盟申请",
    step1Desc: "填写在线申请表单或直接注册代理商控制台账号",
    step2Title: "2. 渠道资质核验",
    step2Desc: "专属渠道经理对接，确认伙伴类型并签署正式合作协议",
    step3Title: "3. 开启推广获利",
    step3Desc: "获取专属邀请链接与推广素材，享受 40%+25% 永续分润",
    formTitle: "在线申请加盟合作伙伴",
    formSubtitle: "填写以下信息，我们的渠道总监将在 24 小时内与您直接对接",
    lblCompany: "公司/机构名称",
    lblContact: "联系人姓名",
    lblPhone: "手机号码/微信",
    lblEmail: "电子邮箱",
    lblTier: "意向合作级别",
    lblRegion: "意向覆盖区域",
    lblNotes: "补充说明 / 团队简介",
    btnSubmit: "提交加盟申请",
    submitting: "正在提交申请...",
    successMsg: "🎉 申请提交成功！专属渠道经理将在 24 小时内与您联系对接。",
    faqTitle: "常见问题解答 (FAQ)",
    ctaTitle: "开启您的合作伙伴之旅",
    ctaDesc: "现在注册或登录代理商平台，一键生成属于您的专属客户推广链接。",
    btnEnter: "进入代理商后台",
    btnContact: "联系合作专员",
    btnApplyNow: "立即在线申请"
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
    stepsTitle: "Three Steps to Join Our Program",
    step1Title: "1. Apply Online",
    step1Desc: "Fill in the online form or register your partner console account",
    step2Title: "2. Qualification Review",
    step2Desc: "Dedicated channel manager contacts you to finalize partner tier and agreement",
    step3Title: "3. Start Earning",
    step3Desc: "Get your referral links & marketing assets, enjoy 40%+25% recurring commissions",
    formTitle: "Apply for Partnership",
    formSubtitle: "Fill in your details and our channel director will reach out within 24 hours",
    lblCompany: "Company / Organization Name",
    lblContact: "Contact Person",
    lblPhone: "Phone / WeChat",
    lblEmail: "Email Address",
    lblTier: "Intended Partner Tier",
    lblRegion: "Target Region",
    lblNotes: "Additional Notes / Team Intro",
    btnSubmit: "Submit Application",
    submitting: "Submitting...",
    successMsg: "🎉 Application submitted successfully! Our channel manager will contact you within 24 hours.",
    faqTitle: "Frequently Asked Questions (FAQ)",
    ctaTitle: "Begin Your Partnership Journey",
    ctaDesc: "Sign up or log in to the partner console now to generate your unique customer referral link with one click.",
    btnEnter: "Go to Partner Console",
    btnContact: "Contact Support Agent",
    btnApplyNow: "Apply Online Now"
  }
};

const faqData = {
  zh: [
    {
      q: "佣金分润是如何计算与发放的？",
      a: "成功邀请客户首次订阅席位享受 40% 的高额分润；后续客户算力续充与按需消耗享受 25% 永久长尾分润。所有分润流水由 Reality Ledger 账本哈希验证，每月最后一个工作日完成审计并进行线下结算安排。"
    },
    {
      q: "什么是 BYOK 技术伙伴？",
      a: "BYOK (Bring Your Own Key) 技术伙伴适用于自带大模型 API 密钥或需要将 univerOS 部署在企业私有云/本地化物理机中的系统集成商，享受专属架构支持与 1,000,000 调试积分支持。"
    },
    {
      q: "代理商是否有年度考核与保底业绩要求？",
      a: "MVP 种子期加盟伙伴在第一年度不设定强制业绩保底指标。我们优先注重与伙伴共同打造标杆落地案例，并提供全套技术对接与现场宣介支持。"
    },
    {
      q: "客户通过我的推广链接注册后，绑定有效期是多久？",
      a: "一旦客户通过您的专属推广链接完成注册并建立租户关系，该客户账号与您的代理商 ID 属于永久绑定关系，后续产生的算力消耗提成持续计入您的收益账户。"
    },
    {
      q: "平台为代理商提供哪些营销与技术支持？",
      a: "平台为代理商提供：① 专属渠道经理 1-on-1 对接；② 核心解决方案 PPT 与 Demo 演示录屏素材；③ 7*24 架构师直连技术答疑；④ 种子期免费试用席位配额。"
    }
  ],
  en: [
    {
      q: "How are commission payouts calculated and settled?",
      a: "Referral partners earn 40% immediate revenue share on initial seat subscriptions and 25% perpetual lifetime share on subsequent compute top-ups. All commission records are validated by Reality Ledger hash chains and audited monthly for offline settlement."
    },
    {
      q: "What is a BYOK Tech Partner?",
      a: "BYOK (Bring Your Own Key) Tech Partners are system integrators bringing their own LLM keys or deploying univerOS in private clouds/on-premise servers. They receive dedicated architecture support and 1,000,000 debug credits."
    },
    {
      q: "Are there minimum sales quotas for partners?",
      a: "During the MVP seed period, there are no mandatory minimum sales quotas for Year 1. We focus on co-building benchmark cases with our partners, providing full tech and sales support."
    },
    {
      q: "How long is the customer referral binding valid?",
      a: "Once a customer signs up using your unique referral link, their tenant ID is permanently bound to your partner account. All future compute top-ups and seat renewals generate perpetual commissions for you."
    },
    {
      q: "What marketing and technical support does univerOS provide?",
      a: "We provide: 1) Dedicated 1-on-1 channel manager support; 2) Turnkey pitch decks & video demo assets; 3) 7*24 Direct architect technical support; 4) Free trial seat quotas for prospective clients."
    }
  ]
};

export default function UpgradedPartnerPage() {
  const { language } = useTranslation();
  const t = localTranslations[language];
  const faqs = faqData[language];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    tier: "标准合伙人",
    region: "全国",
    notes: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || (!formData.phone && !formData.email)) {
      setErrorMsg("请填写联系人姓名及手机/邮箱联系方式");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      const resp = await fetch("/api/partner/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const res = await resp.json();
      if (!resp.ok) {
        throw new Error(res.error || "提交失败");
      }
      setSubmitSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || "提交遇到异常，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="partner-page-root">
      <style>{`
        .partner-page-root {
          padding: 5rem 0;
          background-color: var(--color-bg-primary, #ffffff);
          color: var(--color-text-primary, #101418);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          min-height: 100vh;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .partner-glow-card {
          position: relative;
          background: var(--partner-card-bg, rgba(255, 255, 255, 0.85));
          border: 1px solid var(--partner-card-border, rgba(0, 0, 0, 0.08));
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          box-shadow: var(--partner-card-shadow, 0 8px 30px rgba(0, 0, 0, 0.04));
        }

        .partner-glow-card:hover {
          transform: translateY(-4px);
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 16px 36px -10px rgba(79, 70, 229, 0.2);
        }

        .partner-popular-card {
          border: 2px solid #6366f1 !important;
          background: var(--partner-popular-bg, rgba(245, 247, 255, 0.9)) !important;
        }

        .partner-section-box {
          background: var(--partner-section-bg, rgba(248, 250, 252, 0.8));
          border: 1px solid var(--partner-card-border, rgba(0, 0, 0, 0.08));
          border-radius: 24px;
          padding: 3.5rem 2rem;
          box-shadow: var(--partner-card-shadow, 0 8px 30px rgba(0, 0, 0, 0.03));
        }

        .partner-benefit-card {
          background: var(--partner-benefit-bg, #ffffff);
          border: 1px solid var(--partner-card-border, rgba(0, 0, 0, 0.08));
          border-radius: 16px;
          padding: 2rem;
          box-shadow: var(--partner-card-shadow, 0 4px 20px rgba(0, 0, 0, 0.03));
          transition: all 0.3s ease;
        }

        .partner-benefit-card:hover {
          transform: translateY(-2px);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .btn-glowing-primary {
          background: #4f46e5;
          color: #ffffff !important;
          border: 1px solid #6366f1;
          border-radius: 9999px;
          padding: 0.85rem 2rem;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.35);
        }

        .btn-glowing-primary:hover {
          background: #4338ca;
          box-shadow: 0 0 30px rgba(79, 70, 229, 0.55);
          transform: scale(1.02);
        }

        .btn-glowing-secondary {
          background: var(--partner-btn-sec-bg, rgba(0, 0, 0, 0.05));
          color: var(--color-text-primary, #101418) !important;
          border: 1px solid var(--partner-card-border, rgba(0, 0, 0, 0.15));
          border-radius: 9999px;
          padding: 0.85rem 2rem;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-glowing-secondary:hover {
          background: var(--partner-btn-sec-hover, rgba(0, 0, 0, 0.08));
          border-color: rgba(99, 102, 241, 0.4);
        }

        .partner-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--partner-input-bg, #ffffff) !important;
          border: 1px solid var(--partner-card-border, #e2e8f0) !important;
          border-radius: 8px;
          color: var(--color-text-primary, #0f172a) !important;
          font-size: 0.85rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .partner-input:focus {
          border-color: #6366f1 !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }

        .step-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(79, 70, 229, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
        }

        /* ── 深色模式自适应变量 ── */
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) {
            --partner-card-bg: rgba(18, 18, 22, 0.75);
            --partner-card-border: rgba(255, 255, 255, 0.08);
            --partner-card-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
            --partner-popular-bg: rgba(24, 24, 32, 0.95);
            --partner-section-bg: rgba(18, 18, 24, 0.6);
            --partner-benefit-bg: rgba(255, 255, 255, 0.02);
            --partner-btn-sec-bg: rgba(255, 255, 255, 0.06);
            --partner-btn-sec-hover: rgba(255, 255, 255, 0.12);
            --partner-input-bg: rgba(255, 255, 255, 0.04);
          }
        }
        [data-theme="dark"] {
          --partner-card-bg: rgba(18, 18, 22, 0.75);
          --partner-card-border: rgba(255, 255, 255, 0.08);
          --partner-card-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          --partner-popular-bg: rgba(24, 24, 32, 0.95);
          --partner-section-bg: rgba(18, 18, 24, 0.6);
          --partner-benefit-bg: rgba(255, 255, 255, 0.02);
          --partner-btn-sec-bg: rgba(255, 255, 255, 0.06);
          --partner-btn-sec-hover: rgba(255, 255, 255, 0.12);
          --partner-input-bg: rgba(255, 255, 255, 0.04);
        }

        /* ── 浅色模式显式变量定义 ── */
        [data-theme="light"] {
          --partner-card-bg: rgba(255, 255, 255, 0.9);
          --partner-card-border: rgba(226, 232, 240, 0.9);
          --partner-card-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          --partner-popular-bg: rgba(245, 247, 255, 0.95);
          --partner-section-bg: rgba(248, 250, 252, 0.9);
          --partner-benefit-bg: #ffffff;
          --partner-btn-sec-bg: rgba(0, 0, 0, 0.04);
          --partner-btn-sec-hover: rgba(0, 0, 0, 0.08);
          --partner-input-bg: #ffffff;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* 1. Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(79, 70, 229, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            color: '#4f46e5',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.25rem'
          }}>
            <Sparkles size={16} />
            {t.tag}
          </div>
          
          <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1rem', color: 'var(--color-text-primary, #0f172a)' }}>
            {t.title}
          </h1>
          <p style={{ fontSize: '1.35rem', color: '#4f46e5', fontWeight: 700, marginBottom: '1.5rem' }}>
            {t.subtitle}
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary, #475569)', maxWidth: '760px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            {t.desc}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#apply-form">
              <button className="btn-glowing-primary">
                {t.btnApplyNow}
              </button>
            </a>
            <Link href="/partner/login">
              <button className="btn-glowing-secondary">
                {t.btnEnter}
              </button>
            </Link>
          </div>
        </div>

        {/* 2. Tier Pricing Cards */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.tierTitle}</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted, #64748b)' }}>{t.tierDesc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Tier 1: BYOK */}
            <div className="partner-glow-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary, #0f172a)' }}>{t.tier1Name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #64748b)', margin: '0.5rem 0 1.5rem' }}>{t.tier1Focus}</p>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#4f46e5', marginBottom: '1.5rem' }}>{t.tier1Price}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {tierFeatures.tier1.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-text-secondary, #334155)' }}>
                    <Check size={16} color="#4f46e5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="#apply-form" style={{ width: '100%' }}>
                <button className="btn-glowing-secondary" style={{ width: '100%', borderRadius: '8px', padding: '0.75rem' }}>
                  选择申请
                </button>
              </a>
            </div>

            {/* Tier 2: Standard (Popular) */}
            <div className="partner-glow-card partner-popular-card">
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#4f46e5', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                {t.popular}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary, #0f172a)' }}>{t.tier2Name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #64748b)', margin: '0.5rem 0 1.5rem' }}>{t.tier2Focus}</p>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#4f46e5', marginBottom: '1.5rem' }}>{t.tier2Price}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {tierFeatures.tier2.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-text-primary, #0f172a)' }}>
                    <Check size={16} color="#4f46e5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="#apply-form" style={{ width: '100%' }}>
                <button className="btn-glowing-primary" style={{ width: '100%', borderRadius: '8px' }}>
                  立即申请加盟
                </button>
              </a>
            </div>

            {/* Tier 3: Core Partner */}
            <div className="partner-glow-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary, #0f172a)' }}>{t.tier3Name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #64748b)', margin: '0.5rem 0 1.5rem' }}>{t.tier3Focus}</p>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#4f46e5', marginBottom: '1.5rem' }}>{t.tier3Price}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {tierFeatures.tier3.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-text-secondary, #334155)' }}>
                    <Check size={16} color="#4f46e5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="#apply-form" style={{ width: '100%' }}>
                <button className="btn-glowing-secondary" style={{ width: '100%', borderRadius: '8px', padding: '0.75rem' }}>
                  联系定制沟通
                </button>
              </a>
            </div>

          </div>
        </div>

        {/* 3. Core Benefits Grid */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-primary, #0f172a)' }}>{t.benefitsTitle}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="partner-benefit-card">
              <Zap size={28} color="#4f46e5" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.benefit1Title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary, #475569)', lineHeight: '1.6' }}>{t.benefit1Desc}</p>
            </div>

            <div className="partner-benefit-card">
              <ShieldCheck size={28} color="#4f46e5" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.benefit2Title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary, #475569)', lineHeight: '1.6' }}>{t.benefit2Desc}</p>
            </div>

            <div className="partner-benefit-card">
              <Users size={28} color="#4f46e5" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.benefit3Title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary, #475569)', lineHeight: '1.6' }}>{t.benefit3Desc}</p>
            </div>

            <div className="partner-benefit-card">
              <Layers size={28} color="#4f46e5" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.6rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.benefit4Title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary, #475569)', lineHeight: '1.6' }}>{t.benefit4Desc}</p>
            </div>
          </div>
        </div>

        {/* 4. Three-step Join Process */}
        <div style={{ marginBottom: '6rem' }} className="partner-section-box">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-primary, #0f172a)' }}>{t.stepsTitle}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div className="step-circle" style={{ margin: '0 auto 1.25rem' }}>1</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.step1Title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary, #475569)', lineHeight: '1.6' }}>{t.step1Desc}</p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div className="step-circle" style={{ margin: '0 auto 1.25rem' }}>2</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.step2Title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary, #475569)', lineHeight: '1.6' }}>{t.step2Desc}</p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div className="step-circle" style={{ margin: '0 auto 1.25rem' }}>3</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.step3Title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary, #475569)', lineHeight: '1.6' }}>{t.step3Desc}</p>
            </div>
          </div>
        </div>

        {/* 5. Interactive Application Form */}
        <div id="apply-form" style={{ marginBottom: '6rem', maxWidth: '720px', margin: '0 auto 6rem' }} className="partner-glow-card">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-primary, #0f172a)' }}>{t.formTitle}</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted, #64748b)' }}>{t.formSubtitle}</p>
          </div>

          {submitSuccess ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '16px' }}>
              <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', marginBottom: '0.5rem' }}>{t.successMsg}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary, #475569)', marginTop: '1rem' }}>您也可以直接注册或登录代理商控制台生成试用链接。</p>
              <Link href="/partner/login" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
                <button className="btn-glowing-primary">{t.btnEnter}</button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary, #475569)', marginBottom: '0.4rem', fontWeight: 600 }}>{t.lblContact} *</label>
                  <input
                    type="text"
                    required
                    placeholder="如：张经理"
                    className="partner-input"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary, #475569)', marginBottom: '0.4rem', fontWeight: 600 }}>{t.lblPhone} *</label>
                  <input
                    type="text"
                    required
                    placeholder="手机号或微信"
                    className="partner-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary, #475569)', marginBottom: '0.4rem', fontWeight: 600 }}>{t.lblCompany}</label>
                  <input
                    type="text"
                    placeholder="公司或团队名称"
                    className="partner-input"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary, #475569)', marginBottom: '0.4rem', fontWeight: 600 }}>{t.lblEmail}</label>
                  <input
                    type="email"
                    placeholder="partner@example.com"
                    className="partner-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary, #475569)', marginBottom: '0.4rem', fontWeight: 600 }}>{t.lblTier}</label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="partner-input"
                  >
                    <option value="标准合伙人">标准合伙人 (¥19,800/年)</option>
                    <option value="核心合伙人">核心合伙人 (¥49,800/年)</option>
                    <option value="BYOK技术伙伴">BYOK 技术伙伴 (¥9,800/年)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary, #475569)', marginBottom: '0.4rem', fontWeight: 600 }}>{t.lblRegion}</label>
                  <input
                    type="text"
                    placeholder="如：华东地区/上海"
                    className="partner-input"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary, #475569)', marginBottom: '0.4rem', fontWeight: 600 }}>{t.lblNotes}</label>
                <textarea
                  rows={3}
                  placeholder="请输入您的团队背景或目标客户群体描述..."
                  className="partner-input"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {errorMsg && <p style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errorMsg}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="btn-glowing-primary"
                style={{ width: '100%', marginTop: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <Send size={16} />
                <span>{submitting ? t.submitting : t.btnSubmit}</span>
              </button>
            </form>
          )}
        </div>

        {/* 6. FAQ Accordion */}
        <div style={{ marginBottom: '6rem', maxWidth: '840px', margin: '0 auto 6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text-primary, #0f172a)' }}>{t.faqTitle}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  style={{
                    background: 'var(--partner-benefit-bg, #ffffff)',
                    border: '1px solid var(--partner-card-border, rgba(0,0,0,0.08))',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: 'var(--partner-card-shadow, 0 4px 15px rgba(0,0,0,0.02))'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary, #0f172a)', margin: 0 }}>
                      {faq.q}
                    </h3>
                    {isOpen ? <ChevronUp size={18} color="#4f46e5" /> : <ChevronDown size={18} color="#94a3b8" />}
                  </div>
                  {isOpen && (
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary, #475569)', marginTop: '1rem', lineHeight: '1.7', borderTop: '1px solid var(--partner-card-border, rgba(0,0,0,0.06))', paddingTop: '1rem' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. Bottom Call to Action (CTA) */}
        <div style={{
          background: 'var(--partner-section-bg, rgba(248, 250, 252, 0.9))',
          border: '1px solid var(--partner-card-border, rgba(0, 0, 0, 0.08))',
          borderRadius: '24px',
          padding: '4rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--partner-card-shadow, 0 8px 30px rgba(0, 0, 0, 0.03))'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--color-text-primary, #0f172a)' }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary, #475569)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            {t.ctaDesc}
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/partner/login">
              <button className="btn-glowing-primary">
                {t.btnEnter}
              </button>
            </Link>
            <a href="#apply-form">
              <button className="btn-glowing-secondary">
                {t.btnApplyNow}
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>

  );
}
