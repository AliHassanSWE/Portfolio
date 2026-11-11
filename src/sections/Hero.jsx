import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-6 lg:px-12 max-w-5xl mx-auto">
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        
        <motion.div variants={itemVariants} className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-surface border border-border overflow-hidden relative shadow-[0_0_30px_rgba(226,90,54,0.15)] flex items-center justify-center">
            <span className="text-3xl font-serif text-gray-500">AH</span>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">Ali Hassan</h1>
            <p className="text-gray-400 text-sm tracking-widest uppercase font-mono mb-3">
              Computer Science Student | Software Developer
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase">
              <span className="flex items-center gap-2 border border-border px-3 py-1 rounded-full text-gray-300 bg-surface">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Open to work
              </span>
              <span className="hidden sm:inline">Pakistan • PKT (UTC+5)</span>
            </div>
          </div>
        </motion.div>

        {/* Updated Heading Structure */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-[1.1] tracking-tight">
            Building thoughtful,
          </h2>
          <div className="flex flex-wrap items-center text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="font-serif italic font-normal text-gray-300 mr-4 md:mr-6">
              end-to-end
            </span> 
            {/* Added h-[1.2em] to reserve height and prevent button overlap */}
            <span className="text-primary relative inline-block h-[1.2em] w-[300px] md:w-[450px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-0 top-0"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
          <a href="#contact" className="flex items-center gap-2 bg-primary hover:bg-orange-700 text-white px-7 py-3 rounded-md font-medium transition-all shadow-lg shadow-primary/20">
            <Mail size={18} /> Get in touch
          </a>
          <div className="flex items-center gap-4 border-l border-border pl-4 ml-2">
            <a href="https://github.com/AliHassanSWE" target="_blank" rel="noreferrer" className="p-3 border border-border rounded-md text-gray-400 hover:text-white hover:border-gray-500 transition-colors bg-surface">
              <GithubIcon size={20} />
            </a>
            <a href="https://wa.me/923497462724" target="_blank" rel="noreferrer" className="p-3 border border-border rounded-md text-gray-400 hover:text-white hover:border-green-500 transition-colors bg-surface">
              <WhatsAppIcon size={20} />
            </a>
            <a href="#" className="p-3 border border-border rounded-md text-gray-400 hover:text-white hover:border-gray-500 transition-colors bg-surface">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;