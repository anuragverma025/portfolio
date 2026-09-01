import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import { Menu, X, Sparkles, Terminal, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#achievements", label: "Achievements", id: "achievements" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur check
      setIsScrolled(window.scrollY > 40);

      // Scroll progress computation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Scroll spy for active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-400 via-sky-400 to-purple-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3.5 bg-[#090d12]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-100 group"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight group-hover:text-teal-300 transition-colors">
                Anurag Verma<span className="text-teal-400 font-mono">.dev</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 -mt-1">
                Full-Stack &amp; AI Developer • IIIT Dharwad
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5 glass rounded-full px-3 py-1.5 border border-slate-800 shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/25 font-bold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA / Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact">
              <Button size="sm" className="font-bold shadow-md shadow-teal-500/20">
                <Sparkles className="w-3.5 h-3.5 text-teal-950" />
                Let's Talk
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2.5 rounded-xl glass text-slate-200 hover:text-teal-300 transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong border-b border-slate-800 animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-teal-500/10 text-teal-300 border border-teal-500/30"
                        : "text-slate-300 hover:text-teal-300"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}

              <div className="pt-2 border-t border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full block"
                >
                  <Button size="md" className="w-full font-bold">
                    Get In Touch
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};