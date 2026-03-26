"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function CardNav({ sectionTitle }: { sectionTitle: string }) {
  const router = useRouter()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-deep)]/40 backdrop-blur-md border-b border-[var(--brand-prism)]/20"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => router.push("/")}
          className="text-[var(--brand-prism)] font-logic font-bold tracking-tight text-sm hover:text-[var(--brand-prism)]/80 flex items-center gap-2 group uppercase"
        >
          <span className="group-hover:-translate-x-1 transition-transform">◀</span> RETURN TO HAND
        </button>
        <div className="text-[var(--brand-prism)]/50 font-logic text-[10px] uppercase tracking-[0.3em] font-bold">
          PHASE: {sectionTitle.toUpperCase()}
        </div>
      </div>
    </motion.nav>
  )
}
