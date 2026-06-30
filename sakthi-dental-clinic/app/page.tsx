import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Doctors />

      <Appointment />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />

      <BackToTop />

    </main>
  );
}