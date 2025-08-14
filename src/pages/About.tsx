import { motion } from "framer-motion";
import { 
  HiCode, 
  HiColorSwatch, 
  HiLightningBolt, 
  HiGlobe,
  HiDeviceMobile,
  HiDatabase 
} from "react-icons/hi";
import GlassCard from "@/components/ui/GlassCard";

const About = () => {
  const skills = [
    { name: "React/Next.js", level: 95, icon: HiCode },
    { name: "TypeScript", level: 90, icon: HiCode },
    { name: "UI/UX Design", level: 85, icon: HiColorSwatch },
    { name: "Framer Motion", level: 88, icon: HiLightningBolt },
    { name: "Tailwind CSS", level: 92, icon: HiGlobe },
    { name: "Mobile First", level: 87, icon: HiDeviceMobile },
    { name: "Backend APIs", level: 80, icon: HiDatabase },
    { name: "Performance", level: 85, icon: HiLightningBolt },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer crafting exceptional digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-gradient-accent rounded-2xl flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
                    Creative Developer
                  </h2>
                  <p className="text-accent font-medium mb-4">
                    Frontend Specialist & UI/UX Enthusiast
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 5 years of experience in web development, I specialize in
                    creating beautiful, performant, and user-friendly applications using
                    cutting-edge technologies and design principles.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                My Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe in the power of clean code, beautiful design, and seamless user
                experiences. Every project is an opportunity to push boundaries and create
                something extraordinary.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  User-centered design approach
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Performance and accessibility first
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Continuous learning and innovation
                </li>
              </ul>
            </GlassCard>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard>
              <h3 className="font-display text-2xl font-semibold mb-8 text-gradient">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-accent" />
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-accent font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          className="bg-gradient-accent h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </GlassCard>

            {/* Experience Timeline */}
            <GlassCard className="mt-8">
              <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                Experience
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Senior Frontend Developer</h4>
                    <p className="text-accent text-sm">Tech Company • 2022 - Present</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Leading frontend development with React, TypeScript, and modern design systems
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Frontend Developer</h4>
                    <p className="text-accent text-sm">Digital Agency • 2020 - 2022</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Developed responsive web applications and interactive user interfaces
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Junior Developer</h4>
                    <p className="text-accent text-sm">Startup • 2019 - 2020</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Started journey in web development with HTML, CSS, and JavaScript
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;