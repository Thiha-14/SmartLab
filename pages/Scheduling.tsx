
import React, { useState } from 'react';
import { MOCK_LABS } from '../constants';
import { Calendar, Clock, ChevronLeft, ChevronRight, Plus, Activity, Cpu, Hexagon } from 'lucide-react';

const Scheduling: React.FC = () => {
  const [view, setView] = useState<'month' | 'week'>('week');
  const [selectedLab, setSelectedLab] = useState(MOCK_LABS[0].id);

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const hours = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <Calendar size={16} fill="currentColor" />
            <span>Temporal Resource Mapping</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Global Schedule</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Synchronizing operational sequences and preventive maintenance cycles across nodes.</p>
        </div>
        
        <div className="flex bg-slate-100 border border-slate-200 rounded-2xl p-1.5 shadow-sm">
          <button 
            onClick={() => setView('week')}
            className={`px-8 py-3 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all ${view === 'week' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Temporal Grid
          </button>
          <button 
            onClick={() => setView('month')}
            className={`px-8 py-3 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all ${view === 'month' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Cycle Sync
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Node Selection Sidebar */}
        <div className="space-y-10">
          <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Facility Node List</h3>
            <div className="space-y-4">
              {MOCK_LABS.map(lab => (
                <button
                  key={lab.id}
                  onClick={() => setSelectedLab(lab.id)}
                  className={`w-full flex items-center space-x-5 p-5 rounded-2xl border transition-all duration-500 text-left ${
                    selectedLab === lab.id 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/20' 
                      : 'bg-slate-50 border-slate-100 text-slate-500 hover:text-slate-900 hover:border-slate-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedLab === lab.id ? 'bg-white/20 text-white' : 'bg-white text-slate-300 border border-slate-100 shadow-sm'}`}>
                    <Cpu size={22} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-base font-black tracking-tight truncate uppercase">{lab.name}</p>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${selectedLab === lab.id ? 'text-white/60' : 'text-slate-400'}`}>{lab.id}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8">Protocol Legend</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 rounded-md bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
                <span className="text-[12px] font-black text-white uppercase tracking-widest">Active Ops</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 rounded-md bg-slate-700"></div>
                <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Maintenance</span>
              </div>
            </div>
            <button className="w-full mt-12 bg-white text-slate-950 font-black uppercase tracking-widest text-[11px] py-5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl">
              Append Sequence
            </button>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="lg:col-span-3 bg-white border border-slate-100 rounded-[3rem] overflow-hidden flex flex-col shadow-sm">
          <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/40">
            <div className="flex items-center space-x-10">
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter">OCTOBER 21 - 27</h4>
              <div className="flex space-x-3">
                <button className="p-3 hover:bg-white rounded-2xl text-slate-400 hover:text-slate-900 transition-all border border-transparent hover:border-slate-200 shadow-sm"><ChevronLeft size={24} /></button>
                <button className="p-3 hover:bg-white rounded-2xl text-slate-400 hover:text-slate-900 transition-all border border-transparent hover:border-slate-200 shadow-sm"><ChevronRight size={24} /></button>
              </div>
            </div>
            <button className="text-[11px] font-black text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors bg-white px-5 py-2.5 rounded-xl border border-blue-50 shadow-sm">Temporal Sync</button>
          </div>

          <div className="grid grid-cols-[120px_1fr] flex-1 overflow-auto divide-x divide-slate-100 min-h-[900px] custom-scrollbar">
            {/* Hour Markers */}
            <div className="bg-slate-50/20">
              <div className="h-20 border-b border-slate-50"></div>
              {hours.map(h => (
                <div key={h} className="h-28 flex items-start justify-center pt-6 border-b border-slate-50">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{h}</span>
                </div>
              ))}
            </div>

            {/* Column Grid */}
            <div className="grid grid-cols-7 divide-x divide-slate-100 bg-white">
              {days.map((d, idx) => (
                <div key={d} className="flex flex-col group/day relative">
                  <div className="h-20 border-b border-slate-50 flex flex-col items-center justify-center bg-slate-50/10 group-hover/day:bg-blue-50/20 transition-colors">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{d}</span>
                    <span className="text-2xl font-black text-slate-900">{21 + idx}</span>
                  </div>
                  <div className="flex-1 relative">
                    {/* Simulated Events */}
                    {idx === 1 && (
                      <div className="absolute top-60 left-3 right-3 h-48 bg-blue-600 rounded-[2rem] p-6 text-white shadow-2xl shadow-blue-600/30 border border-blue-500 z-10 hover:scale-[1.03] transition-transform cursor-pointer overflow-hidden group/card">
                        <div className="absolute -top-6 -right-6 opacity-10 transform rotate-12 group-hover/card:scale-125 transition-transform duration-700">
                          <Hexagon size={80} fill="currentColor" />
                        </div>
                        <p className="text-[9px] font-black uppercase opacity-70 tracking-[0.2em] mb-2">OPERATIONAL_A1</p>
                        <p className="text-sm font-black leading-tight uppercase tracking-tight">Advanced Materials Sync Sequence</p>
                        <div className="absolute bottom-6 left-6 flex items-center space-x-2 opacity-60">
                           <Clock size={12} />
                           <span className="text-[10px] font-black">10:00 - 14:00</span>
                        </div>
                      </div>
                    )}
                    {idx === 4 && (
                      <div className="absolute top-[600px] left-3 right-3 h-36 bg-slate-100 rounded-[2rem] p-6 text-slate-600 border border-slate-200 z-10 hover:border-blue-300 transition-all cursor-pointer shadow-sm group/card">
                        <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2">PREVENT_MAINT</p>
                        <p className="text-sm font-black leading-tight text-slate-900 uppercase">Thermal Array Calibration</p>
                        <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-slate-400">
                           <Activity size={12} />
                           <span className="text-[10px] font-black">NODE_HEALTH_CHECK</span>
                        </div>
                      </div>
                    )}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-28 border-b border-slate-50"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
