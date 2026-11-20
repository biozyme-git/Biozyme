import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { TelephoneIcon } from '@hugeicons/core-free-icons';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-amber-dark via-brand-amber to-brand-amber-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <motion.div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Get Your GST-Compliant Quotation Within 24 Hours
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Complete documentation including Tax Invoices (HSN 1703), E-Way Bills, and excise transit permits with every dispatch.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild className="rounded-full px-8 py-3 h-auto text-base font-semibold bg-white text-brand-amber hover:bg-white/90">
            <Link to="/contact">Request Quote Now</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8 py-3 h-auto text-base font-semibold border-white text-white hover:bg-white/10">
            <a href="tel:+919421105300">
              <HugeiconsIcon icon={TelephoneIcon} size={16} className="mr-2" /> Call +91-9421105300
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
