import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { LandmarkIcon, Search01Icon, CalendarCheckIcon, FileTextIcon, FlaskConicalIcon, Download03Icon, LockKeyIcon, ClipboardListIcon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import CTABanner from '../components/sections/CTABanner';

const qualityPillars = [
  { title: 'Authorized M-III License Holder', description: 'Officially licensed under the State Excise Department, Government of Maharashtra, ensuring fully legal, transparent, and uninterrupted molasses trade and inter-state transit.', icon: LandmarkIcon },
  { title: 'Source-Level Selection', description: 'Batches are sourced exclusively from vetted sugarcane refineries in Western Maharashtra known for strict crushing and sanitation standards.', icon: Search01Icon },
  { title: 'Year-Round Off-Season Security', description: 'Planned procurement aligned with crushing cycles ensures steady supply even during off-season months (May–October).', icon: CalendarCheckIcon },
  { title: 'Complete Dispatch Dossier', description: 'Every shipment travels with a GST Tax Invoice (HSN 1703), E-Way Bill, Verified Weighment Slip, and State Excise / M-III Transit Permits.', icon: FileTextIcon },
  { title: 'Lab & Sample Support', description: 'Technical Data Sheets (TDS), Material Safety Data Sheets (MSDS), Certificate of Analysis (COA on request), and pre-shipment lab sample kits (500 ml to 2 kg) are available through our procurement desk.', icon: FlaskConicalIcon },
];

export default function Quality() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-dark via-primary to-brand-green-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-brand-amber-light text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Compliance & Trust</motion.p>
          <motion.h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Quality Assurance
          </motion.h1>
          <motion.p className="text-white/70 text-lg max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Every step of our supply chain is designed around transparency, compliance, and quality consistency.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-brand-amber to-brand-green-light hidden md:block" />
            <div className="space-y-8">
              {qualityPillars.map((pillar, i) => (
                <motion.div key={pillar.title} className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg border-2 border-primary items-center justify-center z-10">
                    <HugeiconsIcon icon={pillar.icon} size={28} className="text-primary" />
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-3 mb-2 md:hidden">
                        <HugeiconsIcon icon={pillar.icon} size={20} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-primary mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">For Developer Reference</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary">Document Availability</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Download03Icon, title: 'MSDS & TDS', desc: 'Provided as downloadable PDF via lead-capture form.', color: 'bg-green-100 text-green-600' },
              { icon: LockKeyIcon, title: 'M-III Excise License', desc: 'Watermarked copy shared only with verified buyers upon RFQ.', color: 'bg-brand-amber/10 text-brand-amber' },
              { icon: ClipboardListIcon, title: 'Certificate of Analysis', desc: 'Provided on request or included with every dispatch.', color: 'bg-secondary/10 text-secondary' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                      <HugeiconsIcon icon={item.icon} size={24} />
                    </div>
                    <h4 className="font-heading font-semibold text-primary">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
