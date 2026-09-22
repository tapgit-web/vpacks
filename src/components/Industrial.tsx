import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, Wrench } from 'lucide-react';

type HeroVariant = 'about' | 'products' | 'services' | 'contact';
const heroContent = {
  about: { image: 'about-hero', eyebrow: 'THE PEOPLE BEHIND THE PRECISION', label: 'Engineering with purpose.', detail: 'From Madurai. For your next chapter.' },
  products: { image: 'products-hero', eyebrow: 'FIND YOUR PRODUCTION ADVANTAGE', label: 'Precision in every detail.', detail: 'Filling · Sealing · Strapping · Wrapping' },
  services: { image: 'services-maintenance', eyebrow: 'EXPERT HANDS. DEPENDABLE SUPPORT.', label: 'Your uptime is our priority.', detail: 'Maintenance, repairs & technical expertise' },
  contact: { image: 'contact-hero', eyebrow: 'GREAT SOLUTIONS START WITH A CONVERSATION', label: 'Let’s work on what’s next.', detail: 'Your product. Your process. Our expertise.' },
};
export function PageHero({ title, description, variant }: { title: string; description: string; variant: HeroVariant }) {
  const content = heroContent[variant];
  return <section className={`page-hero page-hero--${variant}`}>
    <div className="page-hero-visual"><img src={`/images/generated/${content.image}.png`} alt="" fetchPriority="high" /></div>
    <div className="shell page-hero-content"><span className="eyebrow">{content.eyebrow}</span><h1>{title}</h1><p>{description}</p>
      {variant === 'about' && <div className="hero-detail"><MapPin size={16} /> Madurai, Tamil Nadu <span>EST. 2017</span></div>}
      {variant === 'products' && <a className="action action-red" href="#catalog">Explore the range <ArrowRight size={17} /></a>}
      {variant === 'services' && <Link className="action action-red" to="/contact?service=Maintenance%20%26%20Repair">Talk to a service expert <ArrowRight size={17} /></Link>}
      {variant === 'contact' && <a className="text-action" href="tel:+917871444915">Call +91 78714 44915 <ArrowRight size={17} /></a>}
    </div>
    <div className="hero-image-caption">{variant === 'services' ? <Wrench size={19} /> : <ShieldCheck size={19} />}<div><strong>{content.label}</strong><span>{content.detail}</span></div></div>
  </section>;
}
export function CallToAction() {
  return <section className="cta-band"><div className="shell"><div><span className="eyebrow">LET’S BUILD SOMETHING BETTER</span><h2>Your next packaging solution<br />starts here.</h2><p>Talk to our team about the right machine for your business.</p></div><Link className="action action-white" to="/contact">Enquire now <ArrowRight size={18} /></Link></div></section>;
}
