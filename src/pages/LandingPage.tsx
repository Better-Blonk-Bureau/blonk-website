import { useEffect, useState, useRef } from 'react';
import { OverwhelmingBackground } from '../components/overwhelming';
import './LandingPage.css';

export function LandingPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);

      // Show title when scrolled past 30%
      setShowTitle(progress > 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Overwhelming background - always visible */}
      <OverwhelmingBackground itemCount={100} spawnInterval={120} initialDelay={300} />

      {/* Gradient overlay that fades in on scroll */}
      <div
        className="scroll-overlay"
        style={{
          opacity: scrollProgress * 0.85,
        }}
      />

      {/* First viewport - just the chaos */}
      <section className="hero-section">
        <div className="scroll-hint" style={{ opacity: 1 - scrollProgress * 2 }}>
          <span>scroll down</span>
          <div className="scroll-arrow">
            <span>&#8595;</span>
          </div>
        </div>
      </section>

      {/* Second viewport - the reveal */}
      <section className="reveal-section" ref={contentRef}>
        <div
          className={`title-container ${showTitle ? 'visible' : ''}`}
          style={{
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          }}
        >
          <p className="presents">Better Blonk Bureau presents:</p>
          <h1 className="main-title">
            <span className="title-blonk">blonk</span>
          </h1>
          <p className="tagline">take back your time</p>
        </div>
      </section>

      {/* Additional content section */}
      <section className="info-section">
        <div className="info-content">
          <p className="coming-soon">coming soon to iOS</p>
          <a href="mailto:hello@blonk.app" className="contact-link">
            hello@blonk.app
          </a>
        </div>
      </section>
    </div>
  );
}
