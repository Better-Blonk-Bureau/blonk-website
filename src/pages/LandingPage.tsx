import { useEffect, useRef } from 'react';
import { OverwhelmingBackground } from '../components/overwhelming';
import './LandingPage.css';

export function LandingPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!pageRef.current) return;

            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const progress = Math.min(scrollY / windowHeight, 1);

            // Update CSS variable directly - no React re-render
            pageRef.current.style.setProperty('--scroll-progress', String(progress));

            // Toggle class for title visibility (only when crossing threshold)
            const titleContainer = pageRef.current.querySelector('.title-container');
            if (titleContainer) {
                titleContainer.classList.toggle('visible', progress > 0.3);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="landing-page" ref={pageRef}>
            {/* Overwhelming background - always visible */}
            <OverwhelmingBackground itemCount={50} spawnInterval={100} initialDelay={300} />

            {/* Gradient overlay that fades in on scroll */}
            <div className="scroll-overlay" />

            {/* First viewport - just the chaos */}
            <section className="hero-section">
                <div className="scroll-hint">
                    <span>scroll down</span>
                    <div className="scroll-arrow">
                        <span>&#8595;</span>
                    </div>
                </div>
            </section>

            {/* Second viewport - the reveal */}
            <section className="reveal-section">
                <div className="title-container">
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
