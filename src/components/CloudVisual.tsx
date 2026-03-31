import { motion } from "motion/react";

const nodes = [
  // TOP
  { id: "cf", x: 50, y: 10, icon: "/aws/cloudfront.svg" },

  // MID TOP
  { id: "api", x: 50, y: 25, icon: "/aws/apigateway.svg" },

  // COMPUTE LAYER
  { id: "lambda", x: 25, y: 45, icon: "/aws/lambda.svg" },
  { id: "ec2", x: 50, y: 45, icon: "/aws/ec2.svg" },
  { id: "ecs", x: 75, y: 45, icon: "/aws/ecs.svg" },

  // DATA LAYER
  { id: "s3", x: 25, y: 65, icon: "/aws/s3.svg" },
  { id: "rds", x: 50, y: 65, icon: "/aws/rds.svg" },
  { id: "ddb", x: 75, y: 65, icon: "/aws/dynamodb.svg" },

  // CORE
  { id: "vpc", x: 40, y: 85, icon: "/aws/vpc.svg" },
  { id: "iam", x: 60, y: 85, icon: "/aws/iam.svg" },
];

const connections = [
  ["cf", "api"],

  ["api", "lambda"],
  ["api", "ec2"],
  ["api", "ecs"],

  ["lambda", "s3"],
  ["ec2", "rds"],
  ["ecs", "ddb"],

  ["s3", "vpc"],
  ["rds", "vpc"],
  ["ddb", "vpc"],

  ["vpc", "iam"],
];

export default function CloudVisual() {
  return (
    <div className="relative w-full h-[420px] bg-[#161b22] border border-white/10 rounded-md overflow-hidden">

      {/* CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map(([a, b], i) => {
          const nodeA = nodes.find((n) => n.id === a);
          const nodeB = nodes.find((n) => n.id === b);

          return (
            <line
              key={i}
              x1={`${nodeA.x}%`}
              y1={`${nodeA.y}%`}
              x2={`${nodeB.x}%`}
              y2={`${nodeB.y}%`}
              stroke="rgba(255,153,0,0.2)"
              strokeWidth="1"
            />
          );
        })}

        {/* EXTRA WEB (cross links for density) */}
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => (
            <line
              key={`mesh-${i}-${j}`}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.5"
            />
          ))
        )}
      </svg>

      {/* NODES */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
          }}
        >
          <img
            src={node.icon}
            className="w-8 opacity-90 hover:opacity-100"
            style={{
              filter: "drop-shadow(0 0 6px rgba(255,153,0,0.25))",
            }}
          />
        </motion.div>
      ))}

      {/* CENTER AWS (SUBTLE) */}
      <motion.img
        src="/aws/aws.svg"
        className="absolute w-12 opacity-20"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}
