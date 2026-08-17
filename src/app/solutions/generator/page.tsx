import Link from "next/link";

export default function GeneratorSolutionPage() {
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
            解决方案 (Solutions) • Content Factory (univerOS-CF)
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            univerOS-CF 内容工厂与 120 站点营销矩阵
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            融合 120+ 垂直 AI 子站点营销矩阵、跨平台爆款提示词库与飞书卡片即时审批，打造工业级全模态内容生产流水线。
          </p>
        </div>

        {/* Details list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              1. 120+ 垂直 AI 站点营销矩阵联动
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              平台内置并持续运营 120+ 个已上线的垂直 AI 工具站点（涵盖 AI 图像处理、文本生成、代码辅助与专业设计工具）。内容工厂支持一键将企业业务或最新工具产品生成「每天推荐一个优秀网站」爆款营销物料，形成高权重独立域名矩阵导流闭环。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              2. 跨平台（小红书 / 闲鱼 / 掘金 / X）爆款提示词库
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              内置经过数万次流量验证的垂直行业提示词资产库：自动适配小红书的 Emoji 种草排版与双列卡片文风、闲鱼的痛点出清与引流文案、掘金的技术实战测评排版、以及 Twitter/X 的英文极客风格，流水线批量产出。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              3. 飞书 IM 互动卡片即时审批与镜像放行
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              内容发布涉及品牌合规。univerOS-CF 深度集成飞书通道：
            </p>
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '1.5rem',
              fontSize: '0.85rem',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6'
            }}>
              <div><strong>· HMAC-SHA256 强签名防篡改</strong>：富文本卡片按钮内置哈希签名与防重放机制，移动端一键点击批准或驳回。</div>
              <div style={{ marginTop: '0.5rem' }}><strong>· 物理分轨与零暴露</strong>：审批指令实时同步至控制台，无越权风险。</div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              4. 全模态音视频批量装配
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              支持 FLUX.1 / SD3.5 画面渲染、CosyVoice 与 FishTTS 高拟真拟人配音合成、以及自动化关键帧剪辑装配，24 小时无人值守批量交付高质量多模态成果。
            </p>
          </div>
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
            开启 120 站点内容营销矩阵
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            即刻订阅 univerOS 内容工厂，体验全自动内容生产与多平台导流。
          </p>
          <a href="https://app.univeros.cn/explore" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">
              马上体验内容工厂
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}
