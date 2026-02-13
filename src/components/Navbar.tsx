import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const asciiArt = [
  "  (\\_._/)",  
  "  ( ^.^ )",  
  "  c(\"===\")o"
];


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {isHome ? (
  <motion.div
    className="flex flex-col font-mono text-xs md:text-sm leading-tight"
    animate={{ y: [0, -2, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <Link to="/">
      <motion.pre
        className="text-foreground"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {asciiArt.map((line, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            {line}
          </motion.div>
        ))}
      </motion.pre>
    </Link>
  </motion.div>
) : (
  <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
    <ArrowLeft size={18} />
    <span className="text-sm">Back</span>
  </Link>
)}

        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Experience", to: "/experience" },
            { label: "Projects", to: "/projects" },
            { label: "Skills", to: "/skills" },
            { label: "Contact", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm transition-colors ${
                location.pathname === item.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
