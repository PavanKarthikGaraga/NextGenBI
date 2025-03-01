import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TrainingOverview from '@/components/TrainingOverview';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Curriculum from '@/components/Curriculum';
import About from '@/components/About';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="curriculum">
          <Curriculum />
        </section>
        <section id="training">
          <TrainingOverview />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
