
import React, { useState } from 'react';
import { MOCK_EQUIPMENT } from '../constants';
import { HardDrive, Plus, Search, Calendar, BadgeCheck, Activity, Settings2, Trash2, Edit2, X, FlaskConical } from 'lucide-react';

const Equipment: React.FC = () => {
  const [equipment, setEquipment] = useState(MOCK_EQUIPMENT);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <HardDrive size={16} fill="currentColor" />
            <span>Asset Governance</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Equipment Master</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Centralized registry of critical research hardware, procurement logs and calibration cycles.</p>
        </div>
        
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-slate-900 text-white px-10 py-5 rounded-2xl flex items-center space-x-3 hover:bg-blue-600 transition-all shadow-2xl font-black uppercase tracking-widest text-[11px] active:scale-95 group"
        >
          <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
          <span>Provision Hardware</span>
        </button>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/40">
           <div className="flex-1 max-w-lg relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input type="text" placeholder="Query model, serial number or manufacturer..." className="w-full pl-14 pr-6 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-1 focus:ring-blue-500/20 outline-none text-xs font-bold shadow-sm" />
           </div>
           <button className="p-3.5 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 transition-all shadow-sm">
             <Settings2 size={20} />
           </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Asset Identity</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Procurement</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Calibration Phase</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Cycle Frequency</th>
                <th className="px-10 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {equipment.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-10 py-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 shadow-xl group-hover:scale-110 transition-transform">
                        <HardDrive size={24} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-black text-slate-900 tracking-tight uppercase">{item.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 tracking-widest">{item.manufacturer} • {item.model}</p>
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest px-2 py-1 bg-slate-50 rounded-lg">SN: {item.serialNumber}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <Calendar size={12} />
                        <span>{item.procurementDate}</span>
                      </div>
                      <p className="text-xs font-bold text-slate-600">INV: {item.invoiceNumber}</p>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-[10px] font-black text-blue-600 uppercase tracking-widest">
                        <BadgeCheck size={12} />
                        <span>Last: {item.lastCalibrationDate}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <Activity size={12} />
                        <span>Next: {item.nextCalibrationDate}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <span className="px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-black rounded-xl uppercase tracking-widest">{item.calibrationFrequency}</span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-3 text-slate-300 hover:text-slate-900 hover:bg-white rounded-xl transition-all shadow-sm"><Edit2 size={18} /></button>
                      <button className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all shadow-sm"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Equipment Provisioning Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white border border-slate-100 rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-500">
            <div className="p-12 border-b border-slate-50 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-2xl z-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <HardDrive size={24} />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Hardware Provision</h3>
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">Asset Registry Protocol</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAddModal(false)} 
                className="text-slate-400 hover:text-slate-900 p-4 bg-slate-100 rounded-3xl transition-all"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Equipment Name</label>
                <input type="text" placeholder="e.g. Mass Spectrometer Ultra" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Manufacturer</label>
                <input type="text" placeholder="e.g. Thermo Fisher" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Model Number</label>
                <input type="text" placeholder="e.g. Q-Exactive-Plus" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Serial Number</label>
                <input type="text" placeholder="e.g. SN-8829-QX-01" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
              </div>
              
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Procurement Date</label>
                <div className="relative group">
                  <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                  <input type="date" className="w-full pl-16 pr-7 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Invoice Number</label>
                <input type="text" placeholder="e.g. INV-2023-991" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
              </div>

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Calibration</label>
                  <input type="date" className="w-full px-7 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Next Calibration</label>
                  <input type="date" className="w-full px-7 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Frequency</label>
                  <select className="w-full px-7 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold appearance-none">
                    <option value="Weekly">Weekly Cycle</option>
                    <option value="Monthly">Monthly Cycle</option>
                    <option value="Quarterly">Quarterly Cycle</option>
                    <option value="Yearly">Yearly Cycle</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-12 bg-slate-50 border-t border-slate-100 flex justify-end space-x-8">
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-10 py-5 text-slate-400 font-black uppercase tracking-widest text-[11px] hover:text-slate-900 transition-colors"
              >
                Cancel Protocol
              </button>
              <button 
                className="px-14 py-5 rounded-3xl bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-2xl active:scale-95"
              >
                Provision Hardware
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Equipment;
