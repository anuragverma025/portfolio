import { useState } from "react";
import {
  Code2,
  Cpu,
  Layers,
  Server,
  Cloud,
  CheckCircle2,
  Sparkles,
  Award,
  BookOpen,
  GitBranch,
  Terminal,
  Trophy,
  GraduationCap,
  Bot,
} from "lucide-react";

const skillCategories = {
  web: {
    label: "Full-Stack Web",
    icon: Server,
    skills: [
      { name: "React.js & State Management", level: "Advanced", pct: 92 },
      { name: "Node.js & Express.js", level: "Advanced", pct: 90 },
      { name: "RESTful APIs & MVC Architecture", level: "Advanced", pct: 94 },
      { name: "Tailwind CSS & Bootstrap 5", level: "Advanced", pct: 92 },
      { name: "Mapbox GL JS & Cloudinary API", level: "Advanced", pct: 88 },
      { name: "Passport.js Auth Pipelines", level: "Proficient", pct: 85 },
    ],
  },
  ai: {
    label: "AI, ML & Reinforcement Learning",
    icon: Bot,
    skills: [
      { name: "Multi-Agent RL Environments", level: "Advanced", pct: 90 },
      { name: "Hugging Face TRL & Transformers", level: "Advanced", pct: 88 },
      { name: "Proximal Policy Optimization (PPO)", level: "Proficient", pct: 85 },
      { name: "Weights & Biases (WandB)", level: "Advanced", pct: 88 },
      { name: "Gradio Web UI Integration", level: "Advanced", pct: 90 },
      { name: "LLM-based Agentic Workflows", level: "Advanced", pct: 86 },
    ],
  },
  languages: {
    label: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "C++ (Data Structures & Algorithms)", level: "Advanced", pct: 90 },
      { name: "JavaScript (ES6+)", level: "Advanced", pct: 92 },
      { name: "TypeScript", level: "Proficient", pct: 85 },
      { name: "Python", level: "Advanced", pct: 88 },
      { name: "SQL (Queries & Schema Design)", level: "Advanced", pct: 86 },
      { name: "HTML5 & CSS3 / LaTeX", level: "Advanced", pct: 92 },
    ],
  },
  cloud: {
    label: "DevOps, Databases & Tools",
    icon: Cloud,
    skills: [
      { name: "MongoDB Atlas & MySQL", level: "Advanced", pct: 90 },
      { name: "Docker & Containerization", level: "Advanced", pct: 88 },
      { name: "Git, GitHub & CI/CD Pipelines", level: "Advanced", pct: 92 },
      { name: "AWS & Render Cloud Deployments", level: "Proficient", pct: 84 },
      { name: "Postman & REST API Testing", level: "Advanced", pct: 90 },
      { name: "Linux / Ubuntu Environment", level: "Advanced", pct: 89 },
    ],
  },
};

const principles = [
  {
    icon: Server,
    title: "Scalable Full-Stack Architecture",
    desc: "Engineering robust MVC backends, RESTful APIs, and responsive React frontends with clean state management.",
  },
  {
    icon: Bot,
    title: "Multi-Agent & RL Systems",
    desc: "Designing partially observable RL environments, PPO pipelines with Hugging Face TRL, and automated incident resolution.",
  },
  {
    icon: Layers,
    title: "Agile Leadership & Collaboration",
    desc: "Building official digital platforms and hackathon portals as a core developer across GDG and IEEE student branches.",
  },
  {
    icon: GraduationCap,
    title: "Core Computer Science Rigor",
    desc: "Strong academic foundation in DSA, OOP, OS, DBMS, Computer Networks, and Discrete Mathematics at IIIT Dharwad.",
  },
];

export const About = () => {
  const [activeCategory, setActiveCategory] = useState("web");

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300 uppercase tracking-wider mb-4 animate-fade-in">
            <Terminal className="w-3.5 h-3.5" />
            About the Developer
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 animate-fade-in animation-delay-100">
            Driven by curiosity, fueled by{" "}
            <span className="gradient-text glow-text font-serif italic font-normal">
              algorithms &amp; innovation.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-in animation-delay-200">
            Computer Science &amp; Engineering undergraduate at IIIT Dharwad. Exploring the intersection of scalable full-stack web applications, reinforcement learning, and distributed developer ecosystems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Item 1: Main Story (7 cols) */}
          <div className="md:col-span-7 glass-card rounded-3xl p-8 space-y-6 flex flex-col justify-between animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">
                  Background &amp; Technical Focus
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a B.Tech Computer Science and Engineering student at the <strong className="text-slate-100 font-semibold">Indian Institute of Information Technology (IIIT) Dharwad</strong> (Graduating May 2028, CGPA: 7.47 / 10.0). I specialize in designing scalable full-stack platforms and intelligent multi-agent reinforcement learning architectures.
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                Beyond academics, I serve as a Core Web Developer across two premier technical clubs: <strong className="text-teal-300">Google Developer Groups (GDG) on Campus</strong> and the <strong className="text-sky-300">IEEE Student Branch</strong> at IIIT Dharwad. I collaborate in Agile-driven teams building hackathon portals, event registration systems, and digital platforms.
              </p>
            </div>

            {/* Quote banner */}
            <div className="glass rounded-2xl p-5 border border-teal-500/25 bg-teal-950/20">
              <p className="text-sm italic text-teal-200 font-medium">
                “Building systems that combine the speed of modern web architectures with the intelligence of multi-agent reinforcement learning.”
              </p>
            </div>
          </div>

          {/* Bento Item 2: Quick Metrics & Live Focus (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Exploration Radar */}
            <div className="glass-card rounded-3xl p-6 flex-1 space-y-4 animate-fade-in animation-delay-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                    Active Research &amp; Focus
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                  Current
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                {[
                  { title: "Multi-Agent RL", desc: "Hugging Face TRL & PPO" },
                  { title: "Full-Stack Web", desc: "React, Node & Express" },
                  { title: "Cloud & Docker", desc: "Scalable Containerization" },
                  { title: "Algorithms (DSA)", desc: "Competitive Problem Solving" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-colors"
                  >
                    <div className="text-xs font-bold text-slate-200">{item.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-3xl p-5 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-100">Top 800</div>
                  <div className="text-xs text-slate-400">Meta PyTorch Hackathon</div>
                </div>
              </div>

              <div className="glass rounded-3xl p-5 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-100">7.47</div>
                  <div className="text-xs text-slate-400">CGPA / 10.0 (IIIT DWD)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Core Principles (12 cols, 4 subcards) */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 space-y-3 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-100">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bento Item 4: Interactive Skills Explorer (12 cols) */}
          <div className="md:col-span-12 glass-card rounded-3xl p-8 mt-2 space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-teal-400" />
                  Technical Competencies &amp; Skills
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Select a domain to inspect proficiency and applied tech stack
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {Object.entries(skillCategories).map(([key, cat]) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-bold"
                          : "glass hover:bg-slate-800 text-slate-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Category Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="glass p-5 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-slate-100">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-teal-300">
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-sky-400 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};