import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  quota: string;
  overagePrice: string;
  features: string[];
  checkoutUrl: string;
  buttonText: string;
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  quota,
  overagePrice,
  features,
  checkoutUrl,
  buttonText,
  highlighted = false
}: PricingCardProps) {
  return (
    <div style={{
      background: 'var(--color-bg-primary)',
      border: `1px solid ${highlighted ? 'var(--color-accent-main)' : 'var(--color-border)'}`,
      borderRadius: '12px',
      padding: '2.5rem',
      boxShadow: highlighted ? 'var(--box-shadow-hover)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {highlighted && (
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          fontSize: '0.7rem',
          fontWeight: 600,
          background: 'var(--color-accent-light)',
          color: 'var(--color-accent-hover)',
          padding: '2px 8px',
          borderRadius: '4px',
          border: '1px solid rgba(0, 201, 129, 0.15)'
        }}>
          热门推荐
        </span>
      )}

      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', margin: '1rem 0' }}>
        <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>{price}</span>
      </div>

      <div style={{ 
        fontSize: '0.85rem', 
        color: 'var(--color-text-secondary)', 
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1rem 0',
        marginBottom: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <div><strong>免费调用额度：</strong>{quota}</div>
        <div><strong>超额计算费：</strong>{overagePrice}</div>
      </div>

      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0.75rem',
        marginBottom: '2.5rem',
        fontSize: '0.85rem'
      }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--color-accent-main)', fontWeight: 'bold' }}>✓</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href={checkoutUrl} style={{ marginTop: 'auto', display: 'block' }}>
        <button 
          className={highlighted ? "btn-primary" : "btn-secondary"} 
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
