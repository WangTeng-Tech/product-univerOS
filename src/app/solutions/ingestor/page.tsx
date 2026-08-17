import Link from "next/link";

export default function IngestorSolutionPage() {
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
            解决方案 (Solutions) • Cognitive Perception (univerOS-IB)
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            univerOS-IB 认知感知中枢与全域摄取引擎
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            覆盖 11+ 全域社媒与开源生态，集成多模态音视频 ASR 逐字稿提纯与去 Google 化自主可控底座，赋能企业系统认知自进化。
          </p>
        </div>

        {/* Feature List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              1. 11+ 全域社媒与开发者生态感知
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              支持全天候 24 小时监听国内主流（小红书、抖音、快手、掘金）、海外前沿（Reddit、X/Twitter、Instagram、Facebook、TikTok）、全球流媒体（YouTube、B站）与开源生态（GitHub），捕获前沿技术动态、行业痛点与出海线索。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              2. 多模态音视频 ASR 逐字稿提纯 (yt-dlp + Faster-Whisper)
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              针对演讲、教程与行业视频流，系统采用高效音视频分离与高精度本地 Faster-Whisper ASR 模块，过滤语气词并输出结构化时间戳逐字稿，辅以视觉关键帧抽帧，提纯核心观点与爆款逻辑。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              3. 去 Google 化与企业级自主可控底座
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              彻底切断对海外第三方云表格与云盘的网络锁死，全面接入企业自主可控体系：
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
              <div><strong>· S3 通用对象存储</strong>：音视频大文件与原始素材归档至企业私有存储桶，数据主权完全掌控。</div>
              <div style={{ marginTop: '0.5rem' }}><strong>· 自托管自动化工作流</strong>：复杂数据清洗与 Webhook 事件流转由自建工作流承接。</div>
              <div style={{ marginTop: '0.5rem' }}><strong>· 飞书多维表格 (Bitable) 直连</strong>：业务数据与运营看板无缝双向打通。</div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              4. 认知提纯与产线业务自进化
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              摄取的情报经 LLM 认知蒸馏后，自动沉淀至租户专属向量知识库，反哺 CF 产线的营销提示词生成与 Brain 的高阶决策规划，实现 AI Workforce 认知的自我进化。
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
            接入全域认知感知中枢
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            即刻订阅 univerOS 认知感知专线，为您的企业构建 24 小时全网情报中枢。
          </p>
          <a href="https://app.univeros.cn/explore" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">
              马上体验认知感知
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}
