"use client";

import { useTranslation } from "../../context/LanguageContext";

const localTranslations = {
  zh: {
    tag: "安全白皮书 (Security Specifications)",
    title: "凭证本地隔离与审计就绪安全规范",
    desc: "univerOS 在架构设计上秉承“数据主权与物理隔离”的第一原则，从技术底层切断由于明文密钥云端托管所引发的数据泄漏和账单失控风险。",
    sec1Title: "1. CUP (Credential Utility Protocol) 凭证本地隔离协议",
    sec1Desc: "在严肃的企业生产环境中，API 密钥及服务器 Deploy Key 属于核心数字资产，不应上传至任何第三方 SaaS 云平台。CUP 协议规定：",
    sec1Item1Title: "内存即插即用 (Memory-Only Injection)",
    sec1Item1Desc: "大模型 API 密钥仅保存在本地客户端隔离内存中。在发起工作流规划的瞬间，于内存中装载调用，握手完毕后自动垃圾回收 (GC) 销毁，平台云端不留任何明文与密文备份。",
    sec1Item2Title: "平台侧不接触明文凭证 (Zero-Credential Exposure)",
    sec1Item2Desc: "univerOS 服务器仅充当指令中继（NATS），不具备任何调取客户明文私钥的接口，彻底防止由于系统越权或云端数据库漏洞导致的密钥泄漏风险。",
    sec2Title: "2. Reality Ledger 审计就绪执行记录",
    sec2Desc: "企业级自动化需要完全的责任溯源机制。Reality Ledger 专门针对每一次的 SOP 任务规划与工具执行动作记录哈希签名：",
    sec2Item1Title: "不可篡改的执行链",
    sec2Item1Desc: "工作流中的每一个步骤、代码修改哈希及测试验证输出均会以哈希指针的形式串联落库，产生支持就绪审计的执行记录 (Audit-ready execution records)。",
    sec2Item2Title: "多租户逻辑隔离与安全阻断",
    sec2Item2Desc: "基于租户 DID（去中心化身份）对账单及流水进行严格的命名空间隔离，Token CFO 将随时比对计费签名，在检测到异常调用时本地阻断，保证费用精确归因。",
    sec3Title: "3. 数据主权保障 (Local Knowledge Base)",
    sec3Desc1: "AI 工作流在运行过程中所提取的业务上下文、蒸馏的 Lesson 经验库，全部存放在本地客户端的嵌入式 LanceDB 向量数据库中，无需同步至平台云端。",
    sec3Desc2: "这种“知识与密钥双轨不出关”的设计，保证了哪怕在云端遭到攻击或断网的情况下，企业本地的工作空间依旧安全，研发经验资产完全掌控在企业自身手中。",
    sec4Title: "4. Dual-Rail 人机双通道审批门与受控回放 (Governed Gate)",
    sec4Desc: "AI Agent 在执行高危操作（如调整模型参数、修改租户配置或对外发布）时，自动触发动态审批防线：",
    sec4Item1Title: "人机双通道分轨鉴权",
    sec4Item1Desc: "人类管理员与 AI Agent 分离专属接入通道，Agent 必须携带 X-Agent-Key 专有凭据，网关依据策略矩阵实时评估风险等级。",
    sec4Item2Title: "精确快照入队与受控内部回放",
    sec4Item2Desc: "高危动作被网关自动拦截挂起并序列化存证。管理员在控制台或飞书点击批准后，由内部受控引擎注入原子令牌受控回放，杜绝越权伪造。"
  },
  en: {
    tag: "Security Specifications",
    title: "Credential Isolation & Audit-Ready Specifications",
    desc: "univerOS is built on the core principle of 'Data Sovereignty and Physical Isolation', cutting off data leakage and runaway billing risks from the codebase level.",
    sec1Title: "1. CUP (Credential Utility Protocol) Credential Isolation",
    sec1Desc: "In critical enterprise environments, API keys and Git deploy keys are vital digital assets that should never be hosted on SaaS cloud platforms. CUP mandates:",
    sec1Item1Title: "Memory-Only Injection",
    sec1Item1Desc: "Plain API keys remain strictly in local memory. Keys are loaded temporarily upon plan execution and immediately garbage collected (GC) after hands-shakes, leaving zero traces on cloud servers.",
    sec1Item2Title: "Zero-Credential Exposure",
    sec1Item2Desc: "univerOS servers act purely as message relays (NATS) with no access points to retrieve tenant keys, preventing exposure from server exploits or cloud database leaks.",
    sec2Title: "2. Reality Ledger Audit-Ready Logs",
    sec2Desc: "Enterprise automation demands accountability. Reality Ledger cryptographically signs every planned node and action:",
    sec2Item1Title: "Tamper-Proof Execution Chain",
    sec2Item1Desc: "Every task step, code modification hash, and test verification output is linked via cryptographic hash pointers, generating tamper-proof, audit-ready execution records.",
    sec2Item2Title: "Multi-Tenant Namespace Isolation",
    sec2Item2Desc: "Strict partitioning based on tenant DIDs ensures complete billing isolation, while Token CFO enforces hard caps locally to block anomalies immediately.",
    sec3Title: "3. Local Knowledge Base Sovereignty",
    sec3Desc1: "All run-time business contexts and distilled lesson archives are stored inside the client's local embedded LanceDB vector database, never synced to our cloud.",
    sec3Desc2: "This 'dual-track local-first' design ensures that even during cloud outages or cyber incidents, the tenant's on-premise workspace remains secure, under absolute corporate control.",
    sec4Title: "4. Dual-Rail Approval Gate & Controlled Replay",
    sec4Desc: "When AI Agents perform sensitive actions (e.g. modifying model switches, tenant configs, or marketing dispatches), dynamic approval gates activate automatically:",
    sec4Item1Title: "Human-Agent Track Separation",
    sec4Item1Desc: "Dedicated channels strictly partition human users from AI Agents. Agents must authenticate with X-Agent-Key credentials against dynamic policy matrices.",
    sec4Item2Title: "Snapshot Persistence & Controlled Replay",
    sec4Item2Desc: "High-risk actions are intercepted (HTTP 202) and serialized into tamper-proof snapshots. Approval triggers atomic internal replay with controlled system tokens, eliminating forgery."
  }
};

