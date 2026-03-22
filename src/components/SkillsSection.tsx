import { motion } from "framer-motion";
import { Code, Cloud, Database, Cpu, Layout, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Terminal size={20} />,
    skills: ["C++", "Python", "C"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    skills: ["AWS (EC2, S3, IAM, Lambda)", "Docker", "Linux / Ubuntu"],
  },
  {
    title: "Databases & Tools",
    icon: <Database size={20} />,
    skills: ["MySQL", "Git & GitHub", "VMware"],
  },
  {
    title: "Soft Skills",
    icon: <Code size={20} />,
    skills: ["Problem Solving", "Teamwork", "Logical Thinking"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card/10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary code-font text-sm mb-2">Technical Proficiency</p>
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
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

export default SkillsSection;
