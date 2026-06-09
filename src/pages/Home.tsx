import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Settings, DraftingCompass, Wrench, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Helmet>
        <title>V Packs - Precision Industrial Machinery</title>
        <meta name="description" content="Precision Automation. Customized Packaging Solutions. Elevate your production with cutting-edge technology." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00003c 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="label-caps !text-[10px]">Industrial Grade Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-primary">
              Precision Automation.<br />
              <span className="text-secondary">Customized Packaging Solutions.</span>
            </h1>
            
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Elevate your production with cutting-edge technology. V Packs delivers robust, high-performance packaging machinery engineered for seamless integration and maximum uptime.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary group">
                Explore Machinery <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-outline">
                Technical Specs
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArgZ5ysA5h8eB9ADXibIk5mV_9D4VC3mq_NhzKrt_J-6xvJdsUBwYXV8NdNw8MGl_oPS-_Q4wYFAZyFFME0Aw39PK74etfZ3SlmK5X4RE9ezie-46n8YpktDqPKTMCWSWVUkVex4pen9k_7v527-XaXJ6LPju-wrq_5KkDyVdUeMsrWzBfVrMwsbKM-6gno3H-tYbvXezKOav1867egAvRuv_mupxlijxFzpqR_SHUHawEKZquzrIQ72S3jmGWcK9h1ZcCSGDuaLY" 
                alt="V Packs Industrial Machinery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Achievement Card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-outline-variant shadow-xl max-w-xs"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">High Throughput</h3>
                  <p className="label-caps !text-[9px]">Up to 120 units/min</p>
                </div>
              </div>
              <div className="w-full bg-surface-container rounded-full h-1.5 mb-2 overflow-hidden">
                <motion.div 
                  className="bg-secondary h-full"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </div>
              <p className="text-[11px] text-on-surface-variant">Efficiency metric verified at standard load.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary">Our Expertise</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-surface-bright rounded-2xl border border-outline-variant/30 overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/custom-machine.png" 
                  alt="Custom Machinery"
                  className="w-full h-full object-contain bg-white transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-lg">
                  <DraftingCompass className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Customized Machine</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Tailor-made packaging solutions designed from the ground up to integrate perfectly with your unique production flow and spatial constraints.
                </p>
                <Link to="/products" className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all">
                  DISCOVER SOLUTIONS <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="group relative bg-surface-bright rounded-2xl border border-outline-variant/30 overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/expertise.png" 
                  alt="Service & Maintenance"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white p-3 rounded-lg">
                  <Wrench className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Machine Maintenance & Service</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Comprehensive lifecycle support, preventative maintenance programs, and rapid-response technical service to guarantee maximum operational uptime.
                </p>
                <Link to="/contact" className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all">
                  VIEW SERVICE PLANS <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}

