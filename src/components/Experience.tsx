import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Company Name",
    period: "2022 — Present",
    description:
      "Led the redesign of the main product dashboard, improving user engagement by 35%. Built reusable component library adopted across 4 teams.",
    tech: ["React", "TypeScript", "GraphQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Another Company",
    period: "2020 — 2022",
    description:
      "Developed and maintained multiple client-facing web applications. Implemented CI/CD pipelines reducing deployment time by 60%.",
    tech: ["Node.js", "React", "PostgreSQL"],
  },
  {
    role: "Junior Developer",
    company: "Startup Inc.",
    period: "2018 — 2020",
    description:
      "Built features for an e-commerce platform serving 10k+ daily users. Collaborated closely with design and product teams.",
    tech: ["JavaScript", "Python", "Docker"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl text-foreground mb-14 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative pl-8 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1.5 w-3 h-3 rounded-full bg-primary left-0 md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"
                }`}
              />

              <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
              <h3 className="font-serif text-xl text-foreground mb-1">{exp.role}</h3>
              <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {exp.description}
              </p>
              <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                {exp.tech.map((t) => (
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

export default Experience;
