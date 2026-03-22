import { motion } from "framer-motion";
import { Award, BookOpen, ExternalLink, Trophy, Users } from "lucide-react";

const certificates = [
  { name: "AWS Academy Graduate – Cloud Architecting (Dec 2025)", link: "https://drive.google.com/file/d/1DLBmyLpyTEBvdaliIq33lW-u6Bod4F2n/view?usp=sharing" },
  { name: "Privacy & Security in Online Social Media – IIT Hyderabad / NPTEL (Oct 2025)", link: "https://drive.google.com/file/d/1saWl8jYKxw40jazIpHoNBSRzBCxy-4os/view?usp=sharing" },
  { name: "Java Programming – Iamneo (May 2025)", link: "https://drive.google.com/file/d/10kkzvVMs0mwzfMeuG7D6y2tw4_wIp3Wd/view?usp=sharing" },
  { name: "OOP – Iamneo (Dec 2024)", link: "https://drive.google.com/file/d/1XYmkOWxNDdwvbGJmElKkeJgzyHFHt1xj/view?usp=sharing" },
  { name: "DSA – Iamneo (Dec 2024)", link: "https://drive.google.com/file/d/1dUF5wDmEfmyGaD5ZbmRkN6zqdlWEKs4E/view?usp=sharing" },
  { name: "Computer Programming – Iamneo (May 2024)", link: "https://drive.google.com/file/d/1VS4MbMT9vDDguJ5BUBCpcagtXEZh3iHp/view?usp=sharing" },
];

const achievements = [
  { icon: <Trophy size={20} />, text: "Patent proposal selected by RDC for official filing (Oct 2025)" },
  { icon: <Award size={20} />, text: "Participated in Code-a-Haunt (LPU) – coding challenge hackathon" },
  { icon: <Users size={20} />, text: "Leadership & Member, IGNITE LPU student organization (Since Jan 2024)" },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary code-font text-sm mb-2">My Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold">Experience & Achievements</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Training */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <BookOpen size={20} />
            </div>
            <h3 className="text-lg font-semibold">Training</h3>
          </div>
          <div className="border-l-2 border-primary/30 pl-4 ml-2">
            <a
              href="https://drive.google.com/file/d/1uVNSK0PzQioZJl-lt675Ce4rxH7p_o9e/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors group/link"
            >
              <h4 className="font-semibold text-sm inline-flex items-center gap-1">
                Cipher Schools – DSA with C++
                <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </h4>
            </a>
            <span className="block text-xs text-muted-foreground code-font mt-1">Jun 2025 – Jul 2025</span>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Implemented key data structures in C++, optimized algorithms using STL, and solved 100+ DSA problems
              covering dynamic programming, greedy approaches, and graphs.
            </p>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Trophy size={20} />
            </div>
            <h3 className="text-lg font-semibold">Achievements</h3>
          </div>
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary mt-0.5">{a.icon}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificates */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card p-6 mt-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Award size={20} />
          </div>
          <h3 className="text-lg font-semibold">Certificates</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
              {cert.name}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
