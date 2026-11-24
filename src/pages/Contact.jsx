import { useState } from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, TelephoneIcon, Mail01Icon, Clock01Icon, ShieldCheckIcon, SentIcon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PageTransition from '../components/layout/PageTransition';
import LeadershipCard from '../components/LeadershipCard';
import { teamMembers } from '../data/team';
import { openWhatsAppRFQ } from '../utils/whatsapp';

const contactInfo = [
  { icon: Location01Icon, title: 'Registered Office', lines: ['Grenadiers Building, Post Office Chowk,', 'Kolhapur – 416006, Maharashtra, India'] },
  { icon: TelephoneIcon, title: 'Phone / Sales Desk', lines: ['+91-7507504141 (CEO)', '+91-9158177171 (Logistics)', '+91-9421105300 (Marketing)', '+91-9049596566 (Office)'] },
  { icon: Mail01Icon, title: 'Email', lines: ['sales@biozyme.co.in', 'biozymesales@gmail.com'] },
  { icon: Clock01Icon, title: 'Business Hours', lines: ['Monday – Saturday, 9:00 AM – 7:00 PM IST'] },
  { icon: ShieldCheckIcon, title: 'Compliance', lines: ['M-III License Holder (State Excise Dept., Govt. of Maharashtra)', '100% GST Compliant'] },
];

export default function Contact() {
  const [showErrors, setShowErrors] = useState(false);
  const [formData, setFormData] = useState({
    company: '', name: '', industry: '', volume: '',
    packaging: '', frequency: '', location: '',
    phone: '', email: '', message: '',
  });

  const update = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company.trim() || !formData.name.trim() || !formData.phone.trim()) {
      setShowErrors(true);
      return;
    }
    openWhatsAppRFQ(formData);
  };

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-brand-amber-light text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Get In Touch</motion.p>
          <motion.h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Contact Us
          </motion.h1>
          <motion.p className="text-white/70 text-lg max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Reach our procurement desk for quotations, samples, and partnerships.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-t from-brand-green-dark via-primary to-brand-green-light rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center lg:text-left">Office Details</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                        <HugeiconsIcon icon={item.icon} size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <div className="text-white/80 text-sm mt-1 space-y-0.5">
                          {item.lines.map((line) => <p key={line}>{line}</p>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl overflow-hidden border border-white/20 shadow-lg h-64">
                  <iframe
                    title="Biozyme Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2!2d74.24!3d16.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKolhapur%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center lg:text-left">Request a Quote</h2>
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
                  <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input type="text" placeholder="Company Name *" value={formData.company} onChange={(e) => update('company', e.target.value)} className={showErrors && !formData.company.trim() ? 'border-red-500' : ''} />
                        {showErrors && !formData.company.trim() && <p className="text-red-500 text-xs mt-1">Required</p>}
                      </div>
                      <div>
                        <Input type="text" placeholder="Contact Person *" value={formData.name} onChange={(e) => update('name', e.target.value)} className={showErrors && !formData.name.trim() ? 'border-red-500' : ''} />
                        {showErrors && !formData.name.trim() && <p className="text-red-500 text-xs mt-1">Required</p>}
                      </div>
                    </div>
                    <select value={formData.industry} onChange={(e) => update('industry', e.target.value)}
                      className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none">
                      <option value="">Industry Segment</option>
                      <option>Aquaculture</option><option>Cattle Feed</option><option>Distillery & Ethanol</option>
                      <option>Foundry</option><option>Yeast</option><option>Agriculture</option><option>Export</option><option>Other</option>
                    </select>
                    <div className="grid grid-cols-2 gap-4">
                      <Input type="text" placeholder="Required Volume (MT)" value={formData.volume} onChange={(e) => update('volume', e.target.value)} />
                      <select value={formData.packaging} onChange={(e) => update('packaging', e.target.value)}
                        className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none">
                        <option value="">Packaging Type</option>
                        <option>Bulk Road Tanker</option><option>Flexitank</option><option>IBC Tote</option><option>Drums</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input type="tel" placeholder="Phone / WhatsApp *" value={formData.phone} onChange={(e) => update('phone', e.target.value)} className={showErrors && !formData.phone.trim() ? 'border-red-500' : ''} />
                        {showErrors && !formData.phone.trim() && <p className="text-red-500 text-xs mt-1">Required</p>}
                      </div>
                      <Input type="email" placeholder="Business Email" value={formData.email} onChange={(e) => update('email', e.target.value)} />
                    </div>
                    <Input type="text" placeholder="Delivery PIN Code / Port" value={formData.location} onChange={(e) => update('location', e.target.value)} />
                    <Textarea placeholder="Additional requirements..." rows="3" value={formData.message} onChange={(e) => update('message', e.target.value)} />
                    <Button type="submit" className="w-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white">
                      <HugeiconsIcon icon={SentIcon} size={16} className="mr-2" /> Send Inquiry via WhatsApp
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Formal GST-compliant quotation with freight breakdown within 24 business hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      <section className="py-20 bg-brand-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Direct Lines</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary">Reach Our Team Directly</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <LeadershipCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
