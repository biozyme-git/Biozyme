import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, GlobeIcon, JusticeScale01Icon, RefreshCwIcon, CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import CTABanner from '../components/sections/CTABanner';

const packaging = [
  { format: 'Bulk Road Tankers', capacity: '20 – 50 MT per load', idealFor: 'Distilleries, large cattle feed mills, and industrial plants with bulk storage tanks' },
  { format: 'Export Flexitanks', capacity: '20 – 24 MT per 20ft container', idealFor: 'International buyers in Bangladesh, Sri Lanka, and regional export ports' },
  { format: '1000L IBC Totes', capacity: '~1.4 MT net per tote', idealFor: 'Mid-sized manufacturing units, foundries, and aquaculture distributors' },
  { format: '200L Steel / HDPE Drums', capacity: '~280 kg net per drum', idealFor: 'Specialized batches, aquaculture farms, and trial industrial orders' },
];

export default function Logistics() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-brand-amber-light text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Supply Chain</motion.p>
          <motion.h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Logistics & Export
          </motion.h1>
          <motion.p className="text-white/70 text-lg max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Reliable bulk supply across India with dedicated export logistics to South Asia.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {[
              { icon: Location01Icon, title: 'Domestic Bulk Network', desc: 'Strategically positioned in Kolhapur to serve industrial, agricultural, and aquaculture buyers across all states in India with reliable bulk tanker and containerized transport.' },
              { icon: GlobeIcon, title: 'International Exports', desc: 'Complete export documentation and freight coordination via FOB / CFR terms using 20ft container Flexitanks, ISO tank containers, or cross-border rail and sea routes to Bangladesh and Sri Lanka.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 sm:p-7 h-full flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <HugeiconsIcon icon={item.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-10">
            <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Flexible Solutions</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">Packaging Options</h2>
            <p className="text-muted-foreground text-sm">Choose the packaging format that best suits your operation.</p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Packaging Format</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Capacity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  {packaging.map((p, i) => (
                    <motion.tr key={p.format} className={`border-b border-border ${i % 2 === 0 ? 'bg-white' : 'bg-brand-bg-alt'}`}
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                      <td className="px-6 py-4 text-sm font-medium text-primary">{p.format}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{p.capacity}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden md:table-cell">{p.idealFor}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-brand-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-10">
            <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Accuracy Guaranteed</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">Quality & Weight Assurance</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Every tanker undergoes a Dual-Weighment Audit to guarantee 100% net weight accuracy.</p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { icon: JusticeScale01Icon, title: 'Mill Weighbridge', desc: 'First weighment at the sugar mill', color: 'bg-primary/10 text-primary' },
                  { icon: RefreshCwIcon, title: 'Public Weighbridge', desc: 'Second independent verification', color: 'bg-brand-amber/10 text-brand-amber' },
                  { icon: CheckmarkCircle02Icon, title: 'Priority Dispatch', desc: 'Within 24–48 hours for contracted buyers', color: 'bg-green-100 text-green-600' },
                ].map((item) => (
                  <div key={item.title}>
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                      <HugeiconsIcon icon={item.icon} size={24} />
                    </div>
                    <h4 className="font-heading font-semibold text-primary">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
