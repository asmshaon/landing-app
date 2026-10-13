import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./sections/Hero";
import { Proof } from "./sections/Proof";
import { ClientLogos } from "./sections/ClientLogos";
import { Industries } from "./sections/Industries";
import { Services } from "./sections/Services";
import { CaseStudies } from "./sections/CaseStudies";
import { WhyHireMe } from "./sections/WhyHireMe";
import { Testimonials } from "./sections/Testimonials";
import { FooterCTA, Footer } from "./sections/Footer";

export default function Home() {
  return (
    <div className="min-h-full">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Proof />
      <ClientLogos />
      <Industries />
      <Services />
      <CaseStudies />
      <WhyHireMe />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </div>
  );
}
