import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader.js';
import * as THREE from 'three';

extend({ TextGeometry });

declare module '@react-three/fiber' {
    interface ThreeElements {
        textGeometry: object;
    }
}

const mousePos = { x: 0, y: 0 };

function BlonkText({ font }: { font: Font }) {
    const meshRef = useRef<THREE.Group>(null);
    const initialized = useRef(false);
    const [ready, setReady] = useState(false);
    const lastViewportWidth = useRef(0);
    const stableFrames = useRef(0);
    const { viewport } = useThree();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
            mousePos.y = -((e.clientY / window.innerHeight) * 2 - 1);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        // Wait for viewport to stabilize before showing
        if (!ready) {
            if (Math.abs(viewport.width - lastViewportWidth.current) < 0.01) {
                stableFrames.current++;
                if (stableFrames.current > 5) {
                    setReady(true);
                }
            } else {
                stableFrames.current = 0;
            }
            lastViewportWidth.current = viewport.width;
            return;
        }

        if (!meshRef.current) return;

        const targetRotationY = (mousePos.x * Math.PI) / 12;
        const targetRotationX = (-mousePos.y * Math.PI) / 12;

        if (!initialized.current) {
            meshRef.current.rotation.y = targetRotationY;
            meshRef.current.rotation.x = targetRotationX;
            initialized.current = true;
            return;
        }

        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            targetRotationY,
            0.1
        );
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
            meshRef.current.rotation.x,
            targetRotationX,
            0.1
        );
    });

    const scale = Math.min(viewport.width / 3, 3);

    const geometry = useMemo(() => {
        const geo = new TextGeometry('blonk', {
            font,
            size: scale,
            depth: 1.2,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 5,
        });
        geo.center();
        return geo;
    }, [font, scale]);

    if (!ready) return null;

    return (
        <group ref={meshRef}>
            <mesh geometry={geometry}>
                <meshStandardMaterial
                    color="#ffffff"
                    metalness={0.3}
                    roughness={0.4}
                />
            </mesh>
        </group>
    );
}

function Scene() {
    const [font, setFont] = useState<Font | null>(null);

    useEffect(() => {
        const ttfLoader = new TTFLoader();
        const fontLoader = new FontLoader();

        ttfLoader.load('/Sniglet-ExtraBold.ttf', (fontData) => {
            const font = fontLoader.parse(fontData);
            setFont(font);
        });
    }, []);

    if (!font) return null;

    return <BlonkText font={font} />;
}

export function Logo3D() {
    return (
        <div className="h-[280px] w-screen -ml-[50vw] left-1/2 relative">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-5, -5, 5]} intensity={0.3} />
                <Scene />
            </Canvas>
        </div>
    );
}
