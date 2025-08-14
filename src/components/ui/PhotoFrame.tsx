import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  variant?: "primary" | "secondary";
  overlay?: boolean;
  children?: React.ReactNode;
}

const PhotoFrame = ({ 
  src, 
  alt, 
  className, 
  variant = "primary",
  overlay = false,
  children 
}: PhotoFrameProps) => {
  const frameClass = variant === "primary" ? "photo-frame-primary" : "photo-frame-secondary";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(frameClass, className)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {overlay && <div className="photo-overlay" />}
      {children}
    </motion.div>
  );
};

export default PhotoFrame;