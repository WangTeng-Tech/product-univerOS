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
            解决方案 (Solutions) • Ingestor Product Line
          </span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
            Ingestor 运营分发自动化产线
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            多源媒体内容摄取与社交发布矩阵同步。针对企业内容资产的结构化加工、翻译改写与批量多渠道同步发布。
          </p>
        </div>

        {/* Feature List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              1. 多源音视频双轨采集转写 (Transcription)
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              支持主流音视频格式的批量摄取，由底层集成的 Whisper 双轨转写模块提取高准确度人声音轨，过滤掉语气词与环境噪音，转化为格式规整的高质文本，为二次创作提供干净的文字输入。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              2. 智能结构化改写与改写
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              利用企业大模型对转写后的文本进行提炼、排版与二次创作。自动匹配不同的宣发风格，生成契合公众号、行业快报及各类社交媒体调性的格式化推文，提升内容曝光转化率。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              3. 渠道矩阵接口同步
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              接口化同步至公众号、Wordpress 等发布矩阵，规避人工手动复制分发、反复核对的多点耗时问题，确保品牌运营高质高效运作。
            </p>
          </div>
        </div>

        {/* Ingestor Invited Notice */}
        <div style={{
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          <span style={{
            background: 'var(--color-border)',
            color: 'var(--color-text-muted)',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '1rem'
          }}>
            首期受邀私有部署
          </span>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
            申请 Ingestor 专线评估
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '550px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
            因多源采集与同步机制涉及客户复杂的社交主权密钥、账号白名单授权与企业网络安全防火墙穿透，Ingestor 运营分发产线目前不提供公共 SaaS 开通，仅限专线定制化私有化部署。
          </p>
          <Link href="/console/login">
            <button className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
              联系技术团队评估
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
