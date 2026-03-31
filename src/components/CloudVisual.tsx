import { motion } from "motion/react";

const icons = [
  { src: "/aws/ec2.svg", x: 20, y: 30 },
  { src: "/aws/lambda.svg", x: 75, y: 25 },
  { src: "/aws/s3.svg", x: 30, y: 70 },
  { src: "/aws/rds.svg", x: 70, y: 75 },
  { src: "/aws/dynamodb.svg", x: 50, y: 20 },
  { src: "/aws/apigateway.svg", x: 15, y: 55 },
  { src: "/aws/cloudfront.svg", x: 85, y: 55 },
];

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[420px] rounded-xl bg-[#0b0f14] border border-white/10 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-[#FF9900]/10 blur-[100px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🌫 FLOATING PARTICLES */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ☁️ CENTER AWS */}
      <motion.img
        src="/aws/aws.svg"
        className="absolute w-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          filter: "drop-shadow(0 0 20px rgba(255,153,0,0.4))",
        }}
      />

      {/* 🔁 FLOATING ICONS */}
      {icons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon.src}
          className="absolute w-8 opacity-90"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ⚡ LIGHT FLOW LINES */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent"
          style={{
            top: `${20 + i * 12}%`,
            left: "-20%",
            width: "140%",
          }}
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
