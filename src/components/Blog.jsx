import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Server Components in 2026',
    excerpt: 'An deep dive into how RSCs change the paradigm of component building and data fetching in modern React ecosystems.',
    content: 'React Server Components are a massive paradigm shift. Instead of sending all component code to the client, RSCs allow developers to render components entirely on the server. This reduces bundle size drastically and allows direct access to backend resources like databases. In this post, we explore practical implementations and common gotchas when integrating RSCs alongside traditional Client Components.',
    date: 'April 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Integrating Machine Learning into Web Apps',
    excerpt: 'How to serve Python ML models via Flask and connect them gracefully to your React application frontend.',
    content: 'Serving ML models via web APIs is becoming a standard backend skill. By wrapping a predictive model (e.g., scikit-learn or TensorFlow) in a Flask API endpoint, you decouple your heavy ML logic from your Node or React app. This post breaks down how to dockerize the Python service, fetch predictions from React, and handle parsing loading states gracefully.',
    date: 'March 22, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Designing with Tailwind: Beyond the Basics',
    excerpt: 'Tips for keeping a large codebase clean while using Tailwind CSS utility classes.',
    content: 'Tailwind CSS is fantastic, but without discipline, HTML files can quickly become unreadable. Learn how to use `@apply` sparingly, organize complex configurations, utilize custom arbitrary values, and structure your React components so that styling variants are isolated and maintainable.',
    date: 'February 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Stop background scroll when modal is open
  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPost]);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Insights</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:border-primary-500/50 transition-colors"
              onClick={() => setSelectedPost(post)}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              <div className="p-6">
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                <span className="text-primary-600 dark:text-primary-400 font-medium text-sm flex items-center gap-1">
                  Read more &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full blog post */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              onClick={() => setSelectedPost(null)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass-card rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="overflow-y-auto">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover" />
                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={16} /> {selectedPost.date}</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {selectedPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    {selectedPost.title}
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p className="leading-relaxed">{selectedPost.content}</p>
                    {/* Mock additional paragraphs */}
                    <p className="mt-4 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
