import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Folder } from "lucide-react";

const projects = [
  {
    title: "Internflow App",
    technologies: ["Full Stack", "Workflow"],
    description:
      "An internship-based application focused on managing internship workflows, task coordination, and student communication.",
  },
  {
    title: "OptiCrop – Smart Agricultural Production Optimization Engine",
    technologies: ["Machine Learning", "Python", "Data Analysis"],
    description:
      "A crop recommendation system using Machine Learning to predict suitable crops based on soil nutrients (N, P, K), temperature, humidity, pH, and rainfall.",
  },
  {
    title: "Simple Quiz App",
    technologies: ["Programming Fundamentals", "Logic"],
    description:
      "An interactive quiz application built using logical operations and core programming fundamentals.",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-colors">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
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
