import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhotoCollageProps {
  images: Array<{
    src: string;
    alt: string;
    className: string;
    delay?: number;
  }>;
  className?: string;
}

const PhotoCollage = ({ images, className }: PhotoCollageProps) => {
  return (
    <div className={cn("photo-collage h-96 w-full", className)}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: (image.delay || index) * 0.2,
            type: "spring",
            stiffness: 100
          }}
          className={cn("photo-collage-item photo-frame-secondary", image.className)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="photo-overlay" />
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoCollage;