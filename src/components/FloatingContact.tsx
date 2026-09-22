import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingContact() {
  return (
    <aside className="floating-contact" aria-label="Contact V Packs">
      <div className="floating-contact-actions">
        <a className="floating-contact-whatsapp" href="https://wa.me/917904123737" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp V Packs at +91 79041 23737 (opens in a new tab)">
          <MessageCircle size={34} strokeWidth={2} aria-hidden="true" />
        </a>
        <a className="floating-contact-call" href="tel:+917904123737" aria-label="Call V Packs at +91 79041 23737">
          <Phone size={34} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
