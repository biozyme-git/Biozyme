import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = 'BIOZYME'.split('');

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex gap-1">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-5xl md:text-7xl font-heading font-bold text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="text-white/60 text-sm tracking-[0.3em] uppercase mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Trading Company
          </motion.p>
          <motion.div
            className="mt-8 w-48 h-0.5 bg-white/20 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
