import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#02040A]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient Cyber Glow */}
        <div className="absolute w-48 h-48 bg-gradient-to-r from-[#0066FF]/20 to-[#00FFA3]/20 blur-[60px] rounded-full"></div>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
          className="w-64 h-32 relative z-10"
        >
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#00FFA3" />
            </linearGradient>
          </defs>

          {/* Letter A */}
          <motion.path
            d="M 40 80 L 70 20 L 100 80 M 55 60 L 85 60"
            fill="transparent"
            stroke="url(#neonGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Letter H */}
          <motion.path
            d="M 130 20 L 130 80 M 180 20 L 180 80 M 130 50 L 180 50"
            fill="transparent"
            stroke="url(#neonGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default SplashScreen;