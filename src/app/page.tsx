/**
 * @file page.tsx
 * @description ポートフォリオのメインランディングページ。
 * ローディング、デッキ表示、手札（各セクションへのナビゲーションカード）のドローという、
 * TCG（トレーディングカードゲーム）風の演出を伴うインタラクティブな入口を提供します。
 */

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"

type GameState = "loading" | "deck" | "hand"

export default function Home() {
  const router = useRouter()
  const [gameState, setGameState] = useState<GameState>("loading")
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    if (gameState === "loading") {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setTimeout(() => setGameState("deck"), 500)
            return 100
          }
          return prev + 2
        })
      }, 30)
      return () => {
        clearInterval(timer)
        window.removeEventListener("resize", checkMobile)
      }
    }
    return () => window.removeEventListener("resize", checkMobile)
  }, [gameState])

  const handleDraw = () => setGameState("hand")
  const handleSelectCard = (path: string) => router.push(path)

  return (
    <main className="relative z-10 w-full h-[100dvh] flex items-center justify-center overflow-hidden px-4 bg-[var(--bg-deep)]">
      <AnimatePresence>

        {/* Phase 1: Loading */}
        {gameState === "loading" && (
          <motion.div key="loading" exit={{ opacity: 0, scale: 1.1 }} className="flex flex-col items-center">
            <div className="text-[var(--brand-prism)] font-logic text-2xl md:text-3xl mb-8 tracking-[0.5em] animate-pulse uppercase">
              INITIALIZING...
            </div>
            <div className="w-64 md:w-80 h-1.5 bg-white/5 rounded-full border border-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-[var(--brand-prism)] shadow-[0_0_15px_var(--brand-prism)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}

        {/* Phase 2: Deck (山札) */}
        {gameState === "deck" && (
          <motion.div
            key="deck"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.4 } }}
            className="relative cursor-pointer group flex flex-col items-center"
            onClick={handleDraw}
          >
            {/* Responsive Arched Text */}
            <motion.div
              className="absolute -top-32 md:-top-48 w-[300px] md:w-[600px] h-32 md:h-48 pointer-events-none"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 400 150" className="w-full h-full">
                <path id="curve-deck" d="M 60,120 Q 200,20 340,120" fill="transparent" />
                <text className="fill-[var(--brand-prism)] font-personality text-[36px] md:text-[32px] tracking-[0.1em] md:tracking-[0.2em] uppercase drop-shadow-[0_0_15px_var(--brand-prism)]">
                  <textPath href="#curve-deck" startOffset="50%" textAnchor="middle">
                    "TAP TO DRAW !!"
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                className="absolute inset-0 w-48 md:w-72 h-72 md:h-[420px] rounded-xl md:rounded-2xl border-2 border-[var(--brand-prism)]/20 bg-[var(--bg-deep)]/80 backdrop-blur-sm shadow-2xl"
                style={{ transform: `translate(${i * 3}px, ${-i * 3}px)`, zIndex: -i }}
              />
            ))}
            <div className="w-48 md:w-72 h-72 md:h-[420px] rounded-xl md:rounded-2xl border-2 border-[var(--brand-prism)] bg-[var(--bg-deep)] flex flex-col items-center justify-center p-6 md:p-10 text-center group-hover:shadow-[0_0_80px_var(--brand-prism)] transition-all duration-500 transform group-hover:-translate-y-6 md:group-hover:-translate-y-10 glass">
              {/* <div className="text-[var(--brand-prism)] text-5xl md:text-8xl mb-4 md:mb-8 drop-shadow-[0_0_20px_var(--brand-prism)]">✦</div> */}
              <div className="text-[var(--text-white)] font-personality tracking-widest text-xl md:text-3xl uppercase leading-none">PRISM<br />ARCHITECT</div>
              <Image src="/logo/my_logo.png" alt="My Logo" fill className="object-contain" />
              <div className="mt-6 relative w-12 h-12 opacity-40">
              </div>
            </div>
          </motion.div>
        )}

        {/* Phase 3: Hand (手札) */}
        {gameState === "hand" && (
          <motion.div
            key="hand"
            className="grid grid-cols-2 md:flex md:flex-nowrap justify-center gap-4 md:gap-12 w-full md:w-auto px-4 md:px-12"
          >
            <TCGCard
              title="About Ichiro Miyamoto" icon="" imageSrc="/selfy/スタジオ.jpg"
              desc="自己紹介です。"
              stats={{ level: 3, atk: 2100, def: 1800 }}
              onClick={() => handleSelectCard("/about")} index={0} isMobile={isMobile}
            />
            <TCGCard
              title="Career History" icon="" imageSrc="/selfy/イベントでの.jpg"
              desc="経歴および職歴を掲載しています。"
              stats={{ level: 4, atk: 2400, def: 2000 }}
              onClick={() => handleSelectCard("/experience")} index={1} isMobile={isMobile}
            />
            <TCGCard
              title="Skills" icon="" imageSrc="/logo/my_logo.png"
              desc="主にエンジニアリングで扱えるスキルをまとめています。技術スタックや使用経験のあるツールなどを紹介しています。"
              stats={{ level: 5, atk: 2800, def: 1500 }}
              onClick={() => handleSelectCard("/skills")} index={2} isMobile={isMobile}
            />
            <TCGCard
              title="Feature Projects" icon="" imageSrc="/logo/my_logo.png"
              desc="過去に携わったプロジェクトや開催したイベントの中から、特に注目してほしいものをピックアップして紹介しています。"
              stats={{ level: 4, atk: 2600, def: 1900 }}
              onClick={() => handleSelectCard("/projects")} index={3} isMobile={isMobile}
            />
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  )
}

