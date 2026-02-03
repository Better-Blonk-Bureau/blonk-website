import { motion, useReducedMotion } from 'framer-motion';
import { OverwhelmingBackground } from '../components/overwhelming';
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
        <div className="relative min-h-[300vh] bg-bg text-fg">
            <OverwhelmingBackground itemCount={36} spawnInterval={120} initialDelay={200} />

            <div className="scroll-blur" aria-hidden="true" />

            <section className="relative z-10 min-h-[200vh]">
                <div className="sticky top-0 flex min-h-screen items-end justify-center px-6 pb-16">
                    <motion.div
                        className="flex max-w-3xl flex-col items-center gap-6 text-center"
                        initial={reduceMotion ? false : 'hidden'}
                        animate="visible"
                        variants={reduceMotion ? undefined : fadeUp}
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-muted">
                            Better Blonk Bureau presents
                        </p>
                        <h1 className="text-[clamp(72px,18vw,200px)] font-semibold tracking-[-0.05em] text-transparent">
                            <span className="title-gradient">blonk</span>
                        </h1>
                        <p className="text-sm uppercase tracking-[0.35em] text-muted">take back your time</p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4 text-[0.65rem] uppercase tracking-[0.3em]">
                            <a
                                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-fg transition hover:border-white/40 hover:bg-white/10"
                                href="#bureau"
                            >
                                Better Blonk Bureau
                            </a>
                            <a
                                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-fg transition hover:border-white/40 hover:bg-white/10"
                                href="#install"
                            >
                                Install
                            </a>
                        </div>

                        <div className="mt-12 flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-muted">
                            <span>scroll</span>
                            <span className="text-lg animate-bounce">&#8595;</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section
                id="bureau"
                className="relative z-10 flex min-h-screen items-center justify-center px-6"
            >
                <motion.div
                    className="flex w-full max-w-3xl flex-col items-center gap-6 rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur"
                    variants={reduceMotion ? undefined : fadeUp}
                    initial={reduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-muted">Better Blonk Bureau</p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Calm oversight for a chaotic inbox.
                    </h2>
                    <p className="text-base text-muted sm:text-lg">
                        Blonk sorts the noise, highlights the moments that matter, and keeps your calendar
                        breathable. Everything stays fast, lightweight, and pinned to the essentials.
                    </p>
                </motion.div>
            </section>

            <section
                id="install"
                className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-24"
            >
                <motion.div
                    className="flex w-full max-w-2xl flex-col items-center gap-5 text-center"
                    variants={reduceMotion ? undefined : fadeUp}
                    initial={reduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-muted">coming soon</p>
                    <h3 className="text-3xl font-semibold sm:text-4xl">Coming soon to iOS.</h3>
                    <p className="text-base text-muted sm:text-lg">
                        Drop your email to be the first to know when Blonk is ready.
                    </p>
                    <a
                        href="mailto:hello@blonk.app"
                        className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.35em] text-fg transition hover:border-white/40 hover:bg-white/20"
                    >
                        hello@blonk.app
                    </a>
                </motion.div>
            </section>
        </div>
    );
}
