import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex items-center px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-justify">
            I love talking about the promising impact technology can make in the world around us. I'm currently open to new opportunities and would also love to collaborate on interesting projects.
            If any of these interest you, I would love to connect. Feel free to say 'Hi' through any of these channels :). </p>
          <a
            href="mailto:annasusanc@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Say Hello
          </a>

          <div className="flex justify-center gap-6 mt-14">
            {[
              { icon: Github, href: "https://github.com/annasuzan", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/anna-susan", label: "LinkedIn" },
              { icon: Mail, href: "mailto:annasusanc@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* <div className="mt-24 text-center">
        <p className="text-muted-foreground text-xs">
          Built with React & Tailwind CSS
        </p>
      </div> */}
    </section>
  );
};

export default Contact;
