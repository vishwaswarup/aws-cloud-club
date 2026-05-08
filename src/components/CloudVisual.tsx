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

  const [hovered, setHovered] =
    useState<number | null>(null);

  /* INIT */
  useEffect(() => {

    const generated = awsIcons.map((icon, i) => ({

      id: i,

      icon: `/aws/${icon.file}.svg`,

      name: icon.name,

      x: Math.random() * 80 + 10,

      y: Math.random() * 80 + 10,

      dx: (Math.random() - 0.5) * 0.2,

      dy: (Math.random() - 0.5) * 0.2,

      size: 34,

    }));

    setNodes(generated);

  }, []);

  /* MOVEMENT + REPULSION */
  useEffect(() => {

    const interval = setInterval(() => {

      setNodes(prev => {

        const updated = prev.map(n => ({ ...n }));

        /* MOVE + WALL BOUNCE */
        updated.forEach(n => {

          n.x += n.dx;

          n.y += n.dy;

          if (n.x < 8 || n.x > 92) n.dx *= -1;

          if (n.y < 8 || n.y > 92) n.dy *= -1;

        });

        /* SOFT REPULSION */
        for (let i = 0; i < updated.length; i++) {

          for (let j = i + 1; j < updated.length; j++) {

            const a = updated[i];

            const b = updated[j];

            const dx = a.x - b.x;

            const dy = a.y - b.y;

            const dist = Math.sqrt(dx * dx + dy * dy);

            const minDist = 12;

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

        /* CLAMP SPEED */
        const maxSpeed = 0.5;

        updated.forEach(n => {

          n.dx =
            Math.max(Math.min(n.dx, maxSpeed), -maxSpeed);

          n.dy =
            Math.max(Math.min(n.dy, maxSpeed), -maxSpeed);

        });

        return updated;

      });

    }, 50);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="relative w-full h-[460px] rounded-md bg-[#f8f8f8] border border-black/10 overflow-hidden">

      {/* SUBTLE BACKGROUND */}
      <div className="absolute inset-0">

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* subtle purple glow */}
        <div className="absolute w-96 h-96 bg-[#9b5cff]/10 blur-[120px] rounded-full top-1/3 left-1/4" />

      </div>

      {/* CONNECTIONS */}
      <svg className="absolute inset-0 w-full h-full">

        {nodes.map((a, i) =>

          nodes.slice(i + 1).map((b, j) => {

            const dist = Math.hypot(
              a.x - b.x,
              a.y - b.y
            );

            if (dist < 25) {

              return (

                <line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="rgba(155,92,255,0.12)"
                  strokeWidth="1"
                />

              );
            }

            return null;
          })
        )}

      </svg>

      {/* NODES */}
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
          animate={{ scale: [1, 1.04, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >

          <div className="p-2 rounded-md bg-white border border-black/10 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">

            <img
              src={node.icon}
              onError={(e: any) =>
                (e.currentTarget.style.display = "none")
              }
              style={{
                width: node.size,
              }}
            />

          </div>

          {/* TOOLTIP */}
          <div
            className={`
              absolute
              left-1/2
              -translate-x-1/2
              mt-2
              px-2.5
              py-1
              text-xs
              rounded-md
              bg-white
              border
              border-black/10
              text-[#52525b]
              whitespace-nowrap
              shadow-[0_2px_12px_rgba(0,0,0,0.04)]
              transition-all
              duration-200

              ${
                hovered === node.id
                  ? "opacity-100 translate-y-2"
                  : "opacity-0 pointer-events-none"
              }
            `}
          >

            {node.name}

          </div>

        </motion.div>

      ))}

      {/* SCAN LINE */}
      <motion.div
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#9b5cff]/20 to-transparent w-[150%]"
        style={{
          top: "50%",
          left: "-25%"
        }}
        animate={{
          x: ["0%", "100%"]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />

    </div>
  );
}
