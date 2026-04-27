import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5/CSS3']
  },
  {
    category: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'AI / ML',
    skills: ['Python', 'TensorFlow', 'Pandas / NumPy', 'Scikit-Learn']
  },
  {
    category: 'Tools & Others',
    skills: ['Git & GitHub', 'Vite / Webpack', 'Figma', 'Docker']
  }

];


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A diverse toolkit that enables me to build full-stack applications and integrate intelligent models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((categoryGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-slate-700 pb-3">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categoryGroup.skills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-gray-100 dark:border-slate-600">
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
};

export default Skills;
