// @file-budget: 550 lines | scope: partner sign up and console dashboard
// PageBudget:
//   summary_cards: 3
//   charts:        0
//   tables:        1
//   forms:         1

"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "../../../context/LanguageContext";

interface ReferralCommission {
  orderId: string;
  tenantId: string;
  planName: string;
  rate: string;
  amount: string;
  ledgerHash: string;
}

interface Partner {
  email: string;
  refCode: string;
  tier: "CORE_PARTNER" | "STANDARD_PARTNER" | "BYOK_TECH_PARTNER";
  stats: {
    totalReferred: number;
    activeSeats: number;
    accumulatedCommission: number;
  };
  commissions: ReferralCommission[];
}

const localTranslations = {
  zh: {
    loading: "加载中...",
    consoleTitle: "合作伙伴控制台",
    welcome: "您好，",
    logout: "退出登录",
    promoTitle: "专属推广链接",
    promoDesc: "复制推广链接发送给企业客户。当客户通过该链接完成支付并激活后，系统将通过 Reality Ledger 自动结算并登记 40% 首次席位分润与 25% 算力续充提成至您的账户。",
    copied: "已复制",
    copyLink: "复制链接",
    metricTotalInvited: "受邀客户总数",
    metricActiveSeats: "活跃订阅席位",
    metricAccumulated: "累计已提分润",
    unitsSeats: " 个",
    unitsClients: " 家",
    ledgerTitle: "分润与佣金核算流水 (Reality Ledger 对账流)",
    tableColOrderId: "推荐订单 ID",
    tableColTenantId: "客户租户 ID",
    tableColType: "消费类型",
    tableColRate: "佣金比例",
    tableColAmount: "佣金金额",
    tableColHash: "对账哈希 (Ledger Hash)",
    noRecords: "暂无分润订单记录。复制您的推广链接去吸引第一个客户吧。",
    loginTitle: "代理商平台登录",
    loginDesc: "请输入系统授权登记的电子邮箱以查阅推广数据",
    registerTitle: "代理商账户注册",
    registerDesc: "注册您的合作伙伴专属账户并生成推广邀请链接",
    errorEmailNotFound: "未找到该代理商邮箱，请先注册您的账户",
    errorPasswordIncorrect: "密码不正确",
    errorEmailExists: "该邮箱已被注册，请直接登录",
    labelEmail: "电子邮箱",
    labelPassword: "密码",
    btnRegister: "立即注册并登录",
    btnLogin: "登录合作伙伴后台",
    hasAccount: "已有代理商账户？",
    noAccount: "还没有合作伙伴账户？",
    toggleLogin: "立即登录",
    toggleRegister: "申请注册",
    defaultPlan1: "RD 研发产线包年 (首购席位)",
    defaultPlan2: "Generator 运行消耗 (算力续充)",
    labelTier: "合伙人加盟套餐",
    tierCore: "核心合伙人",
    tierStandard: "标准合伙人",
    tierBYOK: "BYOK 技术伙伴"
  },
  en: {
    loading: "Loading...",
    consoleTitle: "Partner Console",
    welcome: "Hello, ",
    logout: "Sign Out",
    promoTitle: "Your Referral Link",
    promoDesc: "Share your referral link. Once a client completes payment and activates, 40% initial seat share and 25% perpetual compute share will be automatically tracked via Reality Ledger under your account.",
    copied: "Copied",
    copyLink: "Copy Link",
    metricTotalInvited: "Invited Clients",
    metricActiveSeats: "Active Seats",
    metricAccumulated: "Accrued Share",
    unitsSeats: " Unit(s)",
    unitsClients: " Client(s)",
    ledgerTitle: "Referral Revenue Share Stream (Reality Ledger Audit-ready)",
    tableColOrderId: "Order ID",
    tableColTenantId: "Tenant ID",
    tableColType: "Service Type",
    tableColRate: "Commission Rate",
    tableColAmount: "Amount",
    tableColHash: "Audit Hash (Ledger Hash)",
    noRecords: "No commission ledger entries found. Copy your referral link to refer your first client.",
    loginTitle: "Partner Log In",
    loginDesc: "Please enter your registered email to view referral stats",
    registerTitle: "Partner Sign Up",
    registerDesc: "Create your partner account and generate your referral link",
    errorEmailNotFound: "Email not found. Please register first.",
    errorPasswordIncorrect: "Incorrect password.",
    errorEmailExists: "Email already registered. Please log in directly.",
    labelEmail: "Email Address",
    labelPassword: "Password",
    btnRegister: "Sign Up & Access Console",
    btnLogin: "Access Partner Console",
    hasAccount: "Already have a partner account?",
    noAccount: "No partner account yet?",
    toggleLogin: "Log In Now",
    toggleRegister: "Request Sign Up",
    defaultPlan1: "RD Annual Seat (Initial)",
    defaultPlan2: "Generator Compute (Overage)",
    labelTier: "Partner Package",
    tierCore: "Core Partner",
    tierStandard: "Standard Partner",
    tierBYOK: "BYOK Tech Partner"
  }
};

