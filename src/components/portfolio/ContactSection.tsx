import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Kurnool" },
  { icon: Mail, label: "Email", value: "sarahtahoorah@gmail.com", href: "mailto:sarahtahoorah@gmail.com" },
  { icon: Phone, label: "Phone", value: "8688466121", href: "tel:8688466121" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for internships, collaborations, or just to say hello!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-lg bg-accent">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="gradient-card rounded-xl p-6 shadow-card"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background"
                    maxLength={255}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Your message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background resize-none"
                    maxLength={1000}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-accent text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
