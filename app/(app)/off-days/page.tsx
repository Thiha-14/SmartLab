'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Trash2, ChevronLeft, ChevronRight, X, Check } from 'lucide-react';
// Ensure this points to your types file
import { Holiday } from '@/types'; 

export default function OffDaysPage() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewAllOpen, setViewAllOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = January, 11 = December
  const [currentYear] = useState(2026);
  const [newHoliday, setNewHoliday] = useState({ name: '', date: '', type: 'National' as 'National' | 'Cultural' | 'Weekend' | 'School', description: '' });

  useEffect(() => {
    // Safety check for window object
    if (typeof window !== 'undefined') {
        const saved = JSON.parse(localStorage.getItem('sl_holidays') || '[]');
        setHolidays(saved);
    }
  }, []);

  const saveHolidays = (updated: Holiday[]) => {
    setHolidays(updated);
    localStorage.setItem('sl_holidays', JSON.stringify(updated));
  };

  const handleAdd = () => {
    if (!newHoliday.name || !newHoliday.date) return;
    const item: Holiday = {
      id: Date.now().toString(),
      name: newHoliday.name,
      date: newHoliday.date,
      type: newHoliday.type,
      description: newHoliday.description
    };
    saveHolidays([...holidays, item]);
    setModalOpen(false);
    setNewHoliday({ name: '', date: '', type: 'National', description: '' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Permanently remove this entry?')) {
      saveHolidays(holidays.filter(h => h.id !== id));
    }
  };

  return (
    <div className="space-y-6 md:space-y-10 pb-10 md:pb-20 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">Holiday Registry</h2>
          <p className="text-slate-500 font-bold text-sm md:text-lg">Define operational blackouts and institutional breaks.</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="w-full md:w-auto flex items-center justify-center gap-2 md:gap-3 bg-slate-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl font-black shadow-lg md:shadow-2xl hover:bg-black hover:-translate-y-1 transition-all uppercase tracking-widest text-[10px] md:text-xs"
        >
          <Plus size={18} className="md:w-5 md:h-5" />
          Register Event
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-10">
        <div className="xl:col-span-2 bg-white p-5 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-50 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-0 mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl font-black text-slate-900">{new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - Malaysia</h3>
            <div className="flex gap-2 md:gap-3">
              <button 
                onClick={() => setCurrentMonth(prev => prev === 0 ? 11 : prev - 1)}
                className="p-2 md:p-3 hover:bg-slate-50 border border-slate-100 rounded-xl md:rounded-[18px] text-slate-400 hover:text-slate-900 transition-all shadow-sm"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              <button 
                onClick={() => setCurrentMonth(prev => prev === 11 ? 0 : prev + 1)}
                className="p-2 md:p-3 hover:bg-slate-50 border border-slate-100 rounded-xl md:rounded-[18px] text-slate-400 hover:text-slate-900 transition-all shadow-sm"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500"></div>
              <span className="text-[10px] md:text-xs font-bold text-slate-600">National</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
              <span className="text-[10px] md:text-xs font-bold text-slate-600">Cultural</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-500"></div>
              <span className="text-[10px] md:text-xs font-bold text-slate-600">School</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-400"></div>
              <span className="text-[10px] md:text-xs font-bold text-slate-600">Weekend</span>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 md:gap-6 mb-4 md:mb-8">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="text-center text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.15em] md:tracking-[0.3em]">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 md:gap-6">
            {(() => {
              const firstDay = new Date(currentYear, currentMonth, 1).getDay();
              const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
              const startDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday start
              const cells = [];
              
              // Empty cells before month starts
              for (let i = 0; i < startDay; i++) {
                cells.push(<div key={`empty-${i}`} className="aspect-square"></div>);
              }
              
              // Days of the month
              for (let day = 1; day <= daysInMonth; day++) {
                const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                const found = holidays.find(h => h.date === dateStr);
                
                const getHolidayStyles = () => {
                  if (!found && isWeekend) return 'bg-slate-100 border-slate-200 text-slate-500';
                  if (found?.type === 'National') return 'bg-red-50 border-red-200 text-red-600 shadow-xl shadow-red-500/5';
                  if (found?.type === 'Cultural') return 'bg-green-50 border-green-200 text-green-600 shadow-xl shadow-green-500/5';
                  if (found?.type === 'School') return 'bg-amber-50 border-amber-200 text-amber-600 shadow-xl shadow-amber-500/5';
                  if (found?.type === 'Weekend') return 'bg-blue-50 border-blue-200 text-blue-600 shadow-xl shadow-blue-500/5';
                  return 'bg-white border-slate-50 text-slate-700 hover:border-blue-200 hover:scale-105';
                };
                
                cells.push(
                  <div key={day} className={`aspect-square flex flex-col items-center justify-center rounded-xl md:rounded-[28px] border md:border-2 transition-all group relative cursor-pointer ${getHolidayStyles()}`}>
                    <span className="text-sm md:text-lg font-black">{day}</span>
                    {(found || isWeekend) && (
                      <div className={`absolute top-1 right-1 md:top-2 md:right-2 w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full ring-2 md:ring-4 ring-white shadow-md md:shadow-lg ${
                        found?.type === 'National' ? 'bg-red-500' :
                        found?.type === 'Cultural' ? 'bg-green-500' :
                        found?.type === 'School' ? 'bg-amber-500' :
                        found?.type === 'Weekend' ? 'bg-blue-500' :
                        'bg-slate-400'
                      }`}></div>
                    )}
                    {found && (
                      <div className="absolute inset-x-0 bottom-0 py-1.5 md:py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-b-xl md:rounded-b-[28px]">
                        <span className="text-[7px] md:text-[8px] font-black uppercase truncate px-1 md:px-2 block">{found.name}</span>
                      </div>
                    )}
                  </div>
                );
              }
              
              return cells;
            })()}
          </div>
        </div>

        <div className="bg-white p-5 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-50 shadow-sm">
          <div className="flex justify-between items-center mb-6 md:mb-10 border-b border-slate-50 pb-4 md:pb-6">
            <h3 className="text-lg md:text-xl font-black text-slate-900">Scheduled Events</h3>
            <button
              onClick={() => setViewAllOpen(true)}
              className="text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl hover:bg-blue-50 transition-all"
            >
              View All
            </button>
          </div>
          <div className="space-y-4 md:space-y-6">
            {holidays.length === 0 && (
              <div className="text-center py-8 md:py-10">
                <Calendar size={36} className="md:w-12 md:h-12 mx-auto text-slate-100 mb-3 md:mb-4" />
                <p className="text-slate-300 font-black uppercase tracking-widest text-[10px] md:text-xs">No entries detected</p>
              </div>
            )}
            {holidays.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 3).map((holiday) => (
              <div key={holiday.id} className="group p-4 md:p-6 bg-slate-50/50 rounded-2xl md:rounded-[32px] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl md:hover:shadow-2xl hover:shadow-blue-500/5 transition-all">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <span className={`text-[8px] md:text-[9px] font-black uppercase px-2 md:px-3 py-1 md:py-1.5 rounded-full tracking-widest ${
                    holiday.type === 'National' ? 'bg-red-100 text-red-600' :
                    holiday.type === 'Cultural' ? 'bg-green-100 text-green-600' :
                    holiday.type === 'School' ? 'bg-amber-100 text-amber-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {holiday.type}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                    <button onClick={() => handleDelete(holiday.id)} className="p-2 md:p-2.5 text-slate-300 hover:text-rose-600 bg-white rounded-lg md:rounded-xl shadow-sm"><Trash2 size={14} className="md:w-4 md:h-4" /></button>
                  </div>
                </div>
                <h4 className="font-black text-slate-900 text-base md:text-lg mb-2">{holiday.name}</h4>
                {holiday.description && (
                  <p className="text-[11px] md:text-xs text-slate-500 mb-3 font-medium">{holiday.description}</p>
                )}
                <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold text-slate-400 bg-white/50 w-fit px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl">
                  <Calendar size={14} className="md:w-4 md:h-4 text-blue-500" />
                  {new Date(holiday.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
            {/* Glass Background with white accent */}
            <div className="absolute inset-0 rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
            }} />
            
            <div className="relative z-10 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col">
              {/* Enhanced Header with blue gradient */}
              <div className="relative overflow-hidden p-5 md:p-8 bg-gradient-to-br from-blue-500/80 via-blue-400/60 to-blue-600/70 border-b border-white/30 backdrop-blur-md">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse" />
                
                <div className="relative flex justify-between items-start md:items-center gap-3">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-1 md:mb-3 text-white drop-shadow-lg">
                      Define Event
                    </h2>
                    <div className="text-xs md:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Register institutional holidays
                    </div>
                  </div>
                  <button 
                    onClick={() => setModalOpen(false)} 
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl md:rounded-3xl bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all backdrop-blur-sm group/close"
                  >
                    <X size={22} className="md:w-6 md:h-6 text-white group-hover/close:rotate-90 transition-all" />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 md:p-10 space-y-6 md:space-y-8 overflow-y-auto bg-gradient-to-b from-white/10 via-white/5 to-white/5 backdrop-blur-md">
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Event Label</label>
                    <input
                      type="text"
                      placeholder="e.g. Winter Research Break"
                      className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                      value={newHoliday.name}
                      onChange={e => setNewHoliday({ ...newHoliday, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Event Date</label>
                    <input
                      type="date"
                      className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                      value={newHoliday.date}
                      onChange={e => setNewHoliday({ ...newHoliday, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Description (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Federal public holiday"
                      className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                      value={newHoliday.description}
                      onChange={e => setNewHoliday({ ...newHoliday, description: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Classification</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['National', 'Cultural', 'School', 'Weekend'] as const).map(t => (
                        <button
                          key={t}
                          onClick={() => setNewHoliday({ ...newHoliday, type: t })}
                          className={`py-3 rounded-2xl md:rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${
                            newHoliday.type === t 
                              ? t === 'National' ? 'bg-red-600 text-white shadow-lg' :
                                t === 'Cultural' ? 'bg-green-600 text-white shadow-lg' :
                                t === 'School' ? 'bg-amber-600 text-white shadow-lg' :
                                'bg-blue-600 text-white shadow-lg'
                              : 'bg-white/10 text-white/70 border border-white/20 hover:border-white/40 hover:bg-white/20'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer with Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-t from-white/10 to-transparent border-t border-white/30 backdrop-blur-md shrink-0">
                <button 
                  onClick={() => setModalOpen(false)} 
                  className="order-2 sm:order-1 flex-1 py-3 md:py-4 font-black text-white hover:text-white rounded-2xl md:rounded-3xl transition-all border border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 text-sm md:text-base backdrop-blur-sm group/cancel"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAdd} 
                  className="order-1 sm:order-2 flex-1 py-3 md:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl md:rounded-3xl font-black shadow-xl md:shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm md:text-base group/create backdrop-blur-sm border border-white/50"
                >
                  <Check size={18} className="md:w-5 md:h-5 group-hover/create:rotate-12 transition-transform" /> Finalize Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isViewAllOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-3xl rounded-[48px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-10 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-900">All Holidays</h2>
              <button onClick={() => setViewAllOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-10 overflow-y-auto">
              {holidays.length === 0 ? (
                <div className="text-center py-20">
                  <Calendar size={64} className="mx-auto text-slate-100 mb-6" />
                  <p className="text-slate-300 font-black uppercase tracking-widest text-sm">No holidays scheduled</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {holidays.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((holiday) => (
                    <div key={holiday.id} className="group p-6 bg-slate-50/50 rounded-[32px] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest ${
                          holiday.type === 'National' ? 'bg-red-100 text-red-600' :
                          holiday.type === 'Cultural' ? 'bg-green-100 text-green-600' :
                          holiday.type === 'School' ? 'bg-amber-100 text-amber-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {holiday.type}
                        </span>
                        <button 
                          onClick={() => {
                            handleDelete(holiday.id);
                            if (holidays.length === 1) setViewAllOpen(false);
                          }} 
                          className="p-2.5 text-slate-300 hover:text-rose-600 bg-white rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <h4 className="font-black text-slate-900 text-lg mb-2">{holiday.name}</h4>
                      {holiday.description && (
                        <p className="text-xs text-slate-500 mb-3 font-medium">{holiday.description}</p>
                      )}
                      <div className="flex items-center gap-3 text-sm font-bold text-slate-400 bg-white/50 w-fit px-3 py-1.5 rounded-xl">
                        <Calendar size={16} className="text-blue-500" />
                        {new Date(holiday.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}