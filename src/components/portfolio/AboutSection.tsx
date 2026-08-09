import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Cloud, Users } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI / ML" },
  { icon: Code, label: "Java & Python" },
  { icon: Cloud, label: "Cloud Basics" },
  { icon: Users, label: "Team Player" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Creative and detail-oriented Artificial Intelligence student with
                practical experience in Java development, AI/ML, cloud technologies,
                and full stack applications through internships and real-world
                projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I have a strong passion for building impactful software solutions,
                learning emerging technologies, and contributing effectively in
                collaborative environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing B.Tech in CSE (Artificial Intelligence) at
                G. Pullaiah College of Engineering and Technology, and open to
                internships, mentorship, and hands-on learning opportunities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="gradient-card rounded-lg p-4 shadow-card text-center"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
