import { motion, AnimatePresence } from 'framer-motion';

export default function Accordion({ question, answer, isOpen, onClick, index }) {
  return (
    <motion.div
      className={`border-b border-border ${isOpen ? 'border-l-4 border-l-brand-amber' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-brand-bg-alt transition-colors"
      >
        <span className={`text-lg font-medium pr-4 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
          {question}
        </span>
        <motion.span
          className="text-2xl text-primary flex-shrink-0"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
