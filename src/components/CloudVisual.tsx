import { motion } from "motion/react";
import { useEffect, useState } from "react";

type NodeType = {
  id: number;
  icon: string;
  name: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
};

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
  { name: "Elastic Load Balancing", file: "aww" },
  { name: "ElastiCache", file: "elasticache" },
  { name: "Supply Chain", file: "supplychain" },
  { name: "App Stream", file: "appstream" },
  { name: "Marketplace", file: "mplight" },
  { name: "Backup", file: "backup" },
  { name: "Sumerian", file: "sumerian" },
  { name: "Shield", file: "shield" },
  { name: "Transit Gateway", file: "trangateway" },
  { name: "Client VPN", file: "clientvpn" },
  { name: "OPSWorks", file: "opsworks" }
  
];

export default function CloudVisual() {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  // 🔥 INIT
  useEffect(() => {
    const generated = awsIcons.map((icon, i) => ({
      id: i,
      icon: `/aws/${icon.file}.svg`,
      name: icon.name,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      size: 36,
    }));

    setNodes(generated);
  }, []);

  // 🔁 MOVEMENT + REPULSION
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => {
        const updated = prev.map(n => ({ ...n }));

        // 🔁 Move + wall bounce
        updated.forEach(n => {
          n.x += n.dx;
          n.y += n.dy;

          if (n.x < 8 || n.x > 92) n.dx *= -1;
          if (n.y < 8 || n.y > 92) n.dy *= -1;
        });

        // 💥 SOFT REPULSION (KEY FIX)
        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const a = updated[i];
            const b = updated[j];

            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const minDist = 12; // 🔥 bigger = no merging

            if (dist < minDist) {
              const angle = Math.atan2(dy, dx);

              const force = (minDist - dist) * 0.04;

              a.dx += Math.cos(angle) * force;
              a.dy += Math.sin(angle) * force;

              b.dx -= Math.cos(angle) * force;
              b.dy -= Math.sin(angle) * force;
            }
          }
        }

        // 🧊 Clamp speed (VERY IMPORTANT)
        const maxSpeed = 0.5;

        updated.forEach(n => {
          n.dx = Math.max(Math.min(n.dx, maxSpeed), -maxSpeed);
          n.dy = Math.max(Math.min(n.dy, maxSpeed), -maxSpeed);
        });

        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[460px] rounded-xl bg-[#0b0f14] border border-white/10 overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#FF9900]/10 blur-[140px] rounded-full top-1/3 left-1/4" />
        <div className="absolute w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full bottom-1/3 right-1/4" />
      </div>

      {/* 🔗 CONNECTIONS */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);

            if (dist < 25) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="rgba(255,153,0,0.2)"
                  strokeWidth="1.3"
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
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <img
            src={node.icon}
            onError={(e: any) => (e.currentTarget.style.display = "none")}
            style={{
              width: node.size,
              filter: "drop-shadow(0 0 12px rgba(255,153,0,0.4))",
            }}
          />

          <div
            className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded bg-[#161b22] border border-white/10 text-gray-300
            transition-all duration-200
            ${
              hovered === node.id
                ? "opacity-100 translate-y-2"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {node.name}
          </div>
        </motion.div>
      ))}

      {/* scan line */}
      <motion.div
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent w-[150%]"
        style={{ top: "50%", left: "-25%" }}
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
