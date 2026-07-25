export const site = {
  name: "Steven.",
  title: "Steven Li",
  description:
    "Building with data, product, and GenAI. Personal site of Steven Li.",
};

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/works", label: "Works" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavHref = (typeof navItems)[number]["href"];

export const playfulCorners: Record<string, string> = {
  "/": "",
  "/about": "still figuring it ouuut...",
  "/education": "learning. always. always? always.",
  "/works": "working all the timeeee...",
  "/projects": "shipping... soon. soonish. maybe.",
  "/contact": "say hi. or don't. but do.",
};

export const home = {
  bubble: "hi, i'm Steven - building with data, product, and GenAI.",
  pokeLines: [
    "hey.",
    "ow. soft ow.",
    "okay that was fun.",
    "product people get poked too.",
    "hi again. still me.",
  ],
};

export const about = {
  paragraphs: [
    "i studied business and computer science, and somewhere along the way ai quietly took over my curiosity. these days i'm especially into ai products - i poke at new ones almost every day, just to see how they feel.",
    "i also care a lot about architecture and graphic design. that's a big reason i tried product management - it sits right where tech, taste, and how things feel all meet.",
    "i'm still figuring out the rest of the path, too. my final year project is in reinforcement learning for day trading - a bit different from product work, and i'm enjoying the stretch.",
    // travel paragraph rendered with longyearbyen HoverNote in about page
    {
      type: "travel" as const,
      before:
        "outside of work and school, i travel a lot. during my semester in amsterdam i wandered through thirteen countries across europe - germany, norway, france, the uk, and more. the wildest stop was ",
      noteTerm: "longyearbyen",
      note: "yes that far north",
      after:
        ", one of the northernmost places people actually live. the trips matter, but so do the people i meet along the way.",
    },
    "oh, and i like trying slightly random sports - climbing, ultimate frisbee, whatever sounds fun that week.",
    // closing paragraph: plain link to contact
    {
      type: "closing" as const,
      before: "anyway - if any of this sounds fun, ",
      linkLabel: "come say hi",
      after: ". we can build stuff, travel, or just hang. no agenda requiredddd.",
    },
  ],
};

export type SkillPart = { text: string; /** in-place hover swap, not a tooltip */ hover?: string };

export type SkillRow =
  | { label: string; kind: "text"; value: string }
  | { label: string; kind: "parts"; parts: SkillPart[] };

export const education = {
  schools: [
    {
      lines: [
        "Hong Kong Baptist University",
        "BSc (Hons) Business Computing & Data Analytics",
        "Sep 2023 - Jun 2027 (expected)  ·  Minor in Applied Mathematics",
        "HKSAR Government Scholarship, President's Honor Roll",
      ],
    },
    {
      lines: [
        "University of Amsterdam",
        "Exchange Program (Economics and Business)",
        "Sep 2025 - Jan 2026",
      ],
    },
  ],
  skills: [
    {
      label: "Languages",
      kind: "parts" as const,
      parts: [
        { text: "Mandarin" },
        { text: "Cantonese", hover: "慢慢嚟" },
        { text: "English" },
      ],
    },
    {
      label: "Programming",
      kind: "text" as const,
      value: "Python, Java, SQL, R, TypeScript, JavaScript, HTML, CSS",
    },
    {
      label: "Tools",
      kind: "text" as const,
      value:
        "Git / GitHub, Docker, Google Cloud, Azure OpenAI, Power BI, Oracle, PostgreSQL, Figma",
    },
  ] satisfies SkillRow[],
};

export const works = [
  {
    role: "MTR Corporation Limited  ·  Summer Intern (Global Innovation)",
    dates: "Jun 2026 - Aug 2026",
    location: "Hong Kong SAR, China",
    bullets: [
      "Innovation Portfolio Digitization: 247 Excel records → Notion with AI cleansing; semantic-search skill after UAT.",
      "Agent Workflow Integration: 3 Slack/Teams agents for AI briefings and project support; SharePoint/Notion/MCP.",
      "Product Commercialization: Part-time shift scheduler for events; requirements, budget, and revenue forecast deck.",
    ],
  },
  {
    role: "Starnet AI Limited  ·  Assistant Product Manager",
    dates: "Feb 2026 - May 2026",
    location: "Hong Kong SAR, China",
    bullets: [
      "Pricing Strategy: Benchmarked 18 foundation models; designed GenMedia's billing framework.",
      "DevOps & QA: Microservices on Node/Next/PostgreSQL/GCP; runbook cut onboarding by 60%.",
      "Product Growth: 30+ generation templates and AI landing page with lead capture.",
    ],
  },
  {
    role: "Airport Authority Hong Kong  ·  Summer Trainee (IT, GenAI Team)",
    dates: "Jun 2025 - Aug 2025",
    location: "Hong Kong SAR, China",
    bullets: [
      "AI Red-Teaming: Adversarial LLM tests; vulnerability reference for production reviews.",
      "RAG Optimization: Cross-team evaluation loops to reduce hallucinations in production.",
      "Agent Engineering: 4 Azure OpenAI Teams agents for invoice, scheduling, and calendar.",
    ],
  },
  {
    role: "Li & Fung Limited  ·  International Trade Analyst",
    dates: "May 2024 - Jul 2024",
    location: "Shanghai, China",
    bullets: [
      "Process Automation: LLM document parsing with schema validation; 60% less consolidation time.",
      "Data Engineering: Schema-constrained ETL of supplier files into cloud PostgreSQL.",
      "Business Intelligence: Power BI executive dashboards; weekly reporting 35% faster.",
    ],
  },
];

export const projects = [
  {
    title: "OpenMila",
    titleHover: "my daily thinking space",
    meta: "Open-source canvas product  ·  May 2026 - Present",
    description:
      "Local-first visual canvas with React, TypeScript, and Vite. File System Access API + IndexedDB for a fully offline, zero-login experience - no backend. Built for clarity-first spatial thinking.",
    linkLabel: "github.com/steven-lijw/openmila  →",
    href: "https://github.com/steven-lijw/openmila",
    image: "/illustrations/openmila.svg",
    imageAlt: "OpenMila canvas doodle",
  },
  {
    title: "Mealry",
    titleHover: "just vibes… maybe a business later",
    meta: "Calm meal calendar (iOS)  ·  Jul 2026 - Present  ·  Coming soon",
    description:
      "Photo-first meal calendar for everyday eating - snap a plate, keep it on a calendar, and get a gentle buddy-style nudge before your next meal. Local-first personal data; AI only for soft guidance, not calorie math or judgment.",
    linkLabel: "Coming soon  →",
    href: null,
    image: "/illustrations/mealry.svg",
    imageAlt: "Mealry doodle of person photographing a meal",
  },
];

export const educationHeadings = {
  education: { default: "Education", hover: "always learningggg" },
  skills: { default: "Skills", hover: "trying new stuff always" },
};

export const contact = {
  title: "Say hi.",
  intro:
    "Email is the fastest way to reach me - or find me on LinkedIn and GitHub.",
  rows: [
    {
      label: "Email",
      value: "steven.ljw@outlook.com",
      href: "mailto:steven.ljw@outlook.com",
    },
    {
      label: "Phone",
      value: "(852) 8403-0586",
      href: "tel:+85284030586",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jiawen-li-steven",
      href: "https://www.linkedin.com/in/jiawen-li-steven",
    },
    {
      label: "GitHub",
      value: "github.com/steven-lijw",
      href: "https://github.com/steven-lijw",
    },
  ],
};
