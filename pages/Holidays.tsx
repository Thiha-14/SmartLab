
import React, { useState } from 'react';
import { Palmtree, Plus, Edit2, Trash2, Calendar, Globe, X, Zap } from 'lucide-react';

const Holidays: React.FC = () => {
  const [holidays, setHolidays] = useState([
    { id: 'H1', name: 'New Year Day', date: '2024-01-01', year: 2024 },
    { id: 'H2', name: 'National Lab Day', date: '2024-05-15', year: 2024 },
    { id: 'H3', name: 'Innovation Week', date: '2024-09-20', year: 2024 }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <Palmtree size={16} fill="currentColor" />
            <span>Operational Constraints</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Off Days</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Managing global institutional breaks and public holiday sequences.</p>
        </div>
        
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-slate-900 text-white px-10 py-5 rounded-2xl flex items-center space-x-3 hover:bg-blue-600 transition-all shadow-2xl font-black uppercase tracking-widest text-[11px] active:scale-95 group"
        >
          <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
          <span>Register Off Day</span>
        </button>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm">
        <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center space-x-8">
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">2024 Lifecycle</h3>
            <div className="flex bg-white border border-slate-100 rounded-xl p-1 shadow-sm">
              <button className="px-5 py-2 text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white rounded-lg">All Units</button>
              <button className="px-5 py-2 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Regional</button>
            </div>
          </div>
          <button className="p-3 text-slate-400 hover:text-slate-900 hover:bg-white rounded-2xl border border-transparent hover:border-slate-100 transition-all shadow-sm">
            <Globe size={20} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/80">
              <tr>
                <th className="px-12 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Temporal Designation</th>
                <th className="px-12 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Calendar Hash</th>
                <th className="px-12 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Cycle Year</th>
                <th className="px-12 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Operational Status</th>
                <th className="px-12 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {holidays.map(holiday => (
                <tr key={holiday.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-12 py-8">
                    <div className="flex items-center space-x-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Calendar size={22} />
                      </div>
                      <span className="text-lg font-black text-slate-900 uppercase tracking-tight">{holiday.name}</span>
                    </div>
                  </td>
                  <td className="px-12 py-8 text-sm font-black text-slate-400 font-mono">{holiday.date}</td>
                  <td className="px-12 py-8 text-sm font-black text-slate-500 uppercase tracking-widest">{holiday.year}</td>
                  <td className="px-12 py-8">
                    <span className="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest bg-slate-900 text-white border border-slate-800">SYSTEM_PAUSE</span>
                  </td>
                  <td className="px-12 py-8 text-right">
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

      {/* Off Day Registration Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-slate-900/40 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white border border-slate-100 rounded-[4rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-500">
            <div className="p-12 border-b border-slate-50 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-2xl z-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Palmtree size={24} />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Off Day Registration</h3>
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">Institutional Pause Protocol</p>
                </div>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-900 p-4 bg-slate-100 rounded-3xl transition-all">
                <X size={28} />
              </button>
            </div>
            
            <div className="p-12 space-y-10">
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Event Designation / Name</label>
                <input type="text" placeholder="e.g. National Foundation Day" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Calendar Date</label>
                  <div className="relative group">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input type="date" className="w-full pl-16 pr-7 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Cycle Year</label>
                  <input type="number" placeholder="2024" defaultValue="2024" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
              </div>

              <div className="p-6 bg-blue-50 border border-blue-100 rounded-[2rem] flex items-start space-x-4">
                <div className="p-2 bg-blue-600 rounded-xl text-white">
                  <Zap size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-black text-blue-900 uppercase tracking-tight">System-Wide Propagation</p>
                  <p className="text-[10px] text-blue-700 font-medium leading-relaxed mt-1">This off-day will automatically propagate to all scheduling units and lab nodes upon commitment.</p>
                </div>
              </div>

              <div className="flex justify-end space-x-8 pt-12 border-t border-slate-50">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-10 py-5 text-slate-400 font-black uppercase tracking-widest text-[11px] hover:text-slate-900 transition-colors"
                >
                  Discard Entry
                </button>
                <button 
                  className="px-14 py-5 rounded-3xl bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-xl active:scale-95"
                >
                  Confirm Off Day
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Holidays;
