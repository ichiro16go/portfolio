"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-background/80 backdrop-blur-md z-50 border-b border-white/5 transition-all">
      <div className="container flex justify-between items-center px-6 mx-auto max-w-5xl">
        <div className="text-xl font-bold tracking-tight text-foreground font-mono">
          {siteConfig.name.split("'")[0].replace(" Ichiro", "I.")}
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.name}
            </a>
          ))}
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">お問い合わせ</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
