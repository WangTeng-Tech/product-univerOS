"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../context/LanguageContext";

interface Message {
  id: string;
  content: string;
  sender_type: "visitor" | "agent";
  created_at: string;
}

const csTranslations = {
  zh: {
    title: "在线客服",
    connecting: "连接中...",
    placeholder: "输入消息...",
    send: "发送",
    typing: "客服正在输入",
    welcome: "您好！欢迎咨询univerOS。有什么可以帮您的？我们的工作流系统可以帮助企业实现研发自动化和智能营销生成。",
    replyDefault: "您的问题我们已收到。为了能够给您提供最准确的技术解答，您可以直接在此留下您的邮箱或联系电话，稍后会有资深架构师为您提供专业解答。",
    replyEmail: "已收到您的联系信息。我们会尽快安排专属的技术与商务顾问与您取得联系，为您提供一对一的系统演示。",
    replyRd: "univerOS研发产线通过影子工作区（Shadow Worktree）隔离开发，执行前利用 CodeVision 分析依赖。最终自动跑完 V1-V4 四级构建、探测和接口测试，才会提交 PR 等待人工确认或合并。",
    replyPricing: "univerOS采用『席位订阅费 + 超量工作流按次计费』双轨模式。Brain任务在入队时即行扣费，不加价销售大模型Token。内测优惠期具体报价请联系我们，或在此留下您的邮箱，稍后由商务经理与您对接。",
    replyModel: "我们的 CUP 协议支持本地凭证隔离。大模型 API 密钥只存存放于您的本地客户端内存中，物理上不经过云端，确保凭证的绝对主权。",
    replyPartner: "我们提供最高 20% 的推荐席位与超量调用分润，对账明细严格绑定 Reality Ledger 哈希，透明不可篡改，按月线下结算。您可前往官网的『代理生态』页面快速参与！",
    replyClient: "在收银台订阅成功后，系统会生成租户 DID 配置文件。您只需下载我们的 PyQt6 桌面客户端，导入该 DID 文件，并在本地装载您的 API 密钥，即可启动工作流。"
  },
  en: {
    title: "Online Support",
    connecting: "Connecting...",
    placeholder: "Type a message...",
    send: "Send",
    typing: "Agent is typing",
    welcome: "Hello! Welcome to univerOS. How can we help you? Our workflow system helps enterprises automate development and content generation.",
    replyDefault: "We have received your question. To provide you with the most accurate technical answers, you can leave your email or phone number here, and a senior architect will contact you shortly.",
    replyEmail: "Contact details received. We will arrange for a dedicated technical and sales consultant to contact you shortly and provide a one-on-one system demo.",
    replyRd: "The univerOS RD pipeline develops code in isolated Shadow Worktrees and uses CodeVision for dependency analysis. It runs a V1-V4 matrix (build, probe, interface check) before submitting a Pull Request for manual merge.",
    replyPricing: "univerOS uses a 'Seat Subscription + Excess Workflow Usage' dual-track model. Brain tasks are charged upon queue entry; we do not markup LLM Token costs. Contact us for trial prices, or leave your email here.",
    replyModel: "Our CUP protocol isolates keys locally. Plaintext LLM API keys remain in your local client memory and never pass through our cloud servers, ensuring full sovereignty over your credentials.",
    replyPartner: "We offer up to 20% commission on subscriptions and workflows, tracked with reality ledger hashes on-chain and settled monthly. Visit the 'Partners' page to learn more!",
    replyClient: "Upon subscription at checkout, a tenant DID configuration is generated. Download our PyQt6 desktop client, import the DID file, and load your API keys locally to begin execution."
  }
};

