import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatsCounter({ value, suffix = '', prefix = '', label, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
        {prefix}{typeof count === 'number' ? count.toLocaleString() : count}{suffix}
      </div>
      <p className="text-white/70 text-sm font-medium">{label}</p>
    </motion.div>
  );
}
