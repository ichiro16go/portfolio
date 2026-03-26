"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 glass z-50 transition-all">
      <div className="container flex justify-between items-center px-6 mx-auto max-w-5xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            <Image src="/logo/my_logo.png" alt="My Logo" fill className="object-contain" />
          </div>
          <div className="text-xl font-personality tracking-tight text-[var(--text-white)] group-hover:text-[var(--brand-prism)] transition-colors">
            {siteConfig.name.split("'")[0]}
          </div>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-logic text-[var(--text-slate)] hover:text-[var(--brand-prism)] transition-colors uppercase tracking-wider">
              {link.name}
            </a>
          ))}
          <Button variant="outline" size="sm" asChild className="font-logic border-[var(--brand-cyber)]/30 text-[var(--brand-cyber)] hover:bg-[var(--brand-cyber)]/10 hover:border-[var(--brand-cyber)]">
            <a href="#contact">GET IN TOUCH</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
