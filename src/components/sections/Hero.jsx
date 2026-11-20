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

function MolassesBottleSVG() {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[260px] sm:max-w-[300px]">
      <rect x="110" y="20" width="80" height="30" rx="6" fill="#B45309" stroke="#92400E" strokeWidth="2"/>
      <rect x="115" y="25" width="70" height="10" rx="3" fill="#D97706" opacity="0.6"/>
      <rect x="120" y="48" width="60" height="30" rx="4" fill="#78350F" stroke="#92400E" strokeWidth="1.5"/>
      <rect x="70" y="75" width="160" height="260" rx="20" fill="#6B2F0A" stroke="#92400E" strokeWidth="2"/>
      <rect x="85" y="95" width="130" height="220" rx="12" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5"/>
      <rect x="100" y="108" width="100" height="22" rx="4" fill="#1B4332"/>
      <text x="150" y="123" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">BIOZYME TRADING CO.</text>
      <text x="150" y="143" textAnchor="middle" fill="#6B7280" fontSize="6" fontFamily="sans-serif">QUALITY PRODUCTS &bull; TRUSTED PARTNER</text>
      <text x="150" y="175" textAnchor="middle" fill="#1B4332" fontSize="18" fontWeight="bold" fontFamily="sans-serif">CANE</text>
      <text x="150" y="198" textAnchor="middle" fill="#1B4332" fontSize="18" fontWeight="bold" fontFamily="sans-serif">MOLASSES</text>
      <rect x="95" y="208" width="110" height="16" rx="8" fill="#1B4332" opacity="0.1"/>
      <text x="150" y="219" textAnchor="middle" fill="#1B4332" fontSize="7" fontWeight="600" fontFamily="sans-serif">Natural &bull; Rich &bull; Nutritious</text>
      <rect x="100" y="235" width="100" height="20" rx="4" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
      <text x="120" y="248" textAnchor="middle" fill="#6B7280" fontSize="6" fontFamily="monospace">HSN CODE</text>
      <text x="175" y="249" textAnchor="middle" fill="#1B4332" fontSize="9" fontWeight="bold" fontFamily="sans-serif">17031000</text>
      <circle cx="150" cy="280" r="15" fill="#78350F" opacity="0.3"/>
      <ellipse cx="150" cy="275" rx="8" ry="5" fill="#92400E" opacity="0.5"/>
      <text x="150" y="302" textAnchor="middle" fill="#92400E" fontSize="6" fontFamily="sans-serif">NOT FOR SALE</text>
      <text x="150" y="312" textAnchor="middle" fill="#9CA3AF" fontSize="5" fontFamily="sans-serif">FOR LABORATORY / CUSTOMER SAMPLES</text>
      <rect x="72" y="280" width="156" height="53" rx="0" fill="#451A03" opacity="0.2"/>
      <path d="M72 280 Q150 265 228 280 V333 Q228 333 72 333 Z" fill="#78350F" opacity="0.15"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="none" fill="none">
          <path d="M0 0H800C800 0 950 0 1050 100C1150 200 1200 400 1100 500C1000 600 800 650 600 680C400 710 0 700 0 700V0Z" fill="#1B4332"/>
          <path d="M0 0H780C780 0 920 10 1020 100C1120 190 1180 380 1080 480C980 580 790 640 590 670C390 700 0 690 0 690V0Z" fill="#2D6A4F" opacity="0.3"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-12">
          <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 text-center lg:text-left">
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-extrabold text-white leading-[1.1] mb-5"
            >
              PREMIUM SUGARCANE MOLASSES SUPPLIER & EXPORTER
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
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
              <MolassesBottleSVG />

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
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { label: 'Serving Industries.', sub: 'Nourishing Growth.' },
              { label: 'Animal Feed' },
              { label: 'Distilleries' },
              { label: 'Bio-Fertilizers' },
              { label: 'Food & More' },
            ].map((item) => (
              <div key={item.label} className="text-white/90 text-center">
                <p className="text-xs font-medium leading-tight">{item.label}</p>
                {item.sub && <p className="text-[10px] text-white/60">{item.sub}</p>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
