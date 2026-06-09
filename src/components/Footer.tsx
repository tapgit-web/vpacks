import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <Link to="/" className="inline-flex">
            <img src="/logo-transparent.png" alt="V Packs Logo" className="h-12 w-auto" />
          </Link>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="label-caps text-white/50">Resources</h4>
          <nav className="flex flex-col gap-3 text-sm text-surface-bright/70">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Service Centers</Link>
            <Link to="#" className="hover:text-white transition-colors">Global Network</Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="label-caps text-white/50">Headquarters</h4>
          <div className="space-y-4 text-sm text-surface-bright/70">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>NO-146/19, AHIMSAPURAM 7TH STREET,<br />NEW VISALAM, JEEVA STREET, SELLUR, MADURAI 33-TAMIL NADU 625002</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 7871444915, +91 7904123737</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0" />
              <span>vpacks2017@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-white/10 text-xs text-surface-bright/30 flex justify-between">
        <p>© 2024 V Packs. All rights reserved.</p>
        <p>Industrial Precision Excellence</p>
      </div>
    </footer>
  );
}
