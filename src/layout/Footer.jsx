import {
  Mail,
  ArrowUp,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, HuggingFaceIcon } from "@/components/Icons";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/anuragverma025", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/anurag-verma025", label: "LinkedIn" },
  { icon: HuggingFaceIcon, href: "https://huggingface.co/Anurag137", label: "Hugging Face" },
  { icon: Mail, href: "mailto:24bcs019@iiitdwd.ac.in", label: "Email" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#070a0e] pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Logo & Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 text-slate-100 group">
              <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold">
                Anurag Verma<span className="text-teal-400 font-mono">.dev</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Computer Science &amp; Engineering undergraduate at IIIT Dharwad. Building scalable full-stack applications and multi-agent RL systems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-300 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full glass hover:bg-teal-500/20 hover:text-teal-300 hover:border-teal-500/40 transition-all text-slate-400"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 hover:bg-teal-500 hover:text-slate-950 transition-all duration-300 ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-footer / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Anurag Verma. Indian Institute of Information Technology, Dharwad.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>All systems operational • Dharwad, Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};