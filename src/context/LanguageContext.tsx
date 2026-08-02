"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "zh" | "en";

type TranslationDict = {
  [key: string]: string | TranslationDict;
};

const translations: Record<Language, TranslationDict> = {
  zh: {
    common: {
      brand: "univerOS",
      brandDesc: "企业级多职能交付系统。深度整合行业知识、SOP 产线与推理算力，覆盖研发、内容生产、运营分发全职能场景，安全交付真实生产成果。"
    },
    nav: {
      features: "产品能力",
      pricing: "套餐计费",
      security: "安全白皮书",
      partner: "代理生态",
      login: "代理商登录",
      apply: "申请内测"
    },
    footer: {
      terms: "使用条款 (Terms)",
      privacy: "隐私协议 (Privacy)",
      manual: "操作指南 (Manual)",
      changelog: "更新日志 (Changelog)",
      github: "GitHub 源码",
      sales: "联系我们 (Sales)",
      partner: "合作伙伴 (Partner)",
      copyright: "©2026 univerOS · 企业级多职能交付系统"
    },
    hero: {
      tag: "企业级多职能交付系统",
      title: "专注交付，",
      titleHighlight: "覆盖全职能",
      desc: "行业知识、SOP 产线与推理算力三层能力协同联动。覆盖研发、内容生产、运营分发全职能场景。安全合规，全程可追溯，你花钱买成果，不是买工具。",
      btnApply: "代理申请",
      btnPricing: "马上体验",
      tip: "* 支持自备 API 密钥接入（BYOK）或订阅平台托管算力，两种模式均可。"
    },
    features: {
      title: "Three-Layer Capability Multiplier — 三层能力乘法",
      desc: "行业知识、SOP 产线与推理算力并非功能拼凑，而是互为放大器。三层能力协同联动，打造企业级安全交付体系。",
      rd: {
        title: "行业知识",
        desc: "平台标准知识包 + 租户共建贡献知识，双轨制生命周期管理。作为每次执行的“决策上下文”，指导 SOP 产线生成精准动作，从根本上降低 AI 理解特定行业业务的门槛。",
        tag1: "平台知识轨",
        tag2: "共建贡献轨",
        tag3: "决策上下文注入"
      },
      gen: {
        title: "SOP 产线",
        desc: "软件研发（yz-RD）、多模态内容生产（yz-CF）等经过严肃生产验证的固化执行流水线。承载物理动作的落地，将业务意图直接转化为真实生产交付物，而非报告或建议。",
        tag1: "软件研发自动化",
        tag2: "多模态内容生产",
        tag3: "REAL 级生产交付"
      },
      ing: {
        title: "推理算力",
        desc: "驱动系统运转的能源。支持自备 API 密钥接入（BYOK）或订阅平台托管算力，两种模式灵活切换。算力稳定供给，保证产线飞轮持续高速运转。（* yz-IB 全网情报采集：灰度开放中）",
        tag1: "BYOK 自备接入",
        tag2: "平台托管算力",
        tag3: "弹性供给保障"
      }
    },
    trust: {
      title: "安全交付的三重保障",
      desc: "univerOS 在执行层内置三套机制，确保每一次交付都可信、可审计、可恢复。",
      t1: {
        title: "风险仲裁（L1 / L2 / L3）",
        desc: "每一个执行动作按风险等级自动分级。低风险静默执行，中风险推送审批窗口（60 分钟自动失效），高风险强制阻塞等待人工显式授权，写操作不会在你不知情时发生。",
        badge: "L1-L3 风险仲裁"
      },
      t2: {
        title: "MAPE-K 自愈闭环",
        desc: "系统持续监控每个执行节点的健康状态。一旦检测到异常，自动触发诊断→修复→验证三重闭环，V1-V4 四级黑盒测试矩阵确保修复结果在合并前通过完整验证。",
        badge: "V1-V4 自愈黑盒"
      },
      t3: {
        title: "Reality Ledger 全链路存证",
        desc: "每一次任务的指令下发、状态流转、审批记录与计费账单，均生成哈希链落库，Append-only 不可篡改。随时可导出，满足企业安全审计“Audit-Ready”要求。",
        badge: "Append-only 存证"
      }
    },
    security: {
      title: "你的数据，永远在你手里",
      desc: "univerOS 从架构层保障企业数字主权。凭证不上云，数据不共享，租户之间物理隔离。",
      cup: {
        title: "API 密钥本地锁死，平台零接触",
        desc: "大模型密钥和代码凭证只存在于你的本地客户端安全隔离区。云端只传递任务指令，密钥明文永远不经过平台服务器。"
      },
      ledger: {
        title: "每次执行，全程可追溯",
        desc: "Reality Ledger 对每一步执行生成哈希存证，Append-only 防篡改，可随时导出用于企业合规审计。"
      },
      boxTitle: "// 数据主权边界",
      item1: "凭证物理隔离（CUP 协议）：API 密钥等敏感凭证存储在本地，平台侧零接触明文。",
      item2: "租户命名空间阻断：基于 DID 的 NATS 命名空间隔离，严格切断不同企业的数据传输。",
      item3: "Append-only 审计链：Reality Ledger 哈希链不可逆写入，满足企业安全合规审计要求。"
    },
    partner: {
      title: "成为 univerOS 生态合作伙伴",
      desc: "全国范围招募 IT 系统集成商、数字化咨询团队与技术服务商。提供最高 20% 推荐分润 + 梯度超量分成，按月透明结算。一次签约，持续收益。",
      btn: "申请成为代理商"
    },
    faq: {
      title: "常见问题",
      q1: "Q: univerOS 和市面上的 AI 工具有什么区别？",
      a1: "A: 大多数 AI 工具提供“辅助建议”——你还是要自己做。univerOS 提供的是“执行交付”——输入业务意图，系统自动完成整个流程并交付可用成果。配合风险仲裁机制，高风险动作必须人工确权，低风险动作系统自动执行，你控制边界，系统负责跑通。",
      q2: "Q: “花钱买成果”是什么意思？收费怎么计算？",
      a2: "A: 你不需要购买 AI 工具或学习提示词工程。你为实际执行的业务任务付费。采用“席位订阅 + 超量按次”双轨模式：订阅覆盖基础调用配额，超出后按实际调用次数计费，无隐藏费用。代理商另有专属分润结算通道。",
      q3: "Q: 我的数据和 API 密钥安全吗？",
      a3: "A: 完全安全。univerOS 采用 CUP 凭证隔离协议——大模型密钥、Git 凭证等仅存在于你本地客户端的安全隔离区，平台服务器从不接触明文。同时，基于 DID 的 NATS 命名空间隔离确保不同企业之间数据严格切断。",
      q4: "Q: 算力需要自己准备吗？",
      a4: "A: 不是必须的。univerOS 同时支持两种模式：① BYOK（自备 API 密钥）：接入 DeepSeek、OpenAI、Qwen 等，成本完全自控；② 平台托管算力：直接订阅平台积分即可使用，无需管理 API 账号。两种模式可按需切换。",
      q5: "Q: 目前支持哪些业务场景？",
      a5: "A: Phase 1 当前支持三大场景：① 软件研发自动化（yz-RD）：从意图孵化到代码提交的全流程自动化；② 多模态内容生产（yz-CF）：短视频批量生产、脚本生成、多平台分发；③ 全网情报采集（yz-IB）：灰度开放中，邀请制准入，请联系我们申请。服务中大型企业、SaaS 公司、新媒体机构与技术团队。"
    },
    pricing: {
      header: {
        tag: "双轨弹性财务模式",
        title: "产线席位订阅与计费细则",
        desc: "univerOS 不代理销售任何大模型 Token。我们采用“工具席位费 + 运行消耗费（基于 Call to Bill 的算力与 Token 溢价分润模式）”的双轨弹性结算机制。"
      },
      cards: {
        rd: {
          title: "RD 研发席位订阅",
          price: "内测特惠 / 联系销售",
          quota: "1,000 次工作流调用/月",
          overagePrice: "试运营期间根据人工核账并按次结算",
          f1: "Git 影子工作区 (Shadow Branch)",
          f2: "CodeVision 语义依赖影响审计",
          f3: "V1-V4 级黑盒测试验证自愈",
          f4: "提交 Pull Request 目标等待合并",
          f5: "DID 租户身份逻辑隔离",
          btn: "开通 RD 内测席位"
        },
        gen: {
          title: "Generator 营销席位订阅",
          price: "内测特惠 / 联系销售",
          quota: "800 次工作流调用/月",
          overagePrice: "试运营期间根据人工核账并按次结算",
          f1: "短视频分镜脚本智能规划",
          f2: "FishTTS 本地化拟真声音合成",
          f3: "VCO/CCO 视觉一致性语义审计",
          f4: "多模态素材剪辑与批量交付",
          f5: "本地 LanceDB 向量沉淀",
          btn: "开通 Generator 内测席位"
        },
        ing: {
          title: "Ingestor 运营专线",
          price: "专线部署 / 评估报价",
          quota: "根据物理节点部署协商设定",
          overagePrice: "按需定制",
          f1: "Whisper 音轨双轨采集与结构化转写",
          f2: "大模型智能重写与改写",
          f3: "一键同步至企业社交渠道矩阵",
          f4: "企业本地物理节点独占部署",
          f5: "高级合规与定制化数据管道",
          btn: "联系客户经理"
        }
      },
      policy: {
        title: "计费扣减规则与免责声明",
        item1: "1. 计费起点认定：计费扣减以 Brain 服务接收到请求并成功写入 NATS 任务队列（即 `xt.tasks.proposed` 主题）的瞬间为准。一旦写入指令队列，即刻扣减对应租户配额。",
        item2: "2. 结果自负原则：本引擎属于类似于移动运营商的底层执行中继。任务开始执行即行计费，执行结果的成功或失败不影响本次调用的额度扣减，由企业自担规划与执行风险。",
        item3: "3. 算力密钥隔离：univerOS 绝不托管任何明文 API Key。您的 LLM / 视觉多模态密钥仅保存在本地客户端物理存储中，模型计算直接向大模型服务商发起，平台仅根据执行日志流统计调用次数，不加收 Token 消耗费用。"
      }
    }
  },
  en: {
    common: {
      brand: "univerOS",
      brandDesc: "Enterprise Multi-Function Delivery System. Integrating Industry Knowledge, SOP Pipelines, and Computing Power across R&D, content, and operations — safe, auditable, real delivery."
    },
    nav: {
      features: "Capabilities",
      pricing: "Pricing",
      security: "Security",
      partner: "Partners",
      login: "Partner Login",
      apply: "Apply Trial"
    },
    footer: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      manual: "Manual",
      changelog: "Changelog",
      github: "GitHub Source",
      sales: "Contact Sales",
      partner: "Partners",
      copyright: "©2026 univerOS · Enterprise Multi-Function Delivery System"
    },
    hero: {
      tag: "Enterprise Multi-Function Delivery System",
      title: "Built to Deliver.",
      titleHighlight: "Across Every Function.",
      desc: "Three-Layer Capability Multiplier — Industry Know-How, SOP Pipelines, and Computing Power working in synergy. Covers software R&D, content production, and operations end-to-end. Secure, auditable, and outcome-driven. You pay for results, not tools.",
      btnApply: "Partner Application",
      btnPricing: "Get Started",
      tip: "* Supports BYOK (bring your own API key) or platform-managed compute — your choice."
    },
    features: {
      title: "Three-Layer Capability Multiplier",
      desc: "Industry Know-How, SOP Pipelines, and Computing Power are not feature additions — they are mutual amplifiers. Working in synergy to build enterprise-grade delivery.",
      rd: {
        title: "Industry Know-How",
        desc: "Platform standard knowledge packs + tenant-contributed shared knowledge, managed under a dual-track lifecycle model. Injected as decision context before every execution — reducing the barrier for AI to understand your specific industry and business logic.",
        tag1: "Platform Track",
        tag2: "Contribution Track",
        tag3: "Context Injection"
      },
      gen: {
        title: "SOP Pipelines",
        desc: "Production-validated execution pipelines covering software R&D (yz-RD) and multimodal content production (yz-CF). Translates business intent directly into real, deliverable production outputs — not reports or suggestions.",
        tag1: "Software R&D Auto",
        tag2: "Multimodal Content",
        tag3: "REAL-Grade Delivery"
      },
      ing: {
        title: "Computing Power",
        desc: "The fuel that drives the system. Supports BYOK (bring your own API keys) or platform-managed compute via subscription credits. Stable supply keeps the delivery flywheel running at full speed. (* yz-IB Global Intelligence Intake: Gray-release)",
        tag1: "BYOK Integration",
        tag2: "Managed Compute",
        tag3: "Elastic Supply"
      }
    },
    trust: {
      title: "Three Layers of Delivery Assurance",
      desc: "univerOS embeds three mechanisms at the execution layer to ensure every delivery is trustworthy, auditable, and recoverable.",
      t1: {
        title: "Risk Arbitration (L1 / L2 / L3)",
        desc: "Every action is auto-classified by risk level. Low-risk actions execute silently. Medium-risk actions push an approval window (auto-expires in 60 min). High-risk actions hard-block until explicit human authorization. Write actions never happen without your awareness.",
        badge: "L1-L3 Arbitration"
      },
      t2: {
        title: "MAPE-K Self-Healing Loop",
        desc: "The system continuously monitors every execution node. On anomaly detection, it automatically triggers a diagnose → fix → verify loop. A V1-V4 four-stage blackbox test matrix ensures fixes are validated before any merge or delivery.",
        badge: "V1-V4 Matrix"
      },
      t3: {
        title: "Reality Ledger — Full-Chain Audit Trail",
        desc: "Every task dispatch, state transition, approval record, and billing entry generates a hash-chained immutable record. Append-only, tamper-proof, and exportable — fully Audit-Ready for enterprise compliance requirements.",
        badge: "Append-only Trail"
      }
    },
    security: {
      title: "Your Data. Always Under Your Control.",
      desc: "univerOS is architected for enterprise data sovereignty — credentials never leave your perimeter, data is never shared, tenants are physically isolated.",
      cup: {
        title: "API Keys Locked Locally. Zero Cloud Contact.",
        desc: "LLM API keys and Git deploy credentials live only in your local client's secure vault. The cloud orchestrator relays only task plans — your plaintext credentials never touch platform servers."
      },
      ledger: {
        title: "Every Step. Fully Traceable.",
        desc: "Reality Ledger generates a cryptographic hash chain for every execution step — append-only, tamper-proof, and exportable for enterprise compliance audits."
      },
      boxTitle: "// Data Sovereignty Boundary",
      item1: "Credential Physical Isolation (CUP Protocol): Sensitive API keys and tokens are stored locally — zero plaintext contact on the platform side.",
      item2: "Tenant Namespace Partitioning: DID-based NATS namespace isolation strictly prevents cross-tenant data leakage.",
      item3: "Append-Only Audit Chain: Reality Ledger hash records are irreversibly written, satisfying enterprise security compliance requirements."
    },
    partner: {
      title: "Join the univerOS Partner Ecosystem",
      desc: "Recruiting IT integrators, digital transformation consultants, and technical service teams nationwide. Earn up to 20% referral commission plus tiered overage sharing — settled monthly with full billing transparency.",
      btn: "Apply to Become a Partner"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Q: How is univerOS different from other AI tools?",
      a1: "A: Most AI tools give you suggestions — you still do the work. univerOS delivers execution outcomes. You input a business intent; the system completes the full workflow and delivers a usable result. Combined with risk arbitration gates, high-risk actions require your explicit approval, while low-risk actions run automatically. You set the boundary; the system handles the rest.",
      q2: "Q: What does \"pay for results\" mean? How is pricing structured?",
      a2: "A: You don't buy AI tools or learn prompt engineering. You pay for actual business tasks executed. Pricing uses a dual-track model: a flat seat subscription covers base workflow quota, with consumption-based overage fees for usage beyond quota. No hidden fees. Partner channels have a dedicated commission settlement track.",
      q3: "Q: Is my data and API key secure?",
      a3: "A: Completely. univerOS uses the CUP credential isolation protocol — LLM API keys, Git credentials, and other sensitive assets live only in your local client's secure vault. Platform servers never touch plaintext credentials. DID-based NATS namespace isolation ensures strict data partitioning between different enterprise tenants.",
      q4: "Q: Do I need to bring my own compute?",
      a4: "A: Not required. univerOS supports two modes: ① BYOK: Connect your own DeepSeek, OpenAI, Qwen, or other API keys — full cost control; ② Platform-managed compute: Subscribe to platform credits and use them directly, no API account needed. Both modes can be switched flexibly based on your preference.",
      q5: "Q: What business scenarios are currently supported?",
      a5: "A: Phase 1 currently supports three scenarios: ① Software R&D automation (yz-RD): Full-pipeline automation from intent to code commit; ② Multimodal content production (yz-CF): Video batch production, script generation, multi-channel distribution; ③ Global intelligence intake (yz-IB): Currently in gray-release — invite-only. Contact us to apply. Primary targets: mid-to-large enterprises, SaaS companies, digital media organizations, and tech teams."
    },
    pricing: {
      header: {
        tag: "Dual-Track Elastic Financial Model",
        title: "Seat Subscription & Overage Billing Details",
        desc: "univerOS does not resell LLM Tokens. We implement a dual-track model consisting of flat Tool Seat Fees and consumption-based overage fees (under the Call to Bill compute & Token premium sharing model)."
      },
      cards: {
        rd: {
          title: "RD Auto-Developer Seat",
          price: "Trial Special / Contact Sales",
          quota: "1,000 workflows / month",
          overagePrice: "Settled via monthly invoice during trial operation",
          f1: "Git Shadow Branch Isolation",
          f2: "CodeVision Semantic Dependency Audit",
          f3: "V1-V4 Self-Healing Test Matrix",
          f4: "Submit PR for Manual Merge",
          f5: "Tenant DID Cryptographic Isolation",
          btn: "Subscribe to RD Trial"
        },
        gen: {
          title: "Generator Marketing Seat",
          price: "Trial Special / Contact Sales",
          quota: "800 workflows / month",
          overagePrice: "Settled via monthly invoice during trial operation",
          f1: "Storyboard Script Planner",
          f2: "Local FishTTS Voice Synthesis",
          f3: "VCO/CCO Visual Consistency Audit",
          f4: "Multimodal Video Batch Delivery",
          f5: "Local LanceDB Vector Store",
          btn: "Subscribe to Generator Trial"
        },
        ing: {
          title: "Ingestor Dedicated Line",
          price: "Private Deploy / Quote Request",
          quota: "Customized by Node Topology",
          overagePrice: "Fully Customized",
          f1: "Whisper Dual-Track Audio Transcription",
          f2: "LLM-based Content Rewriting",
          f3: "One-click Syndication to Channels",
          f4: "On-premise Node Deployment",
          f5: "Enterprise Compliance Data Pipeline",
          btn: "Contact Account Manager"
        }
      },
      policy: {
        title: "Billing Policy & Disclaimer",
        item1: "1. Billing Start Trigger: Overage consumption is deducted once a task is successfully written into the NATS proposed queue (the `xt.tasks.proposed` subject).",
        item2: "2. Execution Accountability: The engine operates as a lower-level execution relay similar to telecom carriers. Workflow costs are deducted upon task dispatch, and execution success/failure does not affect the consumption deduction; tenants carry planning risks.",
        item3: "3. Credential Sovereignty: univerOS never hosts plaintext API keys. Your LLM/multimodal keys remain in local client memory during execution, and we do not add markups or surcharges on LLM bandwidth."
      }
    }
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => string;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("zh");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("lang") as Language;
      const host = typeof window !== "undefined" ? window.location.hostname.toLowerCase() : "";

      if (savedLang === "zh" || savedLang === "en") {
        setLanguageState(savedLang);
      } else if (host.endsWith(".tech") || host.endsWith(".xyz")) {
        setLanguageState("en");
      } else if (host.endsWith(".cn")) {
        setLanguageState("zh");
      } else {
        const browserLang = navigator.language.toLowerCase();
        setLanguageState(browserLang.includes("en") ? "en" : "zh");
      }
    } catch (e) {
      console.error("Failed to load language preference:", e);
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      console.error("Failed to save language preference:", e);
    }
  };

  const t = (keyPath: string): string => {
    const keys = keyPath.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to zh if en key is missing
        let fallback: any = translations["zh"];
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = fallback[fKey];
          } else {
            return keyPath; // Ultimate fallback
          }
        }
        return typeof fallback === "string" ? fallback : keyPath;
      }
    }

    return typeof current === "string" ? current : keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}

export const useLanguage = useTranslation;
