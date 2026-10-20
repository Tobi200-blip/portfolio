import Reveal from "@/components/Reveal";

const projects = [
  { name: "Vizapal", url: "https://vizapal.com", desc: "Edit this: one sentence on what it does.", tech: ["Next.js", "Tailwind"] },
  { name: "EverythingMigration", url: "https://everythingmigration.com", desc: "Edit this description.", tech: ["Next.js", "Tailwind"] },
  { name: "CalcMerge", url: "https://calcmerge.com", desc: "Edit this description.", tech: ["React", "Tailwind"] },
  { name: "AllPetLofts", url: "https://allpetlofts.com", desc: "Edit this description.", tech: ["Next.js", "Tailwind"] },
];

const skills = ["React", "Next.js", "Tailwind CSS", "JavaScript", "SEO"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-200">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="flex min-h-[85vh] flex-col justify-center">
          <Reveal>
            <p className="mb-3 text-sm tracking-widest text-indigo-400">FRONTEND DEVELOPER</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Hi, I'm Your Name.<br />
              <span className="text-neutral-500">I build fast, clean web apps.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-neutral-400">
              React, Next.js and Tailwind specialist with several live products shipped.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex gap-3">
            <a href="#projects" className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200">
              View projects
            </a>
            <a href="#contact" className="rounded-full border border-neutral-700 px-6 py-2.5 text-sm transition hover:border-neutral-500 hover:bg-neutral-900">
              Contact
            </a>
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <Reveal><h2 className="mb-8 text-2xl font-semibold text-white">Projects</h2></Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-neutral-900"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">{p.name}</h3>
                    <span className="text-neutral-500 transition group-hover:translate-x-1 group-hover:text-indigo-400">↗</span>
                  </div>
                  <p className="mt-3 text-sm text-neutral-400">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300">{t}</span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-12">
          <Reveal><h2 className="mb-6 text-2xl font-semibold text-white">Skills</h2></Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-neutral-800 px-4 py-2 text-sm transition hover:border-indigo-500/40 hover:text-white">{s}</span>
            ))}
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold text-white">Let's work together</h2>
            <a href="mailto:you@example.com" className="mt-4 inline-block text-indigo-400 transition hover:text-indigo-300">
              you@example.com
            </a>
          </Reveal>
        </section>
      </div>
    </main>
  );
}