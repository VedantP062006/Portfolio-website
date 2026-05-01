import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-5/12 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-2xl transform rotate-6 opacity-30 dark:opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-2xl transform -rotate-6 opacity-30 dark:opacity-50"></div>
              <img
                src="/src/Images/WhatsApp Image 2026-05-01 at 19.04.50.jpeg"
                className="relative rounded-2xl object-cover w-full h-full shadow-2xl border-4 border-white dark:border-slate-800"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-7/12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              A curious developer bridging the gap between <span className="text-primary-600 dark:text-primary-400">Web</span> and <span className="text-purple-600 dark:text-purple-400">AI</span>.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a second-year CSE(Ai&Ml) student passionate about building performant, accessible, and beautiful web applications. Over the last two years, I've immersed myself in the JavaScript ecosystem while simultaneously exploring Machine Learning integration for modern software.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              When I'm not writing code or debugging neural networks, you can find me contributing to open-source projects, writing technical articles, or reading about the latest tech trends.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
