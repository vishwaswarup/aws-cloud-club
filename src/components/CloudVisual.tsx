import { motion } from "motion/react";
import { useEffect, useState } from "react";

const icons = [
  "/aws/aws.svg",
  "/aws/ec2.svg",
  "/aws/s3.svg",
  "/aws/lambda.svg",
  "/aws/rds.svg",
  "/aws/apigateway.svg",
  "/aws/cloudfront.svg",
  "/aws/vpc.svg",
  "/aws/dynamodb.svg",
  "/aws/sqs.svg",
  "/aws/sns.svg",
  "/aws/cloudwatch.svg",
];

export default function CloudVisual() {
  const [nodes, setNodes] = useState<any[]>([]);

  // 🔥 INITIAL RANDOM NODES (FULL SPACE)
  useEffect(() => {
    const generated = icons.map((icon, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      icon,
    }));
    setNodes(generated);
  }, []);

  // 🔥 FLOATING MOTION
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prev) =>
        prev.map((n) => {
          let x = n.x + n.dx;
          let y = n.y + n.dy;

          if (x < 3 || x > 97) n.dx *= -1;
          if (y < 3 || y > 97) n.dy *= -1;

          return { ...n, x, y };
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] rounded-md border border-white/10 bg-[#161b22] overflow-hidden">

      {/* 🔥 CONNECTION WEB */}
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
                  strokeWidth="0.7"
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* 🔥 NODES */}
      {nodes.map((node, i) => (
        <motion.img
          key={node.id}
          src={node.icon}
          className={`absolute ${
            i === 0 ? "w-10" : "w-7"
          } opacity-90 hover:opacity-100`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 🔥 SUBTLE CENTER GLOW */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-40 h-40 border border-[#FF9900]/10 rounded-full"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.6], opacity: [0.2, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}
