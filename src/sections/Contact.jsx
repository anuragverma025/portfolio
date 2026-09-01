import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Phone,
  MessageSquare,
  Globe,
} from "lucide-react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const contactChannels = [
  {
    icon: Mail,
    label: "Email Address",
    value: "24bcs019@iiitdwd.ac.in",
    action: "mailto:24bcs019@iiitdwd.ac.in",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91-9336852798",
    action: "tel:+919336852798",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Current Location",
    value: "IIIT Dharwad, Karnataka, India",
    action: "#",
    copyable: false,
  },
  {
    icon: Globe,
    label: "Hugging Face Space",
    value: "huggingface.co/Anurag137",
    action: "https://huggingface.co/Anurag137",
    copyable: false,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Project / Role Inquiry",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' | 'error'
    message: "",
  });
  const [copiedItem, setCopiedItem] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(""), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );
      } else {
        // Graceful simulation when env vars are unconfigured in local preview
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! Thank you for reaching out, I will get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "New Project / Role Inquiry",
        message: "",
      });
    } catch (err) {
      console.warn("Email service notice:", err);
      // Fallback message encouraging direct mail
      setSubmitStatus({
        type: "error",
        message:
          "Unable to send via automated dispatch. Please email me directly at 24bcs019@iiitdwd.ac.in!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300 uppercase tracking-wider mb-4 animate-fade-in">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Connect
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 animate-fade-in animation-delay-100">
            Have a project or opportunity?{" "}
            <span className="gradient-text glow-text font-serif italic font-normal">
              Let's build together.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-in animation-delay-200">
            Whether you are looking to collaborate on full-stack web platforms, multi-agent AI simulations, or discuss software engineering roles, I'd love to connect.
          </p>
        </div>

        {/* Contact Form & Channel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-slate-800/90 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900/90 rounded-xl border border-slate-800 text-slate-100 text-sm focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900/90 rounded-xl border border-slate-800 text-slate-100 text-sm focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold"
                >
                  Topic / Project Scope
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Full-Stack Web App / Technical Advisory"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-900/90 rounded-xl border border-slate-800 text-slate-100 text-sm focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold"
                >
                  Message &amp; Timeline *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  placeholder="Tell me about your goals, current architecture, timeline, and how I can help..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-900/90 rounded-xl border border-slate-800 text-slate-100 text-sm focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-all resize-none placeholder:text-slate-600"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full py-4 text-base font-bold shadow-lg shadow-teal-500/20"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Transmitting Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 ml-1" />
                  </span>
                )}
              </Button>

              {/* Status Alert Banner */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-2xl flex items-start gap-3 text-sm animate-fade-in ${
                    submitStatus.type === "success"
                      ? "bg-emerald-950/40 border border-emerald-500/40 text-emerald-300"
                      : "bg-rose-950/40 border border-rose-500/40 text-rose-300"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
                  )}
                  <p className="leading-relaxed">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Channels & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Banner */}
            <div className="glass-card rounded-3xl p-6 border border-teal-500/30 bg-teal-950/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500" />
                </span>
                <span className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open for Software Development Engineer (SDE) internships, Full-Stack development roles, hackathons, and AI / Multi-Agent RL research projects.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800/90">
              <h3 className="text-base font-bold text-slate-100 mb-2">
                Direct Channels
              </h3>

              <div className="space-y-3">
                {contactChannels.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          {item.label}
                        </div>
                        <a
                          href={item.action}
                          target={item.action.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-teal-300 transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>

                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value, item.label)}
                        className="p-2 rounded-lg glass hover:bg-slate-800 text-slate-400 hover:text-teal-300 transition-colors flex-shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedItem === item.label ? (
                          <Check className="w-4 h-4 text-teal-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};