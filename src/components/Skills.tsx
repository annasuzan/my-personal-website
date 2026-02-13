import { motion } from "framer-motion";

const skillCategories = [
  { title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"] },
  { title: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "Redis", "REST/GraphQL"] },
  { title: "Tools", skills: ["Git", "Docker", "Linux", "CI/CD", "AWS"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl text-foreground mb-14 text-center"
        >
          Skills & Tools
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="font-serif text-lg text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
