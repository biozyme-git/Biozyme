import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { FishIcon, CornIcon, FlaskConicalIcon, FactoryIcon, Leaf01Icon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';

const featured = [
  { id: 'aquaculture', title: 'Aquaculture', icon: FishIcon },
  { id: 'cattle-feed', title: 'Cattle &\nPoultry Feed', icon: CornIcon },
  { id: 'foundry', title: 'Foundry &\nMetal Casting', icon: FactoryIcon },
  { id: 'distillery', title: 'Distilleries', icon: FlaskConicalIcon },
  { id: 'agriculture', title: 'Agriculture', icon: Leaf01Icon },
];

export default function IndustriesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Industries We Serve</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary">INDUSTRY APPLICATIONS</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Card className="bg-gradient-to-br from-primary to-brand-green-light border-0 cursor-pointer hover:shadow-xl transition-shadow h-full">
                <CardContent className="flex flex-col items-center justify-center text-center py-6 sm:py-8 min-h-[130px]">
                  <HugeiconsIcon icon={item.icon} size={40} className="text-white/90 mb-3" />
                  <h3 className="font-heading font-semibold text-white text-xs sm:text-sm leading-tight whitespace-pre-line">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/industries"
            className="text-primary font-semibold hover:text-brand-amber transition-colors inline-flex items-center gap-2 text-sm"
          >
            View All Industries →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
