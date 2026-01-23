import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    institution: "G. Pullaiah College of Engineering and Technology",
    degree: "B.Tech – Computer Science and Engineering (Artificial Intelligence)",
    year: "Currently in 2nd Year",
    icon: GraduationCap,
    current: true,
  },
  {
    institution: "St. Joseph's English Medium School",
    degree: "CBSE Board",
    year: "Completed",
    icon: BookOpen,
    current: false,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

              {education.map((item, index) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-start gap-6 mb-8 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute w-4 h-4 rounded-full bg-primary border-4 border-background ${
                      index % 2 === 0
                        ? "left-6 md:left-auto md:right-[-8px]"
                        : "left-6 md:left-[-8px]"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 gradient-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow w-full ${
                      item.current ? "border-l-4 border-primary" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-accent">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">
                          {item.institution}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {item.degree}
                        </p>
                        <span
                          className={`inline-block text-xs px-3 py-1 rounded-full ${
                            item.current
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
