import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, FolderOpen, Wrench, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

const navCards = [
  { label: "Experience", description: "My professional journey", icon: Briefcase, to: "/experience" },
  { label: "Projects", description: "Bits & Bytes that I've Built", icon: FolderOpen, to: "/projects" },
  // { label: "Skills", description: "Tools & technologies", icon: Wrench, to: "/skills" },
  { label: "Contact", description: "Get in touch", icon: Mail, to: "/contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="min-h-[85vh] flex items-center justify-center px-6">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-6 max-w-12xl mx-auto leading-loose text-justify"
            >
              <p className="mb-6">
                A developer by profession and a student at heart. I've been tinkering with 
                code for quite some time now. At any given point in time, you can find me 
                either crafting code or pondering the meaning of the universe :). 
              </p>

              <p className="mb-6">
                  As a developer, I’m fascinated by how technology can help improve access and alleviate challenges faced by our society.
                   I’m especially drawn to the space where sustainability meets inclusivity. I believe that the solutions we build should 
                   be efficient, scalable, and equitable. And, that’s my hope in the long run, to deliver code that not only 
                   runs smoothly but responsibly as well.
              </p>

              <p>
                Scroll on ahead to view my experiences in 
                the tech industry and some of the things I've been working on!
              </p>

              <div className="flex justify-center mt-8">
                <a
                  href="https://drive.google.com/file/d/1kMFii8934TeeSbv0e7pgOlYvMnUIHdQj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all duration-300 text-base md:text-lg"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        {/* <About /> */}

        {/* Explore / Navigation Cards */}
        <section className="flex flex-col items-center -mt-16 pb-16 px-6">
          <div className="max-w-5xl w-full">
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

