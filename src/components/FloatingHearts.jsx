import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: -200, opacity: 1 }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute text-pink-400 text-xl"
          style={{ left: Math.random() * 100 + "%" }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
}
