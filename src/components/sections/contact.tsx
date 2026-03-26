"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Contact() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 pb-48 bg-[var(--bg-deep)]/50">
      <div className="container px-6 mx-auto max-w-2xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-personality uppercase tracking-wider mb-8">お問い合わせ</h2>
          <p className="text-[var(--text-slate)] mb-12 text-lg font-human leading-relaxed">
            {siteConfig.contact.message}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" className="bg-[var(--brand-prism)] text-[var(--bg-deep)] hover:bg-[var(--brand-prism)]/90 font-logic uppercase tracking-widest px-8 w-full sm:w-auto" asChild>
              <a href={`mailto:${siteConfig.contact.email}`}>
                <Mail size={18} className="mr-2" /> SEND EMAIL
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-[var(--brand-cyber)]/30 text-[var(--brand-cyber)] hover:bg-[var(--brand-cyber)]/5 font-logic uppercase tracking-widest px-8 w-full sm:w-auto" asChild>
              <a href={siteConfig.contact.twitter} target="_blank" rel="noreferrer">
                <Twitter size={18} className="mr-2" /> DIRECT MESSAGE
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
