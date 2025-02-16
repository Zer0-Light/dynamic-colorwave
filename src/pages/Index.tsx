
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Server, MessageSquare } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Web Development",
    description: "Expert React & JavaScript development with modern frameworks",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Solutions",
    description: "Robust C# applications and .NET infrastructure",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Performance Optimization",
    description: "Improving application speed and efficiency",
  },
];

const technologies = [
  "C#", ".NET", "React", "JavaScript", "TypeScript", "Node.js",
  "SQL Server", "MongoDB", "Azure", "AWS", "Docker", "Git",
];

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            al-Laythi Software Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Crafting elegant solutions with modern technology
          </p>
          <a 
            href="#contact" 
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4" id="services">
        <div className="container mx-auto">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center">
            Comprehensive software solutions tailored to your needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-white/50" id="technologies">
        <div className="container mx-auto">
          <h2 className="section-title text-center">Technologies</h2>
          <p className="section-subtitle text-center">
            Our expertise spans across modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="tech-pill"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-center">Get in Touch</h2>
          <p className="section-subtitle text-center">
            Let's discuss how we can help with your next project
          </p>
          <div className="glass-card p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 h-32"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600">
        <div className="container mx-auto">
          <p>© 2024 al-Laythi Software Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
