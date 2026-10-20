"use client";

import { useState } from "react";
import ScrollLink from "@/components/ScrollLink";
import { site } from "@/data/site";

const links = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
];

// animated line that grows under a link on hover
const underline =
  "relative py-1 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-indigo-400 after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <ScrollLink to="top" className="font-semibold text-white">
          {site.name}
        </ScrollLink>

        <div className="flex items-center gap-6 text-sm text-neutral-400">
          {links.map((l) => (
            <ScrollLink key={l.id} to={l.id} className={`hidden sm:block ${underline}`}>
              {l.label}
            </ScrollLink>
          ))}

          <ScrollLink
            to="contact"
            className="rounded-full bg-white px-4 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-500/25 active:translate-y-0 active:scale-95"
          >
            Start a project
          </ScrollLink>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-xl text-neutral-300 transition hover:text-white sm:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-neutral-950/95 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4 text-neutral-300">
            {links.map((l) => (
              <ScrollLink key={l.id} to={l.id} onClick={() => setOpen(false)} className="w-fit">
                {l.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}