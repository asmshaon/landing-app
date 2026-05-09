"use client";

import { useState } from "react";
import { ArrowRight, Phone, FileText, MapPin, Mail, MapPinned, MessageSquare } from "lucide-react";

export function FooterCTA() {
  return (
    <section id="contact" className="section-dark py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-gray-400 mb-10">
          Have a project in mind? Let&apos;s discuss how I can help you achieve your goals.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="https://www.upwork.com/freelancers/~0144413bdd55c4bd39"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl text-sm font-semibold"
          >
            Hire Me
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://calendly.com/asmshaon/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl text-sm font-semibold"
          >
            Book a Call
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="mailto:srabon.php@gmail.com?subject=Project%20Quote%20Request"
            className="btn-outline inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl text-sm font-semibold"
          >
            Get a Quote
            <FileText className="w-4 h-4" />
          </a>
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
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-left">
      {/* Contact Info */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
            <MapPinned className="w-5 h-5 text-accent-light" />
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-1">Location</h4>
            <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5 text-accent-light" />
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-1">WhatsApp</h4>
            <p className="text-gray-400 text-sm">+88 01748 966 158</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-accent-light" />
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-1">Email</h4>
            <p className="text-gray-400 text-sm">srabon.php@gmail.com</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396724427!2d90.25487796061215!3d23.780753659692634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1732713600000!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dhaka, Bangladesh Map"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-3">
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-300 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-300 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm text-gray-300 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
              placeholder="Project inquiry"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-300 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          {statusMessage.type && (
            <div
              className={`px-4 py-3 rounded-lg text-sm font-medium ${
                statusMessage.type === "success"
                  ? "bg-green-500/10 border border-green-500/30 text-green-400"
                  : "bg-red-500/10 border border-red-500/30 text-red-400"
              }`}
            >
              {statusMessage.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto btn-primary text-white px-8 py-3 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} <strong>asmshaon</strong>. All rights reserved.</div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            Bangladesh, GMT+6
          </div>
        </div>
      </div>
    </footer>
  );
}
