"use client";

import { useEffect, useState } from "react";
import ScrollLink from "@/components/ScrollLink";
import { site, projects } from "@/data/site";

const links = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
];

export default function Sidebar() {
  const [active, setActive] = useState("");

  // highlight the menu item for the section currently on screen
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const social =
    "transition-colors duration-300 hover:text-white";

  return (
    <aside className="hidden flex-col bg-[#0f3d3e] px-7 py-10 text-white lg:fixed lg:flex lg:inset-y-0 lg:left-0 lg:w-[360px] lg:overflow-y-auto lg:px-10 lg:py-12 lg:[@media(max-height:800px)]:py-8">
      <p className="text-xs tracking-[0.2em] text-emerald-100/70">FRONTEND DEVELOPER</p>
      <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{site.name}</h1>
      <p className="mt-5 max-w-xs leading-relaxed text-emerald-50/80">
        React, Next.js and Tailwind CSS. {projects.length} live products shipped, and I reply within{" "}
        {site.replyTime}.
      </p>

      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 lg:mt-10 lg:block lg:[@media(max-height:800px)]:mt-6">
        {links.map((l) => (
          <ScrollLink
            key={l.id}
            to={l.id}
            className={`relative py-1 transition-colors duration-300 hover:text-white after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:origin-left after:bg-[#ff7a59] after:transition-transform after:duration-300 hover:after:scale-x-100 lg:block lg:border-b lg:border-white/15 lg:py-3 lg:[@media(max-height:800px)]:py-2 ${
              active === l.id ? "text-white after:scale-x-100" : "text-emerald-50/75 after:scale-x-0"
            }`}
          >
            {l.label}
          </ScrollLink>
        ))}
      </nav>

      <div className="mt-10 lg:mt-auto">
        <p className="flex items-center gap-2 text-sm text-emerald-50/80">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
          Available for new projects
        </p>
        <ScrollLink
          to="contact"
          className="mt-3 block rounded-full bg-[#ff7a59] px-6 py-3.5 text-center text-sm font-semibold text-[#141a1a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8d70] hover:shadow-lg hover:shadow-black/30 active:translate-y-0 active:scale-[0.98]"
        >
          Start a project
        </ScrollLink>
        <p className="mt-5 flex flex-wrap justify-center gap-x-3 text-xs text-emerald-50/60">
          <a href={`mailto:${site.email}`} className={social}>Email</a>
          <span>·</span>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={social}>WhatsApp</a>
          <span>·</span>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={social}>GitHub</a>
          {site.linkedin && (
            <>
              <span>·</span>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={social}>LinkedIn</a>
            </>
          )}
        </p>
      </div>
    </aside>
  );
}