import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Server, Cpu, Database, Cloud, Lock } from "lucide-react";
const services = [{
  icon: <Code2 className="w-6 h-6" />,
  title: "Frontend Development",
  description: "Building reactive applications with React & TypeScript"
}, {
  icon: <Server className="w-6 h-6" />,
  title: "Backend Development",
  description: "Scalable .NET Core & C# microservices"
}, {
  icon: <Database className="w-6 h-6" />,
  title: "Database Architecture",
  description: "Optimized SQL Server & MongoDB solutions"
}, {
  icon: <Cloud className="w-6 h-6" />,
  title: "Cloud Solutions",
  description: "AWS & Azure infrastructure deployment"
}, {
  icon: <Cpu className="w-6 h-6" />,
  title: "System Integration",
  description: "Seamless API & service integration"
}, {
  icon: <Lock className="w-6 h-6" />,
  title: "Security Solutions",
  description: "Implementing robust security practices"
}];
const technologies = ["C#", ".NET Core", "React", "TypeScript", "Node.js", "SQL Server", "MongoDB", "Azure", "AWS", "Docker", "Kubernetes", "Git", "REST APIs", "GraphQL", "Redis", "CI/CD"];
const Index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center">
          <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="mb-8">
            <Code2 className="w-16 h-16 mx-auto text-primary mb-6" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Al-Laythi Software Services</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Crafting cutting-edge solutions with modern technology
          </p>
          <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4" id="services">
        <div className="container mx-auto">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center">
            Comprehensive software solutions powered by cutting-edge technology
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="glass-card p-6">
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-secondary/30" id="technologies">
        <div className="container mx-auto">
          <h2 className="section-title text-center">Tech Stack</h2>
          <p className="section-subtitle text-center">
            Our expertise spans across modern technologies and frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: index * 0.05
          }} className="tech-pill">
                {tech}
              </motion.div>)}
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
                  <label className="block text-sm font-medium mb-2 text-white">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-400" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-400 h-32" placeholder="Tell us about your project" />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400">
        <div className="container mx-auto">
          <p>© 2024 al-Laythi Software Services. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Index;