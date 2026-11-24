import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { HandshakeIcon, Target01Icon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/sections/Hero';
import SupplyStrengths from '../components/sections/SupplyStrengths';
import StatsBar from '../components/sections/StatsBar';
import IndustriesPreview from '../components/sections/IndustriesPreview';
import RFQForm from '../components/sections/RFQForm';
import CTABanner from '../components/sections/CTABanner';
import { molassesSpecs } from '../data/products';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <IndustriesPreview />

      <section className="py-16 sm:py-20 bg-brand-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/brand-hero.jpeg"
                alt="Biozyme Trading Company - Cane Molasses"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-6 text-center">
                TECHNICAL SPECIFICATION
              </h2>
              <Card className="shadow-xl hover:shadow-2xl transition-shadow overflow-hidden !p-0 ring-0">
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="px-4 py-3 text-left font-semibold rounded-tl-xl">Parameter</th>
                        <th className="px-4 py-3 text-left font-semibold rounded-tr-xl">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {molassesSpecs.map((spec, i) => (
                        <motion.tr
                          key={spec.parameter}
                          className={`${i % 2 === 0 ? 'bg-white' : 'bg-brand-bg-alt'}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.03 }}
                        >
                          <td className="px-4 py-2.5 font-medium text-foreground">{spec.parameter}</td>
                          <td className="px-4 py-2.5 text-muted-foreground">{spec.limits}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-brand-amber font-semibold text-sm uppercase tracking-widest mb-3">The Sugar-Belt Sourcing Advantage</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-5">
                Direct Accountability from Mill to Plant
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base text-justify lg:text-left">
                Headquartered in Kolhapur — the heart of India's highest-recovery sugarcane belt —
                Biozyme Trading Company operates as a dedicated B2B procurement and supply-chain partner,
                not an intermediary broker.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-justify lg:text-left">
                By coordinating directly with cooperative and private sugar mills, we ensure consistent
                Brix and Total Reducing Sugars (TRS) specifications, transparent dual-weighment, and
                uninterrupted year-round supply.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={HandshakeIcon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white text-sm sm:text-base">Direct Mill Integrations</h3>
                      <p className="text-white/80 text-xs sm:text-sm mt-1">Priority allocations from top Western Maharashtra sugar refineries.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <HugeiconsIcon icon={Target01Icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white text-sm sm:text-base">Specification Precision</h3>
                      <p className="text-white/80 text-xs sm:text-sm mt-1">Batch selection aligned with your plant's exact Brix, TRS, and viscosity requirements.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <SupplyStrengths />
      <StatsBar />
      <RFQForm />
      <CTABanner />
    </PageTransition>
  );
}
