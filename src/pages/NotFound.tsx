import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <GlassCard className="max-w-md mx-auto">
          <div className="text-8xl mb-6">🚀</div>
          <h1 className="font-display text-6xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! This page seems to have drifted into space.
          </p>
          <Link to="/">
            <GlassButton variant="primary" size="lg">
              <HiHome className="mr-2 h-5 w-5" />
              Return to Home
            </GlassButton>
          </Link>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default NotFound;
