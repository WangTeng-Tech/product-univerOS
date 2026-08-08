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
            解决方案 (Solutions) • RD Product Line
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            RD 研发自动化产线
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            面向 Git 分支与影子隔离区的全自动迭代。实现从代码智能修改、语义冲突评估到闭环黑盒测试的完整生命周期。
          </p>
        </div>

        {/* Feature grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              1. 分支物理隔离 (Shadow Worktree)
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              RD 产线并不直接对您的主开发分支（Main/Master）执行修改。在接收到工作流规划后，引擎会在本地自动派生一个独立的物理隔离影子工作树（Worktree），在此沙盒空间内进行文件变更与合并评估，防止对运行期代码产生任何直接的逻辑干扰。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              2. CodeVision 语义影响审计
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              在应用任何代码变更之前，系统自动执行 AST（抽象语法树）解析，抽取当前的类、方法与依赖接口依赖关系拓扑，评估新引入的变动是否会破损现有的公共 API 或引发表外副作用。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              3. V1-V4 测试自愈反馈矩阵
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              影子分支的代码修改完成后，将依次触发四级严苛黑盒校验，拦截任何异常：
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.25rem', background: 'var(--color-bg-secondary)' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>V1: CI/CD 构建</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>确保静态类型与编译通过</span>
              </div>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.25rem', background: 'var(--color-bg-secondary)' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>V2: 节点进程健康</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>进程挂载与生命周期稳定</span>
              </div>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.25rem', background: 'var(--color-bg-secondary)' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>V3: 日志异常扫描</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>无 Python/JS/Go 崩溃堆栈</span>
              </div>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '1.25rem', background: 'var(--color-bg-secondary)' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>V4: 核心接口验证</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>关键 API 返回 HTTP 200</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '1.5rem', lineHeight: '1.6' }}>
              一旦 V1-V4 的任一环节报错，引擎将自动触发修复策略，如果无法自愈则立即停止，并将经过严格验证后的变更合并提至 Pull Request 目标分支，等待您的开发团队进行确认。
            </p>
          </div>
        </div>

        {/* Console Showcase */}
        <div style={{
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2.5rem'
        }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
              查看真实的 RD 执行状态
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              控制台会实时展示影子沙箱内工作流任务的分发、CUP 密钥装载与 V1-V4 测试运行。
            </p>
            <Link href="/pricing">
              <button className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>
                订阅 RD 席位
              </button>
            </Link>
          </div>
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <ConsoleBlock />
          </div>
        </div>

      </div>
    </div>
  );
}
