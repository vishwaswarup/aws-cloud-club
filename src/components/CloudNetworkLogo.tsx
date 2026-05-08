import { motion } from "motion/react";

export default function CloudNetworkLogo() {

  return (

    <div className="relative w-8 h-8 flex items-center justify-center">

      {/* CENTER NODE */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity
        }}
        className="w-3 h-3 rounded-full bg-[#9b5cff] shadow-[0_0_14px_rgba(155,92,255,0.28)]"
      />

      {/* ORBIT RINGS */}
      <svg className="absolute inset-0 w-full h-full">

        <motion.circle
          cx="50%"
          cy="50%"
          r="10"
          stroke="rgba(155,92,255,0.18)"
          strokeWidth="0.8"
          fill="none"
          animate={{
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />

      </svg>

      {/* ORBITING NODES */}
      {[0, 1, 2].map((i) => (

        <motion.div
          key={i}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 7 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-full h-full"
        >

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-1.5
              h-1.5
              rounded-full
              bg-[#18181b]/70
            "
          />

        </motion.div>

      ))}

    </div>
  );
}
