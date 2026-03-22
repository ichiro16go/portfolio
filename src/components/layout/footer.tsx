"use client";

import { Github, Twitter, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background">
      <div className="container flex justify-between items-center px-6 mx-auto max-w-5xl">
        <div className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name.split("'")[0]}. All Rights Reserved.
        </div>
        <div className="flex gap-4 text-muted-foreground">
          <a href={siteConfig.contact.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Twitter size={18} />
          </a>
          <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
