"use client";

import { Github, Twitter, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[var(--bg-deep)]">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/logo/my_logo.png" alt="My Logo" fill className="object-contain" />
            </div>
            <div className="font-personality text-lg tracking-tight text-[var(--text-white)]">
              {siteConfig.name.split("'")[0]}
            </div>
          </div>
          
          <div className="font-logic text-[10px] text-[var(--text-slate)] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} PRISM ARCHITECT. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex gap-6 text-[var(--text-slate)]">
            <a href={siteConfig.contact.github} target="_blank" rel="noreferrer" className="hover:text-[var(--brand-prism)] transition-colors">
              <Github size={20} />
            </a>
            <a href={siteConfig.contact.twitter} target="_blank" rel="noreferrer" className="hover:text-[var(--brand-prism)] transition-colors">
              <Twitter size={20} />
            </a>
            <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--brand-prism)] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-logic text-[var(--text-slate)]/50 uppercase tracking-widest">
           <div>DESIGNED BY ICHIRO MIYAMOTO</div>
           <div>WASEDA UNIVERSITY • MATHEMATICS</div>
        </div>
      </div>
    </footer>
  );
}
