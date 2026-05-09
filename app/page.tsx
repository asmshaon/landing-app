import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { ClientLogos } from "./sections/ClientLogos";
import { Services } from "./sections/Services";
import { Projects } from "./sections/Projects";
import { WhyHireMe } from "./sections/WhyHireMe";
import { Testimonials } from "./sections/Testimonials";
import { FooterCTA, Footer } from "./sections/Footer";

export default function Home() {
  return (
    <div className="min-h-full">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <Projects />
      <WhyHireMe />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </div>
  );
}
