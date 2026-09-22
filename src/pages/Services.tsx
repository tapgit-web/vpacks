import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Settings2, Wrench, Package, ArrowRight, Headphones } from 'lucide-react';
import { PageHero, CallToAction } from '../components/Industrial';
const services = [
  { icon: Settings2, title: 'Custom Machine Design', text: 'Packaging machinery tailored to your product, available space and production requirements.', image: '/custom-machine.png' },
  { icon: Wrench, title: 'Maintenance & Repair', text: 'Keep your machines running with practical fault diagnosis, repair and preventive maintenance.', image: '/images/generated/services-maintenance.png' },
  { icon: Package, title: 'Spares & Consumables', text: 'Packaging materials, strapping bands, coding ribbons and machine consumables for your daily operation.', image: '/products/STRAPPINGTOOL/BatteryPoweredST.jpg' },
  { icon: Headphones, title: 'Technical Support', text: 'Talk to people who understand your machinery, from choosing equipment to troubleshooting.', image: '/products/sasm.png' },
];
export default function Services() {
  return <><Helmet><title>Our Services | V Packs</title></Helmet><PageHero variant="services" title="Our Services" description="Complete support for your packaging journey."/><section className="shell services-grid">{services.map(({icon:Icon,title,text,image},i)=><article className={title === "Maintenance & Repair" ? "service-tile service-tile--maintenance" : "service-tile"} key={title}><div><span className="service-icon"><Icon size={25}/></span><span className="service-index">0{i+1}</span><h2>{title}</h2><p>{text}</p><Link to={`/contact?service=${encodeURIComponent(title)}`} className="text-action">Talk to our team <ArrowRight size={15}/></Link></div><img src={image} alt={title} loading="lazy"/></article>)}</section><CallToAction/></>;
}
