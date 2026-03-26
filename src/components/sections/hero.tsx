/**
 * @file hero.tsx
 * @description 「Hero」セクション。
 * ページ最上部で訪問者を迎える、インパクトのあるキャッチコピーと導入部分を表示します。
 */

"use client"
;

import { motion, Variants } from "framer-motion";
import { Github, Twitter, Instagram, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-20 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[var(--brand-prism)]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[var(--brand-cyber)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div 
            variants={fadeInUp} 
            className="inline-block px-3 py-1 mb-6 text-xs font-logic uppercase tracking-[0.2em] text-[var(--brand-cyber)] border border-[var(--brand-cyber)]/20 bg-[var(--brand-cyber)]/5 rounded-sm"
          >
            {siteConfig.hero.role}
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-personality leading-[0.9] mb-8 tracking-tighter">
            MIYAMOTO <br />
            ICHIRO
          </motion.h1>
          <motion.div variants={fadeInUp} className="mb-10">
             <h2 className="text-2xl md:text-3xl font-human font-bold leading-tight mb-4">
                論理的かつ<br />
                <span className="bg-gradient-to-br from-[var(--brand-prism)] to-[var(--brand-cyber)] bg-clip-text text-transparent">
                  ダイナミックなWeb体験を。
                </span>
             </h2>
             <p className="text-lg text-[var(--text-slate)] max-w-2xl leading-relaxed font-human">
               {siteConfig.hero.description}
             </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button size="lg" className="bg-[var(--brand-prism)] text-[var(--bg-deep)] hover:bg-[var(--brand-prism)]/90 font-logic uppercase tracking-widest px-8" asChild>
              <a href="#projects">
                {siteConfig.hero.ctaText} <ChevronRight size={18} className="ml-2" />
              </a>
            </Button>
            <div className="flex gap-4">
              <a href={siteConfig.contact.github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-[var(--text-slate)] hover:text-[var(--brand-prism)] hover:border-[var(--brand-prism)]/50 transition-all">
                <Github size={20} />
              </a>
              <a href={siteConfig.contact.twitter} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-[var(--text-slate)] hover:text-[var(--brand-prism)] hover:border-[var(--brand-prism)]/50 transition-all">
                <Twitter size={20} />
              </a>
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-[var(--text-slate)] hover:text-[var(--brand-prism)] hover:border-[var(--brand-prism)]/50 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
