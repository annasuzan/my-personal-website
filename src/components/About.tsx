// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section id="about" className="py-24 px-6">
//       <div className="max-w-3xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
//             About Me
//           </h2>
//           <div className="space-y-5 text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
//             <p>
//               Hello! I'm a passionate developer who loves creating things that live on
//               the internet. My journey in web development started when I decided to try
//               customizing a WordPress theme — turns out hacking together a custom reblog
//               button taught me a lot about HTML & CSS! ksbcjkaefbvjjbklbvskjdv bdcjwdbvj f,
//             </p>
//             <p>
//               Fast-forward to today, I've had the privilege of working on a variety of
//               projects ranging from small business websites to large-scale web applications.
//               My focus is on writing clean, efficient, and maintainable code.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { motion } from "framer-motion";

const About = () => {
  return (
      <section
        id="about"
       className="px-6 pt-10 pb-20"
      >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-loose text-center">
            <p>
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

            <a
            href="https://drive.google.com/file/d/1kMFii8934TeeSbv0e7pgOlYvMnUIHdQj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all duration-300 text-base md:text-lg"
          >
            Resume
          </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

