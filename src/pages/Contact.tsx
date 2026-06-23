import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, ChevronDown, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    phoneNumber: '',
    emailAddress: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe40phHp1ofFT6OmIT02XWsYG2i86och4VKjkGaR260_BSOtQ/formResponse';
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('entry.1229668368', formData.fullName);
    urlSearchParams.append('entry.957197724', formData.companyName);
    urlSearchParams.append('entry.236868150', formData.designation);
    urlSearchParams.append('entry.1966890761', formData.phoneNumber);
    urlSearchParams.append('entry.1611258772', formData.emailAddress);
    urlSearchParams.append('entry.2144211961', formData.requirements);

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlSearchParams
      });
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        companyName: '',
        designation: '',
        phoneNumber: '',
        emailAddress: '',
        requirements: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us - V Packs</title>
        <meta name="description" content="Get in touch with V Packs. Whether you need technical support or sales inquiry, our team is ready to assist you." />
      </Helmet>

      {/* Toast Notification */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-medium"
          >
            <CheckCircle className="w-6 h-6" />
            Form submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>

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
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputGroup label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Jane Doe" type="text" />
                <InputGroup label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="Acme Corp" type="text" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputGroup label="Designation" name="designation" value={formData.designation} onChange={handleChange} required placeholder="Manager" type="text" />
                <InputGroup label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder="+91 00000 00000" type="tel" />
              </div>

              <InputGroup label="Email Address" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required placeholder="jane@company.com" type="email" />

              <div className="space-y-3">
                <label className="label-caps !text-[10px]">Requirements</label>
                <textarea 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-surface-container/30 border border-outline-variant/30 rounded-lg px-5 py-4 text-sm font-medium text-primary focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none resize-none"
                />
              </div>

              <button disabled={isSubmitting} type="submit" className="btn-primary w-full md:w-auto px-12 py-5 group shadow-lg shadow-primary/10 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : submitSuccess ? 'Message Sent!' : 'Send Inquiry'} 
                {!isSubmitting && !submitSuccess && <Send className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
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

function InputGroup({ label, placeholder, type, name, value, onChange, required }: any) {
  return (
    <div className="space-y-3">
      <label className="label-caps !text-[10px]">{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-surface-container/30 border border-outline-variant/30 rounded-lg px-5 py-4 text-sm font-medium text-primary focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none"
      />
    </div>
  );
}
