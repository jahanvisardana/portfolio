import { motion, useReducedMotion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const responsibilities = [
  {
    text: 'Designed and developed scalable backend systems, APIs, microservices, and database architectures using Node.js, NestJS, TypeScript, PostgreSQL, GraphQL, and REST.',
  },
  {
    text: (
      <>
        Optimized database schemas, SQL queries, indexes, functions, and data-access layers to
        improve <strong>performance and scalability</strong> across production systems.
      </>
    ),
  },
  {
    text: 'Led backend development across multiple concurrent products, focusing on clean architecture, reliability, and long-term maintainability.',
  },
  {
    text: (
      <>
        Executed large-scale migration of <strong>500K+ users and ~2M records</strong> from legacy SQL
        systems to PostgreSQL using structured migration workflows.
      </>
    ),
  },
  {
    text: 'Collaborated with clients to analyze requirements, define technical solutions, resolve issues, and deliver projects end-to-end.',
  },
  {
    text: 'Conducted code reviews, mentored developers, drove backend architecture decisions, and provided ongoing production support.',
  },
  {
    text: 'Contributed to HealOps, an AI-powered self-healing CI/CD pipeline capable of autonomously diagnosing and resolving build failures.',
  },
];

export default function Experience() {
  const { ref, visible } = useReveal();
  const shouldReduce = useReducedMotion();

  return (
    <main aria-label="Professional experience">
      <div className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>

        <div className="section-header">
          <div className="eyebrow">Career</div>
          <h1 className="section-title">Professional Experience</h1>
          <p className="section-desc">
            4+ years at a single company — progressing through increasing scope and responsibility,
            from intern to leading backend development across multiple products.
          </p>
        </div>

        <div className="timeline" ref={ref}>
          <motion.div
            className="timeline-entry"
            initial={{ opacity: 0, x: shouldReduce ? 0 : -24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="timeline-dot active" aria-hidden="true" />

            <div className="exp-card">
              <div className="exp-header">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                  <h2 className="exp-company">
                    <span>GeekyAnts</span>
                  </h2>
                  <span className="exp-current">
                    <span className="exp-current-dot" />
                    Current Role
                  </span>
                </div>
                <div className="exp-meta">
                  <span className="exp-role">Senior Software Engineer II</span>
                  <span className="exp-period">July 2022 – Present</span>
                </div>
              </div>

              {/* Career progression — animated vertical stepper */}
              <div className="exp-stepper" aria-label="Career progression at GeekyAnts">
                {([
                  { label: 'Senior Software Engineer II', current: true },
                  { label: 'Senior Software Engineer III' },
                  { label: 'Software Engineer II' },
                  { label: 'Software Engineer I' },
                  { label: 'Intern' },
                ] as { label: string; current?: boolean }[]).map((step, i, arr) => (
                  <div key={step.label} className="exp-step-row" style={{ '--step-i': i } as React.CSSProperties}>

                    {/* Left column: dot + connector */}
                    <div className="exp-step__track-col" aria-hidden="true">
                      <div className={`exp-step__dot${step.current ? ' current' : ''}`}>
                        {step.current && <div className="exp-step__dot-core" />}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="exp-step__connector">
                          <div className="exp-step__flow" style={{ '--flow-delay': `${i * 0.3}s` } as React.CSSProperties} />
                          <ChevronUp size={11} className="exp-step__chevron" />
                        </div>
                      )}
                    </div>

                    {/* Right column: label */}
                    <div className={`exp-step__label${step.current ? ' current' : ''}`}>
                      {step.label}
                      {step.current && <span className="exp-step__badge">Current</span>}
                    </div>

                  </div>
                ))}
              </div>

              {/* Responsibilities */}
              <ul className="exp-list" aria-label="Key responsibilities">
                {responsibilities.map((r, i) => (
                  <motion.li
                    key={i}
                    className="exp-list-item"
                    initial={{ opacity: 0, x: shouldReduce ? 0 : -16 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {r.text}
                  </motion.li>
                ))}
              </ul>

              {/* Tech used */}
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border-s)' }}>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
                  Technologies Used
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'GraphQL', 'REST APIs',
                    'TypeORM', 'Prisma', 'Drizzle', 'Hasura', 'Redis', 'Docker', 'AWS',
                    'React', 'Next.js', 'Supabase',
                  ].map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
