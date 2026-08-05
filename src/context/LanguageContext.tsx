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
      brandDesc: "企业级多职能交付系统。univerOS 给你更好的 AI Workforce 体验，安全、交付！覆盖软件研发、内容工厂与摄取分发，简单好用，安全省心。"
    },
    nav: {
      features: "产品能力",
      customers: "适用场景",
      pricing: "套餐计费",
      security: "安全保障",
      partner: "代理生态",
      contact: "联系我们",
      login: "代理商登录",
      apply: "申请体验"
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
      tag: "univerOS",
      badge: "智能 · 安全 · 交付",
      title: "企业级 AI Workforce",
      titleHighlight: "多职能交付系统",
      desc: "univerOS AI 数字员工团队自主协作，从个人工作室到大型集团，不负所托，稳定交付成果，全流程安全留痕，给你更好的 AI Workforce 体验！",
      btnApply: "代理加盟",
      btnPricing: "马上体验",
      tip: "* 支持自备 AI 大模型账号（BYOK），或直接由平台全托管开箱即用。"
    },
    stats: {
      title: "大规模企业级 AI Workforce 落地推演",
      subtitle: "构建全自主 Agent Swarm 突破生产力瓶颈",
      chip1: "Brain 调度",
      chip2: "Agent 战队",
      chip3: "存证自愈",
      num1: "1,500K+",
      label1: "AI 任务已推演",
      num2: "+2.4M",
      label2: "代码与多模态交付",
      num3: "< 15s",
      label3: "故障自动修复响应"
    },
    systemFeatures: {
      title: "univerOS 系统特性",
      desc: "融合多职能 Agent Swarm 协作、物理级凭证隔离、MAPE-K 自愈闭环与 Append-only 存证的企业级基础设施"
    },
    architecture: {
      title: "univerOS 五维核心系统架构",
      desc: "围绕意图调度、多技能执行与自动修复建立的严肃生产级 AI Workforce 架构底座",
      brain: "Brain 调度中心",
      brainDesc: "全局业务意图分析、任务分解与 NATS 高性能物理隔离中继。",
      agent: "Agent 数字战队",
      agentDesc: "多职能 Agent Swarm 团队，各司其职，高效协同推演。",
      skills: "Skills 技能库",
      skillsDesc: "模块化固化 SOP 技能包，按需上下文动态注入与闭环执行。",
      memory: "Memory 记忆上下文",
      memoryDesc: "向量知识库与长短期上下文状态追踪，降低行业理解门槛。",
      healing: "Self-Healing 自愈闭环",
      healingDesc: "MAPE-K 自愈机制与 V1-V4 黑盒测试，自动诊断并修复报错。"
    },
    features: {
      title: "三大核心 AI 产线",
      desc: "无需懂代码或提示词，AI 团队帮你搞定软件全流程开发、全模态内容制作与全球情报摄取分发，直接交付生产成果。",
      rd: {
        title: "软件研发",
        desc: "覆盖 AI 官网、AI 小程序、AI-H5 落地宣传页、AI-OA、AI-CRM、AI-ERP 及 AI 财务软件等各类系统。AI 团队一站式搞定设计、开发、测试与交付全流程，安全可控。",
        tag1: "官网/小程序/H5/OA/CRM/ERP",
        tag2: "AI 设计/开发/测试/交付全流程",
        tag3: "安全隔离确认后上线"
      },
      gen: {
        title: "内容工厂",
        desc: "具备 AI 营销文案、AI 小说改编、AI 图片打标、AI 短视频制作及 AI 全模态批量生产能力。一键流水线输出高质量营销素材与创意成果。",
        tag1: "营销文案/小说改编/短视频",
        tag2: "AI 图片打标与全模态生产",
        tag3: "全平台批量一站式交付"
      },
      ing: {
        title: "摄取分发",
        desc: "具备全球跨时区多节点同步、AI 社媒舆情监控、AI 行业经验采集、AI 知识库构建、AI 视频采集、AI 音频内容提取、AI 内容分发与 AI 播客推流能力，24 小时无人值守。（* 灰度开放中）",
        tag1: "跨时区多节点/社媒舆情监控",
        tag2: "音视频提取与知识库构建",
        tag3: "内容一键分发与播客推流"
      }
    },
    customers: {
      title: "univerOS 适合不同规模企业的省心方案",
      desc: "无论你是 1 人的个人创业者，还是上千人的大型企业，univerOS 都提供开箱即用、安全合规的落地策略。",
      techWallTitle: "无缝兼容全球顶尖 AI 模型与云计算基础设施",
      opc: {
        badge: "1-3 人团队 / 创业工作室",
        title: "超级个体与小微工作室",
        desc: "一个人就是一家公司。用 AI 替代繁琐的软件开发、文案营销与日常运营杂活，释放创始人精力，专注于做业务和赚利润。"
      },
      sme: {
        badge: "10-200 人 / 快速增长企业",
        title: "高成长型中小企业",
        desc: "不大幅增加招人成本，也能让业务产能翻倍。解决“产品很好但市场推广跟不上”的痛点，用更少投入换来更清晰的收益回报。"
      },
      trad: {
        badge: "零技术门槛 / 平台全托管",
        title: "传统与非技术行业企业",
        desc: "面向餐饮、制造、传统服务等零技术基础企业。不需要懂 AI 概念或申请账号，开箱即用订阅服务，平台帮你搞定一切后台。"
      },
      enterprise: {
        badge: "专有部署 / 极致安全",
        title: "大型行业企业与集团公司",
        desc: "面向金融、医疗、工业等对合规要求极高的行业。提供完全隔离的本地部署方案，密码和数据留在企业内部，安全合规无风险。"
      }
    },
    trust: {
      title: "AI 团队内置企业级安全与自动修复",
      desc: "无需担心 AI 乱跑或出错，系统内置三重保障机制，守护你的业务安全与正常运转。",
      t1: {
        title: "多渠道审批",
        desc: "区分常规任务与高风险操作。常规日常工作 AI 自动完成；涉及修改重要数据或上线等高风险动作，自动弹出确认提示，关键开关始终握在你手里。",
        badge: "智能安全把关"
      },
      t2: {
        title: "乐观契约机制",
        desc: "系统 24 小时实时监控运行状态。一旦遇到报错或异常，AI 团队会自动诊断原因并尝试修复测试，直到验证无误再提交，不需要你懂技术去折腾。",
        badge: "故障自动修复"
      },
      t3: {
        title: "全流程可追溯",
        desc: "每一个指令下发、执行步骤和操作记录都自动生成防篡改日志，全过程透明清晰，随时可以导出，轻松满足企业安全合规要求。",
        badge: "安全合规可查"
      }
    },
    security: {
      title: "你的数据，始终安全可控",
      desc: "univerOS 从底层架构保护企业的数据安全。密码留在本地，数据独立隔离，平台绝不触碰你的核心资产。",
      cup: {
        title: "账号密码本地锁定（密码保险箱）",
        desc: "大模型账号 Key 和软件密码保存在你自己的电脑本地，云端只传递任务指令，明文密码绝对不上云。"
      },
      ledger: {
        title: "关键审批由你做主",
        desc: "高风险操作必须由你在控制台点击确认才生效，平台管理员后台无法越权干预，防止任何未经授权的操作。"
      },
      boxTitle: "// univerOS 安全保障承诺",
      item1: "账号密码本地加密：敏感凭证保存在本地客户端，平台服务端零接触。",
      item2: "企业数据独立隔离：不同企业之间的数据通道严格切断，互不影响。",
      item3: "全流程日志防篡改：所有操作自动留痕存证，满足企业安全审计要求。"
    },
    partner: {
      title: "共同建设 AI Workforce 代理生态",
      desc: "面向全国招募 IT 服务商、咨询团队与代理伙伴。提供高额首次推荐分成 + 长尾服务永续收益，账目透明按月结算。一次签约，长期共享 AI 红利。",
      btn: "立即申请代理加盟"
    },
    faq: {
      title: "常见问题解答",
      q1: "Q: univerOS 能给企业带来什么体验？",
      a1: "A: univerOS 给你更好的 AI Workforce 体验，安全、交付！市面上的 AI 工具只给你给建议、写草稿；univerOS 依靠 AI 数字团队自主协作与自动修复，帮你把软件改好、把内容做好、把情报抓好，直接交卷。",
      q2: "Q: 使用 univerOS 需要懂技术或大模型知识吗？",
      a2: "A: 完全不需要！univerOS 支持全托管模式，你不需要申请 API Key 或学习复杂的提示词。像平时点外卖一样输入你的需求，AI 团队就会自动去干活。",
      q3: "Q: 我们的数据和密码安全吗？",
      a3: "A: 非常安全！你的账号密码保存在你本地电脑的“密码保险箱”中，平台不上云接触；重要的高风险修改必须你亲自确认才生效，平台后台无法越权操作。",
      q4: "Q: 适合哪些规模的企业使用？",
      a4: "A: 各种规模都适合！1-3 人的创业工作室可以省下招人成本，10-200 人的中小企业可以快速扩大产能，传统非技术企业可以开箱即用全托管，大型集团可以私有化部署。",
      q5: "Q: 目前开通了哪些业务服务？",
      a5: "A: 当前已开放三大核心服务：① 软件研发：自动写代码和做测试；② 内容工厂：批量做短视频、配音和发布；③ 摄取分发：自动抓取热点和提炼知识（邀请制测试中）。"
    },
    pricing: {
      header: {
        tag: "灵活透明的付费模式",
        title: "套餐席位与计费说明",
        desc: "采用“基础席位费 + 实际消耗”的透明模式，支持使用自己的大模型账号（BYOK），也支持直接订阅托管算力。"
      },
      cards: {
        rd: {
          title: "软件研发席位",
          price: "内测特惠 / 联系客服",
          quota: "1,000 次任务/月",
          overagePrice: "超出部分按实际调用次数透明结算",
          f1: "AI 团队协同研发",
          f2: "独立隔离安全测试",
          f3: "自动诊断与修复报错",
          f4: "成果确认后再上线",
          f5: "企业数据独立保护",
          btn: "开通软件研发"
        },
        gen: {
          title: "内容工厂席位",
          price: "内测特惠 / 联系客服",
          quota: "800 次任务/月",
          overagePrice: "超出部分按实际调用次数透明结算",
          f1: "短视频脚本智能生成",
          f2: "拟真实人发音配音",
          f3: "画面风格一致性把控",
          f4: "营销素材批量剪辑交付",
          f5: "全平台一键发布",
          btn: "开通内容工厂"
        },
        ing: {
          title: "摄取分发专线",
          price: "专线部署 / 定制报价",
          quota: "根据企业实际需求评估定制",
          overagePrice: "按需灵活定制",
          f1: "语音智能识别转写",
          f2: "AI 智能提炼与改写",
          f3: "自动同步到企业账号矩阵",
          f4: "企业本地物理节点部署",
          f5: "24 小时无人值守运行",
          btn: "联系客户经理"
        }
      },
      policy: {
        title: "计费说明与服务承诺",
        item1: "1. 计费起点：任务成功提交并开始由 AI 团队处理时计算额度。",
        item2: "2. 交付保障：AI 团队结合自动纠错机制，全力保障任务的高质量交付。",
        item3: "3. 密码安全：univerOS 不会保管你的明文密码，大模型账号保存在你本地电脑。"
      }
    }
  },
  en: {
    common: {
      brand: "univerOS",
      brandDesc: "Enterprise Multi-Function Delivery System. A better AI Workforce experience — secure, delivered! Software R&D, Content Factory, and Intelligence Intake."
    },
    nav: {
      features: "Capabilities",
      customers: "Enterprise Scale",
      pricing: "Pricing",
      security: "Enterprise Security",
      partner: "Partners",
      contact: "Contact",
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
      tag: "univerOS",
      badge: "Smart · Secure · Delivered",
      title: "Enterprise AI Workforce",
      titleHighlight: "Multi-Function Delivery System",
      desc: "univerOS AI digital teams collaborate autonomously, from solo studios to large conglomerates — reliable delivery, secure audit trails, giving you a better AI Workforce experience!",
      btnApply: "Partner Application",
      btnPricing: "Get Started",
      tip: "* Bring your own LLM keys (BYOK) or use our fully managed turnkey compute."
    },
    stats: {
      title: "Enterprise AI Workforce In Action",
      subtitle: "Building Autonomous Agent Swarms to Break Productivity Bottlenecks",
      chip1: "Brain Dispatch",
      chip2: "Agent Squads",
      chip3: "Audit & Healing",
      num1: "1,500K+",
      label1: "AI Tasks Dispatched",
      num2: "+2.4M",
      label2: "Code & Multimodal Delivered",
      num3: "< 15s",
      label3: "Auto-Fix Response Time"
    },
    systemFeatures: {
      title: "univerOS System Features",
      desc: "Enterprise infrastructure integrating multi-agent swarm collaboration, credentials isolation, and self-healing"
    },
    architecture: {
      title: "univerOS Five Core System Architectures",
      desc: "Production-grade AI Workforce architecture built around intent dispatch, skill execution, and self-healing",
      brain: "Brain Dispatch Center",
      brainDesc: "Global business intent analysis, task decomposition, and NATS isolated relay.",
      agent: "Agent Digital Squads",
      agentDesc: "Multi-functional Agent Swarm teams operating synchronously.",
      skills: "Skills Library",
      skillsDesc: "Modular SOP skill packs injected as dynamic execution contexts.",
      memory: "Memory Context",
      memoryDesc: "Vector knowledge bases and long/short-term context state tracking.",
      healing: "Self-Healing Loop",
      healingDesc: "MAPE-K self-healing loop and V1-V4 blackbox matrix auto-fixing anomalies."
    },
    features: {
      title: "Three Core AI Production Lines",
      desc: "No code or prompt skills needed. AI teams handle R&D, content creation, and global intelligence intake, delivering ready-to-use outcomes.",
      rd: {
        title: "Software R&D",
        desc: "Covers AI websites, mini-programs, H5 landing pages, OA, CRM, ERP, and finance software. One-stop AI design, development, testing, and delivery workflow.",
        tag1: "Website/Mini-App/H5/OA/CRM/ERP",
        tag2: "AI Design/Dev/Test/Deploy Flow",
        tag3: "Isolated Review Before Live"
      },
      gen: {
        title: "Content Factory",
        desc: "Powers AI marketing copy, novel adaptation, image tagging, short video production, and multimodal batch generation. Turnkey pipeline delivering ready-to-use assets.",
        tag1: "Copywriting/Adaptation/Videos",
        tag2: "Image Tagging & Multimodal",
        tag3: "Batch Multi-Channel Delivery"
      },
      ing: {
        title: "Intelligence Intake",
        desc: "Features cross-timezone multi-node sync, social media monitoring, industry experience intake, knowledge base building, video/audio extraction, content syndication, and podcast streaming 24/7.",
        tag1: "Multi-Node Sync & Social Monitor",
        tag2: "Audio/Video & Knowledge Base",
        tag3: "Syndication & Podcast Stream"
      }
    },
    customers: {
      title: "univerOS Solutions for Every Business Scale",
      desc: "Whether you are a solo entrepreneur or a thousand-employee corporation, univerOS offers turnkey, secure, and compliant deployment strategies.",
      techWallTitle: "SEAMLESS INTEGRATION WITH GLOBAL TECH ECOSYSTEM & CLOUD INFRASTRUCTURE",
      opc: {
        badge: "1-3 Team / Solo Studio",
        title: "Solo Entrepreneurs & Micro Studios",
        desc: "One person as a full company. Let AI take over tedious R&D, content, and operation tasks so you can focus on core strategy and revenue."
      },
      sme: {
        badge: "10-200 Staff / High Growth",
        title: "High-Growth SMEs",
        desc: "Double output capacity without doubling headcount. Solves 'great product but weak marketing' pain points with clear, measurable ROI."
      },
      trad: {
        badge: "Zero Tech Barrier / Fully Managed",
        title: "Traditional & Non-Tech Enterprises",
        desc: "Designed for non-tech industries (dining, manufacturing, traditional services). No API keys or technical skills needed — turnkey subscription managed by us."
      },
      enterprise: {
        badge: "Private Deploy / Top Security",
        title: "Large Enterprises & Conglomerates",
        desc: "Built for mission-critical industries (finance, healthcare, manufacturing). Fully isolated local deployment keeps credentials and data on-premise."
      }
    },
    trust: {
      title: "Built-In Enterprise Security & Auto-Healing",
      desc: "No need to worry about AI running wild. Built-in triple safeguards protect your business boundaries and operational continuity.",
      t1: {
        title: "Multi-Channel Approval",
        desc: "Distinguishes routine tasks from high-risk actions. Routine work runs automatically; critical actions prompt for your explicit approval.",
        badge: "Smart Approval Control"
      },
      t2: {
        title: "Optimistic Contract Mechanism",
        desc: "Monitors execution 24/7. When an anomaly occurs, AI teams diagnose, fix, and re-test automatically until verified.",
        badge: "Automatic Error Fixing"
      },
      t3: {
        title: "End-to-End Traceability",
        desc: "Every command, step, and approval generates a tamper-proof log. Fully transparent, exportable anytime to satisfy compliance.",
        badge: "Compliant Audit Trail"
      }
    },
    security: {
      title: "Your Data. Always Under Your Control.",
      desc: "Architected for data sovereignty — credentials live locally, data is isolated, and our platform never touches your plaintext assets.",
      cup: {
        title: "Local Password Vault (CUP Protocol)",
        desc: "LLM API keys and passwords live in your local computer's vault. Only task plans pass through the cloud."
      },
      ledger: {
        title: "Critical Approvals Under Your Control",
        desc: "High-risk actions require your explicit approval in the console. Platform admin backends have zero control widgets."
      },
      boxTitle: "// univerOS Security Commitment",
      item1: "Local Password Encryption: Sensitive credentials stay in your local client vault.",
      item2: "Enterprise Data Isolation: Cross-company data channels are strictly partitioned.",
      item3: "Tamper-Proof Audit Logging: All operations leave verifiable audit records."
    },
    partner: {
      title: "Build the Agent Swarm Ecosystem Together",
      desc: "Recruiting IT integrators, digital consultants, and technical service providers nationwide. Enjoy high initial referral commissions plus perpetual compute sharing. Settled monthly via Reality Ledger transparency.",
      btn: "Apply for Partner Status Now"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Q: What experience does univerOS bring to enterprises?",
      a1: "A: univerOS gives you a better AI Workforce experience. Secure, delivered! Traditional AI tools give suggestions; univerOS leverages Agent Swarms and self-healing loops to execute code, multimodal content, and intelligence intake directly.",
      q2: "Q: Do I need to bring my own compute?",
      a2: "A: Supports two modes: ① BYOK: Connect your own DeepSeek, OpenAI, Qwen keys for full cost control; ② Platform-managed compute: Non-tech teams subscribe to credits for instant out-of-the-box usage.",
      q3: "Q: Are sensitive credentials and data secure?",
      a3: "A: Completely. CUP protocol locks keys locally with zero cloud plaintext contact. Business L3 actions require explicit Tenant UI approval with platform zero overreach.",
      q4: "Q: What enterprise scales are supported?",
      a4: "A: Full scale coverage! From 1-3 person OPCs, 10-200 person SMEs, non-tech traditional industries, up to Fortune 500 private enterprise on-premise deployments.",
      q5: "Q: What production lines are currently available?",
      a5: "A: Three core lines: ① Software R&D: Full pipeline from requirement to PR code submission; ② Content Factory: Multimodal batch production and distribution; ③ Intelligence Intake: Automated multi-source intake and transcription (gray release)."
    },
    pricing: {
      header: {
        tag: "Dual-Track Elastic Financial Model",
        title: "Seat Subscription & Overage Billing",
        desc: "univerOS implements a dual-track model consisting of flat Tool Seat Fees and consumption-based overage fees, supporting BYOK or managed compute."
      },
      cards: {
        rd: {
          title: "Software R&D Seat",
          price: "Trial Special / Contact Sales",
          quota: "1,000 workflows / month",
          overagePrice: "Settled via monthly invoice during trial operation",
          f1: "Agent Swarm Collaborative R&D",
          f2: "Git Shadow Branch Isolation",
          f3: "V1-V4 Self-Healing Test Matrix",
          f4: "Submit PR for Manual Merge",
          f5: "Tenant DID Cryptographic Isolation",
          btn: "Subscribe to R&D Seat"
        },
        gen: {
          title: "Content Factory Seat",
          price: "Trial Special / Contact Sales",
          quota: "800 workflows / month",
          overagePrice: "Settled via monthly invoice during trial operation",
          f1: "Storyboard Script Planner",
          f2: "Local FishTTS Voice Synthesis",
          f3: "Visual & Semantic Consistency Audit",
          f4: "Multimodal Video Batch Delivery",
          f5: "One-Click Multi-Channel Distribution",
          btn: "Subscribe to Content Factory Seat"
        },
        ing: {
          title: "Intelligence Intake Line",
          price: "Private Deploy / Quote Request",
          quota: "Customized by Node Topology",
          overagePrice: "Fully Customized",
          f1: "Whisper Dual-Track Audio Transcription",
          f2: "LLM-based Content Rewriting",
          f3: "One-click Syndication to Channels",
          f4: "On-premise Node Deployment",
          f5: "Unattended Four-Stage Pipeline",
          btn: "Contact Account Manager"
        }
      },
      policy: {
        title: "Billing & Service Commitment",
        item1: "1. Billing Trigger: Quota is deducted once a task is submitted and AI teams start processing.",
        item2: "2. Quality Guarantee: AI teams combined with auto-healing ensure high-quality execution.",
        item3: "3. Credential Security: univerOS never hosts plaintext passwords; keys live on your local computer."
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
