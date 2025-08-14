import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiDownload, HiMail, HiArrowRight } from "react-icons/hi";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";
import PhotoFrame from "@/components/ui/PhotoFrame";
import PhotoCollage from "@/components/ui/PhotoCollage";
import profileHero from "@/assets/profile-hero.jpg";
import workShowcase from "@/assets/work-showcase.jpg";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <p className="typography-caption text-accent mb-4">
                Welcome to my portfolio
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="typography-hero mb-6">
                <span className="text-gradient">Creative</span>{" "}
                <span className="text-foreground">Developer</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="typography-body-large text-muted-foreground mb-8 max-w-xl">
                Crafting beautiful digital experiences with modern web technologies
                and stunning glassmorphism design that brings ideas to life.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <Link to="/projects">
                <GlassButton variant="primary" size="lg">
                  View My Work <HiArrowRight className="ml-2 h-5 w-5" />
                </GlassButton>
              </Link>
              <Link to="/contact">
                <GlassButton variant="outline" size="lg">
                  <HiMail className="mr-2 h-5 w-5" /> Get in Touch
                </GlassButton>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassButton variant="secondary">
                <HiDownload className="mr-2 h-5 w-5" /> Download Resume
              </GlassButton>
            </motion.div>
          </motion.div>

          {/* Photo Layout - Matching reference design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main portrait photo */}
              <PhotoFrame
                src={profileHero}
                alt="Professional portrait"
                variant="primary"
                className="w-80 h-80 lg:w-96 lg:h-96 mx-auto animate-tilt"
                overlay
              />
              
              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full opacity-80 blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: -1 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-glass rounded-lg opacity-60 blur-sm"
              />
              
              {/* Text overlay on photo */}
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4">
                <p className="typography-small text-foreground font-semibold">
                  5+ Years Experience
                </p>
                <p className="typography-caption text-muted-foreground">
                  Frontend Development
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="typography-caption text-accent mb-4">
              What I Specialize In
            </p>
            <h2 className="typography-h1 mb-6 text-gradient">
              My Expertise
            </h2>
            <p className="typography-body-large text-muted-foreground max-w-3xl mx-auto">
              Specializing in modern web development with cutting-edge design principles
              and innovative user experiences that make a lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard variant="hover" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="typography-h3 mb-4 text-foreground">
                  UI/UX Design
                </h3>
                <p className="typography-body text-muted-foreground">
                  Creating beautiful and intuitive user interfaces with modern
                  design principles and accessibility in mind.
                </p>
              </div>
            </GlassCard>

            <GlassCard variant="hover" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="typography-h3 mb-4 text-foreground">
                  Frontend Development
                </h3>
                <p className="typography-body text-muted-foreground">
                  Building responsive and performant web applications using React,
                  TypeScript, and cutting-edge development tools.
                </p>
              </div>
            </GlassCard>

            <GlassCard variant="hover" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="typography-h3 mb-4 text-foreground">
                  Interactive Animations
                </h3>
                <p className="typography-body text-muted-foreground">
                  Adding life to interfaces with smooth animations, micro-interactions,
                  and delightful user experiences that engage and inspire.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;