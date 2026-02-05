import { motion, useReducedMotion } from 'framer-motion';
import { OverwhelmingBackground } from '../components/overwhelming';
import { GrainSettings } from '../components/GrainSettings';
import { Logo3D } from '../components/Logo3D';
import pompompurinGif from '../assets/pompompurin.gif';
import './LandingPage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

export function LandingPage() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="relative min-h-screen text-fg">
            <GrainSettings />
            <OverwhelmingBackground itemCount={36} spawnInterval={120} initialDelay={200} />

            <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
                <motion.div
                    className="flex max-w-3xl flex-col items-center gap-6 text-center"
                    initial={reduceMotion ? false : 'hidden'}
                    animate="visible"
                    variants={reduceMotion ? undefined : fadeUp}
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-muted">
                        Better Blonk Bureau presents
                    </p>
                    <Logo3D />

                    <div className="mt-4 flex items-center gap-4">
                        <a href="mailto:hello@blonk.app" className="transition hover:opacity-80">
                            <img
                                src="/app-store-download-black-usa.svg"
                                alt="Download on the App Store"
                                className="h-12"
                            />
                        </a>
                        <img
                            src={pompompurinGif}
                            alt="Pompompurin"
                            className="pompompurin h-12"
                        />
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
