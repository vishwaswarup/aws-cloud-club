import { motion } from "motion/react";

const layers = [
  {
    radius: 120, // 🔥 bigger
    speed: 24,
    icons: [
      "/aws/ec2.svg",
      "/aws/s3.svg",
      "/aws/lambda.svg",
      "/aws/rds.svg",
    ],
  },
  {
    radius: 190, // 🔥 bigger outer ring
    speed: 34,
    icons: [
      "/aws/dynamodb.svg",
      "/aws/apigateway.svg",
      "/aws/cloudfront.svg",
      "/aws/vpc.svg",
      "/aws/sqs.svg",
      "/aws/sns.svg",
    ],
  },
];

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[520px] rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center overflow-hidden">

      {/* 🔥 RADIAL WEB */}
      <svg className="absolute w-full h-full">

        {/* rings */}
        <circle cx="50%" cy="50%" r="110" stroke="rgba(255,255,255,0.08)" fill="none" />
        <circle cx="50%" cy="50%" r="180" stroke="rgba(255,255,255,0.06)" fill="none" />

        {/* radial lines */}
        {[...Array(16)].map((_, i) => {
          const angle = (i / 16) * 2 * Math.PI;
          const x = 50 + 50 * Math.cos(angle);
          const y = 50 + 50 * Math.sin(angle);

          return (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          );
        })}

        {/* subtle cross mesh */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * 2 * Math.PI;
          const x1 = 50 + 50 * Math.cos(angle);
          const y1 = 50 + 50 * Math.sin(angle);

          const x2 = 50 + 50 * Math.cos(angle + Math.PI);
          const y2 = 50 + 50 * Math.sin(angle + Math.PI);

          return (
            <line
              key={`cross-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(255,153,0,0.05)" // 🔥 AWS tint
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* 🔥 CENTER */}
      <motion.img
        src="/aws/aws.svg"
        className="absolute w-16 z-10"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          filter: "drop-shadow(0 0 14px rgba(255,153,0,0.5))",
        }}
      />

      {/* 🔁 ORBIT LAYERS */}
      {layers.map((layer, layerIndex) => (
        <motion.div
          key={layerIndex}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: layer.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: layer.radius * 2,
            height: layer.radius * 2,
          }}
        >
          {layer.icons.map((icon, i) => {
            const angle = (i / layer.icons.length) * 2 * Math.PI;

            const x = layer.radius + layer.radius * Math.cos(angle);
            const y = layer.radius + layer.radius * Math.sin(angle);

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                }}
              >
                <img
                  src={icon}
                  className="w-8"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(255,153,0,0.25))",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      ))}

      {/* 🔥 GLOW */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,153,0,0.12), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
}
