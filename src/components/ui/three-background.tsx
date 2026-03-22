"use client"

import React, { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count = 1500 }) {
  const points = useRef<THREE.Points>(null!)

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const color1 = new THREE.Color("#ffffff") // White
    const color2 = new THREE.Color("#ff2d55") // Pink accent

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12

      // 20%の確率でピンクにする
      const mixedColor = Math.random() > 0.8 ? color2 : color1
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    const { clock, mouse } = state
    const t = clock.getElapsedTime()
    
    points.current.rotation.y = t * 0.02
    
    points.current.rotation.x = THREE.MathUtils.lerp(
      points.current.rotation.x,
      mouse.y * 0.1,
      0.03
    )
    points.current.rotation.z = THREE.MathUtils.lerp(
      points.current.rotation.z,
      mouse.x * 0.1,
      0.03
    )

    const posAttr = points.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      posAttr[i3 + 1] += Math.sin(t * 0.5 + posAttr[i3]) * 0.0015
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export function ThreeBackground() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  if (!isDesktop) return null

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" 
      style={{ background: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000000 100%)' }}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }} 
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles />
      </Canvas>
    </div>
  )
}
