import { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Truck, MessageSquare, Home, Network, Printer, Gift, Server } from 'lucide-react';
import type { Project } from '../../types';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={26} />,
  Truck: <Truck size={26} />,
  MessageSquare: <MessageSquare size={26} />,
  Home: <Home size={26} />,
  Network: <Network size={26} />,
  Printer: <Printer size={26} />,
  Gift: <Gift size={26} />,
  Server: <Server size={26} />,
};

function ProjectThumb({ project }: { project: Project }) {
  return (
    <div className="carousel__thumb" style={{ background: project.gradient }}>
      <div className="carousel__thumb-grid" />
      <div className="carousel__thumb-icon" aria-hidden="true">
        {iconMap[project.icon] ?? <Server size={26} />}
      </div>
      <span className="carousel__thumb-num">{project.num}</span>
      <span className="carousel__thumb-cat">{project.category}</span>
    </div>
  );
}

interface Props {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(`[data-idx="${i}"]`) as HTMLElement;
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    setCurrent(i);
  }, []);

  // Sync dots when user scrolls manually (trackpad/touch)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setCurrent(idx);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );
    const slides = track.querySelectorAll('[data-idx]');
    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [projects.length]);

  const prev = () => scrollTo(Math.max(0, current - 1));
  const next = () => scrollTo(Math.min(projects.length - 1, current + 1));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <div className="carousel" onKeyDown={handleKeyDown} role="region" aria-label="Project carousel">
      <div className="carousel__track" ref={trackRef}>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="carousel__slide"
            data-idx={i}
            aria-label={`Project ${i + 1} of ${projects.length}: ${project.title}`}
          >
            <article className="carousel__card">
              <ProjectThumb project={project} />
              <div className="carousel__body">
                <h3 className="carousel__title">{project.title}</h3>
                <div className="carousel__role">{project.role}</div>
                <p className="carousel__desc">{project.summary}</p>
                <div className="carousel__stack">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="tag">+{project.stack.length - 4}</span>
                  )}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="carousel__controls">
        <button
          className="carousel__btn"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous project"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="carousel__dots" role="tablist" aria-label="Project navigation">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={`carousel__dot${i === current ? ' active' : ''}`}
              onClick={() => scrollTo(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to ${p.title}`}
            />
          ))}
        </div>

        <button
          className="carousel__btn"
          onClick={next}
          disabled={current === projects.length - 1}
          aria-label="Next project"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
