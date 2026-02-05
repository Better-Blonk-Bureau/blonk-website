import { useState } from 'react';

interface Settings {
    color: string;
    intensity: number;
    size: number;
    octaves: number;
}

function GrainOverlay({
    intensity,
    size,
    octaves,
    color,
}: {
    intensity: number;
    size: number;
    octaves: number;
    color: string;
}) {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-[-1]"
            style={{ isolation: 'isolate' }}
            aria-hidden="true"
        >
            {/* Base background color */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: color }}
            />
            {/* Grain layer - only blends with the color above due to isolation */}
            <svg
                className="absolute inset-0 h-full w-full mix-blend-multiply"
                style={{ opacity: intensity }}
                preserveAspectRatio="none"
            >
                <filter id="grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency={size}
                        numOctaves={octaves}
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain)" />
            </svg>
        </div>
    );
}

export function GrainSettings() {
    const [settings, setSettings] = useState<Settings>({
        color: '#e05530',
        intensity: 0.4,
        size: 0.7,
        octaves: 4,
    });

    const settingsOutput = `color: ${settings.color} | intensity: ${settings.intensity} | size: ${settings.size} | octaves: ${settings.octaves}`;

    return (
        <>
            <GrainOverlay
                intensity={settings.intensity}
                size={settings.size}
                octaves={settings.octaves}
                color={settings.color}
            />

            <div className="fixed bottom-4 right-4 z-[9999] w-72 rounded-xl border border-white/20 bg-black/80 p-4 backdrop-blur-md">
                <div className="mb-3 text-xs font-medium uppercase tracking-wider text-white/60">
                    Background Settings
                </div>

                <div className="flex flex-col gap-4">
                    {/* Color Picker */}
                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">Color</span>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={settings.color}
                                onChange={(e) => setSettings((s) => ({ ...s, color: e.target.value }))}
                                className="h-8 w-12 cursor-pointer rounded border border-white/20 bg-transparent"
                            />
                            <input
                                type="text"
                                value={settings.color}
                                onChange={(e) => setSettings((s) => ({ ...s, color: e.target.value }))}
                                className="flex-1 rounded border border-white/20 bg-white/5 px-2 py-1 text-xs text-white"
                            />
                        </div>
                    </label>

                    {/* Grain Intensity */}
                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">
                            Grain Intensity: {settings.intensity.toFixed(2)}
                        </span>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={settings.intensity}
                            onChange={(e) =>
                                setSettings((s) => ({ ...s, intensity: parseFloat(e.target.value) }))
                            }
                            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-white"
                        />
                    </label>

                    {/* Grain Size (baseFrequency) */}
                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">
                            Base Frequency: {settings.size.toFixed(2)} (higher = finer)
                        </span>
                        <input
                            type="range"
                            min="0.1"
                            max="2"
                            step="0.05"
                            value={settings.size}
                            onChange={(e) =>
                                setSettings((s) => ({ ...s, size: parseFloat(e.target.value) }))
                            }
                            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-white"
                        />
                    </label>

                    {/* Octaves */}
                    <label className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">
                            Octaves: {settings.octaves} (more = more detail)
                        </span>
                        <input
                            type="range"
                            min="1"
                            max="8"
                            step="1"
                            value={settings.octaves}
                            onChange={(e) =>
                                setSettings((s) => ({ ...s, octaves: parseInt(e.target.value) }))
                            }
                            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-white"
                        />
                    </label>

                    {/* Settings Output */}
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs text-white/50">Copy these settings:</span>
                        <textarea
                            readOnly
                            value={settingsOutput}
                            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                            className="h-16 w-full resize-none rounded border border-white/20 bg-white/5 p-2 text-xs text-white/80"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