export default function PartnerLoginPage() {
  const { language } = useTranslation();
  const t = localTranslations[language];

  const [mounted, setMounted] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerTier, setRegisterTier] = useState<Partner["tier"]>("CORE_PARTNER");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPartner, setCurrentPartner] = useState<Partner | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [hostUrl, setHostUrl] = useState("");

  // Seed default data if none exists and handle mounting
  useEffect(() => {
    setMounted(true);
    setHostUrl(`${window.location.protocol}//${window.location.host}`);
    
    const registryRaw = localStorage.getItem("univeros_partner_registry");
    let registry = registryRaw ? JSON.parse(registryRaw) : {};

    // Seed default partner (yin@company.com)
    if (!registry["yin@company.com"]) {
      registry["yin@company.com"] = {
        email: "yin@company.com",
        password: "admin",
        refCode: "PARTNER-YIN",
        tier: "CORE_PARTNER",
        stats: {
          totalReferred: 3,
          activeSeats: 8,
          accumulatedCommission: 18600.00
        },
        commissions: [
          {
            orderId: "ord-8a9d",
            tenantId: "tenant-009",
            planName: "RD 研发产线包年 (首购席位)",
            rate: "40%",
            amount: "¥14,320.00",
            ledgerHash: "a7b8e8f239f1c7d0"
          },
          {
            orderId: "ord-f2a8",
            tenantId: "tenant-012",
            planName: "Generator 运行消耗 (算力续充)",
            rate: "25%",
            amount: "¥4,280.00",
            ledgerHash: "8b2e10a9d9a24c5e"
          }
        ]
      };
      localStorage.setItem("univeros_partner_registry", JSON.stringify(registry));
    }
  }, []);

  // Check login status on page refresh if email session was stored
  useEffect(() => {
    if (!mounted) return;
    const sessionEmail = sessionStorage.getItem("univeros_partner_session");
    if (sessionEmail) {
      const registryRaw = localStorage.getItem("univeros_partner_registry");
      const registry = registryRaw ? JSON.parse(registryRaw) : {};
      if (registry[sessionEmail]) {
        setCurrentPartner(registry[sessionEmail]);
        setIsLoggedIn(true);
      }
    }
  }, [mounted]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    
    const registryRaw = localStorage.getItem("univeros_partner_registry");
    const registry = registryRaw ? JSON.parse(registryRaw) : {};
    
    const targetEmail = email.trim().toLowerCase();
    const partner = registry[targetEmail];
    
    if (!partner) {
      setErrorMsg(t.errorEmailNotFound);
      return;
    }
    
    if (partner.password !== password) {
      setErrorMsg(t.errorPasswordIncorrect);
      return;
    }
    
    setCurrentPartner(partner);
    setIsLoggedIn(true);
    sessionStorage.setItem("univeros_partner_session", targetEmail);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    
    const registryRaw = localStorage.getItem("univeros_partner_registry");
    let registry = registryRaw ? JSON.parse(registryRaw) : {};
    
    const targetEmail = email.trim().toLowerCase();
    if (registry[targetEmail]) {
      setErrorMsg(t.errorEmailExists);
      return;
    }
    
    const namePrefix = targetEmail.split("@")[0].toUpperCase();
    const refCode = `PARTNER-${namePrefix}-${Math.floor(100 + Math.random() * 900)}`;
    
    const newPartner: Partner & { password?: string } = {
      email: targetEmail,
      password: password,
      refCode,
      tier: registerTier,
      stats: {
        totalReferred: 0,
        activeSeats: 0,
        accumulatedCommission: 0.00
      },
      commissions: []
    };
    
    registry[targetEmail] = newPartner;
    localStorage.setItem("univeros_partner_registry", JSON.stringify(registry));
    
    setCurrentPartner(newPartner);
    setIsLoggedIn(true);
    sessionStorage.setItem("univeros_partner_session", targetEmail);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPartner(null);
    sessionStorage.removeItem("univeros_partner_session");
  };

  const handleCopyLink = () => {
    if (!currentPartner) return;
    const link = `${hostUrl}/checkout?ref=${currentPartner.refCode}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPlanDisplayName = (planName: string) => {
    if (planName === "RD 研发产线包年 (首购席位)") return t.defaultPlan1;
    if (planName === "Generator 运行消耗 (算力续充)") return t.defaultPlan2;
    return planName;
  };

  const getTierBadgeText = (tier: Partner["tier"]) => {
    if (tier === "CORE_PARTNER") return t.tierCore;
    if (tier === "STANDARD_PARTNER") return t.tierStandard;
    return t.tierBYOK;
  };

  if (!mounted) {
    return (
      <div style={{ padding: '6rem 0', textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'var(--color-text-secondary)' }}>{t.loading}</span>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .dds-input {
          height: 32px;
          padding: 0 12px;
          border-radius: 5px;
          border: 1px solid var(--color-border);
          background-color: var(--color-bg-primary);
          color: var(--color-text-primary);
          font-size: 11px;
          outline: none;
          transition: all 0.3s ease-out;
        }
        .dds-input:focus {
          border-color: var(--color-accent-main);
          box-shadow: 0 0 0 2px rgba(0, 201, 129, 0.15);
        }
        .dds-select {
          height: 32px;
          padding: 0 12px;
          border-radius: 5px;
          border: 1px solid var(--color-border);
          background-color: var(--color-bg-primary);
          color: var(--color-text-primary);
          font-size: 11px;
          outline: none;
          transition: all 0.3s ease-out;
          cursor: pointer;
        }
        .dds-select:focus {
          border-color: var(--color-accent-main);
          box-shadow: 0 0 0 2px rgba(0, 201, 129, 0.15);
        }
        .dds-btn-primary {
          height: 32px;
          padding: 0 16px;
          border-radius: 5px;
          border: none;
          background-color: var(--color-accent-main);
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.3s ease-out;
          outline: none;
        }
        .dds-btn-primary:hover {
          background-color: var(--color-accent-hover);
        }
        .dds-btn-primary:active {
          transform: scale(0.98);
        }
        .dds-btn-secondary {
          height: 32px;
          padding: 0 16px;
          border-radius: 5px;
          border: 1px solid var(--color-border);
          background-color: transparent;
          color: var(--color-text-primary);
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.3s ease-out;
          outline: none;
        }
        .dds-btn-secondary:hover {
          border-color: var(--color-text-primary);
          background-color: var(--color-bg-secondary);
        }
        .dds-btn-secondary:active {
          transform: scale(0.98);
        }
        .dds-table-header-row {
          height: 36px;
          background-color: rgba(15, 23, 42, 0.3);
          border-bottom: 1px solid var(--color-border);
        }
        .dds-table-header-cell {
          padding: 0 12px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
        }
        .dds-table-row {
          height: 40px;
          border-bottom: 1px solid var(--color-border);
          transition: background-color 0.3s ease-out;
        }
        .dds-table-row:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }
        .dds-table-cell {
          padding: 0 12px;
          font-size: 11px;
          color: var(--color-text-secondary);
        }
        .dds-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 18px;
          padding: 0 8px;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 700;
          border: 1px solid transparent;
        }
        .dds-badge-core {
          background-color: rgba(168, 85, 247, 0.1);
          color: #a855f7;
          border-color: rgba(168, 85, 247, 0.2);
        }
        .dds-badge-standard {
          background-color: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border-color: rgba(59, 130, 246, 0.2);
        }
        .dds-badge-byok {
          background-color: rgba(234, 179, 8, 0.1);
          color: #eab308;
          border-color: rgba(234, 179, 8, 0.2);
        }
      `}</style>

      {isLoggedIn && currentPartner ? (
        <div style={{ padding: '4rem 0', background: 'var(--color-bg-primary)' }}>
          <div className="container" style={{ maxWidth: '850px' }}>
            {/* Dashboard Header */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '1.5rem',
              marginBottom: '2.5rem'
            }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{t.consoleTitle}</span>
                <h1 style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {t.welcome}{currentPartner.email}
                  <span className={`dds-badge ${
                    currentPartner.tier === "CORE_PARTNER" 
                      ? "dds-badge-core" 
                      : currentPartner.tier === "STANDARD_PARTNER" 
                        ? "dds-badge-standard" 
                        : "dds-badge-byok"
                  }`}>
                    {getTierBadgeText(currentPartner.tier)}
                  </span>
                </h1>
              </div>
              <button className="dds-btn-secondary" onClick={handleLogout}>
                {t.logout}
              </button>
            </div>

            {/* Referral Code card */}
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                {t.promoTitle}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                {t.promoDesc}
              </p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input 
                  type="text" 
                  readOnly
                  className="dds-input"
                  value={`${hostUrl}/checkout?ref=${currentPartner.refCode}`}
                  style={{
                    flexGrow: 1,
                    minWidth: '280px',
                    height: '42px',
                    fontSize: '0.85rem'
                  }}
                />
                <button 
                  className="dds-btn-primary" 
                  style={{ padding: '0 1.5rem', fontSize: '0.85rem', height: '42px' }}
                  onClick={handleCopyLink}
                >
                  {copied ? t.copied : t.copyLink}
                </button>
              </div>
            </div>

            {/* Metric cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem'
            }}>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem', background: 'var(--color-bg-primary)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{t.metricTotalInvited}</span>
                <h2 style={{ fontSize: '1.75rem', marginTop: '0.5rem', color: 'var(--color-text-primary)' }}>{currentPartner.stats.totalReferred}{t.unitsClients}</h2>
              </div>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem', background: 'var(--color-bg-primary)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{t.metricActiveSeats}</span>
                <h2 style={{ fontSize: '1.75rem', marginTop: '0.5rem', color: 'var(--color-accent-main)' }}>{currentPartner.stats.activeSeats}{t.unitsSeats}</h2>
              </div>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.5rem', background: 'var(--color-bg-primary)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{t.metricAccumulated}</span>
                <h2 style={{ fontSize: '1.75rem', marginTop: '0.5rem', color: 'var(--color-text-primary)' }}>¥{(currentPartner.stats.accumulatedCommission || 0).toFixed(2)}</h2>
              </div>
            </div>

            {/* Commission ledger table */}
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                {t.ledgerTitle}
              </h3>
              <div style={{
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                overflowX: 'auto'
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.85rem',
                  textAlign: 'left',
                  minWidth: '650px'
                }}>
                  <thead>
                    <tr className="dds-table-header-row">
                      <th className="dds-table-header-cell">{t.tableColOrderId}</th>
                      <th className="dds-table-header-cell">{t.tableColTenantId}</th>
                      <th className="dds-table-header-cell">{t.tableColType}</th>
                      <th className="dds-table-header-cell">{t.tableColRate}</th>
                      <th className="dds-table-header-cell">{t.tableColAmount}</th>
                      <th className="dds-table-header-cell">{t.tableColHash}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPartner.commissions && currentPartner.commissions.length > 0 ? (
                      currentPartner.commissions.map((comm, idx) => (
                        <tr key={idx} className="dds-table-row">
                          <td className="dds-table-cell">{comm.orderId}</td>
                          <td className="dds-table-cell">{comm.tenantId}</td>
                          <td className="dds-table-cell">{getPlanDisplayName(comm.planName)}</td>
                          <td className="dds-table-cell">{comm.rate}</td>
                          <td className="dds-table-cell" style={{ color: 'var(--color-accent-main)', fontWeight: 600 }}>{comm.amount}</td>
                          <td className="dds-table-cell" style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{comm.ledgerHash}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                          {t.noRecords}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ padding: '6rem 0', background: 'var(--color-bg-secondary)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{
            maxWidth: '440px',
            background: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '2.5rem',
            boxShadow: 'var(--box-shadow-hover)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center', color: 'var(--color-text-primary)' }}>
              {isRegisterMode ? t.registerTitle : t.loginTitle}
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
              {isRegisterMode ? t.registerDesc : t.loginDesc}
            </p>

            {errorMsg && (
              <div style={{
                background: 'rgba(255, 95, 86, 0.1)',
                border: '1px solid #ff5f56',
                color: '#ff5f56',
                borderRadius: '5px',
                padding: '0.75rem',
                fontSize: '0.8rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={isRegisterMode ? handleRegister : handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  {t.labelEmail}
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dds-input"
                  style={{ width: '100%', height: '42px', fontSize: '0.85rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  {t.labelPassword}
                </label>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="dds-input"
                  style={{ width: '100%', height: '42px', fontSize: '0.85rem' }}
                />
              </div>

              {isRegisterMode && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                    {t.labelTier}
                  </label>
                  <select
                    value={registerTier}
                    onChange={(e) => setRegisterTier(e.target.value as any)}
                    className="dds-select"
                    style={{ width: '100%', height: '42px', fontSize: '0.85rem' }}
                  >
                    <option value="CORE_PARTNER">{t.tierCore} - ¥49,800/年</option>
                    <option value="STANDARD_PARTNER">{t.tierStandard} - ¥19,800/年</option>
                    <option value="BYOK_TECH_PARTNER">{t.tierBYOK} - ¥9,800/年</option>
                  </select>
                </div>
              )}

              <button type="submit" className="dds-btn-primary" style={{ width: '100%', height: '42px', fontSize: '0.85rem', justifyContent: 'center', marginTop: '0.5rem' }}>
                {isRegisterMode ? t.btnRegister : t.btnLogin}
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>
                {isRegisterMode ? t.hasAccount : t.noAccount}
              </span>
              <button 
                type="button"
                onClick={() => {
                  setIsRegisterMode(!isRegisterMode);
                  setErrorMsg("");
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-accent-main)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginLeft: '0.25rem',
                  padding: 0
                }}
              >
                {isRegisterMode ? t.toggleLogin : t.toggleRegister}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
