"use client"

import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { CardNav } from "@/components/layout/card-nav"
import { motion } from "framer-motion"

export default function ExperiencePage() {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-12 px-6">
      <CardNav sectionTitle="Experience" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="container mx-auto max-w-4xl"
      >
        <Experience />
        <Contact />
      </motion.div>
    </main>
  )
}
