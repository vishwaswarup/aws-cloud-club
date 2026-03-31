import { motion } from "motion/react";

const icons = [
  "/aws/ec2.svg",
  "/aws/lambda.svg",
  "/aws/s3.svg",
  "/aws/rds.svg",
  "/aws/dynamodb.svg",
  "/aws/apigateway.svg",
  "/aws/cloudfront.svg",
  "/aws/vpc.svg",
  "/aws/sqs.svg",
  "/aws/sns.svg",
];

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[420px] rounded-xl bg-[#0b0f14] border border-white/10 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-[#FF9900]/10 blur-[120px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🌫 PARTICLES */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 🔁 FLOATING ICON GRID */}
      {icons.map((icon, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;

        return (
          <motion.img
            key={i}
            src={icon}
            className="absolute w-8 opacity-90"
            style={{
              left: `${20 + col * 20}%`,
              top: `${20 + row * 20}%`,
            }}
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* ⚡ LIGHT SWEEPS */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent"
          style={{
            top: `${25 + i * 15}%`,
            left: "-20%",
            width: "140%",
          }}
          animate={{ x: ["0%", "100%"] }}
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
