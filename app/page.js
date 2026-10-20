import Image from "next/image";
import Reveal from "@/components/Reveal";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Testimonials from "@/components/Testimonials";
import ScrollLink from "@/components/ScrollLink";
import { site, services, projects, skillGroups, steps, about, testimonials } from "@/data/site";

// skills shown as dark chips (your strongest); the rest are light chips
const featured = ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js & Express"];

const eyebrow = "mb-2 text-xs tracking-[0.2em] text-[#c2461c]";
const h2 = "text-3xl font-semibold tracking-tight text-[#141a1a] sm:text-4xl";

const btnCoral =
  "inline-block rounded-full bg-[#ff7a59] px-6 py-3 text-sm font-semibold text-[#141a1a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8d70] hover:shadow-lg hover:shadow-[#ff7a59]/30 active:translate-y-0 active:scale-95";
const btnOutline =
  "inline-block rounded-full border border-[#141a1a] px-6 py-3 text-sm font-semibold text-[#141a1a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#141a1a] hover:text-white active:translate-y-0 active:scale-95";

function Heading({ label, title }) {
  return (
    <Reveal className="mb-8">
      <p className={eyebrow}>{label}</p>
      <h2 className={h2}>{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#f6f6f4] text-[#141a1a]">
      <Sidebar />

      <MobileNav />

      {/* MOBILE HERO (phones and tablets only) */}
      <header className="bg-[#0f3d3e] px-6 pb-10 pt-5 text-white lg:hidden">
        <p className="flex items-center gap-2 text-sm text-emerald-50/80">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
          Available for new projects
        </p>
        <div className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight">
          I build fast websites and web apps that turn visitors into{" "}
          <span className="text-[#ff7a59]">customers.</span>
        </div>
        <p className="mt-5 leading-relaxed text-emerald-50/80">
          {site.role} working with JavaScript, React, Next.js and Tailwind CSS. I have shipped {projects.length} live
          products, and I can do the same for your business.
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <ScrollLink
            to="contact"
            offset={80}
            className="rounded-full bg-[#ff7a59] px-6 py-3.5 text-center text-sm font-semibold text-[#141a1a] transition-all duration-300 hover:bg-[#ff8d70] active:scale-95"
          >
            Start a project
          </ScrollLink>
          <ScrollLink
            to="work"
            offset={80}
            className="rounded-full border border-white/40 px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 active:scale-95"
          >
            See my work
          </ScrollLink>
        </div>
        <div className="mt-6 flex flex-col gap-1 text-xs text-emerald-50/70">
          <span>✓ {projects.length} live products</span>
          <span>✓ Mobile-first, SEO-ready</span>
          <span>✓ Reply within {site.replyTime}</span>
        </div>
      </header>

      <main className="lg:ml-[360px]">
        <div className="mx-auto max-w-4xl px-6 sm:px-12">
          {/* HERO (desktop only) */}
          <section className="hidden items-center gap-10 py-14 lg:grid lg:grid-cols-[1fr_260px] lg:py-16">
            <div>
              <Reveal>
                <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                  I build fast websites and web apps that turn visitors into{" "}
                  <span className="text-[#0f7a6a]">customers.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl leading-relaxed text-[#55605f]">
                  {site.role} working with JavaScript, React, Next.js and Tailwind CSS. I have shipped{" "}
                  {projects.length} live products, and I can do the same for your business.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-3">
                <ScrollLink to="contact" className={btnCoral}>
                  Start a project
                </ScrollLink>
                <ScrollLink to="work" className={btnOutline}>
                  See my work
                </ScrollLink>
              </Reveal>
              <Reveal delay={0.3} className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#55605f]">
                <span>✓ {projects.length} live products</span>
                <span>✓ Mobile-first, SEO-ready</span>
                <span>✓ {site.replyTime} reply</span>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-t-[130px] rounded-b-2xl bg-[#0f3d3e] transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0f3d3e]/25">
                {site.photo ? (
                  <Image
                    src={site.photo}
                    alt={site.name}
                    fill
                    priority
                    sizes="260px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-end justify-center pb-4 text-xs text-emerald-100/70">
                    [YOUR PHOTO]
                  </div>
                )}
              </div>
            </Reveal>
          </section>

          {/* SERVICES */}
          <section id="services" className="scroll-mt-6 py-12">
            <Heading label="WHAT I DO" title="How I can help your business" />
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl bg-white p-6 shadow-sm shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0f3d3e]/10">
                    <p className="text-2xl font-semibold text-[#0f7a6a]">0{i + 1}</p>
                    <h3 className="mt-3 font-semibold leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#55605f]">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="scroll-mt-6 py-12">
            <Heading label="SELECTED WORK" title="Products I built and shipped" />
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 0.08}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-2xl bg-white p-4 shadow-sm shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0f3d3e]/10"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[#dde6e3]">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={`${p.name} screenshot`}
                          fill
                          sizes="(min-width: 640px) 340px, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-4 text-center text-xs text-[#55605f] transition duration-500 group-hover:scale-105">
                          [{p.name} screenshot]
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <span className="shrink-0 text-sm font-semibold transition-colors duration-300 group-hover:text-[#c2461c]">
                        Visit{" "}
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-[#55605f]">{p.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed">{p.result}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-[#e7ebe9] px-3 py-1 text-xs font-medium text-[#2f3b3a]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="scroll-mt-6 py-12">
            <Heading label="SKILLS" title="Tools I build with" />
            <div className="space-y-4">
              {skillGroups.map((g, gi) => (
                <Reveal key={g.title} delay={gi * 0.08} className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                        featured.includes(s)
                          ? "bg-[#0f3d3e] text-white hover:bg-[#145254]"
                          : "bg-[#e7ebe9] text-[#2f3b3a] hover:bg-[#d8dfdc]"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </Reveal>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          {testimonials.length > 0 && (
            <section className="py-12">
              <Reveal>
                <Testimonials items={testimonials} />
              </Reveal>
            </section>
          )}

          {/* PROCESS */}
          <section id="process" className="scroll-mt-6 py-12">
            <Heading label="HOW IT WORKS" title="A simple, no-surprises process" />
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="group border-t-2 border-[#0f3d3e] pt-4 transition duration-300 hover:border-[#ff7a59]">
                    <p className="text-xs font-semibold text-[#0f7a6a]">0{i + 1}</p>
                    <h3 className="mt-1 font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#55605f]">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="scroll-mt-6 py-12">
            <div className="grid items-start gap-8 md:grid-cols-[220px_1fr]">
              <Reveal>
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-2xl bg-[#dde6e3]">
                  {site.photo ? (
                    <Image
                      src={site.photo}
                      alt={site.name}
                      fill
                      sizes="220px"
                      className="object-cover grayscale transition duration-500 hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-[#55605f]">[YOUR PHOTO]</div>
                  )}
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <p className={eyebrow}>ABOUT</p>
                  <h2 className={h2}>{`Hi, I'm ${site.name}`}</h2>
                </Reveal>
                <Reveal delay={0.1} className="mt-5 space-y-4 leading-relaxed text-[#3b4645]">
                  {about.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </Reveal>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-6 py-12 pb-16">
            <Reveal>
              <div className="rounded-3xl bg-[#ff7a59] p-8 text-[#141a1a] sm:p-12">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Have a project in mind?</h2>
                <p className="mt-4 max-w-md leading-relaxed">
                  Tell me what you want to build. I reply within {site.replyTime} with next steps and a rough
                  timeline.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`mailto:${site.email}?subject=New project enquiry`}
                    className="block rounded-full bg-[#141a1a] px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-black/25 active:translate-y-0 active:scale-95 sm:inline-block"
                  >
                    Email me
                  </a>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-[#141a1a] px-6 py-3 text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#141a1a] hover:text-white active:translate-y-0 active:scale-95 sm:inline-block"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <p className="mt-6 text-sm font-semibold">{site.email}</p>
              </div>
            </Reveal>

            <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#55605f]">
              <p>© 2026 {site.name}</p>
              <p className="flex gap-2">
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[#141a1a]">
                  GitHub
                </a>
                {site.linkedin && (
                  <>
                    <span>·</span>
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[#141a1a]">
                      LinkedIn
                    </a>
                  </>
                )}
              </p>
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
}