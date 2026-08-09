import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, Briefcase } from "lucide-react";

const certificationGroups = [
  {
    group: "Programming & Development",
    items: [
      "Java Programming – CodeTantra",
      "Python – MongoDB",
      "Full Stack Development Learning Programs",
    ],
  },
  {
    group: "AI & Cloud",
    items: [
      "AI – Infosys Springboard",
      "Microsoft Azure Machine Learning – LinkedIn Learning",
      "AWS Cloud Practitioner Essentials",
      "AWS Cloud Technical Essentials",
      "Quantum Fundamentals",
    ],
  },
  {
    group: "NPTEL",
    items: [
      "Responsible & Safe AI – 78%",
      "Principles of Management – 83%",
      "Deep Learning – 63%",
      "Social Networks – 65%",
      "English Language for Competitive Exams – 62%",
    ],
  },
];

const internships = [
  {
    title: "Java Intern",
    org: "Coding Samurai",
    points: [
      "Developed Java applications including Calculator, Library Management System, and Chat Application",
      "Enhanced understanding of OOP, debugging, and application logic",
    ],
  },
  {
    title: "AI Intern",
    org: "Mirai School of Technology",
    points: [
      "Built Portfolio and Weather applications using AI-related concepts",
      "Worked on automation workflows and practical AI implementation",
    ],
  },
  {
    title: "Full Stack Development Intern",
    org: "Pratinik Infotech",
    points: [
      "Contributed to an Ecommerce AI project and frontend-backend integration",
      "Improved understanding of responsive web applications and system workflows",
    ],
  },
  {
    title: "Web Full Stack Developer – Virtual Internship",
    org: "Cohort 10",
    points: [
      "Learned frontend and backend web development concepts with practical project exposure",
    ],
  },
  {
    title: "AI-ML Virtual Internship",
    org: "Cohort 11",
    points: [
      "Gained knowledge in AI/ML workflows, model development, and data handling fundamentals",
    ],
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Internships */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Internships
                </h2>
              </div>

              <div className="space-y-4">
                {internships.map((internship, index) => (
                  <motion.div
                    key={internship.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="gradient-card rounded-xl p-5 shadow-card hover:shadow-hover transition-shadow"
                  >
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {internship.title}
                    </h3>
                    <span className="text-sm text-primary">{internship.org}</span>
                    <ul className="mt-3 space-y-1.5">
                      {internship.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-primary">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Certifications
                </h2>
              </div>

              <div className="space-y-6">
                {certificationGroups.map((group, groupIndex) => (
                  <div key={group.group}>
                    <h3 className="font-display text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                      {group.group}
                    </h3>
                    <div className="space-y-3">
                      {group.items.map((cert, index) => (
                        <motion.div
                          key={cert}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: groupIndex * 0.1 + index * 0.05,
                          }}
                          className="flex items-start gap-3 p-3 gradient-card rounded-lg shadow-card"
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-sm">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
