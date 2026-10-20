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
    "flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:text-white active:scale-95";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="mx-auto max-w-2xl rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 text-center sm:p-12"
    >
      <div className="flex min-h-[200px] items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <blockquote className="text-lg leading-relaxed text-neutral-200 sm:text-xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-neutral-500">
              <span className="text-neutral-300">{t.name}</span>, {t.role}
              {t.sample && (
                <span className="ml-2 rounded-full border border-amber-500/40 px-2 py-0.5 text-xs text-amber-400">
                  Sample
                </span>
              )}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button type="button" onClick={prev} aria-label="Previous testimonial" className={arrow}>
            ←
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-indigo-400" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Next testimonial" className={arrow}>
            →
          </button>
        </div>
      )}
    </div>
  );
}