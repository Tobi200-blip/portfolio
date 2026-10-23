"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Testimonials({ items }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => setIndex((v) => (v + 1) % count), 6000);
    return () => clearInterval(id);
  }, [paused, count]);

  if (!count) return null;

  const t = items[index];
  const prev = () => setIndex((v) => (v - 1 + count) % count);
  const next = () => setIndex((v) => (v + 1) % count);

  const arrow =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0f3d3e] active:scale-95";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="rounded-3xl bg-[#0f3d3e] p-8 text-white sm:p-10"
    >
      <p className="text-xs tracking-[0.2em] text-emerald-100/70">KIND WORDS</p>

      <div className="mt-4 min-h-[170px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <blockquote className="text-xl leading-relaxed sm:text-2xl">“{t.quote}”</blockquote>
            <figcaption className="mt-6 text-sm text-emerald-50/70">
              <span className="font-semibold text-white">{t.name}</span>, {t.role}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center gap-4">
          <button type="button" onClick={prev} aria-label="Previous testimonial" className={arrow}>
            ←
          </button>
          <button type="button" onClick={next} aria-label="Next testimonial" className={arrow}>
            →
          </button>
          <div className="ml-2 flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-[#ff7a59]" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}