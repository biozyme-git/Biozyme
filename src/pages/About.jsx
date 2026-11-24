import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ScrollTextIcon, BarChartIcon, SquareCheckIcon, Building02Icon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import LeadershipCard from '../components/LeadershipCard';
import CTABanner from '../components/sections/CTABanner';
import { teamMembers } from '../data/team';

const pillars = [
  { title: 'M-III Licensed & 100% Tax Compliant', description: 'Authorized under Maharashtra State Excise regulations with transparent GST-invoiced billing and full Input Tax Credit (ITC) support.', icon: ScrollTextIcon },
  { title: 'Consistent Volume & Quality', description: 'Direct mill allocations that protect client operations from seasonal shortages and intermediary price volatility.', icon: BarChartIcon },
  { title: 'Procurement-Friendly Process', description: 'Standardized RFQs, transparent freight breakdowns, flexible packaging, and dedicated account coordination.', icon: SquareCheckIcon },
];

export default function About() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-amber rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-brand-amber-light text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>About Us</motion.p>
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Biozyme Trading Company
          </motion.h1>
          <motion.p className="text-white/70 text-lg max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Established in 2010, headquartered in Kolhapur, Maharashtra — bridging high-output sugar mills and industrial buyers across India and beyond.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-center lg:text-left">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Biozyme Trading Company is a specialized B2B supplier of bulk sugarcane molasses and agricultural commodities. An authorized M-III License Holder under the State Excise Department, Government of Maharashtra, we bridge the gap between high-output sugar mills and industrial, aquaculture, and export buyers across India, Bangladesh, and Sri Lanka.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over a decade of commodity trading expertise, we've built a reputation for consistent quality, transparent pricing, and reliable year-round supply even during off-season months.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Card className="bg-gradient-to-t from-primary/5 to-primary/10 border-0 text-center shadow-md">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <HugeiconsIcon icon={Building02Icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-primary text-xl mb-2">Est. 2010</h3>
                  <p className="text-muted-foreground text-sm">Kolhapur, Maharashtra</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-2xl font-bold text-primary">28+</p>
                      <p className="text-xs text-muted-foreground">States Served</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-2xl font-bold text-primary">3</p>
                      <p className="text-xs text-muted-foreground">Export Markets</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Our Foundation</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">Operational Pillars</h2>
            <p className="text-muted-foreground text-sm">Three principles that drive everything we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6 sm:p-7 h-full flex flex-col justify-center items-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <HugeiconsIcon icon={pillar.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Leadership</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">Direct Executive Contact</h2>
            <p className="text-muted-foreground text-sm">Reach our leadership team directly — no gatekeepers, no delays.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <LeadershipCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
