import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const titles = [
  "Cloud & DevOps Enthusiast",
  "Problem Solver",
  "CSE Undergraduate",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
        },
        deleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary code-font text-sm mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Viratadityasingh{" "}
            <span className="text-gradient">Chouhan</span>
          </h1>
          <div className="h-8 mb-6">
            <span className="text-xl md:text-2xl text-muted-foreground code-font">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
            B.Tech CSE student at Lovely Professional University, passionate about Cloud Computing,
            DevOps, and building scalable web applications. Always eager to learn and solve complex problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1puYnbHKyj82sCqZVnp9tYXj-NGHd2yUC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="https://github.com/ViratadityasinghChouhan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/viratadityasingh77" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:chouhanviratadityasingh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse_glow">
              <img src={profileImg} alt="Viratadityasingh Chouhan" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl glass-card flex items-center justify-center animate-float">
              <span className="text-2xl">☁️</span>
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl glass-card flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-xl">💻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
