import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { TelephoneIcon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import WhatsAppButton from './ui/WhatsAppButton';

export default function LeadershipCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <Card className="bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light text-white border-0 shadow-lg hover:shadow-xl transition-shadow text-center h-full">
        <CardContent className="p-6 sm:p-7 h-full flex flex-col justify-center items-center">
          <div className="w-20 h-20 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white text-2xl font-heading font-bold mb-4 mx-auto shadow-inner">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h3 className="text-xl font-heading font-semibold text-white">{member.name}</h3>
          <p className="text-brand-amber-light font-medium text-sm mb-3">{member.role}</p>
          <p className="text-white/80 text-sm leading-relaxed mb-4">{member.responsibility}</p>
          <div className="flex gap-3 justify-center items-center">
            <WhatsAppButton number={member.whatsapp} name={member.name} size="icon" />
            <Button asChild size="icon" className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30">
              <a href={`tel:${member.phone}`} aria-label="Call">
                <HugeiconsIcon icon={TelephoneIcon} size={16} />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
