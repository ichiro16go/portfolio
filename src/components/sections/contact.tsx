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
    <section id="contact" className="py-24 pb-48 bg-surface/50">
      <div className="container px-6 mx-auto max-w-2xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tight mb-6">お問い合わせ</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            {siteConfig.contact.message}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-brand text-background hover:bg-brand-hover w-full sm:w-auto" asChild>
              <a href={`mailto:${siteConfig.contact.email}`}>
                <Mail size={18} className="mr-2" /> メールを送る
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 w-full sm:w-auto" asChild>
              <a href={siteConfig.contact.twitter} target="_blank" rel="noreferrer">
                <Twitter size={18} className="mr-2" /> X (Twitter) でDM
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
