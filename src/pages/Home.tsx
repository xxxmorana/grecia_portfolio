import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiDownload, HiMail, HiArrowRight } from "react-icons/hi";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Creative</span>{" "}
              <span className="text-foreground">Developer</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful digital experiences with modern web technologies
              and stunning glassmorphism design
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specializing in modern web development with cutting-edge design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard variant="hover" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  UI/UX Design
                </h3>
                <p className="text-muted-foreground">
                  Creating beautiful and intuitive user interfaces with modern
                  design principles
                </p>
              </div>
            </GlassCard>

            <GlassCard variant="hover" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  Frontend Development
                </h3>
                <p className="text-muted-foreground">
                  Building responsive and performant web applications using React
                  and modern tools
                </p>
              </div>
            </GlassCard>

            <GlassCard variant="hover" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  Interactive Animations
                </h3>
                <p className="text-muted-foreground">
                  Adding life to interfaces with smooth animations and micro-interactions
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