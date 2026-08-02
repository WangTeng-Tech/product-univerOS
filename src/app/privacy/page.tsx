"use client";

import Link from "next/link";
import { useTranslation } from "../../context/LanguageContext";

export default function PrivacyPage() {
  const { language } = useTranslation();

  return (
    <div style={{ padding: "4rem 0", background: "var(--color-bg-primary)", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>
          {language === "zh" ? "隐私政策 (Privacy Policy)" : "Privacy Policy"}
        </h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
          {language === "zh" ? "最后更新生效时间：2026年8月2日" : "Last Updated: August 2, 2026"}
        </p>

        <div style={{ lineHeight: "1.8", color: "var(--color-text-secondary)", fontSize: "0.95rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "1. 隐私承诺与原则" : "1. Privacy Commitment"}
            </h2>
            <p>
              {language === "zh"
                ? "univerOS（以下简称“我们”）高度重视用户的隐私与数据资产安全。我们的基本架构原则是“凭证不上云、数据强隔离、全程可审计”。本隐私政策旨在阐明我们在您使用 univerOS 服务时如何处理和保障您的数据。"
                : "univerOS is deeply committed to protecting enterprise privacy and data assets. Our architectural principle is 'Zero Plaintext Cloud Storage, Physical Tenant Partitioning, Full Auditability'."}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "2. 信息的收集与本地化隔离" : "2. Data Collection & Local Isolation"}
            </h2>
            <p>
              {language === "zh"
                ? "我们仅收集您在注册账户时主动提供的必要信息（如电子邮箱、组织名称）。API Key 密钥、Git 代码库凭证等均锁定在您的本地客户端（CUP 协议），平台云端从不收集或存储明文密钥。执行产生的经验轨迹默认保存在租户本地 LanceDB 向量库中。"
                : "We collect only necessary account profile details (email, organization name). Sensitive credentials (API keys, Git tokens) remain locked in your local client vault under the CUP protocol. Task execution trajectories reside in your local LanceDB store."}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "3. 租户隔离与日志存证" : "3. Tenant Isolation & Audit Trail"}
            </h2>
            <p>
              {language === "zh"
                ? "云端采用基于 DID 的 NATS 命名空间物理/逻辑隔离，严格切断不同客户间的数据链路。每一次任务调度的指令与账单落库生成不可篡改的 Reality Ledger 哈希存证，满足企业合规审计要求。"
                : "NATS DID-based namespace partitioning strictly isolates cross-tenant data transfers. Reality Ledger generates cryptographic append-only hash chains for enterprise compliance audits."}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
              {language === "zh" ? "4. 隐私事宜联系渠道" : "4. Privacy Contact Channels"}
            </h2>
            <p>
              {language === "zh" ? "如需行使数据权利或咨询隐私政策，请通过以下邮件与我们联系：" : "For privacy concerns or rights inquiries, please reach out via:"}
              <br />
              • General Contact: <a href="mailto:us@wangteng.tech" style={{ color: "var(--color-accent-main)" }}>us@wangteng.tech</a>
              <br />
              • Press / Media: <a href="mailto:press@wangteng.tech" style={{ color: "var(--color-accent-main)" }}>press@wangteng.tech</a>
              <br />
              • Support: <a href="mailto:support@wangteng.tech" style={{ color: "var(--color-accent-main)" }}>support@wangteng.tech</a>
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
