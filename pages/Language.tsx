
import React, { useState } from 'react';
import { Languages, Check, Globe, Zap } from 'lucide-react';

const Language: React.FC = () => {
  const [selected, setSelected] = useState('en');
  
  const langs = [
    { code: 'en', name: 'English', desc: 'Global Institutional Standard', native: 'English' },
    { code: 'ar', name: 'Arabic', desc: 'Regional Dialect Support', native: 'العربية' },
    { code: 'fr', name: 'French', desc: 'European Node Standard', native: 'Français' },
    { code: 'de', name: 'German', desc: 'Industrial Engineering standard', native: 'Deutsch' },
    { code: 'zh', name: 'Chinese', desc: 'Pacific Cluster Support', native: '中文' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <Languages size={16} fill="currentColor" />
            <span>Interface Governance</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Language Settings</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Personalize your terminal experience for global research coordination.</p>
        </div>
        
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center space-x-3">
          <Zap size={18} className="text-blue-600" fill="currentColor" />
          <span className="text-[10px] font-black text-blue-800 uppercase tracking-widest leading-none">Global Sync Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {langs.map(lang => (
          <button
            key={lang.code}
            onClick={() => setSelected(lang.code)}
            className={`p-10 rounded-[3rem] border transition-all duration-700 text-left relative overflow-hidden group ${
              selected === lang.code 
                ? 'bg-white border-blue-400 shadow-2xl shadow-blue-500/10' 
                : 'bg-white border-slate-100 hover:border-slate-300'
            }`}
          >
            {selected === lang.code && (
              <div className="absolute top-8 right-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg animate-in zoom-in duration-300">
                <Check size={18} strokeWidth={3} />
              </div>
            )}
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
              selected === lang.code ? 'bg-blue-600 text-white shadow-xl' : 'bg-slate-50 text-slate-300 group-hover:bg-slate-100'
            }`}>
              <Globe size={28} />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">{lang.name}</h3>
              <p className="text-lg font-medium text-slate-400">{lang.native}</p>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-4 pt-4 border-t border-slate-50">{lang.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="pt-10 flex justify-end">
        <button className="bg-slate-900 text-white px-12 py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-xl active:scale-95">
          Apply Localization Cycle
        </button>
      </div>
    </div>
  );
};

export default Language;
