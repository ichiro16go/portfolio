"use client"

import React, { useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"

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
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl border border-white/10 overflow-hidden bg-zinc-900/80 backdrop-blur-md shadow-2xl"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Holographic Glint Layer */}
          <motion.div 
            className="absolute inset-0 z-10 pointer-events-none opacity-40"
            style={{
              background: `radial-gradient(circle at ${glintX} ${glintY}, rgba(255,45,85,0.4) 0%, transparent 60%)`,
            }}
          />
          
          <div className="h-48 bg-black/40 flex items-center justify-center border-b border-white/5 overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-1" />
             <div className="z-0 scale-110 group-hover:scale-125 transition-transform duration-700">
               {imagePlaceholder}
             </div>
          </div>

          <div className="p-5 flex flex-col h-[calc(100%-192px)]">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-500 transition-colors">{title}</h3>
            <p className="text-zinc-400 text-sm line-clamp-3 mb-4">{description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-[10px] py-0 border-pink-500/30 text-pink-400 bg-pink-500/5">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Back Side (Details/Achievements) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl border border-pink-500/20 overflow-hidden bg-zinc-900 shadow-2xl p-6"
          style={{ transform: "rotateY(180deg) translateZ(1px)" }}
        >
          <h3 className="text-lg font-bold mb-4 text-pink-500">成果・ハイライト</h3>
          <ul className="space-y-3">
            {achievements?.map((item, i) => (
              <li key={i} className="text-zinc-300 text-sm flex items-start gap-2">
                <span className="text-pink-500 mt-1">✦</span>
                {item}
              </li>
            )) || <li className="text-zinc-500 text-sm italic">詳細情報は準備中です</li>}
          </ul>
          
          <div className="absolute bottom-6 left-6 right-6 pt-4 border-t border-white/5">
            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