export default function CustomerService() {
  const { language } = useTranslation();
  const tCS = csTranslations[language];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Reset messages when language changes so welcome matches
  useEffect(() => {
    if (messages.length > 0) {
      setMessages([
        {
          id: "welcome",
          content: tCS.welcome,
          sender_type: "agent",
          created_at: new Date().toISOString()
        }
      ]);
    }
  }, [language]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setMessages([
          {
            id: "welcome",
            content: tCS.welcome,
            sender_type: "agent",
            created_at: new Date().toISOString()
          }
        ]);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length, tCS.welcome]);

  const handleSend = () => {
    const text = inputText.trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      content: text,
      sender_type: "visitor",
      created_at: new Date().toISOString()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let replyContent = "";
      const query = text.toLowerCase();

      if (query.includes("研发") || query.includes("开发") || query.includes("代码") || query.includes("git") || query.includes("rd") || query.includes("code") || query.includes("dev")) {
        replyContent = tCS.replyRd;
      } else if (query.includes("价格") || query.includes("套餐") || query.includes("计费") || query.includes("费用") || query.includes("price") || query.includes("pricing") || query.includes("billing") || query.includes("cost") || query.includes("fee")) {
        replyContent = tCS.replyPricing;
      } else if (query.includes("大模型") || query.includes("key") || query.includes("token") || query.includes("llm") || query.includes("model")) {
        replyContent = tCS.replyModel;
      } else if (query.includes("代理") || query.includes("推广") || query.includes("返佣") || query.includes("分润") || query.includes("partner") || query.includes("agent") || query.includes("commission") || query.includes("ref")) {
        replyContent = tCS.replyPartner;
      } else if (query.includes("客户端") || query.includes("怎么用") || query.includes("下载") || query.includes("安装") || query.includes("client") || query.includes("download") || query.includes("install")) {
        replyContent = tCS.replyClient;
      } else if (query.includes("邮箱") || query.includes("@") || /\d{11}/.test(query) || query.includes("email") || query.includes("phone")) {
        replyContent = tCS.replyEmail;
      } else {
        replyContent = tCS.replyDefault;
      }

      const agentMsg: Message = {
        id: `agent-${Date.now()}`,
        content: replyContent,
        sender_type: "agent",
        created_at: new Date().toISOString()
      };
      setMessages((prev) => [...prev, agentMsg]);
    }, 1200);
  };

  const formatTime = (timeStr: string) => {
    const date = new Date(timeStr);
    return date.toLocaleTimeString(language === "zh" ? "zh-CN" : "en-US", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "56px",
            height: "56px",
            backgroundColor: "var(--color-accent-main)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(0, 201, 129, 0.25)",
            border: "none",
            outline: "none",
            zIndex: 9999,
            transition: "transform var(--transition-smooth), background-color var(--transition-smooth)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "var(--color-accent-main)";
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div style={{
          position: "fixed",
          bottom: "100px",
          right: "30px",
          width: "360px",
          height: "520px",
          backgroundColor: "var(--color-bg-primary)",
          borderRadius: "12px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
          border: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 9999,
          fontFamily: "var(--font-sans), sans-serif",
          animation: "fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          transition: "background-color var(--transition-smooth), border-color var(--transition-smooth)"
        }}>
          <div style={{
            padding: "15px 20px",
            backgroundColor: "var(--color-accent-main)",
            color: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            userSelect: "none"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 600, fontSize: "0.95rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
              <span>{tCS.title}</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                padding: "2px",
                display: "flex",
                alignItems: "center",
                opacity: 0.85
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "0.85"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div style={{
            flex: 1,
            padding: "20px 15px",
            overflowY: "auto",
            backgroundColor: "var(--color-bg-secondary)",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            transition: "background-color var(--transition-smooth)"
          }}>
            {loading && (
              <div style={{ textAlign: "center", color: "var(--color-text-muted)", fontSize: "0.85rem", marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 1s linear infinite" }}>
                  <line x1="12" y1="2" x2="12" y2="6"></line>
                  <line x1="12" y1="18" x2="12" y2="22"></line>
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                  <line x1="2" y1="12" x2="6" y2="12"></line>
                  <line x1="18" y1="12" x2="22" y2="12"></line>
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
                <span>{tCS.connecting}</span>
              </div>
            )}

            {!loading && messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.sender_type === "visitor" ? "flex-end" : "flex-start",
                  alignSelf: msg.sender_type === "visitor" ? "flex-end" : "flex-start",
                  maxWidth: "85%"
                }}
              >
                <div style={{
                  padding: "10px 14px",
                  fontSize: "0.85rem",
                  lineHeight: "1.5",
                  wordBreak: "break-word",
                  borderRadius: msg.sender_type === "visitor" ? "12px 12px 0 12px" : "12px 12px 12px 0",
                  backgroundColor: msg.sender_type === "visitor" ? "var(--color-accent-main)" : "var(--color-bg-primary)",
                  color: msg.sender_type === "visitor" ? "#ffffff" : "var(--color-text-primary)",
                  boxShadow: msg.sender_type === "visitor" ? "none" : "0 2px 8px rgba(16, 20, 24, 0.03)",
                  border: msg.sender_type === "visitor" ? "none" : "1px solid var(--color-border)",
                  transition: "background-color var(--transition-smooth), color var(--transition-smooth), border-color var(--transition-smooth)"
                }}>
                  {msg.content}
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginTop: "4px", padding: "0 4px" }}>
                  {formatTime(msg.created_at)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", background: "var(--color-bg-primary)", borderRadius: "12px 12px 12px 0", border: "1px solid var(--color-border)", alignSelf: "flex-start" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{tCS.typing}</span>
                <span style={{ display: "inline-flex", gap: "2px" }}>
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-text-muted)", animation: "bounce 1.4s infinite ease-in-out both" }} />
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-text-muted)", animation: "bounce 1.4s infinite 0.2s ease-in-out both" }} />
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-text-muted)", animation: "bounce 1.4s infinite 0.4s ease-in-out both" }} />
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={{
            padding: "12px",
            backgroundColor: "var(--color-bg-primary)",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            transition: "background-color var(--transition-smooth), border-color var(--transition-smooth)"
          }}>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder={tCS.placeholder}
              rows={2}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-bg-primary)",
                color: "var(--color-text-primary)",
                fontFamily: "inherit",
                fontSize: "0.85rem",
                outline: "none",
                resize: "none",
                transition: "border-color var(--transition-smooth), background-color var(--transition-smooth), color var(--transition-smooth)"
              }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="btn-primary"
                style={{
                  padding: "0.4rem 1rem",
                  fontSize: "0.8rem",
                  opacity: !inputText.trim() ? 0.5 : 1,
                  cursor: !inputText.trim() ? "not-allowed" : "pointer"
                }}
              >
                {tCS.send}
              </button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      ` }} />
    </>
  );
}
