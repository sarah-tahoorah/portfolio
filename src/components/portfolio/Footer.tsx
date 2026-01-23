import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t border-border"
    >
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm">
          © 2026 Contractor Sarah Tahoorah | Developer Portfolio
        </p>
      </div>
    </motion.footer>
  );
};
