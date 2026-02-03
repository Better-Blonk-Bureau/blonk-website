import { useState, useEffect, useCallback, useRef, memo } from 'react';
import type { SpawnedItem } from './types';
import { getRandomItem, itemRegistry } from './registry';
import './OverwhelmingBackground.css';

interface OverwhelmingBackgroundProps {
  itemCount?: number;
  spawnInterval?: number; // ms between spawns
  initialDelay?: number; // ms before first spawn
}

// Memoized item component - only re-renders when its own props change
const OverwhelmingItem = memo(function OverwhelmingItem({ item }: { item: SpawnedItem }) {
  const config = itemRegistry.find((c) => c.id === item.configId);
  if (!config) return null;

  return (
    <div
      className="overwhelming-item"
      style={{
        left: item.x,
        top: item.y,
        '--parallax-factor': item.parallaxFactor,
        '--scale': item.scale,
        '--rotation': `${item.rotation}deg`,
        zIndex: item.zIndex,
      } as React.CSSProperties}
    >
      {config.component()}
    </div>
  );
});

export function OverwhelmingBackground({
  itemCount = 100,
  spawnInterval = 150,
  initialDelay = 500,
}: OverwhelmingBackgroundProps) {
  const [items, setItems] = useState<SpawnedItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const spawnedCountRef = useRef(0);

  // Generate a random spawn position (edges and scattered)
  const generateSpawnPosition = useCallback(() => {
    const padding = 50;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Mix of edge spawning and scattered spawning
    const spawnType = Math.random();

    if (spawnType < 0.3) {
      // Spawn from edges
      const edge = Math.floor(Math.random() * 4);
      switch (edge) {
        case 0: // Top
          return { x: Math.random() * viewportWidth, y: -padding };
        case 1: // Right
          return { x: viewportWidth + padding, y: Math.random() * viewportHeight };
        case 2: // Bottom
          return { x: Math.random() * viewportWidth, y: viewportHeight + padding };
        case 3: // Left
          return { x: -padding, y: Math.random() * viewportHeight };
      }
    }

    // Scattered across viewport
    return {
      x: Math.random() * viewportWidth,
      y: Math.random() * viewportHeight,
    };
  }, []);

  // Spawn a single item
  const spawnItem = useCallback(() => {
    const config = getRandomItem();
    const pos = generateSpawnPosition();
    const id = `item-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

    const newItem: SpawnedItem = {
      id,
      configId: config.id,
      x: pos.x,
      y: pos.y,
      scale: 0.7 + Math.random() * 0.6, // 0.7 to 1.3
      rotation: (Math.random() - 0.5) * 20, // -10 to 10 degrees
      delay: 0,
      zIndex: spawnedCountRef.current,
      parallaxFactor: 0.02 + Math.random() * 0.08, // 0.02 to 0.1
    };

    spawnedCountRef.current++;
    setItems((prev) => [...prev, newItem]);
  }, [generateSpawnPosition]);

  // Initial spawn sequence
  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // Start spawning after initial delay
    const startTimeout = setTimeout(() => {
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          spawnItem();
        }, i * spawnInterval);
        timeouts.push(timeout);
      }
    }, initialDelay);

    timeouts.push(startTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [itemCount, spawnInterval, initialDelay, spawnItem]);

  // Mouse tracking for parallax - updates CSS variables directly, no React re-render
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      container.style.setProperty('--mouse-x', `${x}`);
      container.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overwhelming-background"
      style={{ '--mouse-x': '0', '--mouse-y': '0' } as React.CSSProperties}
    >
      {items.map((item) => (
        <OverwhelmingItem key={item.id} item={item} />
      ))}
    </div>
  );
}
