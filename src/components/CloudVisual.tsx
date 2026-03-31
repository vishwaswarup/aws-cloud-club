import { motion } from "motion/react";
import { useEffect, useState } from "react";

const awsIcons = [
  "ec2",
  "lambda",
  "s3",
  "rds",
  "dynamodb",
  "apigateway",
  "cloudfront",
  "vpc",
  "sqs",
  "sns",
  "cloudwatch",
  "iam",
  "route53",
].map(name => `/aws/${name}.svg`);

export default function CloudVisual() {
  const [nodes, setNodes] = useState<any[]>([]);

  // 🔥 GRID-BASED CLEAN LAYOUT (NO OVERLAP)
  useEffect(() => {
    const cols = 4;
    const rows = Math.ceil(awsIcons.length / cols);

    const generated = awsIcons.map((icon, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      return {
        id: i,
        icon,
        baseX: 15 + col * 20,
        baseY: 20 + row * 20,
        offsetX: Math.random() * 10 - 5,
        offsetY: Math.random() * 10 - 5,
        size: 24,
      };
    });

    setNodes(generated);
  }, []);

  return (
    <div className="relative w-full h-[420px] rounded-xl bg-[#0b0f14] border border-white/10 overflow-hidden">

      {/* 🌫 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-[#FF9900]/10 blur-[120px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🔗 CLEAN CONNECTIONS */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dx = a.baseX - b.baseX;
            const dy = a.baseY - b.baseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 30) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${a.baseX}%`}
                  y1={`${a.baseY}%`}
                  x2={`${b.baseX}%`}
                  y2={`${b.baseY}%`}
                  stroke="rgba(255,153,0,0.08)"
                  strokeWidth="1"
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* 🔥 NODES (SMOOTH FLOAT) */}
      {nodes.map(node => (
        <motion.img
          key={node.id}
          src={node.icon}
          className="absolute opacity-90"
          style={{
            width: node.size,
            left: `${node.baseX}%`,
            top: `${node.baseY}%`,
            transform: "translate(-50%, -50%)",
            filter: "drop-shadow(0 0 6px rgba(255,153,0,0.25))",
          }}
          animate={{
            x: [0, node.offsetX, 0],
            y: [0, node.offsetY, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4 + node.id * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ⚡ LIGHT SWEEP */}
      <motion.div
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/30 to-transparent w-[140%]"
        style={{ top: "50%", left: "-20%" }}
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
