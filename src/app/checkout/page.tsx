"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { useTranslation } from "../../context/LanguageContext";

const localTranslations = {
  zh: {
    loading: "加载中...",
    titleStep1: "开通产线内测席位",
    curPlan: "当前选购：",
    labelEmail: "电子邮箱 (用于接收激活日志与账单通知)",
    labelCompany: "企业/团队名称",
    labelRefCode: "合作伙伴推荐码 (选填，获取阶梯折扣支持)",
    btnSubmitOrder: "生成内测支付订单",
    titleStep2: "订单提交成功，等待支付",
    payInstructions: "请扫描二维码完成测试交易 (试运营内测中，扫码即可模拟 PAID 成功状态)",
    btnMockSuccess: "模拟支付成功 (回调已触发)",
    btnBack: "返回修改信息",
    titleStep3: "席位订阅开通成功",
    successDesc: "订单已记录上链。您的加密租户 DID 标识已成功生成。",
    labelYourDid: "您的租户 DID:",
    btnDownloadDid: "下载 DID 配置文件 (univeros_tenant_config.json)",
    btnGoToGuide: "查看本地客户端使用指引",
    planNameRd: "RD 研发产线内测订阅",
    planNameGen: "Generator 营销产线内测订阅"
  },
  en: {
    loading: "Loading...",
    titleStep1: "Activate Workflow Workstation",
    curPlan: "Selected Plan: ",
    labelEmail: "Email Address (For activation logs and billing)",
    labelCompany: "Company / Team Name",
    labelRefCode: "Referral Partner Code (Optional, for tiered discounts)",
    btnSubmitOrder: "Generate Trial Invoice",
    titleStep2: "Invoice Submitted, Awaiting Payment",
    payInstructions: "Please scan the QR code to finish trial checkout (simulate PAID state directly)",
    btnMockSuccess: "Simulate Payment Success (Callback triggered)",
    btnBack: "Back to Edit Details",
    titleStep3: "Subscription Activated Successfully",
    successDesc: "Transaction recorded to ledger. Your tenant DID has been generated.",
    labelYourDid: "Your Tenant DID:",
    btnDownloadDid: "Download DID Config File (univeros_tenant_config.json)",
    btnGoToGuide: "View Local Client Setup Guide",
    planNameRd: "RD Autom. Trial Subscription",
    planNameGen: "Generator Trial Subscription"
  }
};

