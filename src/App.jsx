import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

// Global Bottom-to-Top Animation Wrapper
// Updated: Increased 'y' distance and extended 'duration' to 1.2s for a smoother, highly visible pop-up.
const SectionReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  // Neon Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background bg-mesh text-white selection:bg-[#0066FF]/30 relative flex flex-col p-2 md:p-4 overflow-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#00FFA3] origin-left z-[9999] shadow-[0_0_10px_#00FFA3]"
        style={{ scaleX }}
      />

      <CustomCursor />
      <BackToTop />

      <div className="relative z-10 flex flex-col w-full h-full border border-white/5 rounded-3xl bg-black/20 backdrop-blur-[2px]">
        <Navbar />
        <main className="flex-1 w-full overflow-hidden">
          
          {/* EVERY section wrapped for a unified, slow, and smooth pop-up animation */}
          <SectionReveal>
            <Hero />
          </SectionReveal>

          <SectionReveal>
            <About />
          </SectionReveal>
          
          <SectionReveal>
            <Skills />
          </SectionReveal>

          <SectionReveal>
            <Projects />
          </SectionReveal>

          <SectionReveal>
            <Certifications />
          </SectionReveal>

          <SectionReveal>
            <Contact />
          </SectionReveal>
          
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;