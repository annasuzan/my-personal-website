import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, FolderOpen, Wrench, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

const navCards = [
  { label: "Experience", description: "My professional journey", icon: Briefcase, to: "/experience" },
  { label: "Projects", description: "Things I've built", icon: FolderOpen, to: "/projects" },
  { label: "Skills", description: "Tools & technologies", icon: Wrench, to: "/skills" },
  { label: "Contact", description: "Get in touch", icon: Mail, to: "/contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center px-6 pt-10">
          <div className="max-w-4xl mx-auto w-full text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-4 tracking-wide uppercase text-sm"
            >
              Hey there! I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-serif text-foreground mb-4"
            >
              Anna Susan Cherian
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed"
            >
              A software developer crafting clean, thoughtful digital experiences.
            </motion.p>
          </div>
        </section>

        {/* About */}
        <About />

        {/* Navigation Cards */}
       <section className="min-h-[60vh] flex items-center py-20 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <motion.h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-left">
              Explore
              
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {navCards.map((card, i) => (
                <motion.div
                  key={card.to}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                      to={card.to}
                      className="group flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
                    >
                    <card.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                      {card.label}
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground">
                      {card.description}
                    </span>

                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
