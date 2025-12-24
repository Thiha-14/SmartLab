
import React, { useState } from 'react';
import { MOCK_LABS } from '../constants';
import { Plus, MoreVertical, Edit2, Trash2, MapPin, Layers, Shield, Atom, Activity, X } from 'lucide-react';
import FileUploadProgress from '../components/FileUploadProgress';

const Labs: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [labs, setLabs] = useState(MOCK_LABS);

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <Atom size={16} fill="currentColor" />
            <span>Infrastructure Inventory</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Facility Nodes</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Managing the physical architecture of high-fidelity research environments.</p>
        </div>
        
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-slate-900 text-white px-10 py-5 rounded-2xl flex items-center space-x-3 hover:bg-blue-600 transition-all shadow-2xl font-black uppercase tracking-widest text-[11px] active:scale-95 group"
        >
          <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
          <span>Initialize Node</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {labs.map((lab) => (
          <div key={lab.id} className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden group hover:border-blue-400 hover:shadow-2xl transition-all duration-700 relative flex flex-col">
            <div className="h-64 relative overflow-hidden">
              <img src={lab.media[0]?.url} alt={lab.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-100 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-8 left-8 px-4 py-2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-sm">
                {lab.id}
              </div>

              <div className="absolute top-8 right-8">
                <button className="p-3 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <MoreVertical size={18} />
                </button>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-slate-900">
                <div className="flex items-center space-x-2 text-sm font-black tracking-tight bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <MapPin size={14} className="text-blue-600" />
                  <span>{lab.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-black text-blue-600 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>
            </div>

            <div className="p-10 space-y-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                <Shield size={14} />
                <span>Encrypted Asset</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{lab.name}</h3>
              <p className="text-slate-500 text-md leading-relaxed line-clamp-2 font-medium">{lab.description}</p>
              
              <div className="flex flex-wrap gap-2.5 pt-2">
                {lab.features.map((f, i) => (
                  <span key={i} className="px-4 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-black rounded-xl uppercase tracking-widest group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all">
                    {f}
                  </span>
                ))}
              </div>

              <div className="pt-10 mt-auto flex items-center justify-between border-t border-slate-50">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <img key={i} className="w-12 h-12 rounded-2xl border-4 border-white shadow-xl" src={`https://picsum.photos/seed/${lab.id}${i}/48/48`} alt="Personnel" />
                  ))}
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border-4 border-white flex items-center justify-center text-[11px] font-black text-slate-400">+22</div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-4 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">
                    <Edit2 size={20} />
                  </button>
                  <button className="p-4 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* New Unit Provisioning */}
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem] p-12 flex flex-col items-center justify-center space-y-8 group hover:border-blue-400 hover:bg-white hover:shadow-2xl transition-all duration-700 min-h-[500px]"
        >
          <div className="w-24 h-24 rounded-[2rem] bg-white flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-slate-100 shadow-sm">
            <Plus size={40} strokeWidth={4} />
          </div>
          <div className="text-center space-y-3">
            <h4 className="text-2xl font-black text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-tight">Provision Expansion</h4>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest max-w-[200px] leading-relaxed">Synthesize a new research environment node.</p>
          </div>
        </button>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-slate-900/40 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white border border-slate-100 rounded-[4rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative animate-in zoom-in-95 duration-500">
            <div className="p-12 border-b border-slate-50 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-2xl z-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Atom size={24} />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Initialize Node</h3>
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">SmartLab Infrastructure Protocol</p>
                </div>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-900 p-4 bg-slate-100 rounded-3xl transition-all">
                <X size={32} />
              </button>
            </div>
            
            <div className="p-12 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Asset Identity</label>
                  <input type="text" placeholder="SMARTLAB_NODE_X" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-500/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Physical Sector / Location</label>
                  <input type="text" placeholder="SECTOR_G_LVL_02" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-500/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Operational Directive / Description</label>
                <textarea rows={5} placeholder="Define the primary research focus and cluster dependencies..." className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-500/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300 resize-none"></textarea>
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Key Features (Points)</label>
                <input type="text" placeholder="e.g. Bio-Safety LVL3, Vacuum Chamber, Mass Spec" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-500/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Registry Visuals (Images/Videos)</label>
                <div className="bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 overflow-hidden">
                   <FileUploadProgress onComplete={() => console.log('Registry visuals confirmed')} />
                </div>
              </div>

              <div className="flex justify-end space-x-8 pt-12 border-t border-slate-50">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-10 py-5 text-slate-400 font-black uppercase tracking-widest text-[11px] hover:text-slate-900 transition-colors"
                >
                  Discard Proposal
                </button>
                <button 
                  className="px-14 py-5 rounded-3xl bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-2xl active:scale-95"
                >
                  Confirm Provisioning
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Labs;
