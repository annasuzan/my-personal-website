import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with modern technologies. Features real-time data updates, authentication, and a responsive dashboard interface.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      "An open-source CLI tool that automates development workflows. Saves hours of manual configuration and setup time for new projects.",
    tech: ["Python", "Docker", "REST API"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "A mobile-first progressive web app for tracking personal goals and habits. Features offline support and data visualization.",
    tech: ["React", "PWA", "Chart.js", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl text-foreground mb-14 text-center"
        >
          Things I've Built
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif text-lg">{i + 1}</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
