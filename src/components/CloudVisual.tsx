import { motion } from "motion/react";

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center rounded-md border border-white/10 bg-[#161b22] overflow-hidden">

      {/* CENTER CORE */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-4 h-4 bg-[#FF9900] rounded-full z-10 shadow-[0_0_15px_rgba(255,153,0,0.6)]"
      />

      {/* NODE POSITIONS */}
      {[
        { x: -80, y: -60 },
        { x: 80, y: -60 },
        { x: -80, y: 60 },
        { x: 80, y: 60 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ y: [pos.y, pos.y + 6, pos.y] }}
          transition={{ duration: 3 + i, repeat: Infinity }}
          className="absolute"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        >
          <div className="w-2 h-2 bg-white/80 rounded-full" />
        </motion.div>
      ))}

      {/* CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(255,153,0,0.2)" />
        <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(255,153,0,0.2)" />
        <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(255,153,0,0.2)" />
        <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(255,153,0,0.2)" />
      </svg>

      {/* DATA FLOW (MOVING DOTS) */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#FF9900] rounded-full"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, (i % 2 === 0 ? -80 : 80)],
            y: [0, (i < 2 ? -60 : 60)],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* OUTER RING */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.circle
          cx="50%"
          cy="50%"
          r="90"
          stroke="rgba(255,153,0,0.15)"
          strokeWidth="1"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>

    </div>
  );
}
