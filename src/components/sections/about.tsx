/**
 * @file about.tsx
 * @description 「About Me」セクション。
 * 経歴、数学的背景、開発に対する考え方などの自己紹介情報を表示します。
 */

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center gap-6">
          <h2 className="text-4xl font-personality tracking-tighter uppercase text-[var(--brand-prism)]">
            About Me
          </h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-[var(--brand-prism)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual Side (Photos) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[var(--brand-prism)]/20 group">
              <Image
                src="/selfy/スタジオ.jpg"
                alt="Portrait"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              {/* <div className="absolute bottom-6 left-6">
                <Badge className="bg-[var(--brand-prism)] text-[var(--bg-deep)] border-none px-3 py-1 text-[10px] font-logic tracking-widest uppercase">
                  Logical Explorer
                </Badge>
              </div> */}
            </div>

            {/* <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/selfy/イベントでの.jpg"
                alt="Event activity"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--brand-prism)]/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="border-white/20 text-white backdrop-blur-md text-[10px] font-logic uppercase tracking-widest">
                  Active Builder
                </Badge>
              </div>
            </div> */}
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {siteConfig.about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-[var(--text-white)] leading-relaxed text-lg font-human">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
              {siteConfig.about.quickFacts.map((fact, i) => (
                <div key={i} className="glass p-4 rounded-xl hover:border-[var(--brand-prism)]/50 transition-colors">
                  <div className="text-[var(--brand-cyber)] text-[10px] font-logic uppercase tracking-widest mb-1">{fact.label}</div>
                  <div className="text-[var(--text-white)] font-human text-sm">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