function CheckoutContent() {
  const { language } = useTranslation();
  const t = localTranslations[language];

  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") || "rd";
  const refParam = searchParams.get("ref") || "";

  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [refCode, setRefCode] = useState(refParam);
  const [step, setStep] = useState(1); // 1: Fill Form, 2: Mock Pay, 3: Success DID
  const [did, setDid] = useState("");

  const planNames: Record<string, string> = {
    rd: t.planNameRd,
    generator: t.planNameGen
  };

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      setStep(2);
    }
  };

  const handleMockPay = () => {
    // Generate a mock DID
    const prefix = planParam.toUpperCase();
    const generatedDid = `did:xt:${prefix.slice(0, 3)}:${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    setDid(generatedDid);
    setStep(3);

    // Record referral in localStorage
    if (refCode) {
      try {
        const cleanRef = refCode.trim().toUpperCase();
        const orderId = `ord-${Math.random().toString(36).substring(2, 6)}`;
        const commissionAmount = planParam === "rd" ? 599.80 : 399.80; // 20% of 2999 or 1999
        
        const newCommission = {
          orderId,
          tenantId: `tenant-${Math.random().toString(36).substring(2, 5)}`,
          planName: planParam === "rd" ? "RD 研发产线包月" : "Generator 营销包月",
          rate: "20%",
          amount: `¥${commissionAmount.toFixed(2)}`,
          ledgerHash: Math.random().toString(16).substring(2, 12) + "..." + Math.random().toString(16).substring(2, 6)
        };

        const registryRaw = localStorage.getItem("univeros_partner_registry");
        let registry = registryRaw ? JSON.parse(registryRaw) : {};

        // Find partner by refCode
        let partnerEmail = "";
        for (const emailKey in registry) {
          if (registry[emailKey].refCode === cleanRef || cleanRef.includes(emailKey.split('@')[0].toUpperCase())) {
            partnerEmail = emailKey;
            break;
          }
        }

        // Auto-create partner entry if not exists to ensure seamless simulation
        if (!partnerEmail) {
          const name = cleanRef.replace("PARTNER-", "").toLowerCase();
          partnerEmail = `${name}@company.com`;
          if (!registry[partnerEmail]) {
            registry[partnerEmail] = {
              email: partnerEmail,
              password: "admin",
              refCode: cleanRef,
              stats: { totalReferred: 0, activeSeats: 0, accumulatedCommission: 0 },
              commissions: []
            };
          }
        }

        const partner = registry[partnerEmail];
        partner.stats.totalReferred = (partner.stats.totalReferred || 0) + 1;
        partner.stats.activeSeats = (partner.stats.activeSeats || 0) + 1;
        partner.stats.accumulatedCommission = (parseFloat(partner.stats.accumulatedCommission) || 0) + commissionAmount;
        partner.commissions = partner.commissions || [];
        partner.commissions.unshift(newCommission);

        localStorage.setItem("univeros_partner_registry", JSON.stringify(registry));
      } catch (e) {
        console.error("Failed to record partner commission", e);
      }
    }
  };

  const handleDownloadDid = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      version: "v2.1",
      tenant_did: did,
      email: email,
      company: company,
      subscription_line: planParam.toUpperCase(),
      quota_limit: planParam === "rd" ? 1000 : 800,
      authorized_endpoint: "https://finance.univeros.com/api/v1/auth"
    }, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `univeros_tenant_config_${email.split('@')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div style={{ padding: '4rem 0', background: 'var(--color-bg-secondary)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        
        {/* Step 1: Info Form */}
        {step === 1 && (
          <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2.5rem', boxShadow: 'var(--box-shadow-hover)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t.titleStep1}</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              {t.curPlan}<strong style={{ color: 'var(--color-accent-main)' }}>{planNames[planParam] || planNames.rd}</strong>
            </p>

            <form onSubmit={handleCreateOrder} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                  {t.labelEmail}
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="admin@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                  {t.labelCompany}
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="name@company.com"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                  {t.labelRefCode}
                </label>
                <input 
                  type="text" 
                  placeholder="PARTNER-XXXX"
                  value={refCode}
                  onChange={(e) => setRefCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                {t.btnSubmitOrder}
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Payment simulation */}
        {step === 2 && (
          <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2.5rem', boxShadow: 'var(--box-shadow-hover)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{t.titleStep2}</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              {t.payInstructions}
            </p>

            <div style={{
              width: '200px',
              height: '200px',
              margin: '0 auto 2rem auto',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-bg-secondary)'
            }}>
              {/* Mock QR Code vector */}
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="1.5">
                <rect x="2" y="2" width="6" height="6" />
                <rect x="2" y="16" width="6" height="6" />
                <rect x="16" y="2" width="6" height="6" />
                <rect x="6" y="6" width="2" height="2" />
                <rect x="6" y="16" width="2" height="2" />
                <rect x="16" y="6" width="2" height="2" />
                <path d="M12 2v6m0 4v4m0 4v2M2 12h8m4 0h8" />
              </svg>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleMockPay}>
                {t.btnMockSuccess}
              </button>
              <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setStep(1)}>
                {t.btnBack}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success Activation & DID display */}
        {step === 3 && (
          <div style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2.5rem', boxShadow: 'var(--box-shadow-hover)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                background: 'var(--color-accent-light)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <span style={{ color: 'var(--color-accent-main)', fontSize: '1.75rem', fontWeight: 'bold' }}>✓</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>{t.titleStep3}</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                {t.successDesc}
              </p>
            </div>

            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '1.25rem',
              marginBottom: '2rem',
              fontSize: '0.85rem'
            }}>
              <div style={{ color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{t.labelYourDid}</div>
              <div style={{ fontFamily: 'monospace', color: 'var(--color-accent-hover)', wordBreak: 'break-all', fontWeight: 'bold' }}>
                {did}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleDownloadDid}>
                {t.btnDownloadDid}
              </button>
              <a href="/console/login" style={{ width: '100%' }}>
                <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  {t.btnGoToGuide}
                </button>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const { language } = useTranslation();
  const t = localTranslations[language];

  return (
    <Suspense fallback={<div style={{ padding: '6rem 0', textAlign: 'center' }}>{t.loading}</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
