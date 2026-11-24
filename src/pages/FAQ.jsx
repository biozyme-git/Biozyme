import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import Accordion from '../components/ui/Accordion';
import CTABanner from '../components/sections/CTABanner';
import { faqs } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-brand-amber-light text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Buyer Questions</motion.p>
          <motion.h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Frequently Asked Questions
          </motion.h1>
          <motion.p className="text-white/70 text-lg max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Common questions from procurement teams and plant managers.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            {faqs.map((faq, i) => (
              <Accordion
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </Card>
        </div>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
