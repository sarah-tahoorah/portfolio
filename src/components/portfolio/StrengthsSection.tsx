import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Users, Puzzle, Sparkles } from "lucide-react";

const strengths = [
  {
    icon: MessageSquare,
    title: "Communication Skills",
    description: "Clear, effective communication across teams and stakeholders",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborative contributor in group projects and internships",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description: "Analytical approach to debugging and application logic",
  },
  {
    icon: Sparkles,
    title: "Detail Oriented",
    description: "Creative and careful in building software solutions",
  },
];

export const StrengthsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Strengths</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 gradient-card rounded-xl shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <div className="inline-flex p-4 rounded-full bg-accent group-hover:bg-primary/10 transition-colors mb-4">
                  <strength.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
