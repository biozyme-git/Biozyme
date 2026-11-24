import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle02Icon, ContainerTruckIcon, ShieldCheckIcon } from '@hugeicons/core-free-icons';
import { Button } from '@/components/ui/button';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const features = [
  { title: 'High Brix', subtitle: '& TRS' },
  { title: 'Bulk Supply', subtitle: '& Logistics' },
  { title: 'Industrial, Feed', subtitle: '& Aqua Grades' },
];

function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto max-w-[280px] sm:max-w-[360px] lg:max-w-[460px] pointer-events-none object-contain select-none"
    >
      <source src="/videos/hero_clean.mp4" type="video/mp4" />
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-primary" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-12">
          <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 text-center lg:text-left">
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-extrabold text-white leading-[1.1] mb-5"
            >
              PREMIUM SUGARCANE MOLASSES SUPPLIER & EXPORTER
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-justify lg:text-left">
              Premium sugarcane molasses supplier & exporter — sourced directly from
              Western Maharashtra's premier sugar mills.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-6 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} className="text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">{f.title}</p>
                    <p className="text-white/70 text-xs">{f.subtitle}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
              <Button asChild className="rounded-full px-8 py-3 h-auto text-base font-bold bg-brand-amber hover:bg-brand-amber-dark text-white shadow-lg">
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="relative">
              <HeroVideo />

              <motion.div
                className="absolute -bottom-2 -left-10 bg-white rounded-xl shadow-lg p-2.5 hidden sm:flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <HugeiconsIcon icon={ContainerTruckIcon} size={20} className="text-primary" />
                <div>
                  <p className="text-[10px] font-semibold text-primary">Bulk Transport</p>
                  <p className="text-[9px] text-muted-foreground">20-50 MT Tankers</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-6 bg-white rounded-xl shadow-lg p-2.5 hidden sm:flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <HugeiconsIcon icon={ShieldCheckIcon} size={20} className="text-green-600" />
                <div>
                  <p className="text-[10px] font-semibold text-primary">M-III Licensed</p>
                  <p className="text-[9px] text-muted-foreground">Govt. of Maharashtra</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 bg-brand-green-dark/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-8 text-xs text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex justify-center items-center gap-3.5 sm:gap-8">
              <span className="font-semibold text-white whitespace-nowrap">Serving Industries.</span>
              <span className="font-medium text-white/90 whitespace-nowrap">Animal Feed</span>
              <span className="font-medium text-white/90 whitespace-nowrap">Distilleries</span>
            </div>
            <div className="flex justify-center items-center gap-4 sm:gap-8">
              <span className="font-medium text-white/90 whitespace-nowrap">Bio-Fertilizers</span>
              <span className="font-medium text-white/90 whitespace-nowrap">Food & More</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
