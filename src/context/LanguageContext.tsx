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
      brandDesc: "具备认知感知、动态审批受控、多职能协同自进化的企业级 AI Workforce 操作系统。覆盖软件研发、内容营销与全域认知感知。"
    },
    nav: {
      features: "业务产线",
      architecture: "系统架构",
      customers: "适用场景",
      pricing: "套餐定价",
      security: "安全治理",
      partner: "代理加盟",
      contact: "联系我们",
      login: "代理商后台",
      apply: "马上体验"
    },
    footer: {
      terms: "使用条款 (Terms)",
      privacy: "隐私协议 (Privacy)",
      manual: "操作指南 (Manual)",
      changelog: "更新日志 (Changelog)",
      github: "GitHub 源码",
      sales: "商务咨询 (Sales)",
      partner: "合作伙伴 (Partner)",
      copyright: "©2026 univerOS · 具备全域认知感知的企业级 AI Workforce 操作系统"
    },
    hero: {
      tag: "安全受控 (Governed) · 自主可控 (Sovereign) · 全域感知 (Cognitive)",
      badge: "智能 · 安全 · 交付",
      title: "具备认知感知、动态审批受控、多职能协同自进化的",
      titleHighlight: "企业级 AI Workforce 操作系统",
      desc: "融合软件研发、内容矩阵营销与全球全域认知感知。独创 Dual-Rail 动态审批门与自主可控基础设施，兼具 Agent Swarm 极致生产力与企业级安全合规。",
      btnApply: "代理加盟 / 私有部署",
      btnPricing: "马上体验 / 探索能力",
      tip: "* 支持自备 AI 大模型账号（BYOK 纯软件订阅），或直接选用平台全托管多模态算力。"
    },
    stats: {
      title: "大规模企业级 AI Workforce 落地推演",
      subtitle: "构建全自主 Agent Swarms 突破生产力瓶颈",
      chip1: "Brain 智能调度",
      chip2: "Dual-Rail 动态审批",
      chip3: "全域认知感知",
      num1: "120+",
      label1: "垂直 AI 营销站点矩阵",
      num2: "11+",
      label2: "全域社媒与开发生态感知",
      num3: "100%",
      label3: "高危操作拦截与可信回放"
    },
    features: {
      title: "三大核心 SOP 业务产线",
      desc: "无需懂代码或复杂提示词，AI 团队帮你搞定软件全流程开发、120 站点内容营销与全球情报感知，直接交付业务成果。",
      cf: {
        title: "内容工厂 (Content Factory)",
        desc: "一键联动全网 120+ 个已上线 AI 子站点，内置小红书、闲鱼、掘金及 X 跨平台爆款提示词模版，打通带 HMAC 签名的飞书卡片即时审批与全模态流水线交付。",
        tag1: "120+ 垂直 AI 站点营销矩阵",
        tag2: "小红书/闲鱼/掘金/X 爆款提示词",
        tag3: "飞书互动卡片即时审批放行"
      },
      ib: {
        title: "认知感知 (Cognitive Perception)",
        desc: "全天候感知小红书、抖音、快手、掘金、Reddit、X、YouTube、TikTok 及 GitHub 11+ 全域生态，集成多模态 ASR 逐字稿提纯与去 Google 化自主可控底座，持续反哺业务自进化。",
        tag1: "11+ 全域社媒与视频流媒体感知",
        tag2: "多模态音视频 ASR 逐字稿提纯",
        tag3: "企业私有对象存储与自托管工作流"
      },
      rd: {
        title: "软件研发 (AI App Builder)",
        desc: "覆盖 AI 官网、小程序、H5、OA、CRM、ERP 及财务系统。具备 AST CodeVision 架构审计、纯净沙箱环境与 Git PR / ZIP 双轨交付能力，安全隔离自愈。",
        tag1: "AST 依赖图谱与合规审计",
        tag2: "租户独立沙箱隔离构建",
        tag3: "Git 仓库自动 PR / ZIP 双轨交付"
      }
    },
    architectureTabs: {
      title: "univerOS 全景系统核心架构",
      desc: "按核心基础设施（Infra）、分布式算力网络（Worker）与全域生态协同底座，深度探索企业级技术底座",
      tabInfra: "Infra 核心引擎与安全",
      tabWorker: "Worker 算力与员工网络",
      tabEcosystem: "全域生态连接与协同底座",
      infra: {
        c1Title: "Shield 认证与防御网关",
        c1Desc: "统一外部请求入口、多租户 DID 鉴权、CUP 隐私协议、防重放签名与自适应抗限频熔断。",
        c2Title: "Dual-Rail 动态审批门",
        c2Desc: "人机双通道凭证分轨隔离、高危操作策略拦截（202 Pending）、请求快照入队与管理员受控回放。",
        c3Title: "Brain 调度中枢与多模型路由",
        c3Desc: "全局意图语义解析、任务状态机（FSM）规划分解与五层大模型目录动态弹性路由。",
        c4Title: "Heart 监控与 MAPE-K 自愈闭环",
        c4Desc: "全网节点心跳监测、黑盒探针探测、亚 15 秒故障自动诊断与业务流程自愈重规划。",
        c5Title: "Reality Ledger 银行级审计账本",
        c5Desc: "不可篡改事实账本，调用计费零渗透原则，每一笔 Token 消耗与分润绑定唯一哈希链，财务透明可审计。",
        c6Title: "PGVector 权威长短期记忆",
        c6Desc: "知识轨与技能轨持久化隔离存储，亚 50ms 向量检索与长短期业务上下文追踪。"
      },
      worker: {
        c1Title: "分布式多地域 Worker 网络",
        c1Desc: "去中心化无单点 Worker 拓扑，支持北美（海外流媒体）与亚太（跨境转录）等全球节点就近调度。",
        c2Title: "多职能 Agent Swarm 战队",
        c2Desc: "架构师、全栈研发、营销策划、舆情分析师等多角色数字员工自主推演与无缝闭环协作。",
        c3Title: "SOP 技能动态注入引擎",
        c3Desc: "模块化标准作业规约（SOP）按需上下文动态装配，零提示词门槛直接驱动复杂任务。",
        c4Title: "Skills / Prompt / Template 生态市场",
        c4Desc: "四维开放生态集市，支持官方预设与租户 UGC 资产审核上架，提供一键 Fork 消费与创作者分成。",
        c5Title: "沙箱物理隔离与构建自愈",
        c5Desc: "租户独立安全运行沙箱，纯净生产交付物打包，环境依赖自检与报错自动修复重试。",
        c6Title: "动态计算节点管理 (Client)",
        c6Desc: "支持企业自有本地计算节点快速接入并网，提供灵活的算力调度与安全鉴权。"
      },
      ecosystem: {
        c1Title: "S3 通用对象存储抽象层",
        c1Desc: "彻底切断单一海外云盘锁死，基于通用对象存储实现媒体大文件与交付资产的安全私有归档。",
        c2Title: "企业级自托管自动化工作流",
        c2Desc: "复杂业务跨系统编排、自定义 Webhook 触发与数据自动化流转中枢。",
        c3Title: "飞书多维表格与 IM 互动卡片",
        c3Desc: "飞书 Bitable 业务看板双向同步，带 HMAC-SHA256 签名的即时卡片审批，随时随地镜像操作。",
        c4Title: "11+ 全域社媒与开源感知连接器",
        c4Desc: "小红书、抖音、快手、掘金、Reddit、X、YouTube、TikTok、GitHub 全向情报感知。",
        c5Title: "多模态音视频 ASR 转录管道",
        c5Desc: "流式视频音频分离 + 高精度语音转文字 + 关键帧分析，提纯行业知识图谱与爆款因子。",
        c6Title: "多模态聚合推理网关",
        c6Desc: "屏蔽底层供应商差异，支持自备大模型凭证（BYOK）与全托管多模态算力池无缝弹性切换。"
      }
    },
    customers: {
      title: "univerOS 适用场景",
      desc: "无论你是 1-3 人的创业工作室，还是千人大型集团，univerOS 都提供开箱即用、安全合规的落地策略。",
      techWallTitle: "无缝兼容全球主流大模型与云原生基础设施",
      opc: {
        badge: "1-3 人 / 独立工作室",
        title: "超级个体与创业团队",
        desc: "用 AI 替代繁琐的软件开发、120 站点文案矩阵营销与日常杂活，释放创始人精力，专注核心业务与利润增长。"
      },
      sme: {
        badge: "10-200 人 / 快速增长企业",
        title: "高成长型中小企业",
        desc: "不大幅增加人力成本也能让业务产能翻倍。通过 11+ 全域感知与飞书卡片审批，实现高效生产与安全留痕。"
      },
      trad: {
        badge: "零技术门槛 / 平台全托管",
        title: "传统与非技术行业企业",
        desc: "无需懂 AI 概念或申请 Key，开箱即用订阅多模态算力，平台全托管完成行业知识库构建与内容分发。"
      },
      enterprise: {
        badge: "专有部署 / 极致安全",
        title: "大型集团与合规机构",
        desc: "提供 Dual-Rail 安全审批门私有化部署方案，数据留在企业内部，支持财务透明对账与定制知识图谱。"
      }
    },
    pricing: {
      header: {
        tag: "透明灵活的付费模式",
        title: "套餐方案与双轨计费",
        desc: "支持自备大模型账号（BYOK 纯软件订阅），也支持直接订阅开箱即用的全托管多模态算力。"
      },
      billingToggle: {
        monthly: "按月付费",
        annual: "按年付费",
        annualDiscount: "年付首月 5 折"
      },
      modeToggle: {
        byok: "BYOK 纯软件模式 (自备大模型凭证)",
        hosted: "全托管算力模式 (含多模态算力包)"
      },
      cards: {
        starter: {
          title: "Starter · 创作者/工作室版",
          desc: "适合个人创业者与独立工作室，快速启动 120 站点内容营销与基础研发",
          priceMonthByok: "¥299",
          priceMonthHosted: "¥599",
          period: "/月",
          annualNote: "年付首月立减 50%",
          f1: "单人独立工作区",
          f2: "120+ 垂直 AI 站点营销矩阵",
          f3: "基础软件原型与页面生成",
          f4: "轻量社媒与视频情报感知",
          f5: "社区工单支持",
          btn: "立即开通 Starter"
        },
        pro: {
          title: "Pro · 企业专业版",
          desc: "适合快速增长团队与营销代运营机构，享有全域感知与 Dual-Rail 审批门",
          priceMonthByok: "¥999",
          priceMonthHosted: "¥1,999",
          period: "/月",
          annualNote: "年付首月立减 50% · 热门推荐",
          f1: "多成员协作与 RBAC 权限管理",
          f2: "Dual-Rail 动态安全审批门",
          f3: "11+ 全域社媒与视频 ASR 逐字稿感知",
          f4: "飞书/钉钉卡片镜像即时审批",
          f5: "Skills/Prompt 生态市场一键 Fork",
          f6: "专属架构师 1 对 1 技术支持",
          btn: "立即开通 Pro"
        },
        enterprise: {
          title: "Enterprise · 私有化定制版",
          desc: "适合大型集团与政企机构，支持私有化/混合云部署与专属数据隔离",
          priceMonthByok: "定制咨询",
          priceMonthHosted: "定制咨询",
          period: "",
          annualNote: "按年专属 SLA 商务合同",
          f1: "独立私有化 / 混合云集群部署",
          f2: "专属对象存储与自建工作流拓扑",
          f3: "企业私有知识图谱定制与模型微调",
          f4: "Reality Ledger 银行级财务透明对账",
          f5: "7×24 专属 SLA 架构保障",
          btn: "联系商务定制"
        }
      },
      faq: {
        title: "常见问题解答 (FAQ)",
        q1: "什么是 BYOK 模式与全托管算力模式？",
        a1: "BYOK (Bring Your Own Key) 模式下，您使用自备的大模型 API Key，平台仅收取极低的软件调度服务费；全托管算力模式下无需配置任何 Key，平台提供开箱即用的多模态推理积分。",
        q2: "我的 API Key 和商业数据安全吗？",
        a2: "非常安全！univerOS 采用严格的本地加密与零接触原则，BYOK 凭证仅在客户端隔离运行，绝不在云端留存明文；所有关键变更均受 Dual-Rail 审批门保护。",
        q3: "年付首月 5 折如何享受？",
        a3: "选择年付方案时，系统将在首个计费周期自动抵扣首月 50% 的席位费用，后续月份按标准年付折算。",
        q4: "支持开发票与对公转账吗？",
        a4: "支持！企业专业版及以上套餐均支持开具增值税专用发票或普通发票，并支持对公银行转账。"
      }
    },
    partner: {
      tag: "合作伙伴生态计划 | Partner Ecosystem",
      title: "成为 univerOS 核心合伙人",
      subtitle: "共享万亿级企业 AI Workforce 自动化与全域感知市场红利",
      desc: "面向 IT 服务商、代运营机构与咨询团队，提供 120 站点代运营、企业安全审批门私有化落地与全域情报系统整装交付方案，享受高额佣金与持续长尾分润。",
      scenesTitle: "三大核心代销与落地赋能场景",
      s1Title: "1. 120+ AI 站点营销矩阵代运营",
      s1Desc: "为中小企业客户一键部署全网 120+ 站点矩阵，自动化生成小红书、闲鱼、掘金多模态爆款素材，赚取持续代运营服务费。",
      s2Title: "2. 企业级 Dual-Rail 安全审批门落地",
      s2Desc: "为政企大客户提供防失控、可审计的人机双通道审批防御与私有化底座交付，承接数十万级定制集成大单。",
      s3Title: "3. IB 全域认知感知情报中枢整装交付",
      s3Desc: "为行业客户搭建 11+ 平台社媒与视频研报采集系统，输出行业知识图谱与竞品舆情监控解决方案。",
      tiersTitle: "灵活的三级伙伴加盟体系",
      t1Name: "BYOK 技术伙伴",
      t1Price: "¥9,800/年",
      t1Focus: "技术集成与私网并网方案",
      t2Name: "标准合伙人",
      t2Price: "¥19,800/年",
      t2Focus: "区域市场及标准云端代销（热门推荐）",
      t3Name: "核心合伙人",
      t3Price: "¥49,800/年",
      t3Focus: "跨国及集团级整装定制集成",
      benefitsTitle: "四大核心合作权益保障",
      b1Title: "40% 首次席位订阅 + 25% 持续长尾分润",
      b1Desc: "成功推荐客户首次席位订阅享受 40% 高额分润，后续长尾算力消耗享受 25% 永久持续分润，锁定客户终身价值。",
      b2Title: "Reality Ledger 账本公开可信对账",
      b2Desc: "分润流水严格绑定财务订单哈希链，账目不可篡改，代理商后台可随时透明审计对应客户调用记录。",
      b3Title: "专属独立推广控制台",
      b3Desc: "一键生成专属推广链接，实时监控客户转化漏斗、佣金收益报表并管理二级渠道伙伴。",
      b4Title: "售前技术支持与全套方案物料",
      b4Desc: "提供完备的 PPT 方案白皮书、Demo 实机演练账号及资深架构师远程协助成单。",
      formTitle: "在线申请成为合作伙伴",
      formSubtitle: "填写以下信息，我们的渠道总监将在 24 小时内与您直接对接",
      btnSubmit: "提交加盟申请"
    }
  },
  en: {
    common: {
      brand: "univerOS",
      brandDesc: "Enterprise AI Workforce Operating System with Cognitive Perception, Dynamic Approval Gate, and Multi-Role Autonomous Evolution."
    },
    nav: {
      features: "Product Lines",
      architecture: "Architecture",
      customers: "Enterprise Scale",
      pricing: "Pricing",
      security: "Governance & Security",
      partner: "Partner Program",
      contact: "Contact",
      login: "Partner Portal",
      apply: "Try Now"
    },
    footer: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      manual: "Documentation",
      changelog: "Changelog",
      github: "GitHub Source",
      sales: "Contact Sales",
      partner: "Partners",
      copyright: "©2026 univerOS · Enterprise Cognitive AI Workforce Operating System"
    },
    hero: {
      tag: "Governed · Sovereign · Cognitive",
      badge: "Intelligent · Governed · Delivered",
      title: "Enterprise AI Workforce Operating System with",
      titleHighlight: "Cognitive Perception & Dynamic Approval",
      desc: "Integrating software R&D, viral content marketing, and global omni-channel perception. Featuring Dual-Rail dynamic approval gates and sovereign infrastructure for enterprise safety and Swarm productivity.",
      btnApply: "Partner Program / Private On-Prem",
      btnPricing: "Get Started / Explore",
      tip: "* Supports Bring Your Own Key (BYOK software tier) or fully managed multimodal inference compute."
    },
    stats: {
      title: "Large-Scale Enterprise AI Workforce Execution",
      subtitle: "Building Autonomous Agent Swarms to Break Productivity Bottlenecks",
      chip1: "Brain Scheduling",
      chip2: "Dual-Rail Approval",
      chip3: "Omni Perception",
      num1: "120+",
      label1: "Vertical AI Sites Matrix",
      num2: "11+",
      label2: "Omni-Channel Platforms",
      num3: "100%",
      label3: "Auditable Governed Replay"
    },
    features: {
      title: "Three Core SOP Product Lines",
      desc: "No code or complex prompt engineering required. Autonomous AI teams handle software engineering, viral marketing, and global intelligence intake.",
      cf: {
        title: "Content Factory (univerOS-CF)",
        desc: "Orchestrate 120+ vertical live AI sites with viral prompts for Xiaohongshu, Xianyu, Juejin, and X. Instant approval via HMAC-signed Feishu interactive cards and multimodal batch pipeline delivery.",
        tag1: "120+ Live AI Sites Matrix",
        tag2: "Cross-Platform Viral Prompts",
        tag3: "Feishu Interactive Card Approval"
      },
      ib: {
        title: "Cognitive Perception (univerOS-IB)",
        desc: "24/7 omni-intake across Xiaohongshu, Douyin, Kuaishou, Juejin, Reddit, X, YouTube, TikTok, and GitHub. Multimodal ASR distillation and sovereign S3/workflow backend for continuous self-evolution.",
        tag1: "11+ Global & Domestic Platforms",
        tag2: "Multimodal Video ASR Distillation",
        tag3: "Sovereign S3 & Workflow Pipeline"
      },
      rd: {
        title: "Software R&D (univerOS-RD)",
        desc: "From Web apps, mini-programs, and H5 landing pages to OA, CRM, ERP, and Finance systems. Features AST CodeVision architecture audits, sandbox environments, and automated Git PR / ZIP delivery.",
        tag1: "AST Dependency & Compliance Audit",
        tag2: "Isolated Tenant Sandbox Build",
        tag3: "Automated Git PR & ZIP Dual Delivery"
      }
    },
    architectureTabs: {
      title: "univerOS Full-Stack Architecture Matrix",
      desc: "Explore our enterprise foundation categorized into Core Infra, Distributed Worker Swarms, and Sovereign Ecosystem Connectors",
      tabInfra: "Core Infra & Security",
      tabWorker: "Worker Compute & Swarms",
      tabEcosystem: "Sovereign Connectors & Stack",
      infra: {
        c1Title: "Shield Auth & Defensive Gateway",
        c1Desc: "Unified ingress, multi-tenant DID verification, CUP privacy protocol, anti-replay signatures, and adaptive rate-limiting.",
        c2Title: "Dual-Rail Dynamic Approval Gate",
        c2Desc: "Human-Agent track separation, policy-driven operation interception (202 Pending), request snapshotting, and controlled replay.",
        c3Title: "Brain Router & Dynamic Catalog",
        c3Desc: "Semantic intent parsing, FSM state machine planning, and dynamic 5-tier model routing.",
        c4Title: "Heart Watchdog & MAPE-K Healing",
        c4Desc: "Real-time node heartbeats, black-box probes, sub-15s auto-diagnosis, and self-healing task replanning.",
        c5Title: "Reality Ledger Bank-Grade Audit",
        c5Desc: "Append-only immutable ledger, zero-leakage accounting, hash-chained token billing, and fully auditable finances.",
        c6Title: "PGVector Dual-Track Memory",
        c6Desc: "Knowledge and skills track persistence, sub-50ms vector retrieval, and long-term context tracking."
      },
      worker: {
        c1Title: "Distributed Global Worker Network",
        c1Desc: "Decentralized, single-point-of-failure-free workers across North America (LA) and Asia-Pacific (HK) for local execution.",
        c2Title: "Multi-Role Agent Swarms",
        c2Desc: "Architects, developers, marketers, and intelligence analysts collaborating autonomously in closed loops.",
        c3Title: "Dynamic SOP Skill Injection",
        c3Desc: "Modular Standard Operating Procedures dynamically assembled on demand with zero prompt engineering friction.",
        c4Title: "Skills / Prompt / Template Marketplace",
        c4Desc: "Open 4-dimension ecosystem marketplace supporting official presets, verified UGC submissions, one-click forks, and creator payouts.",
        c5Title: "Isolated Sandbox & Build Healing",
        c5Desc: "Tenant-isolated secure sandbox execution, clean production bundling, and automatic dependency build error recovery.",
        c6Title: "Dynamic Compute Node Management",
        c6Desc: "Connect your on-premise compute nodes securely with flexible credit dispatching and access governance."
      },
      ecosystem: {
        c1Title: "S3 Object Storage Abstraction",
        c1Desc: "Completely decoupled from single vendor lock-ins with secure private archival of media files and assets.",
        c2Title: "Enterprise Self-Hosted Automation",
        c2Desc: "Cross-system business orchestration, custom webhook triggers, and automated data pipelines.",
        c3Title: "Feishu Bitable & Interactive IM Cards",
        c3Desc: "Two-way operational board synchronization and HMAC-SHA256 authenticated instant approval cards.",
        c4Title: "11+ Omni-Channel Connectors",
        c4Desc: "Full intelligence awareness across Xiaohongshu, Douyin, Kuaishou, Juejin, Reddit, X, YouTube, TikTok, and GitHub.",
        c5Title: "Multimodal Video ASR Pipeline",
        c5Desc: "Stream audio extraction + high-accuracy transcription + keyframe distillation for intelligence generation.",
        c6Title: "Unified Inference Gateway",
        c6Desc: "Abstract provider differences with seamless switching between BYOK and fully managed compute pools."
      }
    },
    customers: {
      title: "Built for Every Scale",
      desc: "Whether you are a solo entrepreneur or a Fortune 500 enterprise, univerOS delivers out-of-the-box, compliant AI workforce solutions.",
      techWallTitle: "Seamlessly Compatible with Global Leading Models & Cloud Infrastructure",
      opc: {
        badge: "1-3 People / Indie Studios",
        title: "Solo Creators & Small Teams",
        desc: "Replace tedious dev and 120-site content marketing workloads with AI, allowing founders to focus purely on revenue and growth."
      },
      sme: {
        badge: "10-200 People / High Growth",
        title: "Scaling Enterprises",
        desc: "Double operational throughput without increasing payroll. Harness 11+ omni-intake and instant IM approvals securely."
      },
      trad: {
        badge: "Zero Tech Barrier / Managed",
        title: "Traditional & Non-Tech Businesses",
        desc: "No technical knowledge or API keys required. Subscribe to fully managed multimodal AI services with peace of mind."
      },
      enterprise: {
        badge: "Private Deployment / Security",
        title: "Large Enterprises & Groups",
        desc: "On-premise Dual-Rail approval gate deployment with internal data isolation, transparent audit ledgers, and custom knowledge graphs."
      }
    },
    pricing: {
      header: {
        tag: "Transparent & Flexible Pricing",
        title: "Plans & Dual-Track Billing",
        desc: "Support Bring Your Own Key (BYOK software tier) or subscribe to fully managed multimodal compute pools."
      },
      billingToggle: {
        monthly: "Billed Monthly",
        annual: "Billed Annually",
        annualDiscount: "Annual Plan: 50% Off First Month"
      },
      modeToggle: {
        byok: "BYOK Software Tier (Bring Your Own Key)",
        hosted: "Fully Managed Compute Tier (Credits Included)"
      },
      cards: {
        starter: {
          title: "Starter · Creator / Studio",
          desc: "Ideal for solo creators and indie studios launching 120-site marketing and rapid prototyping",
          priceMonthByok: "¥299",
          priceMonthHosted: "¥599",
          period: "/mo",
          annualNote: "50% off first month on annual billing",
          f1: "1 Solo Workspace",
          f2: "120+ Vertical AI Sites Marketing Matrix",
          f3: "Basic Software Prototype & Page Builder",
          f4: "Lightweight Social & Video Intelligence",
          f5: "Community Support",
          btn: "Get Started with Starter"
        },
        pro: {
          title: "Pro · Business Pro",
          desc: "For growing teams and agencies requiring omni perception and Dual-Rail approval gates",
          priceMonthByok: "¥999",
          priceMonthHosted: "¥1,999",
          period: "/mo",
          annualNote: "50% off first month on annual billing · POPULAR",
          f1: "Multi-seat Collaboration & RBAC Governance",
          f2: "Dual-Rail Dynamic Approval Gate",
          f3: "11+ Omni-Channel Video ASR Distillation",
          f4: "Instant Feishu/DingTalk Interactive Approval",
          f5: "One-Click Fork in Skills & Prompt Marketplace",
          f6: "Dedicated 1-on-1 Solutions Architect",
          btn: "Get Started with Pro"
        },
        enterprise: {
          title: "Enterprise · Sovereign Custom",
          desc: "For large enterprises requiring on-premise/hybrid clusters and dedicated data isolation",
          priceMonthByok: "Custom",
          priceMonthHosted: "Custom",
          period: "",
          annualNote: "Dedicated Annual SLA Contract",
          f1: "Private On-Premise / Hybrid Cloud Cluster",
          f2: "Dedicated Object Storage & Workflow Topology",
          f3: "Custom Knowledge Graph & Model Fine-Tuning",
          f4: "Reality Ledger Bank-Grade Transparent Audit",
          f5: "24/7 Dedicated SLA Architectural Support",
          btn: "Contact Enterprise Sales"
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "What is the difference between BYOK and Hosted Compute?",
        a1: "In BYOK mode, you supply your own LLM API keys and pay a low software platform fee. In Hosted mode, credits are included out-of-the-box.",
        q2: "How is my API Key and private data secured?",
        a2: "univerOS enforces local encryption and zero-knowledge principles. BYOK credentials never touch our servers in plain text, and actions are governed by Dual-Rail gates.",
        q3: "How does the annual discount work?",
        a3: "When choosing annual billing, 50% of the first month's seat fee is deducted immediately, and subsequent months are discounted under standard annual rates.",
        q4: "Do you support official VAT invoices and bank transfers?",
        a4: "Yes! All Pro and Enterprise plans support official VAT invoices and corporate bank wire transfers."
      }
    },
    partner: {
      tag: "Partner Ecosystem Recruitment | Partner Program",
      title: "Join the univerOS Partner Program",
      subtitle: "Share the Dividends of the Trillion-Dollar AI Workforce & Omni-Perception Market",
      desc: "For IT solution providers, marketing agencies, and consultancies delivering 120-site operations, Dual-Rail security gates, and turnkey intelligence intake solutions with recurring revenue share.",
      scenesTitle: "Three Turnkey Revenue & Deployment Scenarios",
      s1Title: "1. 120+ AI Sites Marketing Operations",
      s1Desc: "Deploy 120+ automated marketing sites for clients across Xiaohongshu, Xianyu, and Juejin, earning recurring management retainers.",
      s2Title: "2. Enterprise Dual-Rail Security Gate Deployment",
      s2Desc: "Deliver auditable, governed human-agent approval defense systems for enterprise clients with high-ticket contract sizes.",
      s3Title: "3. Turnkey Cognitive Intelligence Intake Hubs",
      s3Desc: "Build 11+ platform social media and video research extraction systems for vertical enterprise intelligence.",
      tiersTitle: "Three-Tier Flexible Partnership Program",
      t1Name: "BYOK Tech Partner",
      t1Price: "¥9,800/year",
      t1Focus: "Integration & Private On-Premise",
      t2Name: "Standard Partner",
      t2Price: "¥19,800/year",
      t2Focus: "Regional Sales & Standard Reselling (POPULAR)",
      t3Name: "Core Partner",
      t3Price: "¥49,800/year",
      t3Focus: "Enterprise Customization & Full Solution",
      benefitsTitle: "Four Core Partner Benefits",
      b1Title: "40% Initial Seat Share + 25% Perpetual Compute Share",
      b1Desc: "Earn a 40% immediate revenue share on initial seat subscriptions, and 25% perpetual lifetime share on subsequent compute consumption.",
      b2Title: "Reality Ledger Open-Book Audit",
      b2Desc: "Referral logs are bound to billing order hash chains, ensuring immutable logs for transparent dispute-free monthly settlement.",
      b3Title: "Dedicated Partner Portal",
      b3Desc: "Generate unique referral links with one click, track conversion funnels, and manage multi-level channel partners.",
      b4Title: "Presales Architecture & Collateral Support",
      b4Desc: "Access complete whitepapers, live demo accounts, and senior solution architects to assist in closing deals.",
      formTitle: "Apply for Partnership",
      formSubtitle: "Fill in your details and our channel director will reach out within 24 hours",
      btnSubmit: "Submit Partnership Application"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("univeros_lang") as Language;
    if (saved && (saved === "zh" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("univeros_lang", lang);
  };

  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];

    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        return path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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

