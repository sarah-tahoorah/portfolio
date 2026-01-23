import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Web Development",
    icon: Code2,
    skills: ["Java", "JavaScript", "HTML", "CSS", "React.js", "Node.js"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["MongoDB", "MERN Stack (basic)"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["AWS (Foundational knowledge)", "Git & GitHub (basic)"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                className="gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.15 + index * 0.05,
                      }}
                      className="px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-full"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
