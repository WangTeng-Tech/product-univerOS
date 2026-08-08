"use client";

import { useTranslation } from "../../../context/LanguageContext";

const localTranslations = {
  zh: {
    tag: "凭证主权隔离与客户端激活",
    title: "客户端下载与 DID 使用说明",
    desc: "为贯彻“平台侧不接触明文凭证”的安全红线，univerOS 的大模型 API Key 载入、本地向量沉淀及 SOP 任务规划完全在您的本地客户端中进行物理隔离运行。",
    winTitle: "Windows x64 / ARM",
    winDesc: "适用于 Windows 10/11 系统的桌面安装包",
    winBtn: "下载 Windows 客户端",
    macTitle: "macOS Apple Silicon",
    macDesc: "原生支持 M1/M2/M3 系列芯片的独立包",
    macBtn: "下载 macOS 客户端",
    linuxTitle: "Linux x86_64",
    linuxDesc: "适用于 Ubuntu / CentOS 桌面发行版",
    linuxBtn: "下载 Linux 客户端",
    stepsTitle: "租户 DID 配置加载流程",
    step1Title: "获取租户专属加密标识 (DID)",
    step1Desc: "在付费订阅开通成功后，系统收银台将向您展示专属的 DID 配置文件（.json 格式）以及用于任务流归因和熔断安全审计的 DID 代码片段。",
    step2Title: "安装并启动本地 PyQt6 客户端",
    step2Desc: "将下载好的客户端运行在您的本地服务器或研发环境，它自带零接触凭证保密箱以及嵌入式 LanceDB 向量数据库用于沉淀 Lesson 经验。",
    step3Title: "导入 DID 握手激活",
    step3Desc: "在客户端“设置-凭证箱”中导入第 1 步获得的 DID 文件，客户端将在本地建立 SSL 隧道中继连接，完成双向乐观共识校验。",
    step4Title: "本地装载 API Key 投入生产",
    step4Desc: "在客户端界面输入您自备 of LLM / 多模态 API Key，它们仅保存在客户端本地内存中，随时接收 NATS 执行流任务。云端无明文痕迹。"
  },
  en: {
    tag: "Credential Sovereignty & Client Activation",
    title: "Client Download & DID Instructions",
    desc: "To enforce our 'Zero-Credential Exposure' rule, LLM API keys loading, local vector indexing, and SOP workflow planning run strictly partitioned within your local client application.",
    winTitle: "Windows x64 / ARM",
    winDesc: "Desktop installer packages for Windows 10 & 11",
    winBtn: "Download Windows App",
    macTitle: "macOS Apple Silicon",
    macDesc: "Native bundles supporting Apple M1/M2/M3/M4 chips",
    macBtn: "Download macOS App",
    linuxTitle: "Linux x86_64",
    linuxDesc: "Desktop builds supporting Ubuntu & CentOS distributions",
    linuxBtn: "Download Linux App",
    stepsTitle: "Tenant DID Configuration & Loading Steps",
    step1Title: "Retrieve Tenant Encrypted ID (DID)",
    step1Desc: "Upon successful checkout subscription, the checkout page displays your unique DID configuration file (.json format) and DID signatures for workflow audits.",
    step2Title: "Install and Run Local PyQt6 Client",
    step2Desc: "Execute the client program in your local environment; it hosts the zero-exposure keystore vault and an embedded LanceDB vector store locally.",
    step3Title: "Import DID & Connect App",
    step3Desc: "Load the downloaded DID JSON file in the 'Settings - Credentials' section to establish a local secure SSL relay tunnel and complete mutual handshake consensus.",
    step4Title: "Inject API Keys & Start Workflows",
    step4Desc: "Add your LLM and multimodal API keys in the client UI. They are stored only in memory and never synced to our servers, listening to inbound planning pipelines."
  }
};

export default function ConsoleLoginPage() {
  const { language } = useTranslation();
  const t = localTranslations[language];

  return (
    <div style={{ padding: '5rem 0', background: 'var(--color-bg-primary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
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
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '650px', margin: '0 auto' }}>
            {t.desc}
          </p>
        </div>

        {/* Action area: Download grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              {t.winTitle}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              {t.winDesc}
            </p>
            <button className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>
              {t.winBtn}
            </button>
          </div>

          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              {t.macTitle}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              {t.macDesc}
            </p>
            <button className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>
              {t.macBtn}
            </button>
          </div>

          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              {t.linuxTitle}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              {t.linuxDesc}
            </p>
            <button className="btn-secondary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>
              {t.linuxBtn}
            </button>
          </div>
        </div>

        {/* Steps to activate */}
        <div style={{
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '2.5rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>
            {t.stepsTitle}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                background: 'var(--color-accent-main)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                flexShrink: 0
              }}>1</span>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                  {t.step1Title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  {t.step1Desc}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                background: 'var(--color-accent-main)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                flexShrink: 0
              }}>2</span>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                  {t.step2Title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  {t.step2Desc}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                background: 'var(--color-accent-main)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                flexShrink: 0
              }}>3</span>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                  {t.step3Title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  {t.step3Desc}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                background: 'var(--color-accent-main)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                flexShrink: 0
              }}>4</span>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                  {t.step4Title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  {t.step4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
