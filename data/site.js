// EDIT THIS FILE FIRST. Everything on the site reads from here.

export const site = {
  name: "Oluwatobi Adedeji",
  role: "Frontend Developer",
  email: `oluwatobiadedeji058@gmail.com`,
  whatsapp: "https://wa.me/2347031141152", // your number, no + or spaces
  github: "https://github.com/Tobi200-blip",
  replyTime: "24 hours",
  photo: "/portfolioHero.png", // file must be inside the /public folder
};

export const services = [
  {
    title: "Websites that win customers",
    text: "Fast, SEO-ready business sites and landing pages that look credible and make it easy for visitors to contact you.",
  },
  {
    title: "Web apps & online tools",
    text: "Calculators, dashboards and AI-powered tools with clean, simple interfaces that people actually enjoy using.",
  },
  {
    title: "Speed & SEO upgrades",
    text: "Already have a site? I make it faster, mobile-friendly and easier for Google to understand.",
  },
];

export const projects = [
  {
    name: "VizaPal",
    url: "https://vizapal.com",
    tagline: "AI immigration guide",
    tags: ["AI", "Next.js", "Tailwind"],
    problem:
      "Immigration information is scattered across forums, blogs and government pages, and people want quick, clear answers to their own questions.",
    built:
      "An AI-powered guide that answers immigration questions instantly in plain language, with a dark, mobile-friendly interface that feels like an app.",
    result:
      "A live product where visitors get instant answers instead of searching through dozens of pages.",
  },
  {
    name: "Everything Migration",
    url: "https://everythingmigration.com",
    tagline: "Canada immigration pathways platform",
    tags: ["Content platform", "Calculators", "SEO"],
    problem:
      "With 100+ pathways and constantly changing rules, applicants struggle to know where they stand and what to do next.",
    built:
      "A decision-support platform with pathway guides, a regularly updated blog, and free tools including an Express Entry CRS calculator and a language score converter.",
    result:
      "A growing content platform with two free calculators and fresh guides that give applicants a clear starting point.",
  },
  {
    name: "CalcMerge",
    url: "https://calcmerge.com",
    tagline: "Free online calculators and converters",
    tags: ["React", "Tailwind", "Utility tools"],
    problem:
      "Most calculator sites are cluttered, slow, and push sign-ups just to get an answer.",
    built:
      "A clean, no-sign-up collection of calculators and converters (CGPA, BMI, loans, percentages, dates, units) that works on any device.",
    result:
      "A fast, ad-light tool site where people get their answer in seconds, on phone or desktop.",
  },
  {
    name: "AllPetLofts",
    url: "https://allpetlofts.com",
    tagline: "A home for dog, cat and bird lovers",
    tags: ["Next.js", "Tailwind", "Content site"],
    problem:
      "Pet owners search many places for reliable, easy-to-follow information about caring for dogs, cats and birds.",
    built:
      "A pet-focused website organised around the animals people love most, so visitors reach what they need quickly on any device.",
    result:
      "A live site covering three of the most popular pet categories, with clean browsing and a friendly look.",
  },
];

export const skillGroups = [
  {
    title: "Core stack",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Node.js & Express",
      "REST APIs",
      "MongoDB",
      "Firebase",
      "Responsive design",
      "Jest testing",
    ],
  },
  {
    title: "Tools & workflow",
    items: ["Git & GitHub", "Vercel deployment", "Framer Motion", "SEO fundamentals", "npm", "VS Code"],
  },
];

export const steps = [
  { title: "Quick call", text: "We talk goals, audience and budget so I fully understand what you need." },
  { title: "Clear proposal", text: "You get a fixed scope, timeline and price before any work starts." },
  { title: "Build with updates", text: "You see progress as it happens and can give feedback along the way." },
  { title: "Launch & support", text: "I deploy it, check speed and SEO, and stay available after launch." },
];

export const about = [
  "I'm a frontend developer who cares about two things: sites that load fast and sites that make people take action. I build with JavaScript, React, Next.js and Tailwind CSS, and I've shipped four live products, from an AI immigration guide to a free calculator platform.",
  "I'm always pushing into what's next. Right now I'm going deep into agentic AI: building web apps where AI agents plan tasks, use tools and take action on the user's behalf. It's one of the most challenging and fastest-moving areas in tech, and I enjoy turning complex ideas like that into clear, simple interfaces.",
  "I work with clients remotely, communicate clearly, and keep you updated at every stage. If you have an idea, I'd love to hear it.",
];

// Sample entries so the carousel works while you build. Each one shows a small
// "Sample" tag. When you get real feedback, replace the entry and delete the
// `sample: true` line and the tag disappears.
export const testimonials = [
  {
    quote:
      "Clear communication from the first message. The website was delivered on time and looks clean on my phone.",
    name: "Disu Joshua",
    role: "Small business owner",
    sample: true,
  },
  {
    quote:
      "The pages load quickly and the layout is easy to follow. A few small changes I asked for were done the same day.",
    name: "Chinonso Chukwuma",
    role: "Content site owner",
    sample: true,
  },
  {
    quote:
      "Good at turning a rough idea into something working. I always knew what stage the project was at.",
    name: "Marvelous Malizu",
    role: "Startup founder",
    sample: true,
  },
];