import { useState, useEffect, useCallback, useRef, memo } from 'react';
import type { SpawnedItem } from './types';
import { itemRegistry } from './registry';
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
        left: `${item.x}%`,
        top: `${item.y}%`,
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

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate a list of items to spawn - prioritizes variety
function generateSpawnList(count: number): string[] {
  const result: string[] = [];
  const allIds = itemRegistry.map((item) => item.id);

  // First, add all unique items (shuffled)
  const shuffled = shuffleArray(allIds);
  result.push(...shuffled);

  // If we need more, add another shuffled round
  while (result.length < count) {
    const moreShuffled = shuffleArray(allIds);
    result.push(...moreShuffled);
  }

  // Trim to exact count
  return result.slice(0, count);
}

export function OverwhelmingBackground({
  itemCount = 50,
  spawnInterval = 100,
  initialDelay = 300,
}: OverwhelmingBackgroundProps) {
  const [items, setItems] = useState<SpawnedItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasSpawnedRef = useRef(false); // Prevent double-spawn in Strict Mode

  // Generate spawn positions using grid-with-jitter for better distribution
  // Returns positions as percentages (0-100) so they adapt to viewport resize
  const generateSpawnPositions = useCallback((count: number) => {
    // Calculate grid dimensions based on item count and typical aspect ratio
    const aspectRatio = 16 / 9; // Use fixed aspect ratio for consistent grid
    const cols = Math.ceil(Math.sqrt(count * aspectRatio));
    const rows = Math.ceil(count / cols);

    // Cell dimensions as percentages
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    // Jitter amount (how far from cell center items can spawn)
    // 0.8 means items can move 80% of the way to cell edge
    const jitter = 0.8;

    const positions: { x: number; y: number }[] = [];

    for (let i = 0; i < count; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Center of this cell (as percentage)
      const centerX = (col + 0.5) * cellWidth;
      const centerY = (row + 0.5) * cellHeight;

      // Random offset within cell (jittered)
      const offsetX = (Math.random() - 0.5) * cellWidth * jitter;
      const offsetY = (Math.random() - 0.5) * cellHeight * jitter;

      positions.push({
        x: centerX + offsetX,
        y: centerY + offsetY,
      });
    }

    // Shuffle positions so items don't spawn in grid order
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    return positions;
  }, []);

  // Initial spawn sequence
  useEffect(() => {
    // Prevent double-spawning in React Strict Mode
    if (hasSpawnedRef.current) return;
    hasSpawnedRef.current = true;

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const spawnList = generateSpawnList(itemCount);
    const positions = generateSpawnPositions(itemCount);

    const startTimeout = setTimeout(() => {
      spawnList.forEach((configId, index) => {
        const timeout = setTimeout(() => {
          const pos = positions[index];
          const id = `item-${index}-${configId}`;

          const newItem: SpawnedItem = {
            id,
            configId,
            x: pos.x,
            y: pos.y,
            scale: 0.8 + Math.random() * 0.4, // 0.8 to 1.2
            rotation: (Math.random() - 0.5) * 16, // -8 to 8 degrees
            delay: 0,
            zIndex: index,
            parallaxFactor: 0.02 + Math.random() * 0.06, // 0.02 to 0.08
          };

          setItems((prev) => [...prev, newItem]);
        }, index * spawnInterval);
        timeouts.push(timeout);
      });
    }, initialDelay);

    timeouts.push(startTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
      hasSpawnedRef.current = false; // Reset on cleanup so remount works
    };
  }, [itemCount, spawnInterval, initialDelay, generateSpawnPositions]);

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
