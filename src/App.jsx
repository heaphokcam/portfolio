import { useRef, useState } from "react";
import {
  FaCode,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from "react-icons/si";

const portfolio = {
  name: "Hieb Hok",
  title: "Frontend Developer and UI-Focused Problem Solver",
  bio: "I build polished, responsive web experiences with React, strong accessibility habits, and a love for translating ideas into clean interfaces that feel fast and intuitive.",
  email: "heaphokcam@gmail.com",
  linkedin: "https://www.linkedin.com/in/hok-heap-57915799/",
  github: "https://github.com/heaphokcam",
  photo:
    "https://avatars.githubusercontent.com/u/41095642?s=400&u=cadec042ec5b52ffd900bd1dc0f1aca29870a4dd&v=4"
};

const skills = [
  { name: "React", icon: FaReact, tone: "from-cyan-400 to-sky-500" },
  { name: "JavaScript", icon: SiJavascript, tone: "from-amber-300 to-orange-500" },
  { name: "TypeScript", icon: SiTypescript, tone: "from-blue-400 to-indigo-600" },
  { name: "HTML5", icon: FaHtml5, tone: "from-orange-400 to-red-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, tone: "from-teal-300 to-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, tone: "from-lime-400 to-emerald-600" },
  { name: "MongoDB", icon: SiMongodb, tone: "from-emerald-400 to-green-600" },
  { name: "Vite", icon: SiVite, tone: "from-fuchsia-400 to-violet-600" },
  { name: "Figma", icon: FaFigma, tone: "from-pink-400 to-rose-500" },
  { name: "UI Systems", icon: FaCode, tone: "from-slate-500 to-slate-700" }
];

const projects = [
  {
    title: "Campus Connect",
    description:
      "A student collaboration platform for study groups, event announcements, and resource sharing with mobile-first navigation.",
    stack: ["React", "Tailwind", "Firebase"],
    link: "https://github.com/arianareyesdev/campus-connect"
  },
  {
    title: "Budget Bloom",
    description:
      "A personal finance dashboard that turns income and spending data into clear visual summaries with lightweight chart interactions.",
    stack: ["React", "Vite", "Chart UI"],
    link: "https://github.com/arianareyesdev/budget-bloom"
  },
  {
    title: "Nomad Notes",
    description:
      "A travel journal PWA for saving destination memories, offline highlights, and trip checklists with a calm editorial layout.",
    stack: ["React", "PWA", "Local Storage"],
    link: "https://github.com/arianareyesdev/nomad-notes"
  }
];

const highlights = [
  "Builds responsive interfaces with clean component structure",
  "Comfortable shipping static sites and PWAs on GitHub Pages",
  "Focuses on accessibility, performance, and readable front-end code"
];

function SectionHeading({ eyebrow, title, description, theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div className="max-w-2xl">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.35em] ${
          isDark ? "text-orange-300" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}

export default function App() {
  const resumeRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleDownloadPdf = async () => {
    if (!resumeRef.current || isExporting) {
      return;
    }

    setIsExporting(true);

    try {
      const { default: html2pdf } = await import("html2pdf.js");
      const options = {
        margin: [10, 10, 12, 10],
        filename: "HiebHok_Final.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff"
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait"
        },
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"]
        }
      };

      await html2pdf().set(options).from(resumeRef.current).save();
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_28%),linear-gradient(180deg,_#fff7ed_0%,_#f8fafc_70%)]" />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-ink">
          {portfolio.name}
        </a>
        <nav className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
          <a href="#skills" className="transition hover:text-accent">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-accent">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-accent">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 sm:px-8">
        <section className="grid items-center gap-10 pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:pt-12">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm backdrop-blur">
              Available for internships and freelance work
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                Personal Portfolio
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
                {portfolio.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{portfolio.bio}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <FaDownload />
                {isExporting ? "Preparing PDF..." : "Download PDF"}
              </button>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                Explore Projects
              </a>
            </div>
            <ul className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm font-medium text-slate-600 shadow-sm backdrop-blur"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-4 shadow-panel">
              <div className="absolute inset-x-6 top-6 h-20 rounded-full bg-gradient-to-r from-orange-200/60 via-amber-100 to-sky-200/60 blur-3xl" />
              <img
                src={portfolio.photo}
                alt={`${portfolio.name} profile`}
                className="relative h-[28rem] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-10">
          <SectionHeading
            eyebrow="Skills"
            title="Technical strengths for modern front-end work"
            description="These tools reflect the stack I reach for when building fast, responsive interfaces and production-ready web experiences."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map(({ name, icon: Icon, tone }) => (
              <article
                key={name}
                className="rounded-3xl border border-white/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-panel"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-xl text-white`}
                >
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{name}</h3>
                <p className="mt-2 text-sm text-slate-500">Confident and project-ready</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work with clear outcomes and modern tooling"
            description="Each project demonstrates a blend of interface craft, practical implementation, and thoughtful user experience decisions."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-ink">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  View Project <FaExternalLinkAlt className="text-xs" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-slate-200 bg-ink px-6 py-10 text-white shadow-panel sm:px-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something thoughtful and useful"
            description="I’m open to internship opportunities, collaboration, and front-end roles where strong UI craft matters."
            theme="dark"
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-3 rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-300"
            >
              <FaEnvelope />
              {portfolio.email}
            </a>
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </section>

        <section
          ref={resumeRef}
          className="pdf-export rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel sm:p-10"
        >
          <div className="grid gap-8 border-b border-slate-200 pb-8 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                Resume Snapshot
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink">{portfolio.name}</h2>
              <p className="mt-2 text-lg font-semibold text-slate-600">{portfolio.title}</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{portfolio.bio}</p>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>{portfolio.email}</p>
              <p>{portfolio.linkedin.replace("https://", "")}</p>
              <p>{portfolio.github.replace("https://", "")}</p>
            </div>
          </div>

          <div className="grid gap-8 py-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="text-lg font-bold text-ink">Core Skills</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {skills.slice(0, 8).map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink">Projects</h3>
              <div className="mt-4 space-y-5">
                {projects.map((project) => (
                  <article key={project.title}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-semibold text-ink">{project.title}</h4>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                        {project.stack.join(" / ")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
