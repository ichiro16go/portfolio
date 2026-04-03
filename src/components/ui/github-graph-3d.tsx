"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useEffect, useState } from "react"

interface Contribution {
  date: string
  count: number
  level: number
}

interface GitHubGraphData {
  contributions: Contribution[]
  total: Record<string, number>
}

function getColor(level: number): string {
  switch (level) {
    case 0: return "#1a2030"
    case 1: return "#064e3b"
    case 2: return "#00b894"
    case 3: return "#00F5D4"
    case 4: return "#D47FF2"
    default: return "#1a2030"
  }
}

function ContributionBars({ weeks, maxCount }: { weeks: Contribution[][], maxCount: number }) {
  return (
    <>
      {/* Floor plane */}
      <mesh position={[weeks.length * 0.9 / 2 - 0.45, -0.04, 3]}>
        <boxGeometry args={[weeks.length * 0.9 + 1, 0.06, 7 * 0.9 + 1]} />
        <meshStandardMaterial color="#0d1117" />
      </mesh>

      {weeks.map((week, weekIdx) =>
        week.map((day, dayIdx) => {
          const height = day.count === 0 ? 0.08 : Math.max((day.count / maxCount) * 5, 0.25)
          const color = getColor(day.level)
          const isGlowing = day.level >= 3
          return (
            <mesh
              key={`${weekIdx}-${dayIdx}`}
              position={[weekIdx * 0.9, height / 2, dayIdx * 0.9]}
            >
              <boxGeometry args={[0.72, height, 0.72]} />
              <meshStandardMaterial
                color={color}
                emissive={isGlowing ? color : "#000000"}
                emissiveIntensity={isGlowing ? 0.4 : 0}
                roughness={0.6}
                metalness={0.2}
              />
            </mesh>
          )
        })
      )}
    </>
  )
}

export function GitHubGraph3D({ username }: { username: string }) {
  const [data, setData] = useState<GitHubGraphData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(res => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [username])

  const weeks: Contribution[][] = []
  if (data) {
    let currentWeek: Contribution[] = []
    for (const contrib of data.contributions) {
      currentWeek.push(contrib)
      if (currentWeek.length === 7) {
        weeks.push(currentWeek)
        currentWeek = []
      }
    }
    if (currentWeek.length > 0) weeks.push(currentWeek)
  }

  const maxCount = weeks.length > 0
    ? Math.max(...weeks.flat().map(c => c.count), 1)
    : 1

  const totalContributions = data
    ? Object.values(data.total).reduce((a, b) => a + b, 0)
    : 0

  if (loading) {
    return (
      <div className="h-80 flex items-center justify-center text-[var(--text-slate)] font-logic text-sm tracking-widest animate-pulse">
        LOADING GRAPH...
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-80 flex items-center justify-center text-[var(--text-slate)] font-logic text-sm tracking-widest">
        FAILED TO LOAD GRAPH
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[var(--text-slate)] font-logic text-xs tracking-widest uppercase">
          GitHub Contributions — Last 365 Days
        </span>
        <span className="text-[var(--brand-cyber)] font-logic text-sm font-bold">
          {totalContributions.toLocaleString()} contributions
        </span>
      </div>
      <div className="h-72 md:h-[380px] w-full rounded-lg overflow-hidden border border-white/5 bg-black/30">
        <Canvas
          camera={{ position: [23, 18, 18], fov: 50 }}
          style={{ background: "transparent" }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[15, 25, 10]} intensity={1.2} />
          <pointLight position={[23, 10, 3]} intensity={0.4} color="#00F5D4" />
          <ContributionBars weeks={weeks} maxCount={maxCount} />
          <OrbitControls
            enableZoom
            enablePan={false}
            target={[21, 0, 3]}
            minDistance={12}
            maxDistance={65}
          />
        </Canvas>
      </div>
      <p className="text-center text-[var(--text-slate)] font-logic text-[10px] mt-2 opacity-40 tracking-widest uppercase">
        drag to rotate · scroll to zoom
      </p>
    </div>
  )
}
