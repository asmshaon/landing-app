"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const steps = [
  {
    title: "You describe the problem",
    detail: "A few lines about what you're building or what isn't working.",
  },
  {
    title: "I reply with questions and first thoughts",
    detail: "So we both understand the problem before talking solutions.",
  },
  {
    title: "We decide together",
    detail: "If it's a good fit, we plan the next step. If not, you still leave with ideas.",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asmshaon" },
  { label: "GitHub", href: "https://github.com/asmshaon" },
  { label: "X", href: "https://x.com/asmshaon" },
  { label: "Portfolio", href: "https://portfolio.asmshaon.tech/" },
  { label: "Blog", href: "https://blog.asmshaon.tech/" },
];

export function FooterCTA() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-dark-900 scroll-mt-20 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
        <div>
          <p className="eyebrow mb-3">Let&apos;s talk</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-[3.25rem] leading-[1.05]">
            Got a problem worth solving?
          </h2>
          <p className="mt-4 mb-8 max-w-md text-lg text-slate-600 dark:text-slate-400">
            Tell me what you&apos;re building or what&apos;s in the way, and we&apos;ll take it from there.
          </p>

          <p className="eyebrow mb-2">What happens next</p>
          <ol className="border-b border-slate-200 dark:border-dark-600">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-3 py-4 border-t border-slate-200 dark:border-dark-600"
              >
                <span className="row-span-2 w-8 h-8 rounded-full border border-accent flex items-center justify-center font-display text-accent">
                  {i + 1}
                </span>
                <span className="font-semibold text-accent">{step.title}</span>
                <span className="text-[0.9375rem] text-slate-600 dark:text-slate-400">{step.detail}</span>
              </li>
            ))}
          </ol>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-start p-6 sm:p-7 rounded-md bg-white dark:bg-dark-900 border border-slate-200 dark:border-dark-600 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-accent font-medium">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3.5 py-3 rounded-md bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-dark-500 text-accent placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-slate-200 dark:focus:ring-dark-600 transition-colors"
            placeholder="Jane Smith"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-accent font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3.5 py-3 rounded-md bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-dark-500 text-accent placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-slate-200 dark:focus:ring-dark-600 transition-colors"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm text-accent font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3.5 py-3 rounded-md bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-dark-500 text-accent placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-slate-200 dark:focus:ring-dark-600 transition-colors"
          placeholder="What would you like to solve?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-accent font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3.5 py-3 rounded-md bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-dark-500 text-accent placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-slate-200 dark:focus:ring-dark-600 transition-colors resize-y"
          placeholder="Tell me about the problem, the team and what success looks like."
        ></textarea>
      </div>

      {statusMessage.type && (
        <div
          role="status"
          className={`flex items-center gap-2.5 px-4 py-3 rounded-md text-sm font-medium text-accent border ${
            statusMessage.type === "success"
              ? "border-accent"
              : "border-dashed border-accent bg-slate-50 dark:bg-dark-800"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle className="w-4 h-4 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0" />
          )}
          {statusMessage.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto btn-primary px-7 py-3 rounded-md text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send message"}
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

// Stays black in both themes as the page's closing band.
export function Footer() {
  return (
    <footer className="bg-dark-900 text-slate-400 border-t border-dark-600 pt-12 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-dark-600">
          <div>
            <div className="font-display text-2xl text-slate-100">Abu Saleh</div>
            <div className="mt-1">Senior Full-Stack Software Engineer · Bangladesh, GMT+6</div>
          </div>
          <nav aria-label="Profiles" className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="pt-6 text-xs">
          &copy; {new Date().getFullYear()} Abu Saleh Muhammad Shaon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
