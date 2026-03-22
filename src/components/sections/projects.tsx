"use client";

import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/config/site";
import { HologramCard } from "@/components/ui/hologram-card";

export function Projects() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="projects" className="py-24 overflow-visible">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
        >
          <div className="flex items-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="text-pink-500 mr-2">✦</span>
              Featured Projects
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-pink-500/50 to-transparent flex-grow ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {siteConfig.projects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <HologramCard 
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imagePlaceholder={
                    <div className="font-mono text-zinc-600 text-xs uppercase tracking-tighter">
                      {project.imagePlaceholder}
                    </div>
                  }
                  achievements={
                    project.type === "app" 
                      ? ["要件定義からデプロイまで担当", "React Native / Expo による高速開発", "UI/UX設計の最適化"]
                      : ["技術的深掘りとアウトプット", "ハイドレーションの仕組みを詳解", "コミュニティへの知見共有"]
                  }
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
