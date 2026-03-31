import { motion } from "motion/react";
import { useEffect, useState } from "react";

const awsIcons = [
  "ec2","lambda","s3","rds","dynamodb","apigateway","cloudfront",
  "vpc","sqs","sns","cloudwatch","ecs","eks","route53","iam",
  "elasticloadbalancing","efs","elasticache"
].map(name => `/aws/${name}.svg`);

export default function CloudVisual() {
  const [nodes, setNodes] = useState<any[]>([]);

  // 🔥 generate MANY nodes automatically
  useEffect(() => {
    const generated = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      icon: awsIcons[i % awsIcons.length],
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      size: 22 + Math.random() * 10,
    }));
    setNodes(generated);
  }, []);

  // 🔁 smooth floating motion
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev =>
        prev.map(n => {
          let x = n.x + n.dx;
          let y = n.y + n.dy;

          if (x < 5 || x > 95) n.dx *= -1;
          if (y < 5 || y > 95) n.dy *= -1;

          return { ...n, x, y };
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] rounded-xl bg-[#0b0f14] border border-white/10 overflow-hidden">

      {/* 🔥 SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#FF9900]/10 blur-[120px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🌫 PARTICLES */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 🔗 CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);

            if (dist < 20) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="rgba(255,153,0,0.15)"
                  strokeWidth="0.7"
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* 🔥 NODES */}
      {nodes.map(node => (
        <motion.img
          key={node.id}
          src={node.icon}
          className="absolute opacity-90"
          style={{
            width: node.size,
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
            filter: "drop-shadow(0 0 6px rgba(255,153,0,0.25))",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ⚡ LIGHT SWEEP */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent"
          style={{
            top: `${30 + i * 20}%`,
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
