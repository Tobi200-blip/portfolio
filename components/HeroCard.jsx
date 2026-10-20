"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site, projects } from "@/data/site";

export default function HeroCard() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* gentle floating motion */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-transparent blur-2xl" />

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
          {site.photo ? (
            <Image
              src={site.photo}
              alt={site.name}
              fill
              priority
              sizes="(min-width: 1024px) 384px, 80vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-6xl font-semibold text-neutral-700">
              {site.name.charAt(0)}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
        </div>

        <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          {projects.length} live products
        </div>
        <div className="absolute -left-3 bottom-8 rounded-full border border-neutral-700 bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur">
          React · Next.js · Tailwind
        </div>
      </motion.div>
    </motion.div>
  );
}