import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Eye, 
  Flag, 
  History, 
  Wrench, 
  Cpu, 
  Zap, 
  Box, 
  Settings, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Printer, 
  Container 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About V Packs - Industrial Packaging & Automation Experts</title>
        <meta name="description" content="Established in 2017 in Madurai, Tamil Nadu, V Packs specializes in industrial packaging machinery, PLC programming, custom automation, and expert repair services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-48 px-gutter overflow-hidden bg-surface-bright">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpqMBrKRZvr99H9brZWpHMRQeElVeFFd1HVmbNIxOSA-4I0_BLLaMT_22dhza3UKjfRZsPN_KmFBPYRJ-N8EZjXXgkUquPhOmkjUQwaCwfsjSXrg-YimAdFLNxy_o2ntQWCBzQfsDyO2rcLeBKBHmJx0SUARzYO3cpuiRzVw8m2Ql0R3tw1fV1ip8VsJ_pT0Nn7IFpyFVOwhUjRk4QUSixRf2TzxOOQ1QQ4kt5qes2JNX_VwI9y0bzFsHtAAHKyYGedXT7LldSRW8" 
            alt="Industrial Automation Background"
            className="w-full h-full object-cover opacity-[0.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-bright via-surface-bright/90 to-transparent" />
        </div>

        <div className="max-w-container-max mx-auto relative z-10">
          <motion.div 
            className="max-w-3xl space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold font-mono uppercase tracking-wider rounded-full">
              <Calendar className="w-3.5 h-3.5" /> Established Since 2017
            </div>
            <h1 className="text-display-lg text-primary leading-tight">
              Pioneering Industrial <br />
              <span className="font-extrabold text-secondary">Packaging & Automation</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              From Madurai, Tamil Nadu, V Packs has built a reputation for engineering superior, heavy-duty industrial machinery. We bridge the gap between heavy hardware reliability and intelligent digital logic, empowering manufacturing facilities across the region with high-precision automation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                Explore Our Products
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                Contact Our Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Legacy & History Block */}
      <section className="py-24 bg-white border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold font-mono text-secondary uppercase tracking-widest">Our Roots</span>
                <h2 className="text-4xl font-extrabold text-primary leading-tight">V Packs Madurai Heritage</h2>
              </div>
              
              <div className="text-on-surface-variant leading-relaxed space-y-6">
                <p>
                  Established in **2017 in Madurai, Tamil Nadu**, V Packs specializes in the manufacturing, wholesale, and expert servicing of industrial packaging machinery. Guided by a relentless focus on robustness and client trust, we supply critical infrastructure that keeps production lines active, safe, and efficient.
                </p>
                <p>
                  Whether delivering a stand-alone date printer, engineering heavy pouch-packing machines, or programming advanced PLC automation arrays, V Packs is dedicated to absolute operational integrity. We serve as a trusted, full-cycle technical partner to hundreds of business owners.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">Madurai Headquarters</h4>
                    <p className="text-xs text-on-surface-variant/80">Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">ISO Standard Quality</h4>
                    <p className="text-xs text-on-surface-variant/80">Rigorous Testing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0JvV67JnJduCmetA2S_kH7TH9qybhAgpy6I5oiq9wtBsF-2RWeRAQL2WRxfil-_B0KVlAPKNgG-8hcUENDdb3XsjG1YwrWpKSSgDsp5StrSi4ylq-DFK99QZXtrQ-Pbwt7Fg4lpQoSzpmghL2iqxO7iV3DgT_GnhaS273nvluUFpwieNx8o8fvSaZH5scrjWOvlXI34Qf2857tBV41aJJB4vSnu-V8_iV2A_L9xSh0BJ9I66q9E0ky6m1LMwzx_oVhy1LL9_Pa-0" 
                alt="Madurai V Packs precision machinery engineering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Specialties & Products Grid */}
      <section className="py-24 bg-surface-bright border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold font-mono text-secondary uppercase tracking-widest">Our Catalog</span>
            <h2 className="text-4xl font-extrabold text-primary">Specialized Machinery Offerings</h2>
            <p className="text-on-surface-variant">We manufacture, wholesale, and distribute high-grade packaging equipment engineered for heavy operational cycles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpecialtyCard 
              icon={<Cpu className="w-6 h-6 text-white" />}
              title="Pouch Packing Machines"
              desc="High-performance automated systems designed for vertical form-fill-seal packaging of powders, liquids, and granular items."
            />
            <SpecialtyCard 
              icon={<Box className="w-6 h-6 text-white" />}
              title="Strapping Machines"
              desc="Automatic and semi-automatic high-tension strapping tools built to bundle and secure cartons, crates, and heavy pallets."
            />
            <SpecialtyCard 
              icon={<CheckCircle2 className="w-6 h-6 text-white" />}
              title="Sealing Machines"
              desc="Continuous band sealers, pneumatic sealers, and impulse heat systems providing airtight, high-strength joins."
            />
            <SpecialtyCard 
              icon={<Container className="w-6 h-6 text-white" />}
              title="Industrial Conveyors"
              desc="Modular conveyor belts, gravity rollers, and assembly transmission lines designed to route items between steps."
            />
            <SpecialtyCard 
              icon={<Printer className="w-6 h-6 text-white" />}
              title="Date Printers & Coding"
              desc="Continuous inkjet, thermal transfer, and laser printers for high-definition batch coding and expiry date stamps."
            />
            <SpecialtyCard 
              icon={<Settings className="w-6 h-6 text-white" />}
              title="Custom Industrial Automation"
              desc="Individually tailored pick-and-place systems, sorting arms, and synchronized sensors built for your specific workflow."
            />
          </div>
        </div>
      </section>

      {/* Elite End-to-End Technical Services */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold font-mono text-secondary uppercase tracking-widest">Expert Services</span>
            <h2 className="text-4xl font-extrabold text-primary">Comprehensive Technical Expertise</h2>
            <p className="text-on-surface-variant">V Packs provides full support to ensure minimal downtime and maximum operational efficiency for your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceListItem 
              icon={<Wrench className="w-5 h-5 text-secondary" />}
              title="Machinery Repair & Servicing"
              desc="Proactive maintenance and immediate repair support. Our experienced field engineers quickly identify machinery faults and replace worn components using original industrial-grade spare parts."
            />
            <ServiceListItem 
              icon={<Settings className="w-5 h-5 text-secondary" />}
              title="Customized Machine Manufacturing"
              desc="Have specialized dimensions or material shapes? We design and manufacture completely tailored machinery suited for unique pouch profiles, unusual weights, or extreme heat requirements."
            />
            <ServiceListItem 
              icon={<Cpu className="w-5 h-5 text-secondary" />}
              title="PLC Programming & Industrial Logic"
              desc="We integrate robust logic controls (Siemens, Delta, Omron) to orchestrate complex machinery sequences, improve timing, and synchronize multiple machines into a smart production line."
            />
            <ServiceListItem 
              icon={<Zap className="w-5 h-5 text-secondary" />}
              title="Industrial Electrical Work"
              desc="Design, installation, and logic-wiring of professional industrial control panels, heavy-duty motor starters, power transmission cabling, and safety emergency-stop circuits."
            />
            <ServiceListItem 
              icon={<Box className="w-5 h-5 text-secondary" />}
              title="Packaging Material & Consumables"
              desc="Direct wholesale supply of high-grade roll films, high-durability strapping bands, specialized coding ribbons, nozzles, inks, and sealing elements to fuel continuous plant operation."
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-surface-bright border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl border border-outline-variant/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-105" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                To stand as the absolute benchmark in smart industrial automation across India, empowering local and national manufacturing businesses to reach global efficiency standards through durable, precision-engineered solutions.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-outline-variant/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-105" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <Flag className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                We are dedicated to building uncompromising industrial machinery and delivering reliable, expert repair services. By fusing robust mechanical fabrication with cutting-edge electronics, we maximize uptime for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-20 space-y-4">
            <div className="flex justify-center mb-2">
              <History className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-extrabold text-primary">Our Growth Story</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-sm italic">Celebrating years of hard work, engineering mastery, and successful partnerships.</p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-outline-variant/30 hidden md:block" />
            
            <div className="space-y-16">
              <TimelineItem 
                year="2017"
                title="Founding in Madurai"
                description="Launched V Packs in Madurai, Tamil Nadu, focusing on wholesale distribution and maintenance services of primary sealing and strapping machines."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAGlbhOJ4lJKCTxyTznQ-TfhCtq_33nCCectZU787v8RFm5L1lqhBixvj-imrN_x48ehikHzdz_xtmHQ6LRBVf89YO7ryx8pvto7DT1XgEIp7XHD5tOXmCcaFLHTtMgABxJSpphRh8euppSkLooUCIUzlywyKaTAeFj-e3hIspz2tnANljyAIbJfTSQ7NGCUQhllH2I5vE-sBmUdfELxbS4DIT52KytRQxFu6C5sX7yBGZq8g5JW643PaRIm04dBykBgdQSdD4BWN0"
                side="left"
              />
              <TimelineItem 
                year="2020"
                title="Automation & PLC Integration"
                description="Officially integrated smart PLC programming and complete industrial electrical works into our specialized solutions, creating modern packaging lines."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAYRYWlFeF-AI77LRSSrpoNbJDNYyBdPvITt0teV4yWYpYzyM9iD8o0F-s8XkYPU6E-DcRLqeiHqI60HS4wzEBmbiI5oPXjMiZrbd2pZ3y7K8Mjed6yiuVjPn48DEooghLMrB3HA0feHrToy__PFAYYlcvm4WvGI_5vc1-2sZX6JAP5c-wfCnXEeEsfPYLWT_bHNIWhatS32iECDOPDxVU0r0EaJgyibfcbGCSifIQNIal4uabybihzeZIqFN341sgoq7g-0mSjKl4"
                side="right"
              />
              <TimelineItem 
                year="Present"
                title="Premier Machinery Partner"
                description="Now the primary destination for custom-engineered machinery, industrial servicing, control logic, and high-performance packaging supplies in Tamil Nadu."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDpqMBrKRZvr99H9brZWpHMRQeElVeFFd1HVmbNIxOSA-4I0_BLLaMT_22dhza3UKjfRZsPN_KmFBPYRJ-N8EZjXXgkUquPhOmkjUQwaCwfsjSXrg-YimAdFLNxy_o2ntQWCBzQfsDyO2rcLeBKBHmJx0SUARzYO3cpuiRzVw8m2Ql0R3tw1fV1ip8VsJ_pT0Nn7IFpyFVOwhUjRk4QUSixRf2TzxOOQ1QQ4kt5qes2JNX_VwI9y0bzFsHtAAHKyYGedXT7LldSRW8"
                side="left"
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function SpecialtyCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-outline-variant/20 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-sm text-on-surface-variant/80 leading-relaxed flex-grow">{desc}</p>
    </div>
  );
}

function ServiceListItem({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 p-6 rounded-2xl bg-surface-bright/50 border border-outline-variant/10 hover:bg-surface-bright transition-colors">
      <div className="w-10 h-10 rounded-xl bg-white border border-outline-variant/20 flex items-center justify-center flex-shrink-0 shadow-sm">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-primary">{title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, description, image, side }: any) {
  const isLeft = side === 'left';
  
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      <div className={`md:w-1/2 ${isLeft ? 'md:text-right' : 'md:text-left'} space-y-4`}>
        <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-mono font-bold rounded-full text-xs">{year}</span>
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className={`text-sm text-on-surface-variant max-w-md mx-auto ${isLeft ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} leading-relaxed`}>{description}</p>
      </div>

      {/* Circle on line */}
      <div className="relative hidden md:flex items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full bg-secondary border-4 border-surface-bright" />
      </div>

      <div className="md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30 h-56 w-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
