"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export function Skills() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="skills" className="py-24 bg-[var(--bg-deep)]/50">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-personality uppercase tracking-wider text-[var(--text-white)]">スキル・技術力</h2>
            <div className="h-[1px] bg-white/10 flex-grow ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.skills.map((skillGroup, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="glass h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-logic text-[var(--brand-cyber)] uppercase tracking-tight">{skillGroup.category}</CardTitle>
                    <p className="text-sm text-[var(--text-slate)] mt-2 font-human">{skillGroup.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <Badge 
                          key={item} 
                          variant={skillGroup.variant === "outline" ? "outline" : "secondary"} 
                          className={`font-logic uppercase tracking-tighter text-[10px] ${skillGroup.variant === "outline" ? "border-white/10 text-[var(--text-slate)]" : "bg-[var(--brand-cyber)]/5 text-[var(--brand-cyber)] border-[var(--brand-cyber)]/20"}`}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
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
