import React, { useState, useRef, useEffect } from 'react';

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Select a service...');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    'Web Ecosystems',
    'AI Integration',
    'Mobile Experience',
    'Cloud Infrastructure',
    'Strategic Consulting'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto bg-surface-container-lowest rounded-[3rem] shadow-sm mb-32 border border-outline-variant/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-bold tracking-tight mb-8">Let's build <br />the future.</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-md">Our studio is located in the vibrant coastal hub of South India, ready to forge your vision into reality.</p>
          
          <div className="space-y-16">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <h5 className="text-sm font-label uppercase tracking-widest text-primary mb-2">Headquarters</h5>
                <p className="text-lg font-medium leading-tight text-on-surface">Cuddalore</p>
                <p className="text-on-surface-variant">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="text-sm font-label uppercase tracking-widest text-primary">Connect Directly</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="mailto:hello@catom.dev" className="group flex flex-col gap-1 p-6 rounded-3xl bg-surface-container-low hover:bg-primary/5 transition-all border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary mb-3 group-hover:scale-110 transition-transform">mail</span>
                  <span className="text-base font-semibold">Email Us</span>
                  <span className="text-sm text-on-surface-variant">hello@catom.dev</span>
                </a>
                <a href="tel:+918122334455" className="group flex flex-col gap-1 p-6 rounded-3xl bg-surface-container-low hover:bg-primary/5 transition-all border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary mb-3 group-hover:scale-110 transition-transform">call</span>
                  <span className="text-base font-semibold">Call Us</span>
                  <span className="text-sm text-on-surface-variant">+91 81223 34455</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low p-10 rounded-3xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 ml-1">Name</label>
                <input 
                  className="w-full px-5 py-4 bg-surface-container-lowest rounded-xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 ml-1">Email</label>
                <input 
                  className="w-full px-5 py-4 bg-surface-container-lowest rounded-xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="hello@catom.dev" 
                  type="email" 
                />
              </div>
            </div>
            <div ref={dropdownRef}>
              <label className="block text-sm font-medium mb-2 ml-1">Project Intent</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className={`w-full px-5 py-4 bg-surface-container-lowest rounded-xl text-left transition-all flex justify-between items-center group ${isOpen ? 'ring-2 ring-primary/20' : ''}`}
                >
                  <span className={`${selectedService === 'Select a service...' ? 'text-on-surface-variant/50' : 'text-on-surface font-medium'}`}>
                    {selectedService}
                  </span>
                  <span className={`material-symbols-outlined transition-transform duration-300 text-on-surface-variant group-hover:text-primary ${isOpen ? 'rotate-180 text-primary' : ''}`}>
                    expand_more
                  </span>
                </button>
                
                {isOpen && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden z-[100] border border-outline-variant/10 animate-in fade-in slide-in-from-top-2 duration-200">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          setSelectedService(service);
                          setIsOpen(false);
                        }}
                        className="w-full px-5 py-4 text-left hover:bg-primary/5 transition-colors text-on-surface font-medium border-b last:border-none border-outline-variant/5 hover:text-primary"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 ml-1">Message</label>
              <textarea 
                className="w-full px-5 py-4 bg-surface-container-lowest rounded-xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                placeholder="Tell us about your vision..." 
                rows={4} 
              ></textarea>
            </div>
            <button 
              className="w-full py-5 hero-gradient text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform" 
              type="submit"
            >
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
