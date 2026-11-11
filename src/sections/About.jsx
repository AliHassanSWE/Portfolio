import { motion } from 'framer-motion';
import { Terminal, Database, Layout } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-cyan/5 blur-[120px] pointer-events-none -z-10"></div>

      <motion.div 
        className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Left Side: Text Content */}
        <motion.div variants={textVariants} className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(0,255,163,0.3)]">
            Full-Stack <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">Developer</span>
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 font-light max-w-2xl mx-auto lg:mx-0">
            Building digital experiences that merge logic with modern technology. I am a Computer Science undergraduate specializing in robust backend architectures, scalable database systems, and intuitive user interfaces.
          </p>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-10 font-light max-w-2xl mx-auto lg:mx-0">
            My technical journey revolves around solving complex problems with clean, efficient code. From engineering enterprise-level Point of Sale platforms in Java Spring Boot to deploying containerized applications via Docker, I thrive on building end-to-end software solutions that create genuine impact. I am continuously exploring emerging cloud technologies to stay at the forefront of modern web development.
          </p>

          {/* Animated Info Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center lg:items-start p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-cyan/40 hover:bg-cyan/[0.02] transition-all duration-300 group">
              <Terminal size={20} className="text-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono text-gray-300">Backend Systems</span>
            </div>
            <div className="flex flex-col items-center lg:items-start p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-purple/40 hover:bg-purple/[0.02] transition-all duration-300 group">
              <Database size={20} className="text-purple mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono text-gray-300">Database Design</span>
            </div>
            <div className="flex flex-col items-center lg:items-start p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-cyan/40 hover:bg-cyan/[0.02] transition-all duration-300 group">
              <Layout size={20} className="text-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono text-gray-300">Modern UI/UX</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glowing Circular Profile Picture matching reference image */}
        <motion.div variants={imageVariants} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] shrink-0 mx-auto">
          {/* Outer rotating neon ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan via-transparent to-purple p-[2px] opacity-70"
          ></motion.div>
          
          {/* Inner Glowing Shadow Ring */}
          <div className="absolute inset-2 rounded-full shadow-[0_0_60px_rgba(0,255,163,0.4)] bg-background"></div>

          {/* Profile Image Container */}
          <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background z-10 bg-surface flex items-center justify-center group">
            
            {/* REPLACE THIS DIV WITH YOUR ACTUAL IMAGE TAG LATER */}
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-700">
              <span className="font-serif text-4xl">AH</span>
              <span className="text-xs font-mono mt-2 tracking-widest uppercase text-cyan">Profile</span>
            </div>
            {/* <img src="/your-photo.jpg" alt="Ali Hassan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /> */}
            
            {/* Glass overlay that shines when hovered */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;