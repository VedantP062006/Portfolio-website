import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'SoilSense AI',
    description: 'A full-stack application leveraging Machine Learning to predict soil health and provide precise crop recommendations based on NPK values.',
    image: 'https://images.unsplash.com/photo-1628187843812-70b777a8cbba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'Python', 'Flask'],
    github: 'https://github.com/alexdoe/soilsense',
    live: 'https://soilsense.demo.com'
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description: 'An administrative dashboard for an e-commerce platform featuring real-time analytics, inventory management, and smooth dark mode UI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'Recharts'],
    github: 'https://github.com/alexdoe/dashboard',
    live: 'https://admin-dash.demo.com'
  },
  {
    id: 3,
    title: 'Portfolio Themes Manager',
    description: 'A React module to easily switch and manage dual-mode portfolios (Recruiter vs Developer modes) with local storage persistence.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Framer Motion', 'Zustand'],
    github: 'https://github.com/alexdoe/portfolio-manager',
    live: 'https://portfolio-mgr.demo.com'
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
  >
    <div className="relative overflow-hidden h-48 w-full">
      <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10"></div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-slate-700">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors gap-2 text-sm font-medium"
        >
          <Github size={18} /> Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors gap-2 text-sm font-medium"
        >
          <ExternalLink size={18} /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work focusing on clean code, performant architecture, and modern UI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
