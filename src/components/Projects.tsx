import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Zone ",
    description:
      "An agentic event scheduler that allows a user to put in their schedule using an UI interface featuring a chatbox and get an optimized schedule saved in their Google Calendar.",
    tech: ["React", "FastAPI", "Google Calendar API", "Gemini API"],
    github: "https://github.com/annasuzan/zone",
    date:"Dec 2025",
    type: "hackathon",
    name: "ODSC AI Hackathon 2025"
    // live: "https://example.com",
  },
  {
    title: "Comparative Study on Threshold vs Probability Weighted BIFSG",
    description:
      "This comparative study examines the use of BIFSG under different strategies to calculate accuracy differences and disparities in race for predicted outcomes using the North Carolina voter dataset.",
    tech: ["Pyethnicity", "Numpy", "Pandas"],
    github: "https://github.com",
    time: "Oct-Nov 2025",
    type: "course",
    name: "Responsible AI & the Law @ NYU"
    // live: "https://example.com",
  },
  {
    title: "Who's Got Dibs?",
    description:
      "A semester-long ideation project. Who's Got Dibs is a platform that allows students to get real time occupancy information of the seats at the Dibner Library using sensor data coupled with an interactive web UI.",
    tech: ["Figma", "Cost analysis", "Pitch Presentation"],
    github: "https://github.com/annasuzan/Hack-Dibner-2025",
    time: "Sept - Dec 2025",
    type: "hackathon",
    name: "Hack Dibner",
    award: "2nd place"
    // live: "https://example.com",
  },
  {
    title: "Crowdfork",
    description:
      "A restaurant recommendation web application that helps users to discover restaurants by location, cuisine, and so on. Features include account creation, favourites and the ability to view and submit reviews.",
    tech: ["React", "FastAPI", "Firebase", "Yelp API"],
    github: "https://github.com/annasuzan/Hack-Dibner-2025",
    time: "Nov 2025"
    // live: "https://example.com",
  },
  {
    title: "Ransomware Simulation",
    description:
      "Executed a simulated ransomware scenario using two Linux VMs and implemented cryptographic key generation and secure file transfer. The project also automated decryption procedures to demonstrate end-to-end ransomware operations and incident response.",
    tech: ["Python", "Linus VM", ],
    github: "https://github.com/annasuzan/Computer-Security-Mini-Proj",
    time: "Apr 2022",
    type: "course",
    name: "Computer Security course @ NITC",
    // live: "https://example.com",
  },
  {
    title: "DNS Server",
    description:
      "Developed a DNS Server with an internal caching system using C language that responds to A, AAAA, CNAME, and NS queries",
    tech: ["C"],
    github: "https://github.com/annasuzan/DNS-Server",
    time: "Mar 2021",
    type: "course",
    name: "Networks Laboratory @ NITC"
    // live: "https://example.com",
  },
  {
    title: "Experimental Operating System",
    description:
      "Developed an experimental operating system in Systems Programming Language (SPL). The operating system included features such as resource and disk management and system calls for process management, semaphores and signals.",
    tech: ["Systems Programming Language"],
    github: "https://github.com/annasuzan/os-lab",
    time: "Sept - Dec 2020",
    type: "course",
    name: "Operating System course @ NITC"
    // live: "https://example.com",
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
          Bits & Bytes that I've Built
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              {/*For Award banner*/}
              {project.award && (
                <div className="absolute top-4 -right-10 rotate-45">
                  <div className="bg-amber-200 text-amber-800 text-xs font-semibold px-10 py-1 shadow-md">
                    {project.award}
                  </div>
                </div>
              )}

              {/* Top Row: index & icons */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif text-lg">{i + 1}</span>
                </div>
                <div className={`flex gap-3 ${project.award ? "mr-5": ""}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Time */}
              {project.time || project.date ? (
                <p className="text-xs text-muted-foreground mb-3">
                  {project.time || project.date}
                </p>
              ) : null}

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Name Badge (Hackathon / Course) below tech tags */}
              {project.type && project.name && (
                <div className="mt-1">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      project.type === "hackathon"
                        ? "bg-blue-100 text-blue-700"
                        : project.type === "course"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {project.name}
                  </span>
                </div>
              )}


            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


