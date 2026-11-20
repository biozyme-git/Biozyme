import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-brand-amber-light' : 'text-brand-amber'}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${light ? 'text-white' : 'text-primary'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mt-4 text-lg max-w-3xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-muted-foreground'}`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
