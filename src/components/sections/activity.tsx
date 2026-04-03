"use client"

import dynamic from "next/dynamic"
import { motion, Variants } from "framer-motion"
import { QiitaArticles } from "@/components/ui/qiita-articles"

const GitHubGraph3D = dynamic(
  () => import("@/components/ui/github-graph-3d").then(m => m.GitHubGraph3D),
  { ssr: false, loading: () => (
    <div className="h-80 flex items-center justify-center text-[var(--text-slate)] font-logic text-sm tracking-widest animate-pulse">
      LOADING GRAPH...
    </div>
  )}
)

const GITHUB_USERNAME = "ichiro16go"
const QIITA_USERNAME = "ichiro16go"

export function Activity() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  return (
    <section id="activity" className="py-24">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <div className="flex items-center mb-16">
            <h2 className="text-3xl font-personality uppercase tracking-wider">Activity & Writing</h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-6" />
          </div>

          {/* GitHub Contribution Graph */}
          <motion.div variants={fadeInUp} className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-cyber)]" />
              <h3 className="font-personality text-lg uppercase tracking-widest text-[var(--text-white)]">
                GitHub
              </h3>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-slate)] font-logic text-xs tracking-widest hover:text-[var(--brand-cyber)] transition-colors ml-1"
              >
                @{GITHUB_USERNAME} ↗
              </a>
            </div>
            <GitHubGraph3D username={GITHUB_USERNAME} />
          </motion.div>

          {/* Qiita Articles */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--brand-prism)]" />
              <h3 className="font-personality text-lg uppercase tracking-widest text-[var(--text-white)]">
                Qiita
              </h3>
              <a
                href={`https://qiita.com/${QIITA_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-slate)] font-logic text-xs tracking-widest hover:text-[var(--brand-prism)] transition-colors ml-1"
              >
                @{QIITA_USERNAME} ↗
              </a>
            </div>
            <QiitaArticles username={QIITA_USERNAME} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
