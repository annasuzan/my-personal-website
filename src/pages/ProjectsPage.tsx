import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">
      <Projects />
    </main>
  </div>
);

export default ProjectsPage;
