"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

type GameState = "loading" | "deck" | "hand"

export default function Home() {
  const router = useRouter()
  const [gameState, setGameState] = useState<GameState>("loading")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
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
      return () => clearInterval(timer)
    }
  }, [gameState])

  const handleDraw = () => setGameState("hand")

  const handleSelectCard = (path: string) => {
    router.push(path)
  }

  return (
    <main className="relative z-10 w-full h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        
        {/* Phase 1: Loading */}
        {gameState === "loading" && (
          <motion.div key="loading" exit={{ opacity: 0, scale: 1.1 }} className="flex flex-col items-center">
            <div className="text-pink-500 font-black text-3xl mb-8 tracking-[0.5em] animate-pulse italic">
              INITIALIZING...
            </div>
            <div className="w-80 h-2 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,45,85,0.2)] overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-pink-600 to-pink-400 shadow-[0_0_15px_#ff2d55]" 
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
            <motion.div 
              className="absolute -top-48 w-[600px] h-48 pointer-events-none"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 400 150" className="w-full h-full">
                <path id="curve-deck" d="M 40,120 Q 200,10 360,120" fill="transparent" />
                <text className="fill-pink-500 font-black text-[32px] tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(255,45,85,0.9)] italic">
                  <textPath href="#curve-deck" startOffset="50%" textAnchor="middle">
                    Draw Your Legend !!
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                className="absolute inset-0 w-72 h-[420px] rounded-2xl border-2 border-pink-500/20 bg-[#080808] shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                style={{ transform: `translate(${i * 4}px, ${-i * 4}px)`, zIndex: -i }}
              >
                <div className="absolute inset-3 border border-pink-500/10 rounded-xl bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)] flex items-center justify-center">
                   <div className="text-pink-500/5 text-9xl">✦</div>
                </div>
              </motion.div>
            ))}
            <div className="w-72 h-[420px] rounded-2xl border-[6px] border-pink-500 bg-[#050505] flex flex-col items-center justify-center p-10 text-center group-hover:shadow-[0_0_100px_rgba(255,45,85,0.8)] transition-all duration-500 transform group-hover:-translate-y-10 group-hover:rotate-1">
              <div className="text-pink-500 text-8xl mb-8 drop-shadow-[0_0_20px_#ff2d55]">✦</div>
              <div className="text-white font-black tracking-[0.1em] text-3xl uppercase leading-none italic">THE<br/>DUEL</div>
              <div className="mt-12 text-[14px] text-pink-500 font-mono tracking-[0.3em] font-bold opacity-80">VER. 2026.03</div>
            </div>
          </motion.div>
        )}

        {/* Phase 3: Hand (手札) */}
        {gameState === "hand" && (
          <motion.div 
            key="hand" 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="flex flex-wrap justify-center gap-12 px-12"
          >
            <TCGCard 
              title="The Scholar" icon="👤" 
              desc="Mathematical logic is the sword. Abstraction is the shield. A seeker of truth from Waseda."
              stats={{ level: 3, atk: 2100, def: 1800 }}
              onClick={() => handleSelectCard("/about")} index={0} 
            />
            <TCGCard 
              title="The Architect" icon="💼" 
              desc="Building bridges between business dreams and technical reality. Every line of code has a purpose."
              stats={{ level: 4, atk: 2400, def: 2000 }}
              onClick={() => handleSelectCard("/experience")} index={1} 
            />
            <TCGCard 
              title="The Polyglot" icon="⚡" 
              desc="Versatile master of modern stacks. Adapts to any environment with lightning speed."
              stats={{ level: 5, atk: 2800, def: 1500 }}
              onClick={() => handleSelectCard("/skills")} index={2} 
            />
            <TCGCard 
              title="The Creator" icon="🚀" 
              desc="Bringing high-performance artifacts into existence. Driven by the ultimate user experience."
              stats={{ level: 4, atk: 2600, def: 1900 }}
              onClick={() => handleSelectCard("/projects")} index={3} 
            />
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  )
}

function TCGCard({ title, icon, desc, stats, onClick, index }: { 
  title: string, icon: string, desc: string, stats: { level: number, atk: number, def: number }, onClick: () => void, index: number 
}) {
  const initialX = -(index - 1.5) * 320;
  return (
    <motion.div
      initial={{ x: initialX, y: 0, scale: 0.1, opacity: 0, rotate: 0 }}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: (index - 1.5) * 5 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.15 }}
      whileHover={{ y: -80, rotate: 0, scale: 1.15, zIndex: 50 }}
      onClick={onClick}
      className="relative w-[280px] h-[440px] bg-[#111] rounded-2xl border-[8px] border-[#1a1a1a] p-1 shadow-[0_30px_60px_rgba(0,0,0,0.8)] cursor-pointer group overflow-hidden"
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      <div className="h-full border-2 border-pink-500/50 rounded-lg p-4 flex flex-col bg-[#0a0a0a] shadow-inner relative z-0">
        <div className="flex justify-between items-center bg-gradient-to-r from-pink-900/40 to-black border-b-2 border-pink-500/40 px-3 py-1.5 rounded-sm mb-3 shadow-md">
          <span className="text-white font-black text-sm uppercase tracking-tighter italic">{title}</span>
          <span className="text-pink-500 text-xl drop-shadow-[0_0_8px_#ff2d55]">{icon}</span>
        </div>
        <div className="flex gap-1.5 mb-3 px-1">
          {[...Array(stats.level)].map((_, i) => (
            <span key={i} className="text-[12px] text-pink-500 drop-shadow-[0_0_3px_#ff2d55]">★</span>
          ))}
        </div>
        <div className="flex-grow bg-[#000] rounded-md border-2 border-white/5 flex items-center justify-center relative overflow-hidden mb-4 shadow-inner">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)] opacity-40" />
           <div className="text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-110">{icon}</div>
        </div>
        <div className="bg-[#080808] border-l-4 border-pink-500 p-3 rounded-sm mb-4 shadow-md h-24 flex items-center">
          <p className="text-[11px] text-zinc-300 leading-snug italic font-medium">
            "{desc}"
          </p>
        </div>
        <div className="flex justify-between items-end border-t-2 border-white/10 pt-2 px-1">
           <div className="text-[10px] text-zinc-500 font-mono font-black uppercase">Stat-ID: {index}</div>
           <div className="flex gap-4 items-baseline">
              <div className="flex items-baseline gap-1"><span className="text-[9px] text-zinc-600 font-bold uppercase">ATK</span><span className="text-lg text-white font-mono font-black tracking-tighter">{stats.atk}</span></div>
              <div className="flex items-baseline gap-1"><span className="text-[9px] text-zinc-600 font-bold uppercase">DEF</span><span className="text-lg text-white font-mono font-black tracking-tighter">{stats.def}</span></div>
           </div>
        </div>
      </div>
    </motion.div>
  )
}
