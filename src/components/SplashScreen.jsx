import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const messages = [
    "> Initializing AliHassan.exe...",
    "> Loading backend modules...",
    "> Establishing secure connection...",
    "> Access Granted."
  ];

  useEffect(() => {
    if (textIndex < messages.length - 1) {
      const timer = setTimeout(() => setTextIndex(prev => prev + 1), 500);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(onComplete, 800);
      return () => clearTimeout(finishTimer);
    }
  }, [textIndex, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[99999] bg-[#02040A] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-md p-8 bg-white/[0.02] border border-[#0066FF]/30 rounded-xl shadow-[0_0_30px_rgba(0,102,255,0.1)]">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-[#00FFA3]/80"></div>
        </div>
        <div className="font-mono text-sm md:text-base text-[#00FFA3] flex flex-col gap-2">
          {messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: idx <= textIndex ? 1 : 0, x: idx <= textIndex ? 0 : -10 }}
            >
              {msg}
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-[#00FFA3] mt-1"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;