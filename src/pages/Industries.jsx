import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { FishIcon, CornIcon, WheatIcon, FlaskConicalIcon, FactoryIcon, MicroscopeIcon, Leaf01Icon, PillIcon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import CTABanner from '../components/sections/CTABanner';
import { industries } from '../data/industries';

const iconMap = {
  fish: FishIcon, beef: CornIcon, flask: FlaskConicalIcon, factory: FactoryIcon,
  microscope: MicroscopeIcon, leaf: Leaf01Icon, pill: PillIcon, cigarette: WheatIcon,
};

export default function Industries() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-brand-amber-light text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Sectors We Supply</motion.p>
          <motion.h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Industries We Serve
          </motion.h1>
          <motion.p className="text-white/70 text-lg max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Premium sugarcane molasses solutions tailored for diverse industrial applications.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => {
              const icon = iconMap[industry.icon];
              return (
                <motion.div key={industry.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
                  <Card className="h-full hover:shadow-lg transition-shadow text-center">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        {icon && <HugeiconsIcon icon={icon} size={28} className="text-primary" />}
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-primary mb-3">{industry.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageTransition>
  );
}
