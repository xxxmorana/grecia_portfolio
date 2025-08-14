import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hover" | "interactive";
  delay?: number;
}

const GlassCard = ({ 
  children, 
  className, 
  variant = "default",
  delay = 0 
}: GlassCardProps) => {
  const variants = {
    default: "glass-card",
    hover: "glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2",
    interactive: "glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(variants[variant], className)}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;