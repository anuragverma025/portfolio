import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronDown,
  Terminal as TerminalIcon,
  Copy,
  Check,
  Sparkles,
  Mail,
  Trophy,
  Layers,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { GithubIcon, LinkedinIcon, HuggingFaceIcon } from "@/components/Icons";

const roles = [
  "Full-Stack Web Developer",
  "Multi-Agent RL & AI Engineer",
  "B.Tech CSE @ IIIT Dharwad",
  "Core Web Dev @ GDG & IEEE",
];

const skills = [
  { name: "React.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Hugging Face TRL", category: "ai" },
  { name: "Reinforcement Learning (PPO)", category: "ai" },
  { name: "MongoDB (Atlas)", category: "data" },
  { name: "MySQL", category: "data" },
  { name: "Docker", category: "devops" },
  { name: "AWS & Render", category: "cloud" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "Weights & Biases (WandB)", category: "ai" },
  { name: "RESTful APIs", category: "api" },
  { name: "Mapbox GL JS", category: "api" },
  { name: "Linux / Ubuntu", category: "tools" },
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState("developer"); // 'developer' | 'stack'

  // Cycling titles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("24bcs019@iiitdwd.ac.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#090d12]" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[130px] animate-pulse-slow animation-delay-300" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-teal-500/30 text-xs font-medium text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.15)] animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
              </span>
              <span>Open for Software Engineering Roles &amp; AI Research</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] animate-fade-in animation-delay-100">
                Building <br />
                <span className="gradient-text glow-text font-black">
                  Intelligent Web
                </span>{" "}
                <br />
                <span className="font-serif italic font-normal text-slate-100">
                  &amp; multi-agent systems.
                </span>
              </h1>

              {/* Dynamic Subtitle */}
              <div className="h-8 flex items-center gap-2 text-lg md:text-xl font-medium text-slate-300 animate-fade-in animation-delay-200">
                <span className="text-teal-400 font-mono font-semibold">&gt;</span>
                <span className="font-mono text-teal-300 transition-all duration-500">
                  {roles[roleIndex]}
                </span>
                <span className="w-2 h-5 bg-teal-400 animate-pulse" />
              </div>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed animate-fade-in animation-delay-300">
                Hi, I'm <strong className="text-slate-100 font-semibold">Anurag Verma</strong>.
                A Computer Science &amp; Engineering undergraduate at <strong className="text-teal-300">IIIT Dharwad</strong>, passionate about architecting scalable full-stack applications, reinforcement learning environments, and developer-first platforms.
              </p>
            </div>

            {/* CTAs & Actions */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-400">
              <a href="#projects">
                <Button size="lg" className="shadow-lg shadow-teal-500/20 font-semibold">
                  View Projects <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </a>

              <a href="#contact">
                <AnimatedBorderButton>
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  Get In Touch
                </AnimatedBorderButton>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-3 rounded-full glass hover:bg-slate-800/80 text-sm font-medium text-slate-300 hover:text-teal-300 transition-all border border-slate-700/60"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-teal-400" />
                    <span className="text-teal-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-slate-400 animate-fade-in animation-delay-500">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Profiles:
                </span>
                {[
                  { icon: GithubIcon, href: "https://github.com/anuragverma025", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://linkedin.com/in/anurag-verma025", label: "LinkedIn" },
                  { icon: HuggingFaceIcon, href: "https://huggingface.co/Anurag137", label: "Hugging Face" },
                  { icon: Mail, href: "mailto:24bcs019@iiitdwd.ac.in", label: "Direct Mail" },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-full glass hover:bg-teal-500/20 hover:text-teal-300 hover:border-teal-500/40 transition-all duration-300 text-slate-300"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <div className="h-4 w-px bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>IIIT Dharwad, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal & Tech Box (5 cols) */}
          <div className="lg:col-span-5 animate-fade-in animation-delay-300">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/30 via-sky-500/20 to-purple-500/30 blur-xl opacity-75 animate-pulse-slow" />

              {/* Terminal Window Card */}
              <div className="relative glass-strong rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden">
                {/* Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <TerminalIcon className="w-3.5 h-3.5 text-teal-400" />
                      anurag@iiitdwd: ~
                    </span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab("developer")}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-all ${
                        activeTab === "developer"
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      profile.ts
                    </button>
                    <button
                      onClick={() => setActiveTab("stack")}
                      className={`px-2.5 py-1 text-xs font-mono rounded transition-all ${
                        activeTab === "stack"
                          ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      skills.json
                    </button>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[310px] bg-[#080d14]/95">
                  {activeTab === "developer" && (
                    <div className="space-y-1 text-slate-300">
                      <p className="text-slate-500">// ⚡ Computer Science &amp; Engineering</p>
                      <p>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-sky-300">developer</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">name:</span>{" "}
                        <span className="text-emerald-300">"Anurag Verma"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">education:</span>{" "}
                        <span className="text-emerald-300">"IIIT Dharwad (B.Tech CSE)"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">cgpa:</span>{" "}
                        <span className="text-amber-300">"7.47 / 10.0"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">roles:</span> [
                        <span className="text-teal-300">"GDG Web Dev"</span>,{" "}
                        <span className="text-teal-300">"IEEE Core Dev"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">interests:</span> [
                        <span className="text-teal-300">"Multi-Agent RL"</span>,{" "}
                        <span className="text-teal-300">"Full-Stack Web"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">status:</span>{" "}
                        <span className="text-teal-400 font-semibold">"Ready to build &amp; collaborate"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">ethos:</span> () =&gt; &#123;
                      </p>
                      <p className="pl-8 text-slate-400">
                        return <span className="text-emerald-300">"Write clean, scalable code that delivers measurable impact."</span>;
                      </p>
                      <p className="pl-4">&#125;</p>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {activeTab === "stack" && (
                    <div className="space-y-1 text-slate-300">
                      <p className="text-slate-500">// 🛠️ Technical Matrix</p>
                      <p>&#123;</p>
                      <p className="pl-4">
                        <span className="text-sky-300">"languages"</span>: [
                        <span className="text-teal-300">"C++"</span>,{" "}
                        <span className="text-teal-300">"JavaScript"</span>,{" "}
                        <span className="text-teal-300">"TypeScript"</span>,{" "}
                        <span className="text-teal-300">"Python"</span>,{" "}
                        <span className="text-teal-300">"SQL"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"web_stack"</span>: [
                        <span className="text-teal-300">"React.js"</span>,{" "}
                        <span className="text-teal-300">"Node.js"</span>,{" "}
                        <span className="text-teal-300">"Express.js"</span>,{" "}
                        <span className="text-teal-300">"Tailwind"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"ai_ml_devops"</span>: [
                        <span className="text-teal-300">"Hugging Face TRL"</span>,{" "}
                        <span className="text-teal-300">"Docker"</span>,{" "}
                        <span className="text-teal-300">"WandB"</span>,{" "}
                        <span className="text-teal-300">"AWS"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"databases"</span>: [
                        <span className="text-teal-300">"MongoDB Atlas"</span>,{" "}
                        <span className="text-teal-300">"MySQL"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-sky-300">"meta_pytorch_hackathon"</span>:{" "}
                        <span className="text-amber-300">"Top 800 Global (31k+ teams)"</span>
                      </p>
                      <p>&#125;</p>
                    </div>
                  )}
                </div>

                {/* Footer status bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    <span>UTF-8</span>
                    <span>•</span>
                    <span>IIIT Dharwad</span>
                  </div>
                  <div className="text-teal-300 font-mono">0 Errors • Ready</div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl p-3.5 border border-teal-500/40 shadow-xl hidden sm:flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-100">Top 800 Global</div>
                  <div className="text-xs text-slate-400">Meta PyTorch Hackathon (31k+ teams)</div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 glass rounded-2xl p-3.5 border border-sky-500/40 shadow-xl hidden sm:flex items-center gap-3 animate-float-reverse">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-100">IIIT Dharwad</div>
                  <div className="text-xs text-slate-400">B.Tech CSE • CGPA 7.47</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Marquee of Technologies */}
        <div className="mt-20 pt-10 border-t border-slate-800/80 animate-fade-in animation-delay-600">
          <div className="flex items-center justify-between mb-5 px-2">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-400" />
              Technologies &amp; Architecture Stack
            </span>
            <span className="text-xs text-slate-500 hidden md:block">
              Hover to pause stream
            </span>
          </div>

          <div className="relative overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090d12] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090d12] to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee gap-4">
              {[...skills, ...skills, ...skills].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl tech-badge text-sm font-medium text-slate-300 hover:text-teal-300 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 text-center animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors group"
        >
          <span className="text-[11px] uppercase tracking-widest font-mono text-slate-400 group-hover:text-teal-300">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-teal-400" />
        </a>
      </div>
    </section>
  );
};