import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode, HiEye } from "react-icons/hi";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern e-commerce platform with glassmorphism design, featuring product catalog, shopping cart, and payment integration.",
      image: "🛍️",
      category: "web",
      tech: ["React", "TypeScript", "Tailwind", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for portfolio management with real-time analytics and beautiful data visualizations.",
      image: "📊",
      category: "web",
      tech: ["Next.js", "Chart.js", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and seamless money transfers.",
      image: "💳",
      category: "mobile",
      tech: ["React Native", "TypeScript", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Design System",
      description: "Comprehensive design system with reusable components, tokens, and documentation for consistent UI.",
      image: "🎨",
      category: "design",
      tech: ["Figma", "Storybook", "Design Tokens"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "AI Chat Interface",
      description: "Intelligent chat interface with natural language processing and real-time conversation capabilities.",
      image: "🤖",
      category: "web",
      tech: ["React", "OpenAI API", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Brand Identity",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
      image: "✨",
      category: "design",
      tech: ["Adobe Creative Suite", "Figma"],
      liveUrl: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="typography-hero mb-6 text-gradient">
            My Projects
          </h1>
          <p className="typography-body-large text-muted-foreground max-w-3xl mx-auto">
            A collection of my latest work showcasing modern web development, innovative design,
            and cutting-edge technologies that bring ideas to life.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`glass-button transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-accent text-accent-foreground border-accent/30"
                  : "bg-gradient-glass text-foreground border-white/20 hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <GlassCard variant="hover" className="h-full group">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <div className="w-full h-48 bg-gradient-accent rounded-xl flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                  <div>
                    <h3 className="typography-h3 text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="typography-body text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-foreground typography-small rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                    <div className="flex gap-3 pt-4">
                      {project.liveUrl && (
                        <GlassButton variant="primary" size="sm" className="flex-1">
                          <HiEye className="mr-2 h-4 w-4" />
                          Live Demo
                        </GlassButton>
                      )}
                      {project.githubUrl && (
                        <GlassButton variant="outline" size="sm" className="flex-1">
                          <HiCode className="mr-2 h-4 w-4" />
                          Code
                        </GlassButton>
                      )}
                      {!project.githubUrl && project.liveUrl && (
                        <GlassButton variant="outline" size="sm">
                          <HiExternalLink className="h-4 w-4" />
                        </GlassButton>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <GlassCard className="max-w-2xl mx-auto">
            <h3 className="typography-h2 mb-4 text-gradient">
              Like What You See?
            </h3>
            <p className="typography-body text-muted-foreground mb-6">
              Let's work together to bring your ideas to life with beautiful, functional design
              and cutting-edge development that exceeds expectations.
            </p>
            <GlassButton variant="primary" size="lg">
              Start a Project
            </GlassButton>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;