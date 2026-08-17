import Link from "next/link";
import ConsoleBlock from "../../../components/ConsoleBlock";

export default function RDSolutionPage() {
  return (
    <div style={{ padding: '4rem 0', background: 'var(--color-bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
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
            解决方案 (Solutions) • Software R&D (univerOS-RD)
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            univerOS-RD 软件研发自动化与双轨交付
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            覆盖 AI 官网、小程序、H5、OA、CRM、ERP 与财务系统。具备 AST CodeVision 架构审计、纯净沙箱环境与 Git PR / ZIP 双轨交付能力。
          </p>
        </div>

        {/* Feature grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              1. 独立沙箱与物理隔离 (Isolated Sandbox)
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              RD 产线并不直接对您的生产分支执行修改。在接收到意图规划后，引擎会在独立物理沙箱空间内进行依赖分析、文件生成与合并评估，防止对运行期代码产生任何直接的逻辑干扰。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              2. AST CodeVision 架构与依赖图谱审计
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              在应用任何代码变更之前，系统自动执行 AST（抽象语法树）解析，抽取当前的类、方法与依赖接口拓扑，扫描硬编码凭据与不合规项，评估新引入的变动是否影响现有系统稳定性。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              3. V1-V4 自动化验证与自愈反馈矩阵
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              沙箱代码生成完成后，将依次触发四级严苛黑盒校验，拦截任何异常：
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{ background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-accent-main)' }}>V1 编译构建</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>静态语法检查与无报错构建</p>
              </div>
              <div style={{ background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-accent-main)' }}>V2 进程健康</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>运行时进程健康探针监测</p>
              </div>
              <div style={{ background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-accent-main)' }}>V3 日志扫描</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>零 Critical / Warning 干净日志</p>
              </div>
              <div style={{ background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-accent-main)' }}>V4 HTTP 探针</strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>API 连通性与 HTTP 200 响应</p>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              4. Git PR / 纯净生产 ZIP 双轨交付
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              验证无误后，系统支持自动向企业 Git 仓库提交 Pull Request / Merge Request，或者一键打包生成纯净生产部署 ZIP 文件，供运维团队离线审核上线。
            </p>
          </div>
        </div>

        {/* Real Console Simulation */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
            实时任务日志与审计流
          </h3>
          <ConsoleBlock />
        </div>

        {/* CTA */}
        <div style={{
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
            体验全自动软件研发
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            无需从零配置环境，让 AI 团队帮您高质量交付全栈软件项目。
          </p>
          <a href="https://app.univeros.cn/explore" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">
              马上体验软件研发
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}
