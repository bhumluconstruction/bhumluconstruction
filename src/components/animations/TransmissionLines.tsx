"use client";

import { useMemo } from "react";

function seededRandom(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967295;
  };
}

function makeLongPath(random: () => number, width = 1600, amp = 60) {
  const segments = 28;
  const yBase = 260; // vertical baseline for the line
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = t * width;
    const noise = (random() - 0.5) * 30;
    const y = yBase + Math.sin(t * Math.PI * 2 + random() * 4) * amp * (0.6 + random() * 0.4) + noise;
    points.push({ x, y });
  }

  // build a smooth path using quadratic curves
  let d = `M ${-80} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const cur = points[i];
    const cx = (prev.x + cur.x) / 2;
    const cy = (prev.y + cur.y) / 2;
    d += ` Q ${prev.x} ${prev.y} ${cx} ${cy}`;
  }
  const last = points[points.length - 1];
  d += ` T ${width + 80} ${last.y}`;

  // approximate midpoint y for placing tower
  const midIndex = Math.floor(points.length / 2);
  const midY = (points[midIndex].y + points[midIndex + 1]?.y) / 2 || points[midIndex].y;

  return { d, midY, points };
}

export default function TransmissionLines({
  responsive = true,
  accent = true,
  tower = true,
  amplitude = 80,
  floatSpeed = 6,
  pathSpeed = 28,
  towerScale = 1.2,
  towerYOffset = -12,
  towerCount = 0,
  towerScaleLarge = 2.4,
  seed = 4242,
}: {
  responsive?: boolean;
  accent?: boolean;
  tower?: boolean;
  amplitude?: number;
  floatSpeed?: number;
  pathSpeed?: number;
  towerScale?: number;
  towerYOffset?: number;
  towerCount?: number;
  towerScaleLarge?: number;
  seed?: number;
}) {
  const { d, midY, points } = useMemo(() => {
    const rand = seededRandom(seed);
    return makeLongPath(rand, 1600, amplitude);
  }, [amplitude, seed]);

  // Use currentColor so parent can control accent via Tailwind `text-amber-500`
  const svgClass = accent ? "pointer-events-none absolute inset-0 z-10 w-full h-full text-amber-500" : "pointer-events-none absolute inset-0 z-10 w-full h-full";

  return (
    <svg
      className={svgClass}
      viewBox="0 0 1600 520"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ mixBlendMode: "screen", opacity: 0.95 }}
      />

      {tower ? (
        <g
          transform={`translate(800 ${midY + towerYOffset}) scale(${towerScale})`}
          style={{ transformOrigin: `800px ${midY + towerYOffset}px` }}
          className="opacity-90"
        >
          <g className="tower" style={{ animation: `float ${floatSpeed}s ease-in-out infinite` }}>
            {/* detailed tower: two main legs, cross braces, crossarms, insulators */}
            <path
              d="M0 0 L -12 60 M0 0 L 12 60"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity={0.95}
            />

            {/* cross braces */}
            <path d="M-10 18 L -2 30 L -6 36 L -14 24 Z" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.55} />
            <path d="M10 18 L2 30 L6 36 L14 24 Z" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.55} />

            {/* crossarms */}
            <line x1="-20" y1="22" x2="20" y2="22" stroke="currentColor" strokeWidth={2} opacity={0.9} />
            <line x1="-16" y1="38" x2="16" y2="38" stroke="currentColor" strokeWidth={1.6} opacity={0.85} />

            {/* insulators */}
            <g fill="currentColor" opacity={0.95}>
              <circle cx="-22" cy="22" r="2" />
              <circle cx="0" cy="22" r="2" />
              <circle cx="22" cy="22" r="2" />
            </g>

            {/* lower cross braces */}
            <line x1="-8" y1="46" x2="8" y2="46" stroke="currentColor" strokeWidth={1} opacity={0.6} />

            <rect x={-24} y={58} width={48} height={6} rx={3} fill="currentColor" opacity={0.06} />
          </g>
        </g>
      ) : null}

      {towerCount > 0 && points ? (
        // render one or more large random towers along the path
        points && (
          <g>
            {Array.from({ length: towerCount }).map((_, idx) => {
              const rand = seededRandom(seed + 100 + idx);
              const i = Math.floor(rand() * (points.length - 2)) + 1;
              const px = points[i].x || 800;
              const py = (points[i].y + points[i + 1]?.y) / 2 || midY;
              return (
                <g
                  key={idx}
                  transform={`translate(${px} ${py + towerYOffset}) scale(${towerScaleLarge})`}
                  style={{ transformOrigin: `${px}px ${py + towerYOffset}px` }}
                  className="opacity-95"
                >
                  <g style={{ animation: `float ${floatSpeed + idx}s ease-in-out ${idx * 0.3}s infinite` }}>
                    {/* large detailed tower */}
                    <path
                      d="M0 0 L -24 120 M0 0 L 24 120"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      opacity={0.98}
                    />
                    <path d="M-20 36 L -4 60 L -12 68 L -28 44 Z" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.6} />
                    <path d="M20 36 L4 60 L12 68 L28 44 Z" fill="none" stroke="currentColor" strokeWidth={1.4} opacity={0.6} />
                    <line x1="-34" y1="48" x2="34" y2="48" stroke="currentColor" strokeWidth={2.2} opacity={0.95} />
                    <line x1="-28" y1="76" x2="28" y2="76" stroke="currentColor" strokeWidth={1.6} opacity={0.9} />
                    <g fill="currentColor" opacity={0.95}>
                      <circle cx="-36" cy="48" r="3" />
                      <circle cx="0" cy="48" r="3" />
                      <circle cx="36" cy="48" r="3" />
                    </g>
                    <rect x={-40} y={116} width={80} height={10} rx={4} fill="currentColor" opacity={0.06} />
                  </g>
                </g>
              );
            })}
          </g>
        )
      ) : null}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        /* subtle dash animation for the line */
        path {
          stroke-dasharray: 800;
          animation: dash ${pathSpeed}s linear infinite;
        }
        @keyframes dash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -800; }
        }
      `}</style>
    </svg>
  );
}
