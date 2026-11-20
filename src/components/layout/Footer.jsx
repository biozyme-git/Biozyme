import { Link } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, TelephoneIcon, Mail01Icon, BookOpen01Icon, Camera01Icon } from '@hugeicons/core-free-icons';
import { navLinks } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-white text-sm">
              <HugeiconsIcon icon={Location01Icon} size={16} className="flex-shrink-0" />
              <span>328 E ward wadkar lane kasba bawda kolhapur 416016</span>
            </div>
            <div className="flex items-center gap-4 text-white text-sm">
              <a href="tel:+919421105300" className="hover:text-brand-amber-light transition-colors"><HugeiconsIcon icon={TelephoneIcon} size={16} /></a>
              <a href="mailto:sales@biozymemolasses.com" className="hover:text-brand-amber-light transition-colors"><HugeiconsIcon icon={Mail01Icon} size={16} /></a>
              <HugeiconsIcon icon={BookOpen01Icon} size={16} className="opacity-70" />
              <HugeiconsIcon icon={Camera01Icon} size={16} className="opacity-70" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold mb-2">BIOZYME</h3>
            <p className="text-xs tracking-widest uppercase text-white/60 mb-4">Trading Company</p>
            <p className="text-white/70 text-sm leading-relaxed">Quality Products &bull; Trusted Partner</p>
            <p className="text-white/60 text-sm mt-3">Premium sugarcane molasses supplier & exporter from Kolhapur, Maharashtra.</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-brand-amber transition-colors text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p><span className="text-white/90 font-medium">Address:</span><br />Grenadiers Building, Post Office Chowk,<br />Kolhapur – 416006, Maharashtra, India</p>
              <p><span className="text-white/90 font-medium">Phone:</span><br />+91-9421105300 (Marketing)<br />+91-7507504141 (CEO)<br />+91-9158177171 (Logistics)</p>
              <p><span className="text-white/90 font-medium">Email:</span><br />sales@biozymemolasses.com<br />biozymesales@gmail.com</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-heading font-semibold text-lg mb-4">Business Hours</h4>
            <p className="text-white/70 text-sm">Monday – Saturday<br />9:00 AM – 7:00 PM IST</p>
            <div className="mt-6">
              <p className="text-white/90 font-medium text-sm mb-2">Credentials</p>
              <p className="text-white/60 text-sm">M-III License Holder<br />(State Excise Dept., Govt. of Maharashtra)</p>
              <p className="text-white/60 text-sm mt-1">100% GST Compliant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/50 text-sm">&copy; 2026 Biozyme Trading Company. All Rights Reserved.</p>
          <p className="text-white/40 text-xs">Sugarcane molasses is supplied strictly for approved commercial, industrial, agricultural, and export applications.</p>
        </div>
      </div>
    </footer>
  );
}
