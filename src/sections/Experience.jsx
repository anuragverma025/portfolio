import {
  Briefcase,
  Calendar,
  Building,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

const experiences = [
  {
    period: "Nov 2025 — Present",
    role: "Core Web Developer",
    company: "GDG on Campus & IEEE Student Branch, IIIT Dharwad",
    location: "Dharwad, Karnataka",
    type: "Technical Leadership",
    current: true,
    highlights: [
      "Selected as a core web developer across two premier technical clubs to design, deploy, and maintain official digital platforms.",
      "Collaborating in Agile-driven student teams to build online event registrations and outreach portals for campus hackathons.",
      "Developing responsive, high-performance UI components using React.js and Tailwind CSS with secure RESTful backend integrations.",
      "Facilitating developer workshops and peer coding sessions to cultivate tech culture and open-source contributions.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "JavaScript", "Git & GitHub", "Agile"],
  },
  {
    period: "2026",
    role: "Team Leader & RL Developer (Pixel.ai)",
    company: "Meta PyTorch OpenEnv Hackathon",
    location: "Global Competition",
    type: "Competitive Engineering",
    current: false,
    highlights: [
      "Ranked in the Top 800 globally out of 31,000+ teams as the Team Leader of Pixel.ai.",
      "Engineered partially observable multi-agent reinforcement learning pipelines simulating incident resolution workflows.",
      "Integrated Hugging Face TRL to train LLM-based agents with PPO, logging experiment metrics via Weights & Biases (WandB).",
      "Containerized and deployed the simulation on Docker and Hugging Face Spaces for real-time interactive evaluation.",
    ],
    technologies: ["Python", "Hugging Face TRL", "Docker", "WandB", "Gradio", "Reinforcement Learning"],
  },
  {
    period: "2024 — Present",
    role: "Computer Science Undergraduate & Hackathon Competitor",
    company: "Indian Institute of Information Technology (IIIT) Dharwad",
    location: "Dharwad, Karnataka",
    type: "Academic & Innovation",
    current: true,
    highlights: [
      "Secured 2nd Place overall at Algowars Hackathon (IIIT Dharwad) for developing an optimized algorithmic solution.",
      "Secured 3rd Place in the campus-wide competitive Velocity Hackathon.",
      "Engineered end-to-end full stack platforms including StayScape (MVC peer-to-peer rentals) and Giftlume (B2B gifting).",
      "Maintained a strong academic record (CGPA 7.47 / 10.0) with deep focus on Data Structures, OOP, OS, and DBMS.",
    ],
    technologies: ["C++", "Data Structures", "MongoDB", "Express.js", "React.js", "Node.js", "Mapbox GL JS"],
  },
];

const educationAndCerts = [
  {
    type: "Degree Program",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Indian Institute of Information Technology (IIIT) Dharwad",
    period: "Expected May 2028",
    note: "CGPA: 7.47 / 10.0 • Core: Data Structures & Algorithms, OOP, Operating Systems, Computer Networks, DBMS, Discrete Mathematics.",
  },
  {
    type: "Hackathon Recognition",
    title: "Meta PyTorch OpenEnv Hackathon (Top 800 Global)",
    institution: "Meta & PyTorch Foundation",
    period: "2026",
    note: "Ranked in Top 800 globally out of 31,000+ participating teams as Team Leader of Pixel.ai.",
  },
  {
    type: "Campus Hackathons",
    title: "Algowars (2nd Place) & Velocity (3rd Place)",
    institution: "IIIT Dharwad Technical Board",
    period: "2025 — 2026",
    note: "2nd Place Algowars for optimized algorithmic solution • 3rd Place Velocity Hackathon.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300 uppercase tracking-wider mb-4 animate-fade-in">
            <Briefcase className="w-3.5 h-3.5" />
            Leadership &amp; Experience
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 animate-fade-in animation-delay-100 font-heading">
            Technical leadership &amp;{" "}
            <span className="gradient-text glow-text italic font-light">
              hands-on development.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-in animation-delay-200">
            Contributing to student developer communities, competing in global AI hackathons, and architecting full-stack web solutions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Glowing Vertical Line */}
          <div className="timeline-glow absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-teal-400 via-teal-500/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 items-start animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* Center Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-teal-400 rounded-full -translate-x-1/2 ring-4 ring-[#090d12] shadow-[0_0_15px_rgba(20,184,166,0.8)] z-10">
                    {exp.current && (
                      <span className="absolute -inset-1 rounded-full bg-teal-400 animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Left Column (even) or Right Column (odd) */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      isEven
                        ? "md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <TiltCard
                      maxTilt={4}
                      scale={1.01}
                      className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/90 hover:border-teal-500/40 transition-all duration-300 group"
                    >
                      {/* Top Row: Period & Tag */}
                      <div
                        className={`flex flex-wrap items-center gap-3 mb-3 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>

                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold tracking-wide uppercase border border-emerald-500/40 animate-pulse">
                            Current Role
                          </span>
                        )}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                        {exp.role}
                      </h3>

                      <div
                        className={`flex items-center gap-2 text-sm text-slate-400 font-medium mt-1 mb-4 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <Building className="w-4 h-4 text-teal-400" />
                        <span className="text-slate-200">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5 text-left text-xs sm:text-sm text-slate-300 mb-6">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Pill Container */}
                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-900/80 text-[11px] font-mono text-slate-400 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Certifications Banner */}
        <div className="mt-20 glass-card rounded-3xl p-8 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">
                Education &amp; Professional Certifications
              </h3>
              <p className="text-xs text-slate-400">
                Academic foundation and continuous industry certifications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationAndCerts.map((item, idx) => (
              <TiltCard
                key={idx}
                maxTilt={5}
                scale={1.02}
                className="glass p-5 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-teal-400 font-mono mb-2">
                  <span className="uppercase tracking-wider font-bold">{item.type}</span>
                  <span className="text-slate-500">{item.period}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                <p className="text-xs text-slate-300 font-medium mt-1">{item.institution}</p>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">{item.note}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};