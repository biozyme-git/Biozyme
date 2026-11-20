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
      <Card className="hover:shadow-xl transition-shadow text-center h-full">
        <CardContent className="pt-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-brand-green-light flex items-center justify-center text-white text-2xl font-heading font-bold mb-4 mx-auto">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h3 className="text-xl font-heading font-semibold text-primary">{member.name}</h3>
          <p className="text-brand-amber font-medium text-sm mb-3">{member.role}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.responsibility}</p>
          <p className="text-foreground text-sm mb-4">{member.phone}</p>
          <div className="flex gap-2 justify-center">
            <WhatsAppButton number={member.whatsapp} name={member.name} size="sm" />
            <Button asChild size="sm" className="bg-primary hover:bg-brand-green-dark text-white">
              <a href={`tel:${member.phone}`}>
                <HugeiconsIcon icon={TelephoneIcon} size={14} className="mr-1" /> Call
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
