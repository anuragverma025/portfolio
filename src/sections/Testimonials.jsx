import { useState, useEffect } from "react";
import {
  Trophy,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  CheckCircle,
  ExternalLink,
  Medal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const achievements = [
  {
    title: "Meta PyTorch OpenEnv Hackathon (2026)",
    rank: "Top 800 Global",
    subtitle: "Global AI & Reinforcement Learning Hackathon",
    scale: "Out of 31,000+ teams worldwide",
    role: "Team Leader of Pixel.ai",
    badge: "Global Ranking",
    color: "from-purple-500/20 to-teal-500/20",
    border: "border-teal-500/40",
    accent: "text-teal-300",
    description:
      "Led the Pixel.ai team to rank in the Top 800 worldwide out of 31,000+ teams. Designed partially observable multi-agent RL simulation environments for enterprise incident resolution using Hugging Face TRL & PPO.",
    tags: ["PyTorch", "Multi-Agent RL", "Hugging Face TRL", "WandB", "Docker"],
    link: "https://huggingface.co/spaces/Anurag137/enterprise-ops-arena",
    github: "https://github.com/anuragverma025/Meta-Hackathon",
  },
  {
    title: "Algowars Hackathon",
    rank: "2nd Place (Runner Up)",
    subtitle: "Campus-wide Algorithmic Competition",
    scale: "IIIT Dharwad Competitive Event",
    role: "Algorithmic Developer",
    badge: "2nd Place",
    color: "from-amber-500/20 to-teal-500/20",
    border: "border-amber-500/40",
    accent: "text-amber-300",
    description:
      "Secured 2nd Place overall at IIIT Dharwad for developing an optimized algorithmic solution with superior space-time complexity, rigorous edge case handling, and dynamic problem modeling.",
    tags: ["C++", "DSA", "Algorithms", "Optimization", "Competitive Coding"],
  },
  {
    title: "Velocity Hackathon",
    rank: "3rd Place",
    subtitle: "Competitive Development & Speed Hackathon",
    scale: "IIIT Dharwad Campus Hackathon",
    role: "Full-Stack Developer",
    badge: "3rd Place",
    color: "from-sky-500/20 to-teal-500/20",
    border: "border-sky-500/40",
    accent: "text-sky-300",
    description:
      "Secured 3rd Place in the campus-wide competitive hackathon at IIIT Dharwad, rapidly architecting and pitching a functional prototype under intense time constraints.",
    tags: ["React.js", "Node.js", "Rapid Prototyping", "Team Pitch"],
  },
];

const testimonials = [
  {
    quote:
      "Anurag brings exceptional technical clarity and energy to our GDG student dev team. His proficiency in modern React, Express, and backend APIs made our hackathon portal deployments smooth and reliable.",
    author: "Technical Lead",
    role: "Core Team Coordinator",
    company: "GDG on Campus, IIIT Dharwad",
    rating: 5,
    initials: "TL",
    color: "from-teal-500/20 to-emerald-500/20",
    border: "border-teal-500/40",
    text: "text-teal-300",
  },
  {
    quote:
      "Working with Anurag during the Meta PyTorch Hackathon was incredible. His deep understanding of reinforcement learning environments and Hugging Face TRL pipelines was instrumental in placing Pixel.ai among the top global teams.",
    author: "Pixel.ai Teammate",
    role: "AI / ML Collaborator",
    company: "Meta OpenEnv Hackathon Team",
    rating: 5,
    initials: "PT",
    color: "from-purple-500/20 to-teal-500/20",
    border: "border-purple-500/40",
    text: "text-purple-300",
  },
  {
    quote:
      "Anurag's passion for algorithmic problem solving and web architecture is outstanding. Whether tackling complex graph problems in Algowars or building responsive platforms for IEEE, his solutions are always well-engineered.",
    author: "Peer Developer",
    role: "Senior Student Coordinator",
    company: "IEEE Student Branch, IIIT Dharwad",
    rating: 5,
    initials: "PD",
    color: "from-sky-500/20 to-teal-500/20",
    border: "border-sky-500/40",
    text: "text-sky-300",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const next = () => {
    setIsAutoPlay(false);
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setIsAutoPlay(false);
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[activeIdx];

  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-teal-500/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300 uppercase tracking-wider mb-4 animate-fade-in">
            <Trophy className="w-3.5 h-3.5" />
            Hackathons &amp; Honors
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 animate-fade-in animation-delay-100">
            Achievements &amp;{" "}
            <span className="gradient-text glow-text font-serif italic font-normal">
              community impact.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-in animation-delay-200">
            Podium finishes in competitive hackathons, global AI rankings, and collaborative endorsements from peer developers.
          </p>
        </div>

        {/* 3 Main Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-7 border ${item.border} hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl pointer-events-none`} />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900/80 text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
                    <Medal className="w-3.5 h-3.5" />
                    {item.badge}
                  </span>
                  <Award className="w-5 h-5 text-teal-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className={`text-sm font-bold font-mono ${item.accent} mt-1`}>
                    {item.rank}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {item.scale}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/80 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-900/90 text-[11px] font-mono text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-300 text-xs font-bold transition-all border border-teal-500/30"
                      >
                        <span>Live Simulation</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass hover:bg-slate-800 text-slate-300 hover:text-teal-300 text-xs font-semibold transition-all border border-slate-700/60"
                        title="View Hackathon Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/90 shadow-2xl transition-all duration-500">
            {/* Top quote icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Quote className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Community &amp; Team Feedback
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            {/* Main Testimonial Quote */}
            <blockquote className="text-base sm:text-xl font-medium leading-relaxed text-slate-100 mb-10 transition-opacity duration-300 min-h-[90px]">
              "{current.quote}"
            </blockquote>

            {/* Author Profile Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.color} border ${current.border} flex items-center justify-center font-mono font-bold text-lg ${current.text} shadow-lg shadow-teal-500/5 select-none`}
                >
                  {current.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-100 flex items-center gap-1.5">
                    <span>{current.author}</span>
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="text-xs sm:text-sm text-teal-300 font-mono">
                    {current.role}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {current.company}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={previous}
                  aria-label="Previous Testimonial"
                  className="p-3 rounded-full glass hover:bg-teal-500/20 hover:text-teal-300 hover:border-teal-500/40 transition-colors text-slate-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dot indicators */}
                <div className="flex gap-1.5 px-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlay(false);
                        setActiveIdx(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIdx
                          ? "w-8 bg-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.6)]"
                          : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next Testimonial"
                  className="p-3 rounded-full glass hover:bg-teal-500/20 hover:text-teal-300 hover:border-teal-500/40 transition-colors text-slate-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};