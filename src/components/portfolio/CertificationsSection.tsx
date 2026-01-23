import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  "MongoDB Aggregation in Python",
  "Java Programming using CodeTantra",
  "Responsible and Safe AI – NPTEL",
  "AWS Cloud Technical Essentials",
  "AWS Cloud Practitioner Essentials",
];

const internships = [
  {
    title: "Web Full Stack Developer",
    type: "Virtual Internship",
  },
  {
    title: "AI-ML",
    type: "Virtual Internship",
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 gradient-card rounded-lg shadow-card"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Internships
                </h2>
              </div>

              <div className="space-y-4">
                {internships.map((internship, index) => (
                  <motion.div
                    key={internship.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="gradient-card rounded-xl p-5 shadow-card hover:shadow-hover transition-shadow"
                  >
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {internship.title}
                    </h3>
                    <span className="text-sm text-primary">{internship.type}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
