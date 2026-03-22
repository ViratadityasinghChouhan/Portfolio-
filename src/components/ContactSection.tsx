import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_virat_portfolio",
        "template_2994q9k",
        formRef.current,
        "-C-FkDY6Ga5XpQdfR"
      );
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary code-font text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: <Mail size={18} />, label: "chouhanviratadityasingh@gmail.com", href: "mailto:chouhanviratadityasingh@gmail.com" },
                { icon: <Phone size={18} />, label: "+91 6268916082", href: "tel:+916268916082" },
                { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/ViratadityasinghChouhan" },
                { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/viratadityasingh77" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={isSending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
