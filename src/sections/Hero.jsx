import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Typewriter from '../components/Typewriter';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

const words = ["platforms.", "solutions.", "applications.", "experiences."];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center w-full overflow-hidden">
      <motion.div 
        className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10"
        initial="hidden" 
        animate="show" 
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight mt-24">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple drop-shadow-[0_0_15px_rgba(0,255,163,0.4)]">Ali Hassan.</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8 min-h-[80px]">
          <Typewriter text="I'm a Computer Science Student and Software Developer who loves understanding how things work under the hood. Currently focused on building robust backend systems, data structures, and practical software solutions." />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap items-center text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight">
            <span className="text-gray-400 mr-3">Building</span> 
            <span className="text-primary relative inline-block h-[1.2em] w-[250px] md:w-[350px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan drop-shadow-[0_0_10px_rgba(0,255,163,0.5)]"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 mt-4">
          <a href="#projects" className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-8 py-3.5 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            View Projects <ArrowRight size={18} />
          </a>
          
          <div className="flex items-center gap-3">
            <a href="https://github.com/AliHassanSWE" target="_blank" rel="noreferrer" className="p-3.5 border border-white/20 rounded-xl text-gray-300 hover:text-cyan hover:border-cyan hover:bg-cyan/10 transition-all bg-white/5 backdrop-blur-sm relative z-20">
              <GithubIcon size={20} />
            </a>
            <a href="https://wa.me/923497462724" target="_blank" rel="noreferrer" className="p-3.5 border border-white/20 rounded-xl text-gray-300 hover:text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all bg-white/5 backdrop-blur-sm relative z-20">
              <WhatsAppIcon size={20} />
            </a>
            <a href="#" className="p-3.5 border border-white/20 rounded-xl text-gray-300 hover:text-purple hover:border-purple hover:bg-purple/10 transition-all bg-white/5 backdrop-blur-sm relative z-20">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;