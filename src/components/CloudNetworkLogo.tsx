import { motion } from "motion/react";

export default function CloudNetworkLogo() {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">

      {/* Center Cloud */}
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-3 h-3 bg-[#FF9900] rounded-full shadow-[0_0_10px_rgba(255,153,0,0.6)]"
      />

      {/* Orbiting Nodes */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-full h-full"
        >
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/70 rounded-full`}
          />
        </motion.div>
      ))}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.circle
          cx="50%"
          cy="50%"
          r="10"
          stroke="rgba(255,153,0,0.2)"
          strokeWidth="0.5"
          fill="none"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

    </div>
  );
}
