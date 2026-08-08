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
            解决方案 (Solutions) • Generator Product Line
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            Generator 营销视频生产产线
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            文本驱动的多模态媒体流水线。提供从分镜智能规划、高逼真本地配音合成到自动化多模态视频质检的流程闭环。
          </p>
        </div>

        {/* Details list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              1. 脚本与分镜智能提炼 (Storyboarding)
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              输入基础核心营销文本后，大模型会自动输出分段脚本与逐帧视频画幅分镜提示词（Prompt）。通过清晰的结构化参数输出，将多媒体创意规划细化为具体的机器执行参数，实现剧本工业化流转。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              2. 本地 FishTTS 声音合成
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              系统集成优秀的本地 FishTTS 音频引擎，无需外接云端接口即可在客户端本地合成声线高逼真、带情绪起伏与专业播音质感的营销解说。密钥与音频资产全部本地输出，保障版权安全。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              3. VCO/CCO 视频视觉质量审计 (Quality Control)
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              传统的视频自动化生成常常面临画面崩坏或角色不一致的问题。univerOS Generator 产线中引入了双轨视觉质量控制逻辑：
            </p>
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div>
                <strong>· VCO (Visual Consistency Observer) 视觉一致性审计</strong>：
                采用多模态模型（如 Qwen-VL）自动质检生成的视频帧，判定镜头之间的主角特征、色彩风格是否符合设定，拒绝角色外观发生突变崩坏。
              </div>
              <div>
                <strong>· CCO (Content Consistency Observer) 语义一致性审计</strong>：
                智能分析画面中出现的主体与脚本文字之间是否对应，过滤与主题无关的“幻觉”视觉元素，确保视频内容与商业主旨紧密对齐。
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '3rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
            开始构建营销视频流水线
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            开通 Generator 席位以开启营销视频全自动交付，提升您的短视频矩阵产能。
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/pricing">
              <button className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
                查看 Generator 套餐
              </button>
            </Link>
            <Link href="/console/login">
              <button className="btn-secondary" style={{ padding: '0.75rem 2rem' }}>
                下载客户端
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
