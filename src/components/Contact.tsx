import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto bg-surface-container-lowest rounded-[3rem] shadow-sm mb-32 border border-outline-variant/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-bold tracking-tight mb-8">Let's build <br />the future.</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-md">Our studios are located in the world's most vibrant tech hubs, ready to forge your vision into reality.</p>
          <div className="space-y-10">
            <div>
              <h5 className="text-sm font-label uppercase tracking-widest text-primary mb-4">London Studio</h5>
              <p className="text-lg font-medium">Kings Cross Tech Quarter</p>
              <p className="text-on-surface-variant">N1C 4AB, London, UK</p>
            </div>
            <div>
              <h5 className="text-sm font-label uppercase tracking-widest text-primary mb-4">San Francisco Studio</h5>
              <p className="text-lg font-medium">SoMa Innovation District</p>
              <p className="text-on-surface-variant">CA 94103, USA</p>
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
            <div>
              <label className="block text-sm font-medium mb-2 ml-1">Project Intent</label>
              <select className="w-full px-5 py-4 bg-surface-container-lowest rounded-xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                <option>Select a service...</option>
                <option>Web Ecosystem</option>
                <option>AI Forge</option>
                <option>Mobile Experience</option>
              </select>
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
