import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { articles } from '../../data/writing';
import { useReveal } from '../../hooks/useReveal';

export default function FeaturedWriting() {
  const { ref, visible } = useReveal();
  const shouldReduce = useReducedMotion();

  return (
    <section className="section" ref={ref} aria-label="Writing and publications">
      <div className="container">
        <div
          className="section-header"
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}
        >
          <div>
            <div className="eyebrow">Writing</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Technical Articles
            </h2>
          </div>
          <Link to="/writing" className="btn btn-secondary" style={{ flexShrink: 0 }}>
            All Articles
            <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="glass-card"
              initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}
              aria-label={article.title}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="tag tag-c">{article.category}</span>
                <BookOpen size={16} style={{ color: 'var(--text-3)' }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-1)', lineHeight: 1.35 }}>
                {article.title}
              </h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.7, flex: 1 }}>
                {article.description}
              </p>
              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12.5, color: 'var(--violet)', fontWeight: 600 }}
                >
                  Read article <ExternalLink size={12} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
