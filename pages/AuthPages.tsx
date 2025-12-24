
import React, { useState } from 'react';
import { Mail, Lock, IdCard, ArrowRight, ShieldCheck, Languages, Zap, Atom, Hexagon, Fingerprint } from 'lucide-react';

interface AuthPageProps {
  type: 'login' | 'signup' | 'forgot';
  onNavigate: (type: 'login' | 'signup' | 'forgot' | 'dashboard') => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ type, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative selection:bg-blue-600/30">
      
      {/* Narrative Section */}
      <div className="lg:w-1/2 relative flex flex-col justify-between p-16 lg:p-24 overflow-hidden bg-slate-950">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[30s] scale-110 opacity-50 grayscale pointer-events-none mix-blend-overlay"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1532094349884-543bb1191459?auto=format&fit=crop&q=80&w=2000")',
          }}
        />
        
        {/* Abstract Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-blue-950/90"></div>
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center space-x-5 mb-16">
            <div className="w-14 h-14 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-blue-600/40 transform -rotate-12">
              <Atom size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-white">SmartLab</h1>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                <p className="text-[11px] text-slate-500 font-black tracking-[0.5em] uppercase">SYSTEM CORE</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-xl space-y-8 mt-24">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-full w-fit px-6 py-2 mb-10 shadow-2xl">
               <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] flex items-center">
                 <Zap size={14} className="mr-3" fill="currentColor" /> NODE CLUSTER ACTIVE: v5.0.2
               </span>
            </div>
            <h2 className="text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-white">Intelligence</span> for Research Nodes.
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">
              The institutional backbone for hyper-coordinated research environments and secure data logistics.
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-20 flex items-center justify-between">
          <div className="flex items-center space-x-16">
            <div className="space-y-2">
              <p className="text-3xl font-black text-white tracking-tighter">3,200+</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">RESEARCH UNITS</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-black text-white tracking-tighter">100%</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">NODE INTEGRITY</p>
            </div>
          </div>
          <div className="p-4 bg-white/5 rounded-3xl backdrop-blur-md border border-white/5">
            <Fingerprint size={24} className="text-blue-500" />
          </div>
        </div>
      </div>

      {/* Auth Interaction Section */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center p-12 lg:p-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.05),transparent_70%)] opacity-100"></div>
        
        <div className="w-full max-w-lg space-y-12 relative z-10 animate-in fade-in slide-in-from-right-10 duration-1000 delay-200 fill-mode-both">
          <div className="flex justify-between items-center mb-10">
             <button className="flex items-center space-x-3 text-slate-400 text-[11px] font-black uppercase tracking-widest hover:text-slate-900 transition-all bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
              <Languages size={16} />
              <span>TERMINAL / ENGLISH</span>
            </button>
          </div>

          <div className="space-y-3">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
              {type === 'login' && 'Terminal Login'}
              {type === 'signup' && 'Unit Registration'}
              {type === 'forgot' && 'Identity Reset'}
            </h2>
            <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[11px]">
              {type === 'login' && 'Secure Institutional Authentication Cycle'}
              {type === 'signup' && 'Initialize New Operational Personnel Node'}
              {type === 'forgot' && 'Dispatch Recovery Credentials Sequence'}
            </p>
          </div>

          <div className="space-y-8">
            {type === 'signup' && (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Given Name</label>
                  <input type="text" className="w-full px-7 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-200" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Family Alias</label>
                  <input type="text" className="w-full px-7 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-200" />
                </div>
              </div>
            )}

            <div className="space-y-3">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Identifier (Email)</label>
              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={24} />
                <input type="email" placeholder="researcher@smartlab.io" className="w-full pl-16 pr-7 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-200" />
              </div>
            </div>

            {type !== 'forgot' && (
              <div className="space-y-3">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Key (Password)</label>
                  {type === 'login' && (
                    <button onClick={() => onNavigate('forgot')} className="text-[11px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest transition-colors">Recover</button>
                  )}
                </div>
                <div className="relative group">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={24} />
                  <input type="password" placeholder="••••••••" className="w-full pl-16 pr-7 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-200" />
                </div>
              </div>
            )}

            {type === 'signup' && (
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Personnel Token ID</label>
                <div className="relative group">
                  <IdCard className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={24} />
                  <input type="text" placeholder="TOKEN_X992" className="w-full pl-16 pr-7 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-200" />
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-slate-900 text-white font-black py-6 rounded-[2rem] flex items-center justify-center space-x-4 transition-all shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:bg-blue-600 hover:-translate-y-1 active:scale-95 group relative overflow-hidden uppercase tracking-[0.3em] text-[11px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span>{type === 'login' ? 'Initiate Access' : type === 'signup' ? 'Synthesize Identity' : 'Dispatch Protocol'}</span>
            <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-300" />
          </button>

          <div className="text-center pt-6">
            {type === 'login' ? (
              <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">
                Unit not registered? <button onClick={() => onNavigate('signup')} className="text-blue-600 font-black hover:text-blue-800 transition-colors">Request Provisions</button>
              </p>
            ) : (
              <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">
                Existing unit? <button onClick={() => onNavigate('login')} className="text-blue-600 font-black hover:text-blue-800 transition-colors">Terminal Login</button>
              </p>
            )}
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex items-center justify-center space-x-4 text-slate-300">
            <ShieldCheck size={20} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">SmartLab Multi-Layer Shield Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
