"use client";

import { useEffect, useState, useRef } from "react";

const SIMULATED_LOGS = [
  { text: ">>> [Agent Swarm] Autonomous worker initialized...", type: "system" },
  { text: "[Shield Gate] Client credential authenticated: AI_Agent (uos_agent_ak_copilot)", type: "security" },
  { text: "[Brain Router] Intent parsed: CF pipeline model auto-scaling...", type: "info" },
  { text: "[Dual-Rail Gate] Evaluating policy matrix for 'POST /api/v1/admin/llm/switches'", type: "event" },
  { text: "  - Policy match: 'require_approval' (High Risk)", type: "warning" },
  { text: "  - Action: Intercepted! Snapshot queued into agent_pending_ops -> HTTP 202", type: "warning" },
  { text: "[WS Stream] Broadcasted event 'pending_op_created' to admin dashboard", type: "event" },
  { text: "[Mirrored Approval] Feishu card sent with HMAC-SHA256 signature", type: "info" },
  { text: "[Admin Action] Platform Admin approved request (ID: op_agent_82fa91)", type: "success" },
  { text: "[Controlled Replay] Injected X-Internal-System-Token -> Replay executed [200 OK]", type: "success" },
  { text: "[Reality Ledger] Immutable block hash written: 7a82c...91f2 (Zero-Leakage)", type: "ledger" },
  { text: "[IB Omni-Perception] Synced 11+ social trends & YouTube video ASR insights", type: "event" },
  { text: ">>> Workflow completed safely. Ready for next task.", type: "system" }
];

export default function ConsoleBlock() {
  const [logs, setLogs] = useState<typeof SIMULATED_LOGS>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < SIMULATED_LOGS.length) {
        const nextLog = SIMULATED_LOGS[idx];
        if (nextLog) {
          setLogs((prev) => [...prev, nextLog]);
        }
        idx++;
      } else {
        setLogs([]);
        idx = 0;
      }
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  const getLogColor = (type: string) => {
    switch (type) {
      case "event": return "#00c981"; // Accent main (Green)
      case "security": return "#17bebb"; // Accent secondary (Cyan)
      case "success": return "#8cd17d"; // Light green success
      case "warning": return "#f59e0b"; // Amber warning
      case "ledger": return "#e5c07b"; // Gold/yellow
      case "system": return "#8c9ba5"; // Muted gray
      default: return "#e6edf3"; // Text primary white-ish
    }
  };

  return (
    <div className="console-container" style={{ width: '100%', maxWidth: '560px' }}>
      {/* Title Bar */}
      <div style={{
        background: '#161b22',
        padding: '0.6rem 1rem',
        borderBottom: '1px solid var(--color-console-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="pulsing-indicator" />
          <span style={{ color: '#8c9ba5', fontSize: '0.7rem', fontWeight: 600 }}>
            Dual-Rail Gate: Active (univerOS:Core)
          </span>
        </div>
        <div style={{ width: '20px' }} />
      </div>

      {/* Terminal logs */}
      <div 
        ref={containerRef}
        style={{
          padding: '1.25rem',
          height: '290px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          scrollBehavior: 'smooth',
          fontSize: '0.78rem',
          fontFamily: 'Consolas, Monaco, "Courier New", monospace',
          lineHeight: '1.5'
        }}
      >
        {logs.map((log, index) => (
          <div key={index} style={{ color: getLogColor(log.type), wordBreak: 'break-all' }}>
            {log.text}
          </div>
        ))}
      </div>
    </div>
  );
}
