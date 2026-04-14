import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-slate-900">CatomDeveloper</div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-blue-600 font-semibold border-b-2 border-blue-600 transition-colors duration-300" href="#">Solutions</a>
          <a className="text-slate-600 font-medium hover:text-blue-500 transition-colors duration-300" href="#">Platform</a>
          <a className="text-slate-600 font-medium hover:text-blue-500 transition-colors duration-300" href="#">Insights</a>
          <a className="text-slate-600 font-medium hover:text-blue-500 transition-colors duration-300" href="#">About</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary-container text-on-primary px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
