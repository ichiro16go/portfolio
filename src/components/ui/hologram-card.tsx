/**
 * @file HologramCard.tsx
 * @description ホログラムエフェクト、マウス追従の3D傾斜、およびクリックによるカード反転（裏面表示）機能を備えた
 * インタラクティブなカードコンポーネント。ポートフォリオのプロジェクト表示などに使用されます。
 */

"use client"

import React, { useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface HologramCardProps {
  title: string
  description: string
  imagePlaceholder?: React.ReactNode
  tags: string[]
  achievements?: string[]
}

export function HologramCard({
  title,
  description,
  imagePlaceholder,
  tags,
  achievements
}: HologramCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  // 3D Tilt setup
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  // Glint effect (gradient move)
  const glintX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glintY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5
    x.set(xPct)
    y.set(yPct)
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <div className="perspective-1000 w-full h-[400px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isFlipped ? 0 : rotateX,
          rotateY: isFlipped ? 180 : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full transition-shadow duration-500"
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl border border-white/10 overflow-hidden bg-[var(--bg-deep)]/80 backdrop-blur-md shadow-2xl glass"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Holographic Glint Layer */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none opacity-40"
            style={{
              background: `radial-gradient(circle at ${glintX} ${glintY}, var(--brand-prism) 0%, transparent 60%)`,
            }}
          />

          <div className="h-48 bg-black/40 flex items-center justify-center border-b border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)]/80 to-transparent z-1" />
            <div className="absolute inset-0 z-0">
              {imagePlaceholder}
            </div>
          </div>

          <div className="p-5 flex flex-col h-[calc(100%-192px)]">
            <h3 className="text-xl font-personality mb-2 text-[var(--text-white)] group-hover:text-[var(--brand-prism)] transition-colors">{title}</h3>
            <p className="text-[var(--text-slate)] text-sm font-human line-clamp-3 mb-4">{description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-[10px] font-logic py-0 border-[var(--brand-cyber)]/30 text-[var(--brand-cyber)] bg-[var(--brand-cyber)]/5">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Back Side (Details/Achievements) */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl border border-[var(--brand-prism)]/20 overflow-hidden bg-[var(--bg-deep)] shadow-2xl p-6 flex flex-col"
          style={{ transform: "rotateY(180deg) translateZ(1px)" }}
        >
          {/* Background Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
            <div className="relative w-48 h-48">
              <Image src="/logo/my_logo.png" alt="" fill className="object-contain" />
            </div>
          </div>

          <div className="flex justify-between items-start mb-4 relative z-10">
            <h3 className="text-lg font-personality text-[var(--brand-prism)]">成果・ハイライト</h3>
            <div className="relative w-12 h-12 opacity-80">
              <Image src="/logo/my_logo.png" alt="My Logo" fill className="object-contain" />
            </div>
          </div>

          <ul className="space-y-3 flex-grow relative z-10">
            {achievements?.map((item, i) => (
              <li key={i} className="text-[var(--text-slate)] text-sm font-human flex items-start gap-2">
                {item}
              </li>
            )) || <li className="text-[var(--text-slate)] text-sm italic font-human">詳細情報は準備中です</li>}
          </ul>

          <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center relative z-10">
            <span className="text-[10px] text-[var(--text-slate)] font-logic uppercase tracking-widest">Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
