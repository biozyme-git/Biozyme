import { motion } from 'framer-motion';

export default function AnimatedCard({ children, index = 0, className = '' }) {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}
