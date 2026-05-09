import { ArrowRight, Phone, FileText, MapPin } from "lucide-react";

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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">&copy; 2024 Abu Saleh. All rights reserved.</div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            Bangladesh, GMT+6
          </div>
        </div>
      </div>
    </footer>
  );
}
