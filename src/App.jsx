import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
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

// Global Bottom-to-Top Animation Wrapper for the WHOLE document
const SectionReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Neon Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-background bg-mesh text-white selection:bg-[#0066FF]/30 relative flex flex-col p-2 md:p-4 overflow-hidden ${loading ? 'opacity-0 h-screen' : 'opacity-100'} transition-opacity duration-700`}>
        
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
            
            {/* EVERY section is now wrapped to guarantee a unified pop-up animation on scroll */}
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
    </>
  );
}

export default App;