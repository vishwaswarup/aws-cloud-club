import { motion } from "motion/react";

const nodes = [
  { x: 0, y: 0, icon: "/aws/aws.svg" },

  { x: -140, y: -90, icon: "/aws/ec2.svg" },
  { x: 140, y: -90, icon: "/aws/s3.svg" },

  { x: -140, y: 90, icon: "/aws/lambda.svg" },
  { x: 140, y: 90, icon: "/aws/rds.svg" },

  { x: 0, y: -150, icon: "/aws/apigateway.svg" },
  { x: 0, y: 150, icon: "/aws/cloudfront.svg" },

  { x: -220, y: 0, icon: "/aws/vpc.svg" },
  { x: 220, y: 0, icon: "/aws/ec2.svg" },
];

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[360px] flex items-center justify-center rounded-md border border-white/10 bg-[#161b22] overflow-hidden">

      {/* CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.slice(1).map((node, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={`${50 + node.x / 5}%`}
            y2={`${50 + node.y / 5}%`}
            stroke="rgba(255,153,0,0.15)"
          />
        ))}

        {/* extra mesh */}
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => (
            <line
              key={`${i}-${j}`}
              x1={`${50 + a.x / 5}%`}
              y1={`${50 + a.y / 5}%`}
              x2={`${50 + b.x / 5}%`}
              y2={`${50 + b.y / 5}%`}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.5"
            />
          ))
        )}
      </svg>

      {/* NODES WITH ICONS */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          animate={{ y: [node.y, node.y + 6, node.y] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            transform: `translate(${node.x}px, ${node.y}px)`,
          }}
        >
          <img
            src={node.icon}
            className={`${
              i === 0
                ? "w-10 opacity-100"
                : "w-7 opacity-80 hover:opacity-100"
            } transition`}
          />
        </motion.div>
      ))}

      {/* CENTER GLOW */}
      <motion.div
        className="absolute w-32 h-32 border border-[#FF9900]/10 rounded-full"
        animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}
