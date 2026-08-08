import { ReactNode } from "react";

interface ProductCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  invited?: boolean;
}

export default function ProductCard({
  number,
  title,
  description,
  tags,
  icon,
  invited = false
}: ProductCardProps) {
  return (
    <div className="product-card">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <span style={{ 
          fontFamily: 'monospace', 
          fontSize: '0.8rem', 
          fontWeight: 600, 
          color: 'var(--color-accent-main)' 
        }}>[{number}]</span>
        {icon}
      </div>

      <h3 style={{ 
        fontSize: '1.25rem', 
        marginBottom: '1rem',
        color: 'var(--color-text-primary)'
      }}>{title}</h3>
      
      <p style={{ 
        fontSize: '0.875rem', 
        lineHeight: '1.6', 
        color: 'var(--color-text-secondary)',
        marginBottom: '1.75rem',
        minHeight: '4.8rem' /* Keep card content aligned */
      }}>{description}</p>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '0.5rem',
        marginTop: 'auto'
      }}>
        {tags.map((tag, idx) => (
          <span key={idx} style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            padding: '3px 8px',
            borderRadius: '4px',
            background: invited ? 'var(--color-bg-secondary)' : 'var(--color-accent-light)',
            color: invited ? 'var(--color-text-muted)' : 'var(--color-accent-hover)',
            border: `1px solid ${invited ? 'var(--color-border)' : 'rgba(0, 201, 129, 0.15)'}`
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
