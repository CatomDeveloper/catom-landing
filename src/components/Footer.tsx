import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200/10 bg-slate-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold tracking-tighter text-slate-900">CatomDeveloper</span>
          <p className="text-sm font-body leading-relaxed text-slate-500">
            © {new Date().getFullYear()} CatomDeveloper Systems. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <a className="text-sm font-body text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
          <a className="text-sm font-body text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
          <a className="text-sm font-body text-slate-500 hover:text-slate-900 transition-colors" href="#">Cookies</a>
          <a className="text-sm font-body text-slate-500 hover:text-slate-900 transition-colors" href="#">Security</a>
        </div>
        <div className="flex gap-6">
          <a className="text-slate-500 hover:text-blue-600 transition-colors" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a className="text-slate-500 hover:text-blue-600 transition-colors" href="#">
            <span className="material-symbols-outlined">public</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
