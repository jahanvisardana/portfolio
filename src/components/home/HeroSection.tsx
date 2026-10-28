import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { siteConfig } from '../../config/site';
import ResumeModal from '../ResumeModal';

function ProfileAvatar() {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Outer soft glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(96,165,250,0.12) 40%, transparent 70%)',
          animation: 'float 7s ease-in-out infinite',
        }}
      />

      {/* Avatar circle with flip */}
      <div className="profile-flip" style={{ position: 'relative', width: 256, height: 256 }}>
        <div className="profile-flip__inner">

          {/* FRONT — photo */}
          <div className="profile-flip__front">
            {/* Spinning gradient ring */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: -3,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #C084FC, #60A5FA, #F472B6, #C084FC)',
                animation: 'spin 7s linear infinite',
              }}
            />
            <div style={{ position: 'absolute', inset: 2, borderRadius: '50%', background: 'var(--bg)' }} />
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Jahanvi"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{
                position: 'absolute',
                inset: 6,
                width: 'calc(100% - 12px)',
                height: 'calc(100% - 12px)',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                WebkitUserDrag: 'none',
                userSelect: 'none',
                pointerEvents: 'none',
              } as React.CSSProperties}
            />
            <div aria-hidden="true" onContextMenu={(e) => e.preventDefault()} style={{ position: 'absolute', inset: 6, borderRadius: '50%', zIndex: 2 }} />
          </div>

          {/* BACK — avatar card */}
          <div className="profile-flip__back">
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: -3,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #F472B6, #C084FC, #60A5FA, #F472B6)',
                animation: 'spin 7s linear infinite reverse',
              }}
            />
            <div style={{ position: 'absolute', inset: 2, borderRadius: '50%', background: 'var(--bg-2)' }} />
            <div style={{
              position: 'absolute',
              inset: 6,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(192,132,252,0.15), rgba(96,165,250,0.1))',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              padding: 20,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 32 }}>👩‍💻</div>
              <div style={{ fontFamily: 'var(--f-head)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)', lineHeight: 1.2 }}>Jahanvi Sardana</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--violet)', letterSpacing: 0.5 }}>SSE II · GeekyAnts</div>
              <div style={{ width: 32, height: 1, background: 'var(--border)', margin: '2px 0' }} />
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 9.5, color: 'var(--text-3)' }}>jahanvi@geekyants.com</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 9.5, color: 'var(--cyan)' }}>Bangalore · India</div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating info chips */}
      <div
        className="hero__badge badge-1"
        aria-hidden="true"
        style={{ top: 10, right: -16, fontSize: 11 }}
      >
        Senior Software Engineer II
      </div>
      <div
        className="hero__badge badge-2"
        aria-hidden="true"
        style={{ bottom: 40, right: -32, top: 'auto', fontSize: 11 }}
      >
        GeekyAnts · 4+ yrs
      </div>
      <div
        className="hero__badge badge-3"
        aria-hidden="true"
        style={{ bottom: -10, left: -20, top: 'auto', right: 'auto', fontSize: 11 }}
      >
        500K+ users migrated
      </div>
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = (reduce: boolean | null) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
});

export default function HeroSection() {
  const shouldReduce = useReducedMotion();
  const iv = item(shouldReduce);
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <>
      <section className="hero section" aria-label="Introduction">
        <div className="container">
          <div className="hero__inner">

            {/* Left: Content */}
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={iv}>
                <div className="hero__eyebrow">
                  <span className="hero__eyebrow-dot" />
                  Backend Software Engineer · GeekyAnts · India
                </div>
              </motion.div>

              <motion.h1 className="hero__heading" variants={iv}>
                Hi, I'm{' '}
                <span className="hl">Jahanvi.</span>
                <br />
                <span className="hi" style={{ fontSize: '0.72em', letterSpacing: '-1.5px' }}>
                  I build systems that scale.
                </span>
              </motion.h1>

              <motion.p className="hero__sub" variants={iv}>
                Backend engineer specializing in APIs, microservices & database architecture.
                Currently <span className="co">Senior Software Engineer II at GeekyAnts</span>.
              </motion.p>

              <motion.div className="hero__actions" variants={iv}>
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Let's Talk
                </Link>
                <button
                  className="hero__resume-link"
                  aria-label="Get resume via email"
                  onClick={() => setShowResumeModal(true)}
                >
                  <Download size={14} />
                  Resume
                </button>
              </motion.div>

              <motion.div
                variants={iv}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}
                aria-label="Core technologies"
              >
                {['NestJS', 'Node.js', 'PostgreSQL', 'TypeScript', 'GraphQL'].map((t) => (
                  <span key={t} className="tag tag-v">{t}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Profile Avatar */}
            <motion.div
              className="hero__visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ProfileAvatar />
            </motion.div>

          </div>
        </div>
      </section>

      {showResumeModal && <ResumeModal onClose={() => setShowResumeModal(false)} />}
    </>
  );
}