export default function SecurityPage() {
  const { language } = useTranslation();
  const t = localTranslations[language];

  return (
    <div style={{ padding: '4rem 0', background: 'var(--color-bg-primary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Header */}
        <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem', marginBottom: '3rem' }}>
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
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {t.desc}
          </p>
        </div>

        {/* CUP Section */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
            {t.sec1Title}
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {t.sec1Desc}
          </p>
          <div style={{
            borderLeft: '4px solid var(--color-accent-main)',
            paddingLeft: '1.5rem',
            margin: '1.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '0.9rem',
            color: 'var(--color-text-secondary)'
          }}>
            <div>
              <strong>· {t.sec1Item1Title}</strong>：
              {t.sec1Item1Desc}
            </div>
            <div>
              <strong>· {t.sec1Item2Title}</strong>：
              {t.sec1Item2Desc}
            </div>
          </div>
        </div>

        {/* Reality Ledger Section */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
            {t.sec2Title}
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {t.sec2Desc}
          </p>
          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: '1.5rem',
            background: 'var(--color-bg-secondary)',
            fontSize: '0.85rem',
            lineHeight: '1.6',
            color: 'var(--color-text-secondary)'
          }}>
            <div><strong>· {t.sec2Item1Title}</strong>：{t.sec2Item1Desc}</div>
            <div style={{ marginTop: '0.75rem' }}><strong>· {t.sec2Item2Title}</strong>：{t.sec2Item2Desc}</div>
          </div>
        </div>

        {/* Data sovereignty Section */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
            {t.sec3Title}
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {t.sec3Desc1}
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
            {t.sec3Desc2}
          </p>
        </div>

        {/* Dual-Rail Approval Gate Section */}
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
            {t.sec4Title}
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {t.sec4Desc}
          </p>
          <div style={{
            border: '1px solid rgba(0, 201, 129, 0.3)',
            borderRadius: '8px',
            padding: '1.5rem',
            background: 'var(--color-bg-secondary)',
            fontSize: '0.85rem',
            lineHeight: '1.6',
            color: 'var(--color-text-secondary)'
          }}>
            <div><strong>· {t.sec4Item1Title}</strong>：{t.sec4Item1Desc}</div>
            <div style={{ marginTop: '0.75rem' }}><strong>· {t.sec4Item2Title}</strong>：{t.sec4Item2Desc}</div>
          </div>
        </div>

      </div>
    </div>
  );
}
