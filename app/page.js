import Image from "next/image";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import HeroCard from "@/components/HeroCard";
import Testimonials from "@/components/Testimonials";
import ScrollLink from "@/components/ScrollLink";
import { site, services, projects, skillGroups, steps, about, testimonials } from "@/data/site";

const btnPrimary =
  "inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-500/25 active:translate-y-0 active:scale-95";
const btnGhost =
  "inline-block rounded-full border border-neutral-700 px-6 py-3 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:bg-neutral-900 hover:text-white hover:shadow-lg hover:shadow-indigo-500/10 active:translate-y-0 active:scale-95";

function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal className="mb-10">
      <p className="mb-2 text-xs tracking-[0.2em] text-indigo-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-clip bg-neutral-950 text-neutral-300">
      <Navbar />

      {/* soft glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* HERO */}
        <section className="grid min-h-screen items-center gap-12 pb-12 pt-28 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for new projects
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-white sm:text-6xl">
                I build fast websites and web apps that{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  turn visitors into customers.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-neutral-400">
                {site.role} working with JavaScript, React, Next.js and Tailwind CSS. I have shipped{" "}
                {projects.length} live products, and I can do the same for your business.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
              <ScrollLink to="contact" className={btnPrimary}>
                Start a project
              </ScrollLink>
              <ScrollLink to="work" className={btnGhost}>
                See my work
              </ScrollLink>
            </Reveal>
            <Reveal delay={0.4} className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-500">
              <span>✓ {projects.length} live products</span>
              <span>✓ Mobile-first and SEO-ready</span>
              <span>✓ Reply within {site.replyTime}</span>
            </Reveal>
          </div>

          <HeroCard />
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <SectionTitle eyebrow="WHAT I DO" title="How I can help your business" />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-700">
                  <h3 className="font-medium text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="scroll-mt-20 py-20">
          <SectionTitle eyebrow="SELECTED WORK" title="Products I built and shipped" />
          <div className="space-y-6">
            {projects.map((p, i) => (
              <Reveal key={p.name}>
                <article className="group rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 transition duration-300 hover:border-indigo-500/40 hover:bg-neutral-900/70 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-neutral-500">0{i + 1}</p>
                      <h3 className="mt-1 text-2xl font-semibold text-white">{p.name}</h3>
                      <p className="mt-1 text-sm text-neutral-400">{p.tagline}</p>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 active:scale-95"
                    >
                      Visit live site
                      <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  </div>

                  <div className="mt-6 grid gap-6 border-t border-neutral-800 pt-6 text-sm leading-relaxed md:grid-cols-3">
                    <div>
                      <p className="mb-2 text-xs tracking-widest text-indigo-400">THE PROBLEM</p>
                      <p className="text-neutral-400">{p.problem}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs tracking-widest text-indigo-400">WHAT I BUILT</p>
                      <p className="text-neutral-400">{p.built}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs tracking-widest text-indigo-400">THE RESULT</p>
                      <p className="text-neutral-400">{p.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-20 py-20">
          <SectionTitle eyebrow="SKILLS" title="Tools I build with" />
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
                  <h3 className="font-medium text-white">{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-neutral-800 px-3 py-1.5 text-sm text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/50 hover:text-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        {testimonials.length > 0 && (
          <section className="py-20">
            <SectionTitle eyebrow="KIND WORDS" title="What clients say" />
            <Reveal>
              <Testimonials items={testimonials} />
            </Reveal>
          </section>
        )}

        {/* PROCESS */}
        <section id="process" className="scroll-mt-20 py-20">
          <SectionTitle eyebrow="HOW IT WORKS" title="A simple, no-surprises process" />
          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-neutral-800 p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-700">
                  <p className="text-sm text-indigo-400">0{i + 1}</p>
                  <h3 className="mt-3 font-medium text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 py-20">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            {site.photo && (
              <Reveal>
                <Image
                  src={site.photo}
                  alt={site.name}
                  width={220}
                  height={220}
                  className="h-[220px] w-[220px] rounded-3xl object-cover grayscale transition duration-500 hover:grayscale-0"
                />
              </Reveal>
            )}
            <div>
              <SectionTitle eyebrow="ABOUT" title={`Hi, I'm ${site.name}`} />
              <Reveal delay={0.1} className="space-y-4 text-neutral-400">
                {about.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20 py-24">
          <Reveal>
            <div className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 text-center sm:p-14">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Have a project in mind?</h2>
              <p className="mx-auto mt-4 max-w-lg text-neutral-400">
                Tell me what you want to build. I reply within {site.replyTime} with next steps and a rough
                timeline.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${site.email}?subject=New project enquiry`} className={btnPrimary}>
                  Email me
                </a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                  Chat on WhatsApp
                </a>
              </div>
              <p className="mt-6 text-sm text-neutral-500">{site.email}</p>
            </div>
          </Reveal>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-900 py-8 text-sm text-neutral-500">
          <p>© 2026 {site.name}</p>
          <div className="flex gap-5">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}