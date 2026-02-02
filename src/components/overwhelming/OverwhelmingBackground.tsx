import { useState, useEffect, useCallback, useRef } from 'react';
import type { SpawnedItem, MousePosition } from './types';
import { getRandomItem, itemRegistry } from './registry';
import './OverwhelmingBackground.css';

interface OverwhelmingBackgroundProps {
  itemCount?: number;
  spawnInterval?: number; // ms between spawns
  initialDelay?: number; // ms before first spawn
}

export function OverwhelmingBackground({
  itemCount = 100,
  spawnInterval = 150,
  initialDelay = 500,
}: OverwhelmingBackgroundProps) {
  const [items, setItems] = useState<SpawnedItem[]>([]);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
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

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="overwhelming-background">
      {items.map((item) => {
        const config = itemRegistry.find((c) => c.id === item.configId);
        if (!config) return null;

        // Calculate parallax offset
        const parallaxX = mousePos.x * item.parallaxFactor;
        const parallaxY = mousePos.y * item.parallaxFactor;

        return (
          <div
            key={item.id}
            className="overwhelming-item"
            style={{
              left: item.x,
              top: item.y,
              transform: `
                translate(-50%, -50%)
                translate(${parallaxX}px, ${parallaxY}px)
                scale(${item.scale})
                rotate(${item.rotation}deg)
              `,
              zIndex: item.zIndex,
              animationDelay: `${item.delay}ms`,
            }}
          >
            {config.component()}
          </div>
        );
      })}
    </div>
  );
}
