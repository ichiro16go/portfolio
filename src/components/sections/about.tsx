"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-12">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center gap-6">
          <h2 className="text-4xl font-black tracking-tighter uppercase italic text-pink-500">
            About Me
          </h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-pink-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual Side (Photos) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-pink-500/20 group">
              <Image
                src="/selfy/スタジオ.jpg"
                alt="Portrait"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-pink-500 text-white border-none px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
                  Logical Explorer
                </Badge>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/selfy/イベントでの.jpg"
                alt="Event activity"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="border-white/20 text-white backdrop-blur-md text-[10px] uppercase">
                  Active Builder
                </Badge>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {siteConfig.about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-zinc-300 leading-relaxed text-lg font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
              {siteConfig.about.quickFacts.map((fact, i) => (
                <div key={i} className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 hover:border-pink-500/20 transition-colors">
                  <div className="text-pink-500 text-[10px] font-mono uppercase tracking-widest mb-1">{fact.label}</div>
                  <div className="text-white font-medium text-sm">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
