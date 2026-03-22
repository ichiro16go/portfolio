"use client"

import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { CardNav } from "@/components/layout/card-nav"
import { motion } from "framer-motion"

export default function SkillsPage() {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-12 px-6">
      <CardNav sectionTitle="Skills" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="container mx-auto max-w-4xl"
      >
        <Skills />
        <Contact />
      </motion.div>
    </main>
  )
}
