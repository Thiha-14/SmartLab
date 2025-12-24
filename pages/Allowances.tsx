
import React, { useState } from 'react';
import { MOCK_LABS, MOCK_EQUIPMENT } from '../constants';
import { MonitorCheck, Plus, Layers, Edit2, Trash2, UserCheck, CalendarRange, X, HardDrive, Atom } from 'lucide-react';

const Allowances: React.FC = () => {
  const [allowances, setAllowances] = useState([
    { id: 'A1', labId: 'L1', machineId: 'E1', effectiveFrom: '2024-01-01', effectiveTo: '2024-12-31', minUsers: 1, maxUsers: 5 }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <MonitorCheck size={16} fill="currentColor" />
            <span>Usage Policies</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Machine Quotas</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Defining granular operational bounds and personnel limits for high-value nodes.</p>
        </div>
        
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-slate-900 text-white px-10 py-5 rounded-2xl flex items-center space-x-3 hover:bg-blue-600 transition-all shadow-2xl font-black uppercase tracking-widest text-[11px] active:scale-95 group"
        >
          <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
          <span>Set Allowance</span>
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {allowances.map(allowance => {
          const lab = MOCK_LABS.find(l => l.id === allowance.labId);
          const machine = MOCK_EQUIPMENT.find(e => e.id === allowance.machineId);
          return (
            <div key={allowance.id} className="bg-white border border-slate-100 rounded-[3rem] p-12 hover:border-blue-300 transition-all duration-700 shadow-sm relative group overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <MonitorCheck size={200} />
              </div>
              
              <div className="flex items-start justify-between mb-10 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Layers size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{lab?.name}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase">{machine?.name}</h3>
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest">REG_ID: {allowance.id} • STATUS: ENFORCED</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-3 text-slate-300 hover:text-slate-900 hover:bg-slate-50 rounded-2xl transition-all shadow-sm"><Edit2 size={18} /></button>
                  <button className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all shadow-sm"><Trash2 size={18} /></button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <UserCheck size={14} />
                    <span>Personnel Range</span>
                  </div>
                  <div className="flex items-end space-x-4">
                    <div className="space-y-1">
                      <span className="text-[8px] font-black text-slate-300 uppercase">Min</span>
                      <p className="text-2xl font-black text-slate-900">{allowance.minUsers}</p>
                    </div>
                    <div className="h-6 w-px bg-slate-100 mb-1"></div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-black text-slate-300 uppercase">Max</span>
                      <p className="text-2xl font-black text-slate-900">{allowance.maxUsers}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <CalendarRange size={14} />
                    <span>Temporal bounds</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-600">{allowance.effectiveFrom}</p>
                    <p className="text-xs font-bold text-slate-600">to {allowance.effectiveTo}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button 
          onClick={() => setShowAddModal(true)}
          className="border-2 border-dashed border-slate-200 rounded-[3rem] p-12 flex flex-col items-center justify-center space-y-6 group hover:border-blue-400 hover:bg-white transition-all duration-700 min-h-[350px]"
        >
          <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:scale-110 transition-all shadow-sm">
            <Plus size={32} />
          </div>
          <p className="text-xl font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-tight transition-colors">Configure Quota Protocol</p>
        </button>
      </div>

      {/* Quota Configuration Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white border border-slate-100 rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-500">
            <div className="p-12 border-b border-slate-50 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-2xl z-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <MonitorCheck size={24} />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Quota Protocol</h3>
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">SmartLab Machine Allowance</p>
                </div>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-900 p-4 bg-slate-100 rounded-3xl transition-all">
                <X size={28} />
              </button>
            </div>
            
            <div className="p-12 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Lab Facility Selection</label>
                  <div className="relative group">
                    <Atom className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <select className="w-full pl-16 pr-7 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold appearance-none">
                      <option value="">Select Target Lab Node...</option>
                      {MOCK_LABS.map(lab => (
                        <option key={lab.id} value={lab.id}>{lab.name} ({lab.id})</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Machine Unit Selection</label>
                  <div className="relative group">
                    <HardDrive className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <select className="w-full pl-16 pr-7 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold appearance-none">
                      <option value="">Select Hardware Unit...</option>
                      {MOCK_EQUIPMENT.map(eq => (
                        <option key={eq.id} value={eq.id}>{eq.name} - {eq.model}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Allowance Effective From</label>
                  <input type="date" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Allowance Effective To</label>
                  <input type="date" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Minimum Personnel Req.</label>
                  <input type="number" placeholder="1" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Maximum Personnel Cap</label>
                  <input type="number" placeholder="5" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
              </div>

              <div className="flex justify-end space-x-8 pt-12 border-t border-slate-50">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-10 py-5 text-slate-400 font-black uppercase tracking-widest text-[11px] hover:text-slate-900 transition-colors"
                >
                  Discard Policy
                </button>
                <button 
                  className="px-14 py-5 rounded-3xl bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-2xl active:scale-95"
                >
                  Confirm Quota
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Allowances;
