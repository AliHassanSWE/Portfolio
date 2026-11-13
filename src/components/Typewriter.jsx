import { motion } from "framer-motion";

const Typewriter = ({ text }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };
  
  const child = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };
  
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {letters.map((char, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default Typewriter;