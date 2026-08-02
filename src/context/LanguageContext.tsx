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
      brandDesc: "企业级 SOP Agent 工作流执行系统。自备大模型算力，提供物理隔离的高效流程闭环自愈能力。"
    },
    nav: {
      features: "产线中心",
      pricing: "套餐计费",
      security: "安全白皮书",
      partner: "代理生态",
      login: "代理商登录",
      apply: "申请试用"
    },
    footer: {
      terms: "使用条款 (Terms)",
      privacy: "隐私协议 (Privacy)",
      manual: "操作指南 (Manual)",
      changelog: "更新日志 (Changelog)",
      github: "GitHub 源码",
      sales: "联系我们 (Sales)",
      partner: "合作伙伴 (Partner)",
      copyright: "©2026 univerOS • Audit-ready execution records"
    },
    hero: {
      tag: "企业级经验操作系统",
      title: "企业的",
      titleHighlight: "经验操作系统",
      desc: "每一次 SOP 执行，都在沉淀你的行业 Know-How。经验不离场，壁垒自生长。自备算力，物理隔离，零留痕交付存证结果。",
      btnApply: "代理申请",
      btnPricing: "马上体验",
      tip: "* 提示：大模型 API 密钥由客户自备并在本地客户端加载，云端零留痕。"
    },
    features: {
      title: "univerOS 三大核心经验飞轮",
      desc: "行业情报自动抓取、多职能 SOP 自动执行与私有 Know-How 资产持续沉淀。",
      rd: {
        title: "① 全网情报采集 (yz-IB)",
        desc: "把行业动态、竞品信号、内容素材与情报数据自动采集进来，形成企业定制化前沿语料与决策支撑。",
        tag1: "多源自动抓取",
        tag2: "竞品信号分析",
        tag3: "结构化提炼"
      },
      gen: {
        title: "② SOP 自动执行 (yz-RD / yz-CF)",
        desc: "软件研发、内容工厂、运营分发全流程自动化闭环交付，输出经过 Reality Ledger 防篡改审计的真实成果。",
        tag1: "Shadow Worktree",
        tag2: "多模态内容生成",
        tag3: "V1-V4 自愈验证"
      },
      ing: {
        title: "③ 经验持续沉淀 (Heart × Memory)",
        desc: "每次 SOP 执行经验自动由 AI 提炼总结，永久存入企业私有向量知识库，随运行次数递增自生长专有壁垒。",
        tag1: "Know-How 提炼",
        tag2: "LanceDB 私有存储",
        tag3: "经验壁垒自生长"
      }
    },
    security: {
      title: "凭证主权隔离与可溯审计",
      desc: "为了保障企业客户的核心数字资产安全，univerOS 将凭证存储与云端控制进行双轨隔离，并在底层内置审计机制。",
      cup: {
        title: "平台侧不接触明文凭证 (CUP 协议)",
        desc: "大模型 API 密钥、Git 部署证书锁死在本地客户端安全隔离区。云端控制台只中继规划指令，运行期数据内存装载即时销毁。"
      },
      ledger: {
        title: "支持就绪审计的执行记录 (Reality Ledger)",
        desc: "每一次任务的指令派发、状态扭转及计费账单，均计算哈希链落库，为企业安全审计提供“Audit-Ready”的可追溯事实证据。"
      },
      boxTitle: "// 安全合规边界",
      item1: "本地LanceDB向量数据库: 任务经验沉淀（Lesson）全部保存在租户本地隔离的嵌入式向量库中，不上传平台服务器。",
      item2: "双轨成本监控限制: Token CFO 运行于本地客户端对 API 消耗执行配额封顶熔断，杜绝产生越界账单风险。",
      item3: "NATS 命名空间阻断: 云端采用 DID 逻辑租户隔离，严格切断不同客户之间的任务传输。"
    },
    partner: {
      title: "加入univerOS 合作伙伴生态",
      desc: "我们正在招募 IT 系统集成商、数字化咨询顾问与技术方案团队，提供最高 20% 的推荐席位与超量流量消费阶梯分润。基于账单透明哈希线下按月结算。",
      btn: "申请成为代理商"
    },
    faq: {
      title: "常见问题解答",
      q1: "Q：univerOS 是如何收取费用和统计流量的？",
      a1: "A：univerOS 实行“席位订阅费 + 超量调用按次计费”的双轨模式。平台仅根据任务写入 NATS proposed 主题 of 次数扣减额度，不在平台侧垫付或销售 Token。结果自负（类似运营商模式）。",
      q2: "Q：大模型 API Key 必须自备吗？数据会被平台收集吗？",
      a2: "A：是的，企业必须自备 LLM / 视觉多模态 API 凭证。univerOS 在设计上秉持凭证主权，平台侧不接触任何明文密钥，模型调用在本地内存完成，绝不在云端留存明文凭证。",
      q3: "Q：RD 产线的 V1-V4 测试自愈矩阵是如何工作的？",
      a3: "A：当任务触发代码变更后，系统自动在本地影子分支（Shadow Worktree）触发编译（V1）、进程健康检测（V2）、日志错误扫描（V3）、接口测试（V4）共四级黑盒测试。测试通过后才提交至目标流程等待确认合并。"
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
      brandDesc: "Enterprise-grade SOP Agent workflow execution system. Bring your own LLM keys, physical isolation with self-healing flow execution."
    },
    nav: {
      features: "Products",
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
      copyright: "©2026 univerOS • Audit-ready execution records"
    },
    hero: {
      tag: "Enterprise Experience Operating System",
      title: "Enterprise Experience",
      titleHighlight: "Operating System",
      desc: "Every SOP execution distills your industry Know-How. Experience stays in-house; domain barriers grow automatically. Bring your own compute, zero cloud footprints.",
      btnApply: "Partner Application",
      btnPricing: "Try Now",
      tip: "* Note: LLM API keys are loaded locally inside client memory; zero records remain on cloud servers."
    },
    features: {
      title: "Three Core Experience Flywheels",
      desc: "Automated intelligence intake, multi-role SOP execution, and private Know-How distillation.",
      rd: {
        title: "① Global Intelligence Intake (yz-IB)",
        desc: "Automatically ingest industry trends, competitor signals, and content assets to power enterprise decision-making and customized knowledge.",
        tag1: "Multi-Source Intake",
        tag2: "Signal Analysis",
        tag3: "Structured Distillation"
      },
      gen: {
        title: "② Automated SOP Execution (yz-RD / yz-CF)",
        desc: "Full-stack automated delivery across software R&D, content factory, and operations, producing tamper-proof execution outcomes audited by Reality Ledger.",
        tag1: "Shadow Worktree",
        tag2: "Multimodal Generation",
        tag3: "V1-V4 Self-Healing"
      },
      ing: {
        title: "③ Continuous Experience Distillation (Heart × Memory)",
        desc: "Every execution lesson is automatically extracted and stored in your private LanceDB vector database, compounding your proprietary competitive advantage.",
        tag1: "Know-How Extraction",
        tag2: "LanceDB Private Store",
        tag3: "Compounding Barriers"
      }
    },
    security: {
      title: "Credential Isolation & Reality Ledger",
      desc: "To safeguard enterprise digital assets, univerOS isolates credential storage from cloud orchestrators and embeds cryptographic audit logs.",
      cup: {
        title: "Zero Cloud Contact with Plaintext Credentials (CUP)",
        desc: "API Keys and Git deploy keys are locked locally. The cloud console only relays plan nodes, and run-time data is wiped immediately from memory after execution."
      },
      ledger: {
        title: "Audit-Ready Execution Logs (Reality Ledger)",
        desc: "Every task node, state transition, and billing statement generates a hash chain record, providing tamper-proof evidence for corporate security audits."
      },
      boxTitle: "// Compliance Safeguards",
      item1: "Local LanceDB Vector Store: Historical task lessons are kept entirely in the tenant's local database, never uploaded to platform servers.",
      item2: "Dual-Track Cost Controller: Token CFO limits API usage locally with a hard cap to avoid runaway invoices.",
      item3: "NATS Namespace Isolation: Complete tenant partitioning based on DID keys to prevent cross-tenant message leakage."
    },
    partner: {
      title: "Join the univerOS Partner Ecosystem",
      desc: "Recruiting IT integrators, digital consultants, and technical teams. We offer up to 20% commission on subscriptions and excess workflows, paid monthly.",
      btn: "Apply to Be Partner"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Q: How does univerOS charge and track consumption?",
      a1: "A: univerOS utilizes a dual-track model consisting of a flat seat subscription fee and consumption-based workflow charges. We deduct balance based on tasks dispatched to the NATS queue, and we do not markup or resell Token bandwidth. Users are responsible for plan execution results (similar to telecom operators).",
      q2: "Q: Are LLM API keys mandatory? Will my data be collected by the platform?",
      a2: "A: Yes, tenants must provide their own LLM/multimodal API credentials. univerOS respects credential sovereignty: plain keys remain inside local client memory during execution, and no plain text credentials pass through or are saved on platform cloud servers.",
      q3: "Q: How does the V1-V4 self-healing test matrix work in the RD pipeline?",
      a3: "A: Once code modifications are planned, the system automatically spawns a local Shadow Worktree to run compilation checks (V1), process health checks (V2), logs scan (V3), and API interface tests (V4). It only submits a Pull Request for manual confirmation after all four levels of check pass."
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

