"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollLink from "@/components/ScrollLink";
import { site } from "@/data/site";

const links = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="sticky top-0 z-50 bg-[#0f3d3e] text-white lg:hidden">
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
        <ScrollLink to="top" onClick={close} className="text-lg font-semibold">
          {site.name}
        </ScrollLink>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-lg transition-all duration-300 hover:bg-white/10 active:scale-90"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              {links.map((l) => (
                <ScrollLink
                  key={l.id}
                  to={l.id}
                  offset={80}
                  onClick={close}
                  className="block border-b border-white/10 py-3.5 text-emerald-50/90 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                offset={80}
                onClick={close}
                className="mt-5 block rounded-full bg-[#ff7a59] px-6 py-3.5 text-center text-sm font-semibold text-[#141a1a] transition-all duration-300 hover:bg-[#ff8d70] active:scale-95"
              >
                Start a project
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}