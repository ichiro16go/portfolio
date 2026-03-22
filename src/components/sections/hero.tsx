"use client";

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
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-20">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div 
            variants={fadeInUp} 
            className="inline-block px-3 py-1 mb-6 text-xs font-medium uppercase tracking-wider text-brand border border-brand/20 bg-brand/10 rounded-full font-mono"
          >
            {siteConfig.hero.role}
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            論理的かつ<br />
            <span className="bg-gradient-to-br from-brand to-indigo-400 bg-clip-text text-transparent">
              ダイナミックなWeb体験を。
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            {siteConfig.hero.description}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button size="lg" className="bg-brand text-background hover:bg-brand-hover" asChild>
              <a href="#projects">
                {siteConfig.hero.ctaText} <ChevronRight size={18} className="ml-2" />
              </a>
            </Button>
            <div className="flex gap-4">
              <a href={siteConfig.contact.github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/5 hover:-translate-y-0.5 transition-all">
                <Github size={20} />
              </a>
              <a href={siteConfig.contact.twitter} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/5 hover:-translate-y-0.5 transition-all">
                <Twitter size={20} />
              </a>
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/5 hover:-translate-y-0.5 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
