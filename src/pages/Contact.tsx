import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, ChevronDown } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us - V Packs</title>
        <meta name="description" content="Get in touch with V Packs. Whether you need technical support or sales inquiry, our team is ready to assist you." />
      </Helmet>

      {/* Hero Header */}
      <section className="pt-32 pb-24 text-center max-w-4xl mx-auto px-gutter space-y-6">
        <motion.h1 
          className="text-display-lg text-primary leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch with V Packs
        </motion.h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Whether you need technical support, are interested in our packaging solutions, or have general inquiries, our team is ready to assist you.
        </p>
      </section>

      <div className="max-w-container-max mx-auto px-gutter pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Info & Map */}
        <div className="lg:col-span-5 space-y-12">
          {/* Contact Methods */}
          <div className="bg-surface-container/30 border border-outline-variant/30 rounded-2xl p-10 space-y-10 shadow-sm">
            <h2 className="text-3xl font-bold text-primary border-b border-outline-variant/10 pb-6">Contact Details</h2>
            
            <div className="space-y-8">
              <ContactInfoItem 
                icon={<MapPin className="w-6 h-6" />}
                label="Address"
                value={["NO-146/19, AHIMSAPURAM 7TH STREET,", "NEW VISALAM, JEEVA STREET, SELLUR,", "MADURAI 33-TAMIL NADU 625002"]}
              />
              <ContactInfoItem 
                icon={<Phone className="w-6 h-6" />}
                label="Phone"
                value={["+91 7871444915", "+91 7904123737"]}
              />
              <ContactInfoItem 
                icon={<Mail className="w-6 h-6" />}
                label="Email"
                value={["vpacks2017@gmail.com", "innovation@vpacks.net"]}
              />
            </div>
          </div>

          {/* Map Image (Stylized) */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-outline-variant/30 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9250611964962!2d78.1237319!3d9.940193299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5b235257bc3%3A0x7b828b27d2e5d21e!2sV%20PACKS!5e0!3m2!1sen!2sin!4v1780307744949!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-outline-variant/30 rounded-2xl p-10 lg:p-16 shadow-2xl space-y-12 h-full">
            <h2 className="text-4xl font-bold text-primary">Send a Message</h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputGroup label="Full Name" placeholder="Jane Doe" type="text" />
                <InputGroup label="Phone Number" placeholder="+91 00000 00000" type="tel" />
              </div>

              <InputGroup label="Email Address" placeholder="jane@company.com" type="email" />

              <div className="space-y-3">
                <label className="label-caps !text-[10px]">Inquiry Type</label>
                <div className="relative group">
                  <select className="w-full bg-surface-container/30 border border-outline-variant/30 rounded-lg px-5 py-4 text-sm font-medium text-primary focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none appearance-none cursor-pointer">
                    <option>Sales Inquiry</option>
                    <option>Technical Support</option>
                    <option>Feedbacks</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant pointer-events-none group-hover:text-secondary transition-colors" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="label-caps !text-[10px]">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full bg-surface-container/30 border border-outline-variant/30 rounded-lg px-5 py-4 text-sm font-medium text-primary focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none resize-none"
                />
              </div>

              <button className="btn-primary w-full md:w-auto px-12 py-5 group shadow-lg shadow-primary/10">
                Send Inquiry <Send className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function ContactInfoItem({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="label-caps !text-[9px] text-on-surface-variant/60 mb-1">{label}</h3>
        {value.map((v: string) => (
          <p key={v} className="text-md font-bold text-primary">{v}</p>
        ))}
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type }: any) {
  return (
    <div className="space-y-3">
      <label className="label-caps !text-[10px]">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-surface-container/30 border border-outline-variant/30 rounded-lg px-5 py-4 text-sm font-medium text-primary focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none"
      />
    </div>
  );
}
