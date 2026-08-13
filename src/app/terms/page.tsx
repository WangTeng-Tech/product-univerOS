"use client";

import Link from "next/link";
import { useTranslation } from "../../context/LanguageContext";

export default function TermsPage() {
  const { language } = useTranslation();

  return (
    <div style={{ padding: "4rem 0", background: "var(--color-bg-primary)", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>
          {language === "zh" ? "服务条款 (Terms of Service)" : "Terms of Service"}
        </h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
          {language === "zh" ? "最后更新生效时间：2026年8月2日" : "Last Updated: August 2, 2026"}
        </p>

        <div style={{ lineHeight: "1.8", color: "var(--color-text-secondary)", fontSize: "0.95rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "1. 服务协议的接受与范围" : "1. Acceptance of Terms"}
            </h2>
            <p>
              {language === "zh"
                ? "欢迎使用 univerOS（以下简称“本平台”或“本系统”）。本协议由您（企业客户或个人用户）与 univerOS 运营团队共同订立。当您访问平台、注册账号或使用本系统的任何 SOP 产线（包括但不限于 uos-RD、uos-CF、uos-IB）时，即表示您已阅读、理解并同意接受本服务条款的约束。"
                : "Welcome to univerOS ('the Platform' or 'the System'). This Agreement is entered into between you (Enterprise Tenant or Individual User) and univerOS. By accessing the Platform, creating an account, or invoking any SOP pipelines (including uos-RD, uos-CF, uos-IB), you agree to be bound by these Terms of Service."}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "2. 服务内容与交付模式" : "2. Service Description & Delivery Model"}
            </h2>
            <p>
              {language === "zh"
                ? "univerOS 定位为企业级多职能交付系统。本平台通过深度整合行业知识（KH）、SOP 产线（WF）与推理算力（CP），为租户提供自动化流程闭环与真实生产成果。本平台实行“工具席位订阅 + 算力超额阶梯结算”的双轨商业模式。"
                : "univerOS provides an Enterprise Multi-Function Delivery System. The Platform integrates Industry Knowledge, SOP Pipelines, and Computing Power to deliver real production outcomes. We operate under a dual-track subscription and usage-based overage settlement model."}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "3. 凭证主权与数据安全 (CUP 协议)" : "3. Credential Sovereignty & CUP Protocol"}
            </h2>
            <p>
              {language === "zh"
                ? "本平台采用 CUP 凭证隔离协议保障企业数字主权。您的 LLM API 密钥、Git 部署凭证等敏感信息仅存储在您的本地客户端安全隔离区，平台云端服务器零接触明文凭证。每一次任务执行均通过 Reality Ledger 产生不可篡改的哈希存证（Audit-Ready）。"
                : "univerOS adopts the CUP protocol to safeguard enterprise data sovereignty. Your LLM API keys and Git credentials remain locked inside your local client vault. Cloud servers never process plaintext credentials. Execution history generates immutable Reality Ledger cryptographic records."}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "4. 用户责任与合规使用" : "4. User Responsibilities & Acceptable Use"}
            </h2>
            <p>
              {language === "zh"
                ? "您须对您在账户下发起的所有 SOP 指令及其生成内容承担全部法律责任。严禁利用本平台进行任何违法违规、侵犯第三方知识产权或破坏网络安全的操作。"
                : "You are solely responsible for all SOP execution tasks and generated outputs under your account. You shall not utilize the Platform for unlawful activities or IP infringement."}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "5. 联系方式" : "5. Contact Information"}
            </h2>
            <p>
              {language === "zh" ? "如对本条款有任何疑问，请联系我们：" : "For inquiries regarding these Terms, please contact:"}
              <br />
              • General Enquiry: <a href="mailto:us@wangteng.tech" style={{ color: "var(--color-accent-main)" }}>us@wangteng.tech</a>
              <br />
              • Technical Support: <a href="mailto:support@wangteng.tech" style={{ color: "var(--color-accent-main)" }}>support@wangteng.tech</a>
            </p>
          </section>
        </div>

        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-border)" }}>
          <Link href="/" style={{ color: "var(--color-accent-main)", fontSize: "0.9rem", fontWeight: 600 }}>
            ← {language === "zh" ? "返回首页" : "Back to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
