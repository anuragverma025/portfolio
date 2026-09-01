import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers,
  X,
  Zap,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { TiltCard } from "@/components/TiltCard";
import { GithubIcon } from "@/components/Icons";

const projectCategories = ["All", "Full-Stack", "AI & RL"];

const projects = [
  {
    id: 1,
    title: "EnterpriseOps Arena (Multi-Agent RL)",
    category: "AI & RL",
    featured: true,
    tagline: "Partially observable multi-agent RL simulation for enterprise incident resolution",
    description:
      "A multi-agent reinforcement learning environment simulating enterprise incident response with specialized autonomous roles and constraints. Agents are trained with Hugging Face TRL via Proximal Policy Optimization (PPO), tracked via Weights & Biases (WandB), and deployed on Docker & Hugging Face Spaces for real-time inference.",
    metrics: [
      { label: "Recognition", value: "Top 800 Global" },
      { label: "RL Framework", value: "HF TRL / PPO" },
      { label: "Deployment", value: "Docker & HF Spaces" },
    ],
    image: "/projects/project3.svg",
    tags: ["Python", "Hugging Face TRL", "Docker", "WandB", "Gradio", "Reinforcement Learning", "PPO"],
    link: "https://huggingface.co/spaces/Anurag137/enterprise-ops-arena",
    github: "https://github.com/anuragverma025/Meta-Hackathon",
    details: {
      challenge:
        "Simulating complex, partially observable incident workflows where autonomous agents with divergent specialized roles collaborate without policy degradation or high communication latency.",
      solution:
        "Designed a constrained multi-agent Markov decision process, integrated Hugging Face TRL for fine-grained PPO policy optimization, tracked metric trajectories via WandB, and containerized the simulation with Docker for instant Hugging Face Spaces hosting.",
    },
  },
  {
    id: 2,
    title: "StayScape",
    category: "Full-Stack",
    featured: true,
    tagline: "Scalable peer-to-peer accommodation platform with MVC architecture",
    description:
      "A full-featured peer-to-peer accommodation and rental booking platform. Engineered with MVC architecture, RESTful APIs, and secure Passport.js authentication & authorization pipelines for distinct Guest and Host workflows. Features interactive Mapbox forward geocoding and Cloudinary optimized media pipelines.",
    metrics: [
      { label: "Architecture", value: "MVC & REST APIs" },
      { label: "Auth Pipeline", value: "Passport.js RBAC" },
      { label: "Geocoding", value: "Mapbox GL JS" },
    ],
    image: "/projects/project1.svg",
    tags: ["Node.js", "Express.js", "MongoDB", "Mapbox GL JS", "Cloudinary API", "Passport.js", "RESTful APIs"],
    link: "https://stayscape.onrender.com",
    github: "https://github.com/anuragverma025/StayScape",
    details: {
      challenge:
        "Implementing secure multi-role access control (Guest vs Host) while handling geolocation queries and high-resolution photo uploads without server bottlenecks.",
      solution:
        "Engineered robust middleware authentication and authorization pipelines via Passport.js, integrated Mapbox API for forward coordinate geocoding, and utilized Cloudinary for automated cloud image transformations.",
    },
  },
  {
    id: 3,
    title: "Giftlume",
    category: "Full-Stack",
    featured: true,
    tagline: "Full-stack corporate gifting platform streamlining B2B catalog operations",
    description:
      "A modern B2B corporate gifting platform built to streamline corporate procurement, custom catalog management, and bulk orders. Features a dynamic React.js frontend with robust state management and a secure Express/MongoDB database architecture for order and inventory tracking.",
    metrics: [
      { label: "Frontend", value: "React.js + Tailwind" },
      { label: "Operations", value: "B2B Catalog & Bulk" },
      { label: "Backend", value: "Node & MongoDB" },
    ],
    image: "/projects/project2.svg",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "REST APIs"],
    link: "https://giftlume.co.in/",
    github: "https://github.com/anuragverma025/gift-lume-project",
    details: {
      challenge:
        "Handling complex product variations, bulk customizations, and instantaneous inventory state reconciliation across high-volume corporate order sessions.",
      solution:
        "Architected optimized React component state trees for instant catalog rendering, combined with atomic MongoDB updates to prevent inventory oversubscription and guarantee transactional integrity.",
    },
  },
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300 uppercase tracking-wider mb-4 animate-fade-in">
            <Layers className="w-3.5 h-3.5" />
            Featured Engineering Work
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 animate-fade-in animation-delay-100 font-heading">
            Selected projects that{" "}
            <span className="gradient-text glow-text italic font-light">
              deliver measurable impact.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-in animation-delay-200">
            A showcase of production web applications, high-performance engines, and scalable architectures designed and built from the ground up.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 animate-fade-in animation-delay-300">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20 scale-105"
                    : "glass hover:bg-slate-800 text-slate-300 hover:text-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <TiltCard
              key={project.id}
              maxTilt={4}
              scale={1.01}
              className="group glass-card rounded-3xl overflow-hidden border border-slate-800/90 hover:border-teal-500/40 transition-all duration-500 flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image Preview Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#0c1420]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1724] via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full bg-teal-500/90 text-slate-950 text-[11px] font-bold tracking-wide uppercase shadow-lg shadow-teal-500/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 fill-current" />
                        Featured
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full glass-strong text-[11px] font-mono font-medium text-teal-300 border border-teal-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Hover overlay actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2.5 rounded-full bg-teal-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-xl hover:bg-teal-400 transition-colors"
                  >
                    <Zap className="w-4 h-4" />
                    Deep Dive
                  </button>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full glass hover:bg-slate-800 text-slate-200 hover:text-teal-300 transition-colors"
                    title="Open Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full glass hover:bg-slate-800 text-slate-200 hover:text-teal-300 transition-colors"
                    title="View Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-7 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 group-hover:text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all p-1"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-xs font-mono text-teal-400/90 font-medium">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-xs sm:text-sm font-bold text-slate-100">{m.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium tech-badge text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-teal-400 transition-colors shadow-md shadow-teal-500/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl glass hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-700/60"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* View All / Github Callout */}
        <div className="text-center mt-16 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/anuragverma025"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              <GithubIcon className="w-4 h-4 text-teal-400" />
              View Complete Repository Archive on GitHub
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl glass-strong rounded-3xl border border-teal-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full glass hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                  Case Study &amp; Architecture
                </span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {activeModalProject.tagline}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                    The Architectural Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.details.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-950/20 border border-teal-500/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-1">
                    The Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.details.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack in Modal */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-teal-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                <a
                  href={activeModalProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[140px]"
                >
                  <button className="w-full py-3 rounded-full bg-teal-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
                    <ExternalLink className="w-4 h-4" />
                    Open Live Demo
                  </button>
                </a>

                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[140px]"
                >
                  <button className="w-full py-3 rounded-full glass hover:bg-slate-800 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700">
                    <GithubIcon className="w-4 h-4" />
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};