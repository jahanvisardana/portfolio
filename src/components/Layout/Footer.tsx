import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__name">Jahanvi</div>
          <p className="footer__tagline">Backend Software Engineer</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
          </div>
          <div className="footer__col">
            <h4>More</h4>
            <Link to="/skills">Skills</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/writing">Writing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__col">
            <h4>Connect</h4>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">© {year} Jahanvi. Built with React & TypeScript.</p>
        <a href={`mailto:${siteConfig.email}`} className="footer__email">
          {siteConfig.email}
        </a>
      </div>
    </footer>
  );
}
