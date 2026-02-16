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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-loose"
        >
          <p className="mb-6">
            Hello! I'm a passionate developer who loves creating things that live on
            the internet. My journey in web development started when I decided to try
            customizing a WordPress theme — turns out hacking together a custom reblog
            button taught me a lot about HTML & CSS!
          </p>

          <p>
            Fast-forward to today, I've had the privilege of working on a variety of
            projects ranging from small business websites to large-scale web applications.
            My focus is on writing clean, efficient, and maintainable code.
          </p>
        </motion.div>
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
