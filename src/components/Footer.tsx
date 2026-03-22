import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Viratadityasingh Chouhan. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        <a href="https://github.com/ViratadityasinghChouhan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/viratadityasingh77" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:chouhanviratadityasingh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  </footer>
);

export default Footer;
