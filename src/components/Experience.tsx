import { motion } from "framer-motion";

type Role = {
  role: string;
  period: string;
  description: React.ReactNode[];
  tech: string[];
};

type CompanyExperience = {
  company: string;
  companyPeriod: string;
  companyLocation: string;
  roles: Role[];
};


const experiences: CompanyExperience[] = [
  {
    company: "SAP SuccessFactors",
    companyPeriod: "2022 — 2025",
    companyLocation: "Bengaluru, India",
    roles: [
      {
        role: "Developer",
        period: "Apr 2025 — July 2025",
        description:[
          <>
          <span className="font-bold">Developed backend processing layer for the hire functionality features</span> in Employee Central, supporting a UI overhaul to modernize and simplify the user onboarding experience
          </>,
          <>
          <span className="font-bold">Redesigned and optimized the record deletion service</span> spread across <span className="font-bold">10+ entities into a single logical flow</span>. This improved data deletion reliability and compliance within the newly adopted backend framework.
          </>
        ],
        tech: ["Java", "SQL", "JUnit", "CI/CD", "Docker"],
      },
      {
        role: "Developer Associate",
        period: "July 2022 — Apr 2025",
        description:
          [<>
          <span className="font-bold">Lead contributor for the development of a high-performance backend layer</span> for Employee Central (Java), processing <span className="font-bold">50 million transactions</span> weekly and optimizing data transformation for faster processing and storage.
          </>,
          <>
          Selected to represent the India office at the SuccessFactors <span className="font-bold">Early Talent Mini Assignment Program in Shanghai</span> to develop a proof of concept for SAP’s Joule AI copilot leave application feature. Streamlined a previously multi-page process into a single conversational flow, <span className="font-bold">reducing user navigation effort by 100%.</span>
          </>],
        tech: ["Java", "SQL", "JUnit", "CI/CD", "Docker"],
      },
      {
        role: "Summer Intern",
        period: "May 2021 — July 2021",
        description:
          [ 
            <>
            Developed <span className="font-bold">Splunk dashboards</span> to monitor service layer exceptions, allowing <span className="font-bold">proactive detection and response to failure patterns </span>and incorporated data-driven insights into service health and user impact.
            </>,
           
            <>
             <span className="font-bold">Reduced customer outages by 30 to 35% </span> by providing visibility into failure root causes, which significantly improved application reliability.
            </>
          ],
        tech: ["Splunk Dashboards", "Splunk Programming Language(SPL)", "Java"], 
      },
    ],
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
          className="font-serif text-5xl md:text-5xl text-foreground mb-14 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-border" />

          {experiences.map((company, i) => (
            <motion.div
              key={company.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="mb-16"
            >
              {/* Company Header */}
              <div className="ml-8">
                {/* Company Name with Icon */}
                <div className="flex items-center mb-2 space-x-2">
                  {/* Icon */}
                  <img
                    src="/sap-icon.avif"  
                    alt="Company Name Logo"
                    className="h-8 w-auto object-contain"
                  />
                  {/* Company Name */}
                  <h3 className="font-serif text-3xl text-foreground">
                    {company.company}
                  </h3>
                </div>

                {/* Date and Location */}
                <div className="flex justify-between items-center mb-8">
                  <p className="text-base text-muted-foreground ml-16">{company.companyPeriod}</p>
                  <p className="text-base text-muted-foreground">{company.companyLocation}</p>
                </div>
              </div>

             
              {/* </div> */}
            
              {/* Roles */}
              {company.roles.map((role) => (
                <div key={role.role} className="relative mb-12 ml-14 group">
                  
                  {/* Dot */}
                  <div className="absolute -left-12 top-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary transition-all duration-300 group-hover:scale-125 group-hover:ring-4 group-hover:ring-primary/30" />
                  </div>

                  <h4 className="font-medium text-lg text-foreground">
                    {role.role}
                  </h4>

                  <p className="text-sm text-muted-foreground mb-2">
                    {role.period}
                  </p>

                  {/* Description as bullet points */}
                  <ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed mb-4 space-y-4">
                    {role.description.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Experience;
