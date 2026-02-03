import type { ReactNode } from 'react';

export type ItemCategory =
    | 'notification'
    | 'reaction'
    | 'video'
    | 'image'
    | 'social'
    | 'message'
    | 'alert'
    | 'widget';

export interface OverwhelmingItemConfig {
    id: string;
    category: ItemCategory;
    component: () => ReactNode;
    weight?: number; // Higher weight = more likely to spawn
    minSize?: number;
    maxSize?: number;
}

export interface SpawnedItem {
    id: string;
    configId: string;
    x: number;
    y: number;
    scale: number;
    rotation: number;
    delay: number;
    zIndex: number;
    parallaxFactor: number;
}

export interface MousePosition {
    x: number;
    y: number;
}