function TCGCard({ title, icon, imageSrc, desc, stats, onClick, index, isMobile }: {
  title: string, icon: string, imageSrc: string, desc: string, stats: { level: number, atk: number, def: number }, onClick: () => void, index: number, isMobile: boolean
}) {
  let initialX = 0;
  let initialY = 0;

  if (isMobile) {
    initialX = index % 2 === 0 ? 80 : -80;
    initialY = index < 2 ? 120 : -120;
  } else {
    initialX = -(index - 1.5) * 320;
  }

  return (
    <motion.div
      initial={{ x: initialX, y: initialY, scale: 0.1, opacity: 0, rotate: 0 }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: isMobile ? (index % 2 === 0 ? -2 : 2) : (index - 1.5) * 4
      }}
      transition={{ type: "spring", stiffness: 100, damping: 12, delay: index * 0.1 }}
      whileHover={!isMobile ? { y: -60, scale: 1.1, zIndex: 50 } : {}}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative w-full aspect-[2/3] md:w-[280px] md:h-[440px] bg-[var(--bg-deep)] rounded-lg md:rounded-2xl border-[2px] md:border-[4px] border-white/10 p-0.5 md:p-1 shadow-2xl cursor-pointer group overflow-hidden glass"
    >
      <div className="h-full border border-[var(--brand-prism)]/20 rounded-md md:rounded-lg p-2 md:p-4 flex flex-col bg-[var(--bg-deep)]/80 relative z-0">
        {/* Title Bar */}
        <div className="flex justify-between items-center bg-black/40 border-b border-[var(--brand-prism)]/30 px-1.5 md:px-3 py-1 md:py-1.5 rounded-sm mb-1.5 md:mb-3">
          <span className="text-[var(--text-white)] font-logic font-bold text-[10px] md:text-sm uppercase tracking-tight truncate mr-1">{title}</span>
          <span className="text-[var(--brand-prism)] text-xs md:text-xl">{icon}</span>
        </div>

        {/* Level Stars */}
        <div className="flex gap-0.5 md:gap-1.5 mb-1.5 md:mb-3">
          {[...Array(stats.level)].map((_, i) => (
            <span key={i} className="text-[8px] md:text-[12px] text-[var(--brand-prism)]">★</span>
          ))}
        </div>

        {/* Art Box */}
        <div className="flex-grow bg-[#000] rounded border border-white/5 relative overflow-hidden mb-2 md:mb-4 shadow-inner">
          <Image src={imageSrc} alt={title} fill className="object-cover opacity-60 md:group-hover:opacity-100 transition-all duration-500" />
          {/* Logo Watermark */}
          <div className="absolute top-2 right-2 w-6 h-6 opacity-20 group-hover:opacity-40 transition-opacity">
            <Image src="/logo/my_logo.png" alt="Logo" fill className="object-contain" />
          </div>
        </div>

        {/* Desc Box */}
        <div className="bg-black/40 border-l-2 md:border-l-4 border-[var(--brand-prism)] p-1.5 md:p-3 rounded-sm mb-2 md:mb-4 h-12 md:h-24 flex items-center overflow-hidden">
          <p className="text-[8px] md:text-[11px] text-[var(--text-slate)] leading-tight font-human italic line-clamp-2 md:line-clamp-none">
            {desc}
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-end border-t border-white/10 pt-1 md:pt-2 px-0.5 md:px-1">
          <div className="hidden md:block text-[10px] text-[var(--text-slate)] font-logic uppercase tracking-widest opacity-40">ID:0{index}</div>
          <div className="flex gap-2 md:gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-baseline gap-0.5 md:gap-1"><span className="text-[7px] md:text-[9px] text-[var(--text-slate)] font-logic font-bold uppercase">ATK</span><span className="text-[10px] md:text-lg text-[var(--text-white)] font-logic font-black">{stats.atk}</span></div>
            <div className="flex items-baseline gap-0.5 md:gap-1"><span className="text-[7px] md:text-[9px] text-[var(--text-slate)] font-logic font-bold uppercase">DEF</span><span className="text-[10px] md:text-lg text-[var(--text-white)] font-logic font-black">{stats.def}</span></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
