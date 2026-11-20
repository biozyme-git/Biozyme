import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { SentIcon } from '@hugeicons/core-free-icons';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { openWhatsAppRFQ } from '../../utils/whatsapp';

const steps = ['Profile', 'Sourcing Details', 'Contact & Specs'];

export default function RFQForm() {
  const [step, setStep] = useState(0);
  const [showErrors, setShowErrors] = useState(false);
  const [formData, setFormData] = useState({
    company: '', name: '', industry: '',
    volume: '', packaging: '', frequency: '', location: '',
    phone: '', email: '', message: '',
  });

  const update = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const validateStep = () => {
    if (step === 0 && (!formData.company.trim() || !formData.name.trim())) return false;
    if (step === 2 && !formData.phone.trim()) return false;
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      setShowErrors(true);
      return;
    }
    openWhatsAppRFQ(formData);
  };

  return (
    <section className="py-20 bg-brand-bg-alt" id="rfq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-brand-amber text-xs font-semibold uppercase tracking-widest mb-2">Quick Procurement Desk</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">Request a Quote</h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">Get a formal GST-compliant quotation with freight breakdown within 24 business hours.</p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i <= step ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                }`}
                animate={{ scale: i === step ? 1.1 : 1 }}
              >
                {i + 1}
              </motion.div>
              <span className={`text-sm hidden sm:inline ${i <= step ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                {s}
              </span>
              {i < steps.length - 1 && <div className="w-8 h-px bg-border hidden sm:block" />}
            </div>
          ))}
        </div>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-5">
                    <div>
                      <Input type="text" placeholder="Company Name *" value={formData.company} onChange={(e) => update('company', e.target.value)} className={showErrors && !formData.company.trim() ? 'border-red-500' : ''} />
                      {showErrors && !formData.company.trim() && <p className="text-red-500 text-xs mt-1">Company name is required</p>}
                    </div>
                    <div>
                      <Input type="text" placeholder="Contact Person / Plant Manager Name *" value={formData.name} onChange={(e) => update('name', e.target.value)} className={showErrors && !formData.name.trim() ? 'border-red-500' : ''} />
                      {showErrors && !formData.name.trim() && <p className="text-red-500 text-xs mt-1">Contact person name is required</p>}
                    </div>
                    <select value={formData.industry} onChange={(e) => update('industry', e.target.value)}
                      className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none">
                      <option value="">Industry Segment</option>
                      <option>Aquaculture</option><option>Cattle Feed</option><option>Distillery & Ethanol</option>
                      <option>Foundry</option><option>Yeast</option><option>Agriculture</option><option>Export</option><option>Other</option>
                    </select>
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-5">
                    <Input type="text" placeholder="Required Volume (MT)" value={formData.volume} onChange={(e) => update('volume', e.target.value)} />
                    <select value={formData.packaging} onChange={(e) => update('packaging', e.target.value)}
                      className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none">
                      <option value="">Packaging Type</option>
                      <option>Bulk Road Tanker (20–50 MT)</option><option>Export Flexitank (20–24 MT)</option>
                      <option>1000L IBC Tote</option><option>200L HDPE/Steel Drums</option>
                    </select>
                    <select value={formData.frequency} onChange={(e) => update('frequency', e.target.value)}
                      className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none">
                      <option value="">Frequency</option>
                      <option>One-time</option><option>Monthly</option><option>Annual Contract</option>
                    </select>
                    <Input type="text" placeholder="Delivery PIN Code / Destination Port" value={formData.location} onChange={(e) => update('location', e.target.value)} />
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-5">
                    <div>
                      <Input type="tel" placeholder="Phone / WhatsApp Number *" value={formData.phone} onChange={(e) => update('phone', e.target.value)} className={showErrors && !formData.phone.trim() ? 'border-red-500' : ''} />
                      {showErrors && !formData.phone.trim() && <p className="text-red-500 text-xs mt-1">Phone number is required</p>}
                    </div>
                    <Input type="email" placeholder="Business Email" value={formData.email} onChange={(e) => update('email', e.target.value)} />
                    <Textarea placeholder="Additional requirements (coupler size, pump availability, etc.)" rows="3" value={formData.message} onChange={(e) => update('message', e.target.value)} />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                {step > 0 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
                )}
                <div className="ml-auto">
                  {step < 2 ? (
                    <Button type="button" onClick={handleNext}>Next Step</Button>
                  ) : (
                    <Button type="submit" className="bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white">
                      <HugeiconsIcon icon={SentIcon} size={16} className="mr-2" /> Send via WhatsApp
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
