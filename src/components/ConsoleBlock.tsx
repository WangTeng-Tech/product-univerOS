"use client";

import { useEffect, useState, useRef } from "react";

const SIMULATED_LOGS = [
  { text: ">>> Initializing local worker context...", type: "system" },
  { text: "[XT-Queue] Received NATS event: xt.tasks.proposed | tenant: tenant-002", type: "event" },
  { text: "[Shield] Credential status: OK | Loaded from local client memory", type: "security" },
  { text: "[Brain] Target state: Sync codebase & analyze dependencies...", type: "info" },
  { text: "[Worker] Created isolated workspace branch: shadow/task-f23b", type: "system" },
  { text: "[CodeVision] Triggering AST semantic impact analysis...", type: "info" },
  { text: "  - Interface stability scan: 100% compatible", type: "success" },
  { text: "  - AST verification: 0 critical logic conflicts found", type: "success" },
  { text: "[Git] Code modified inside local sandbox branch successfully", type: "system" },
  { text: "[Verification] Executing V1-V4 validation checks...", type: "info" },
  { text: "  - V1 (Compile & Build): [PASSED]", type: "success" },
  { text: "  - V2 (Runtime Process Health): [STABLE]", type: "success" },
  { text: "  - V3 (Exceptions Log Scan): [CLEAN]", type: "success" },
  { text: "  - V4 (API HTTP Status Probe): [HTTP 200]", type: "success" },
  { text: "[Ledger] Immutable block hash written: 7a82c...91f2 (SOP: RD_Line)", type: "ledger" },
  { text: "[XT-Queue] Pushed confirmation event to PR staging pipeline...", type: "event" },
  { text: ">>> Worktree cleared. Ready for next task.", type: "system" }
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
    }, 1500);

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
      case "ledger": return "#e5c07b"; // Gold/yellow
      case "system": return "#8c9ba5"; // Muted gray
      default: return "#e6edf3"; // Text primary white-ish
    }
  };

  return (
    <div className="console-container" style={{
      width: '100%',
      maxWidth: '560px'
    }}>
      {/* Title Bar */}
      <div style={{
        background: '#161b22',
        padding: '0.6rem 1rem',
        borderBottom: '1px solid var(--color-console-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <span style={{ color: '#8c9ba5', fontSize: '0.7rem', fontWeight: 500 }}>
          univeros-agent (local:shadow-worktree)
        </span>
        <div style={{ width: '20px' }} />
      </div>

      {/* Terminal logs */}
      <div 
        ref={containerRef}
        style={{
          padding: '1.25rem',
          height: '280px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          scrollBehavior: 'smooth',
          fontSize: '0.8rem',
          lineHeight: '1.4'
        }}
      >
        {logs.length === 0 && (
          <div style={{ color: '#8c9ba5', fontStyle: 'italic' }}>
            Awaiting incoming NATS event...
          </div>
        )}
        {logs.map((log, i) => (
          <div key={i} style={{ 
            color: getLogColor(log.type), 
            whiteSpace: 'pre-wrap', 
            wordBreak: 'break-all' 
          }}>
            {log.text}
          </div>
        ))}
      </div>
    </div>
  );
}
