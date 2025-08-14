import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const GlassButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
}: GlassButtonProps) => {
  const variants = {
    primary: "glass-button bg-gradient-accent text-accent-foreground border-accent/30",
    secondary: "glass-button bg-gradient-glass text-foreground border-white/20",
    outline: "glass-button bg-transparent text-foreground border-white/30 hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        variants[variant],
        sizes[size],
        "font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export default GlassButton;