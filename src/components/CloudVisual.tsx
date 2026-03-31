import { motion } from "motion/react";
import { useEffect, useState } from "react";

const awsIcons = [
  { name: "EC2", file: "ec2" },
  { name: "Lambda", file: "lambda" },
  { name: "S3", file: "s3" },
  { name: "RDS", file: "rds" },
  { name: "DynamoDB", file: "dynamodb" },
  { name: "API Gateway", file: "apigateway" },
  { name: "CloudFront", file: "cloudfront" },
  { name: "VPC", file: "vpc" },
  { name: "SQS", file: "sqs" },
  { name: "SNS", file: "sns" },
  { name: "CloudWatch", file: "cloudwatch" },
  { name: "IAM", file: "iam" },
  { name: "Route 53", file: "route53" },
];

export default function CloudVisual() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  // 🔥 INITIAL RANDOM DISTRIBUTION (BETTER SPREAD)
  useEffect(() => {
    const generated = awsIcons.map((icon, i) => ({
      id: i,
      icon: `/aws/${icon.file}.svg`,
      name: icon.name,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      size: 32 + Math.random() * 8, // 🔥 BIGGER ICONS
    }));

    setNodes(generated);
  }, []);

  // 🔁 SMOOTH RANDOM MOVEMENT
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev =>
        prev.map(n => {
          let x = n.x + n.dx;
          let y = n.y + n.dy;

          // bounce edges
          if (x < 8 || x > 92) n.dx *= -1;
          if (y < 8 || y > 92) n.dy *= -1;

          return { ...n, x, y };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[460px] rounded-xl bg-[#0b0f14] border border-white/10 overflow-hidden">

      {/* 🌫 glow */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#FF9900]/10 blur-[140px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🔗 DYNAMIC CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);

            if (dist < 22) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="rgba(255,153,0,0.18)"
                  strokeWidth="1.2"
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* 🔥 NODES */}
      {nodes.map(node => (
        <motion.div
          key={node.id}
          className="absolute group cursor-pointer"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          onHoverStart={() => setHovered(node.id)}
          onHoverEnd={() => setHovered(null)}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          {/* ICON */}
          <img
            src={node.icon}
            onError={(e: any) => (e.currentTarget.style.display = "none")}
            className="opacity-95"
            style={{
              width: node.size,
              filter: "drop-shadow(0 0 10px rgba(255,153,0,0.35))",
            }}
          />

          {/* TOOLTIP */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded bg-[#161b22] border border-white/10 text-gray-300 whitespace-nowrap
            transition-all duration-200
            ${hovered === node.id ? "opacity-100 translate-y-2" : "opacity-0 pointer-events-none"}
            `}
          >
            {node.name}
          </div>
        </motion.div>
      ))}

      {/* ⚡ subtle scanning line */}
      <motion.div
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent w-[150%]"
        style={{ top: "50%", left: "-25%" }}
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
