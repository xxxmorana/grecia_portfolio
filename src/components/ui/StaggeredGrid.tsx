import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredGridProps {
  images: Array<{
    src: string;
    alt: string;
    aspect?: "square" | "portrait" | "landscape";
  }>;
  className?: string;
}

const StaggeredGrid = ({ images, className }: StaggeredGridProps) => {
  const getAspectClass = (aspect: string) => {
    switch (aspect) {
      case "portrait":
        return "aspect-[3/4]";
      case "landscape":
        return "aspect-[4/3]";
      default:
        return "aspect-square";
    }
  };

  return (
    <div className={cn("photo-grid-staggered", className)}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={cn(
            "photo-frame-secondary",
            getAspectClass(image.aspect || "square")
          )}
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

export default StaggeredGrid;