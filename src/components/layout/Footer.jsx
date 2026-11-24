import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(ellipse_at_center,_var(--color-brand-green-light)_0%,_var(--color-brand-green)_50%,_var(--color-brand-green-dark)_100%)] text-white">
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
              <p>
                <span className="text-white/90 font-medium">Address:</span><br />
                <a
                  href="https://maps.google.com/?q=Grenadiers+Building,+Post+Office+Chowk,+Kolhapur+416006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-amber-light hover:underline transition-colors"
                >
                  Grenadiers Building, Post Office Chowk,<br />Kolhapur – 416006, Maharashtra, India
                </a>
              </p>
              <p>
                <span className="text-white/90 font-medium">Phone:</span><br />
                <a href="tel:+919421105300" className="hover:text-brand-amber-light hover:underline transition-colors block">+91-9421105300 (Marketing)</a>
                <a href="tel:+917507504141" className="hover:text-brand-amber-light hover:underline transition-colors block">+91-7507504141 (CEO)</a>
                <a href="tel:+919158177171" className="hover:text-brand-amber-light hover:underline transition-colors block">+91-9158177171 (Logistics)</a>
              </p>
              <p>
                <span className="text-white/90 font-medium">Email:</span><br />
                <a href="mailto:sales@biozyme.co.in" className="hover:text-brand-amber-light hover:underline transition-colors block">sales@biozyme.co.in</a>
                <a href="mailto:biozymesales@gmail.com" className="hover:text-brand-amber-light hover:underline transition-colors block">biozymesales@gmail.com</a>
              </p>
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
