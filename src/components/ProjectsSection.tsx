import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Static Website Hosting – AWS S3 + CloudFront",
    description:
      "Hosted a static website using AWS S3 and CloudFront with public access and optimized delivery. Configured bucket policies, HTTPS support, and caching for fast, secure access.",
    tech: ["AWS S3", "CloudFront", "IAM", "HTTPS"],
    github: "https://github.com/ViratadityasinghChouhan",
    date: "Jul 2026",
  },
  {
    title: "EC2-Based Web App with Auto Start",
    description:
      "Launched an Amazon EC2 Linux instance and deployed a web app with Apache. Configured security groups and key pairs, enabled automatic service restart for high availability.",
    tech: ["AWS EC2", "Apache", "Linux", "Security Groups"],
    github: "https://github.com/ViratadityasinghChouhan",
    date: "Jul 2025",
  },
  {
    title: "DSA with C++ – 100+ Problems",
    description:
      "Implemented key data structures and optimized sorting/searching algorithms. Solved 100+ problems covering DP, greedy, graphs using C++ STL.",
    tech: ["C++", "STL", "Algorithms", "Data Structures"],
    github: "https://github.com/ViratadityasinghChouhan",
    date: "Training Project",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary code-font text-sm mb-2">My Work</p>
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
          >
            <div className="h-2 w-full" style={{ background: "var(--gradient-primary)" }} />
            <div className="p-6">
              <span className="text-xs text-muted-foreground code-font">{project.date}</span>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary code-font">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
