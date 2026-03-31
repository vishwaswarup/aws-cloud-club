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
  "ecs",
  "elasticache",
  "aww",
  "aws"
].map(name => `/aws/${name}.svg`);

export default function CloudVisual() {
  const [nodes, setNodes] = useState<any[]>([]);

  // 🔥 generate nodes
  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      icon: awsIcons[i % awsIcons.length],
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      dx: (Math.random() - 0.5) * 0.12,
      dy: (Math.random() - 0.5) * 0.12,
      size: 22 + Math.random() * 8,
    }));
    setNodes(generated);
  }, []);

  // 🔁 movement
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

      {/* 🌫 glow */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-[#FF9900]/10 blur-[120px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🔗 lines */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 18) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="rgba(255,153,0,0.12)"
                  strokeWidth="0.6"
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* 🔥 nodes */}
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
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
