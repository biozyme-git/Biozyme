import { HugeiconsIcon } from '@hugeicons/react';
import { FactoryIcon, ContainerTruckIcon, GlobeIcon, FileCheckIcon, Package01Icon, Clock01Icon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const strengths = [
  { title: 'Direct Mill Sourcing Network', description: 'Strong tie-ups with major cooperative and private sugar mills in Western Maharashtra to guarantee steady off-season availability.', icon: FactoryIcon },
  { title: 'Bulk Road Tanker Supply', description: 'Dedicated 20–50 MT liquid tanker dispatches tailored for high-viscosity molasses transport.', icon: ContainerTruckIcon },
  { title: 'Pan-India & Export Reach', description: 'Seamless domestic bulk delivery across all states plus dedicated export logistics to Bangladesh and Sri Lanka.', icon: GlobeIcon },
  { title: 'M-III Licensed & GST Compliant', description: 'Authorized M-III License Holder with GSTR-compliant Tax Invoices, E-Way Bills, and excise transit permits.', icon: FileCheckIcon },
  { title: 'Flexible Packaging Options', description: 'Available in Bulk Road Tankers, Export Flexitanks, 1000L IBC Totes, and 200L HDPE/Steel Drums.', icon: Package01Icon },
  { title: 'Reliable Turnaround & Tracking', description: 'Standardized unloading couplers, verified dual-weighment, and real-time transit ETA updates.', icon: Clock01Icon },
];

export default function SupplyStrengths() {
  return (
    <section className="py-16 sm:py-20 bg-brand-bg-alt">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Why Biozyme</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">Core Supply Strengths</h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">Six pillars that make Biozyme your most reliable sugarcane molasses procurement partner.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <HugeiconsIcon icon={s.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
