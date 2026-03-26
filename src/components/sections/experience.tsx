"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function Experience() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="experience" className="py-24">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-personality uppercase tracking-wider">経歴・インターン歴</h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-6"></div>
          </div>

          <div className="relative flex flex-col gap-8 before:absolute before:top-0 before:left-[19px] sm:before:left-[23px] before:h-full before:w-[2px] before:bg-white/5 pl-12 sm:pl-16">
            
            {siteConfig.experience.map((exp, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[45px] sm:-left-[53px] top-6 w-3 h-3 rounded-full bg-[var(--brand-prism)] border-4 box-content border-[var(--bg-deep)] z-10" />
                
                <Card className="glass shadow-sm p-6 hover:border-[var(--brand-prism)]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-logic font-bold text-[var(--text-white)] uppercase tracking-tight">{exp.title}</h3>
                      <div className="font-logic text-[var(--brand-prism)] text-sm mt-1 uppercase tracking-widest">{exp.company}</div>
                    </div>
                    <div className="font-logic text-sm text-[var(--text-slate)]">{exp.period}</div>
                  </div>
                  
                  <CardContent className="p-0">
                    <p className="mb-4 text-[var(--text-white)]/80 font-human">
                      {exp.description}
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed font-human text-[var(--text-slate)]">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} dangerouslySetInnerHTML={{ __html: highlight.replace(/課題:/g, '<strong>課題:</strong>').replace(/解決策:/g, '<br /><strong>解決策:</strong>') }} />
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
