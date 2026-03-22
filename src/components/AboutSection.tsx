import { motion } from "framer-motion";
import { GraduationCap, Target, Code, Cloud } from "lucide-react";

const cards = [
  {
    icon: <GraduationCap size={24} />,
    title: "Education",
    text: "B.Tech in Computer Science & Engineering from Lovely Professional University, Punjab (2023–Present). Matriculation from Lokmanya Tilak HSS, Ujjain.",
  },
  {
    icon: <Target size={24} />,
    title: "Career Goals",
    text: "Aspiring Cloud & DevOps Engineer aiming to build scalable, reliable infrastructure. Keen on contributing to open-source and solving real-world problems.",
  },
  {
    icon: <Code size={24} />,
    title: "Technical Interests",
    text: "Data Structures & Algorithms, Competitive Programming, Web Development, and System Design. Solved 100+ DSA problems in C++.",
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud & DevOps",
    text: "Hands-on experience with AWS (EC2, S3, IAM, VPC, RDS, CloudFront, Lambda), Docker, and Linux. AWS Academy Cloud Architecting certified.",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary code-font text-sm mb-2">Get To Know</p>
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-muted-foreground leading-relaxed text-lg">
          I'm Viratadityasingh Chouhan, a dedicated Computer Science undergraduate with a passion for
          cloud computing, DevOps, and full-stack development. I love building efficient, scalable solutions
          and continuously learning new technologies.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={item}
            className="glass-card p-6 hover:border-primary/30 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
