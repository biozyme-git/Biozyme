import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import CTABanner from '../components/sections/CTABanner';
import { molassesSpecs, storageGuidance } from '../data/products';

const tabs = ['Industrial Sugarcane Molasses', 'Aqua Carbon-Pro Booster'];

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-brand-amber-light text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Our Products</motion.p>
          <motion.h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Product Range
          </motion.h1>
          <motion.p className="text-white/70 text-lg max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            High-quality industrial molasses and specialized aquaculture formulations.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 mb-12">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`relative px-6 py-3 rounded-lg font-medium text-sm transition-colors ${
                  activeTab === i ? 'text-white' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {activeTab === i && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-primary rounded-lg" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div key="molasses" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Industrial Sugarcane Molasses (C-Heavy & B-Heavy)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto text-justify sm:text-center">
                  A dense, nutrient-rich viscous by-product obtained after the final crystallization stage of sugarcane refining. Packed with uncrystallized reducing sugars, natural carbohydrates, and trace minerals, our industrial-grade molasses serves as a high-efficiency carbon source for fermentation, animal nutrition, aquaculture biofloc systems, and industrial binding.
                </p>

                <h4 className="text-lg font-heading font-semibold text-primary mb-4">Technical Specifications</h4>
                <Card className="shadow-xl hover:shadow-2xl transition-shadow overflow-hidden max-w-4xl mx-auto !p-0 ring-0">
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="px-6 py-3 text-left text-sm font-semibold">Parameter</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold">Typical Industrial Limits</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold hidden md:table-cell">Testing Method</th>
                        </tr>
                      </thead>
                      <tbody>
                        {molassesSpecs.map((spec, i) => (
                          <motion.tr key={spec.parameter} className={`${i % 2 === 0 ? 'bg-white' : 'bg-brand-bg-alt'}`}
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                            <td className="px-6 py-3 text-sm font-medium text-foreground">{spec.parameter}</td>
                            <td className="px-6 py-3 text-sm text-muted-foreground">{spec.limits}</td>
                            <td className="px-6 py-3 text-sm text-muted-foreground hidden md:table-cell">{spec.method}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
                <p className="text-xs text-muted-foreground mt-4 italic max-w-3xl mx-auto">
                  Disclaimer: Natural agricultural values may vary slightly by sugar mill, crushing season, and batch. Final specifications and Certificate of Analysis (COA) are confirmed at the time of quotation and dispatch.
                </p>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div key="aqua" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Biozyme Aqua Carbon-Pro Booster</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto text-justify sm:text-center">
                  A specialized carbon-rich aquaculture supplement formulated specifically for shrimp and Biofloc farming hubs. Combining high-Brix sugarcane molasses with organic acids, beneficial probiotics, and mineral stabilizers, it helps maintain optimal Carbon-to-Nitrogen (C:N) ratios, controls toxic pond ammonia, and promotes healthy microbial floc growth.
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <Card className="bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light text-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6 sm:p-7 h-full flex flex-col justify-center">
                      <h4 className="font-heading font-semibold text-white mb-3">Key Applications</h4>
                      <ul className="space-y-2 text-white/80 text-sm text-left">
                        <li className="flex items-start gap-2"><span className="text-brand-amber-light mt-0.5">●</span>Vannamei shrimp ponds</li>
                        <li className="flex items-start gap-2"><span className="text-brand-amber-light mt-0.5">●</span>Biofloc tanks</li>
                        <li className="flex items-start gap-2"><span className="text-brand-amber-light mt-0.5">●</span>Intensive aquaculture farms</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light text-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6 sm:p-7 h-full flex flex-col justify-center">
                      <h4 className="font-heading font-semibold text-white mb-3">Packaging Options</h4>
                      <ul className="space-y-2 text-white/80 text-sm text-left">
                        <li className="flex items-start gap-2"><span className="text-brand-amber-light mt-0.5">●</span>50 kg HDPE drums</li>
                        <li className="flex items-start gap-2"><span className="text-brand-amber-light mt-0.5">●</span>200L HDPE drums</li>
                        <li className="flex items-start gap-2"><span className="text-brand-amber-light mt-0.5">●</span>1000L IBC totes</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 bg-brand-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Buyer Guidance</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">Storage & Handling</h2>
            <p className="text-muted-foreground text-sm">Best practices for maintaining molasses quality at your facility.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {storageGuidance.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light text-white border-0 h-full shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-6 sm:p-7 h-full flex flex-col justify-center text-center">
                    <h3 className="text-lg font-heading font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
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
