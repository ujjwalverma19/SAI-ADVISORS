import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(max-width: 768px)").matches) return;

        const moveCursor = (e) => {
            if (!cursorRef.current) return;
            cursorRef.current.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 3000, fill: "forwards", easing: "ease-out" });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    // Generate staircase blocks — bigger, brighter, more visible
    const blocks = [];
    const cols = 24;
    const rows = 10;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const distFromCenter = Math.abs(c - cols / 2);
            const baseOpacity = 0.25 - r * 0.018 - distFromCenter * 0.006;
            const opacity = Math.max(0.03, baseOpacity);
            const height = 6 + r * 2;
            blocks.push(
                <div key={`${r}-${c}`} style={{
                    width: '70px',
                    height: '32px',
                    background: `linear-gradient(135deg, rgba(255,255,255,${opacity * 1.2}) 0%, rgba(255,255,255,${opacity * 0.6}) 100%)`,
                    border: `1px solid rgba(255,255,255,${opacity * 0.5})`,
                    borderRadius: '2px',
                    boxShadow: `0 ${height}px ${height * 2}px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,${opacity * 0.3})`,
                    transform: `translateZ(${r * 6}px)`,
                }} />
            );
        }
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, width: '100vw', height: '100vh',
            overflow: 'hidden', zIndex: -1,
            background: 'linear-gradient(180deg, #0c1220 0%, #080d18 40%, #060a12 100%)'
        }}>
            {/* Diagonal light ray — top left */}
            <div style={{
                position: 'absolute',
                top: '-30%', left: '-15%',
                width: '70%', height: '140%',
                background: 'linear-gradient(140deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 30%, transparent 50%)',
                pointerEvents: 'none',
                transform: 'rotate(-8deg)'
            }}></div>

            {/* Diagonal light ray — top right */}
            <div style={{
                position: 'absolute',
                top: '-40%', right: '-20%',
                width: '65%', height: '150%',
                background: 'linear-gradient(220deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 25%, transparent 45%)',
                pointerEvents: 'none',
                transform: 'rotate(5deg)'
            }}></div>

            {/* Accent glow — subtle blue tint at top */}
            <div style={{
                position: 'absolute',
                top: '0', left: '30%',
                width: '40%', height: '50%',
                background: 'radial-gradient(ellipse, rgba(100,140,200,0.04) 0%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
            }}></div>

            {/* Floating particles / dots */}
            {[...Array(12)].map((_, i) => {
                const size = 2 + Math.random() * 3;
                const x = 10 + Math.random() * 80;
                const y = 10 + Math.random() * 70;
                const duration = 15 + Math.random() * 25;
                const delay = Math.random() * -20;
                return (
                    <div key={`p-${i}`} style={{
                        position: 'absolute',
                        left: `${x}%`, top: `${y}%`,
                        width: `${size}px`, height: `${size}px`,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.15)',
                        boxShadow: '0 0 8px rgba(255,255,255,0.1)',
                        animation: `particleFloat ${duration}s ease-in-out infinite`,
                        animationDelay: `${delay}s`,
                        pointerEvents: 'none',
                        zIndex: 3
                    }} />
                );
            })}

            {/* ===== 3D STAIRCASE BLOCKS ===== */}
            <div style={{
                position: 'absolute',
                bottom: '-8%', left: '50%',
                transform: 'translateX(-50%) perspective(600px) rotateX(60deg) rotateZ(-45deg)',
                transformStyle: 'preserve-3d',
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, 70px)`,
                gridTemplateRows: `repeat(${rows}, 32px)`,
                gap: '5px',
                opacity: 0.8,
                pointerEvents: 'none',
                zIndex: 1,
            }}>
                {blocks}
            </div>



            {/* Mouse-following glow */}
            <div ref={cursorRef} style={{
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 65%)',
                filter: 'blur(40px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 4,
                left: '50%', top: '50%'
            }}></div>

            {/* Noise texture */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
                opacity: 0.03,
                pointerEvents: 'none',
                mixBlendMode: 'overlay',
                zIndex: 5
            }}></div>

            <style>{`
                @keyframes particleFloat {
                    0% { transform: translate(0, 0); opacity: 0.15; }
                    25% { transform: translate(15px, -25px); opacity: 0.3; }
                    50% { transform: translate(-10px, -50px); opacity: 0.1; }
                    75% { transform: translate(20px, -20px); opacity: 0.25; }
                    100% { transform: translate(0, 0); opacity: 0.15; }
                }
            `}</style>
        </div>
    );
};

export default InteractiveBackground;
