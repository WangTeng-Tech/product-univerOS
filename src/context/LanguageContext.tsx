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
      brandDesc: "企业级多职能交付系统。univerOS 给你更好的 AI Workforce 体验，安全、交付！覆盖软件研发、内容工厂与摄取分发，安全合规，自愈可控。"
    },
    nav: {
      features: "产品能力",
      customers: "适用场景",
      pricing: "套餐计费",
      security: "企业级安全",
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
      title: "univerOS 给你更好的",
      titleHighlight: "AI Workforce 体验，安全、交付！",
      desc: "Agent Swarm 自主协作，MAPE-K 自愈闭环，Reality Ledger 全链路存证。从超级个体到大型集团，安全可控，严肃交付成果。",
      btnApply: "代理申请",
      btnPricing: "马上体验",
      tip: "* 支持自备 API 密钥接入（BYOK）或订阅平台托管算力，两种模式均可。"
    },
    features: {
      title: "Agent Swarm 三大核心产品产线",
      desc: "基于严肃生产验证的 Agent 协作团队，直接交付可用的研发代码、多模态营销内容与全网情报萃取成果。",
      rd: {
        title: "软件研发",
        desc: "Agent Swarm 自主完成需求分析、架构规划、代码生成与单元测试。Git 影子沙箱隔离执行，V1-V4 自愈黑盒验证，PR 自动提交等待合并，写操作绝不在你不知情时发生。",
        tag1: "Agent Swarm 协作",
        tag2: "V1-V4 自愈黑盒",
        tag3: "Git 影子沙箱"
      },
      gen: {
        title: "内容工厂",
        desc: "多模态 Agent 全链路协作：短视频脚本分镜、拟真声音合成、视觉素材设计与多平台批量分发一键完成。语义一致性审计保证交付质量，输出真实可用的营销结果。",
        tag1: "多模态批量生产",
        tag2: "视觉与音效一致性",
        tag3: "全平台一键分发"
      },
      ing: {
        title: "摄取分发",
        desc: "全网情报与多源内容自动化采集、双轨转录、大模型结构化改写与多渠道分发。四阶段 Agent 流水线全程无人值守推演，为企业持续供给知识与营销原料。（* 灰度开放中，申请准入）",
        tag1: "多源自动化采集",
        tag2: "AI 结构化改写",
        tag3: "四阶段无人流转"
      }
    },
    customers: {
      title: "全规模覆盖的企业级交付方案",
      desc: "无论是超级个体还是世界 500 强，univerOS 提供差异化的部署与服务策略，应对企业级自动化诉求。",
      opc: {
        badge: "1-3 人团队 / 早期验证",
        title: "超级个体企业 (OPC)",
        desc: "精简团队，强烈需要 AI 替代研发、营销与运营多职能工作。通过高密度 Agent 自动化释放创始人生产力，实现极速迭代。"
      },
      sme: {
        badge: "10-200 人 / 核心腰部",
        title: "高成长型中小企业",
        desc: "无需显著增加员工编制即可实现产能规模化扩大。解决“产品持续迭代，但市场表达与获客跟不上”的痛点，提供清晰可衡量的 ROI。"
      },
      trad: {
        badge: "零技术门槛 / 托管算力",
        title: "非技术垂直行业企业",
        desc: "面向工业、传统制造、餐饮等零技术基础企业。通过“托管算力模式”零门槛接入，开箱即用订阅按次/按月套餐，由平台托管推理通道。"
      },
      enterprise: {
        badge: "专有部署 / 极致安全",
        title: "大型行业企业与国央企集团",
        desc: "面向金融、医疗、工业等重度行业。完全物理隔离部署，NATS 跨网调度，CUP 凭证自持零离场，Append-only 存证落链，确保核心链条无人化刚性运转。"
      }
    },
    trust: {
      title: "Agent Swarm 内置企业级安全与自愈保障",
      desc: "每一个自主执行动作，都有三套企业级机制在底层守护你的业务边界与生产连续性。",
      t1: {
        title: "L1-L3 动态风险仲裁",
        desc: "按风险等级自动分级。低风险自主执行，中风险推送 60 分钟审批窗口，高风险强制阻塞等待授权。写操作绝不在你不知情时发生，Agent 有能力，更有边界。",
        badge: "L1-L3 风险仲裁"
      },
      t2: {
        title: "MAPE-K 自愈黑盒",
        desc: "实时监控节点健康。检测到异常自动触发 诊断→修复→验证 闭环，V1-V4 四级黑盒测试确保修复结果通过完整验证后再合并。Agent 团队自动修复，不打扰你。",
        badge: "V1-V4 自愈闭环"
      },
      t3: {
        title: "Reality Ledger 全链路存证",
        desc: "任务指令、状态流转、审批记录与账单全部生成哈希链落库，Append-only 不可篡改。随时导出，满足企业安全合规“Audit-Ready”审计要求。",
        badge: "Append-only 存证"
      }
    },
    security: {
      title: "企业级安全，保障数据主权",
      desc: "univerOS 从架构层保障企业数字主权。凭证物理隔离，租户隔离，平台零接触明文。",
      cup: {
        title: "API 密钥本地物理隔离（CUP 协议）",
        desc: "大模型 Key 与 Git 凭证死锁在本地安全区，平台云端零接触明文，绝对不离场。"
      },
      ledger: {
        title: "业务审批主权归属租户",
        desc: "业务 L3 高风险操作仅租户 Tenant UI 可显式授权，平台后台物理剥离审批控件，杜绝越权。"
      },
      boxTitle: "// 钧曦 AI-OS 安全边界宣言",
      item1: "凭证物理隔离（CUP 协议）：API 密钥与部署凭证存储在本地，平台侧零接触明文。",
      item2: "租户命名空间阻断：基于 DID 的 NATS 物理隔离，严格切断跨企业数据传输。",
      item3: "Append-only 审计链：Reality Ledger 哈希链不可逆写入，满足企业安全合规 Audit-Ready 审计要求。"
    },
    partner: {
      title: "共同建设 Agent Swarm 代理生态",
      desc: "全国范围招募 IT 集成商、数字化转型咨询团队与技术服务商。提供首次订阅高额分润 + 长尾算力永续分成，基于 Reality Ledger 账本按月透明结算。一次签约，长期收益。",
      btn: "立即申请代理商资格"
    },
    faq: {
      title: "常见问题解答",
      q1: "Q: univerOS 能给企业带来什么体验？",
      a1: "A: univerOS 给你更好的 AI Workforce 体验，安全、交付！传统 AI 工具只给建议，univerOS 依靠 Agent Swarm 自主协作与自愈机制，安全地完成代码编写、内容批量生产与情报摄取分发，直接交付生产结果。",
      q2: "Q: 算力需要自己准备吗？",
      a2: "A: 支持两种灵活模式：① BYOK（自备 API 密钥）：接入 DeepSeek、OpenAI、Qwen 等，成本完全自控；② 平台托管算力：非技术企业订阅平台积分即可开箱即用，无需管理 API 账号。",
      q3: "Q: 我们的敏感凭证和数据安全吗？",
      a3: "A: 绝对安全。CUP 凭证隔离协议保障密钥死锁在本地，平台云端零接触明文；业务 L3 高风险操作必须经由租户（Tenant UI）显式授权，平台后台无权介入，数据完全在你的掌控下。",
      q4: "Q: univerOS 覆盖哪些规模的企业？",
      a4: "A: 全规模覆盖！从 1-3 人超级个体 (OPC) 释放创始人生产力、到 10-200 人高成长中小企业扩大产能 ROI、非技术传统行业托管零门槛接入，再到大型国央企与 500 强专有部署物理隔离，都有匹配的交付方案。",
      q5: "Q: 目前对外开放哪些产品产线？",
      a5: "A: 当前开放三大核心产线：① 软件研发：从需求到 PR 代码提交的全流程自动化；② 内容工厂：多模态内容批量生产与全平台分发；③ 摄取分发：全网情报与知识自动化采集与转写（灰度邀请中）。"
    },
    pricing: {
      header: {
        tag: "双轨弹性财务模式",
        title: "产线席位订阅与计费细则",
        desc: "univerOS 采用“工具席位费 + 运行消耗费”的双轨弹性结算机制，支持自备算力（BYOK）或订阅平台托管算力。"
      },
      cards: {
        rd: {
          title: "软件研发席位",
          price: "内测特惠 / 联系销售",
          quota: "1,000 次工作流调用/月",
          overagePrice: "试运营期间根据人工核账并按次结算",
          f1: "Agent Swarm 协同研发",
          f2: "Git 影子工作区 (Shadow Branch)",
          f3: "V1-V4 级黑盒测试验证自愈",
          f4: "提交 Pull Request 目标等待合并",
          f5: "DID 租户身份逻辑隔离",
          btn: "开通软件研发席位"
        },
        gen: {
          title: "内容工厂席位",
          price: "内测特惠 / 联系销售",
          quota: "800 次工作流调用/月",
          overagePrice: "试运营期间根据人工核账并按次结算",
          f1: "短视频分镜脚本智能规划",
          f2: "FishTTS 本地化拟真声音合成",
          f3: "语义一致性一致性审计",
          f4: "多模态素材剪辑与批量交付",
          f5: "全平台一键发布分发",
          btn: "开通内容工厂席位"
        },
        ing: {
          title: "摄取分发专线",
          price: "专线部署 / 评估报价",
          quota: "根据物理节点部署协商设定",
          overagePrice: "按需定制",
          f1: "Whisper 音轨双轨采集与结构化转写",
          f2: "大模型智能结构化重写",
          f3: "一键同步至企业社交渠道矩阵",
          f4: "企业本地物理节点独占部署",
          f5: "四阶段无人推演流转",
          btn: "联系客户经理"
        }
      },
      policy: {
        title: "计费扣减规则与免责声明",
        item1: "1. 计费起点认定：计费扣减以 Brain 服务接收到请求并成功写入 NATS 任务队列的主题为准。",
        item2: "2. 交付质量承诺：Agent Swarm 配合 MAPE-K 自愈黑盒确保任务的高质量推演与刚性执行。",
        item3: "3. 算力密钥隔离：univerOS 绝不托管任何明文 API Key。您的 LLM / 视觉多模态密钥仅保存在本地客户端物理存储中。"
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
      title: "univerOS Gives You a Better",
      titleHighlight: "AI Workforce Experience. Secure, Delivered!",
      desc: "Autonomous Agent Swarm collaboration, MAPE-K self-healing loop, and Reality Ledger full-chain audit trail. From OPCs to Fortune 500 enterprises — secure, governed, and real delivery.",
      btnApply: "Partner Application",
      btnPricing: "Get Started",
      tip: "* Supports BYOK (bring your own API key) or platform-managed compute — your choice."
    },
    features: {
      title: "Agent Swarm Core Production Lines",
      desc: "Production-validated Agent Swarm teams delivering usable R&D code, multimodal marketing content, and global intelligence intake.",
      rd: {
        title: "Software R&D",
        desc: "Agent Swarm autonomously completes requirement analysis, architecture design, code generation, and unit testing. Git shadow sandbox execution, V1-V4 self-healing validation, auto PR submission — no code changes happen without your awareness.",
        tag1: "Agent Swarm Collab",
        tag2: "V1-V4 Self-Healing",
        tag3: "Git Shadow Sandbox"
      },
      gen: {
        title: "Content Factory",
        desc: "Multimodal Agent end-to-end collaboration: video storyboard planning, realistic voice synthesis, visual asset design, and multi-channel batch distribution in one run. Semantic consistency audit ensures real marketing deliverables.",
        tag1: "Multimodal Production",
        tag2: "Visual & Voice Audit",
        tag3: "Multi-Channel Publish"
      },
      ing: {
        title: "Intelligence Intake",
        desc: "Automated multi-source intelligence intake, dual-track transcription, LLM rewriting, and multi-channel distribution. Unattended four-stage Agent pipeline continuously feeding knowledge assets. (* Gray-release invite-only)",
        tag1: "Multi-Source Intake",
        tag2: "AI Structured Rewrite",
        tag3: "Four-Stage Pipeline"
      }
    },
    customers: {
      title: "Delivery Solutions Across Every Scale",
      desc: "From OPCs to global conglomerates, univerOS provides tailored deployment strategies to fulfill enterprise automation needs.",
      opc: {
        badge: "1-3 Team / Seed Growth",
        title: "One-Person Company (OPC)",
        desc: "Lean teams using AI Workforce to replace R&D, marketing, and operations. High-density Agent automation liberates founder bandwidth for rapid iteration."
      },
      sme: {
        badge: "10-200 Staff / Core Market",
        title: "High-Growth SMEs",
        desc: "Scale output capacity without expanding headcount. Directly solves the pain point of 'fast product updates but lagging marketing and acquisition' with measurable ROI."
      },
      trad: {
        badge: "Zero Tech Barrier / Managed",
        title: "Non-Tech Vertical Enterprises",
        desc: "Designed for traditional industries (manufacturing, dining, etc.) with zero LLM/API background. Turnkey managed compute subscription for instant automation."
      },
      enterprise: {
        badge: "Private On-Prem / Ultimate Security",
        title: "Large Enterprises & Conglomerates",
        desc: "Built for mission-critical industries (finance, healthcare, mining). Fully isolated deployment, cross-net NATS dispatch, CUP local credential vaults, and Append-only audit logging."
      }
    },
    trust: {
      title: "Agent Swarm Built-in Enterprise Safety & Self-Healing",
      desc: "Every autonomous execution step is safeguarded by three enterprise-grade security and self-healing mechanisms at the core.",
      t1: {
        title: "L1-L3 Dynamic Risk Arbitration",
        desc: "Automatic risk-level classification. Low-risk executes silently, medium-risk pushes a 60-min approval window, high-risk hard-blocks for explicit authorization. Write actions never happen without your knowledge.",
        badge: "L1-L3 Arbitration"
      },
      t2: {
        title: "MAPE-K Self-Healing Loop",
        desc: "Real-time node monitoring. Anomalies automatically trigger diagnose → fix → verify loops. V1-V4 stage blackbox matrix ensures fixes pass full validation before any merge. Agents fix themselves silently.",
        badge: "V1-V4 Self-Healing"
      },
      t3: {
        title: "Reality Ledger — Full Audit Trail",
        desc: "Task dispatches, state transitions, approval logs, and billing entries generate hash-chained immutable records. Append-only, tamper-proof, fully Audit-Ready for enterprise compliance.",
        badge: "Append-Only Audit"
      }
    },
    security: {
      title: "Enterprise-Grade Data Sovereignty",
      desc: "Architected for data sovereignty — credentials live locally, tenant namespaces are isolated, platform has zero contact with plaintext.",
      cup: {
        title: "API Keys Physical Local Isolation (CUP Protocol)",
        desc: "LLM API keys and deployment credentials live strictly in your local client vault. Zero plaintext contact on cloud servers."
      },
      ledger: {
        title: "Tenant-Owned Approval Sovereignty",
        desc: "Business L3 high-risk actions can only be authorized in the Tenant UI. The platform admin dashboard has no control widgets, eliminating overreach."
      },
      boxTitle: "// univerOS Security Boundary",
      item1: "Credential Physical Isolation (CUP Protocol): API keys and tokens are stored locally — zero plaintext contact on platform servers.",
      item2: "Tenant Namespace Partitioning: DID-based NATS namespace physical isolation strictly prevents cross-tenant data leaks.",
      item3: "Append-Only Audit Chain: Reality Ledger hash records are irreversibly written to satisfy Audit-Ready compliance requirements."
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
        title: "Billing Policy & Disclaimer",
        item1: "1. Billing Start Trigger: Consumption is deducted once a task is written into the NATS queue.",
        item2: "2. Quality Commitment: Agent Swarms combined with MAPE-K self-healing ensure high-quality execution.",
        item3: "3. Credential Sovereignty: univerOS never hosts plaintext API keys. Keys remain in local client vaults."
      }
    }
  }
};tes, high-risk actions require your explicit approval, while low-risk actions run automatically. You set the boundary; the system handles the rest.",
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
