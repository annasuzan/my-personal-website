import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-4 tracking-wide uppercase text-sm"
        >
          Hello, I'm
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
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
        >
          A software developer crafting clean, thoughtful digital experiences. db vdj nd,
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-border text-foreground px-8 py-3 rounded-full hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
