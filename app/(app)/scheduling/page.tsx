'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, Clock, Wrench, AlertCircle, Plus, User, Check, X, Trash2
} from 'lucide-react';
// Ensure this points to your types file
import { ScheduleType } from '@/types'; 

interface Booking {
  id: string;
  labName: string;
  type: ScheduleType;
  startTime: string;
  endTime: string;
  userName: string;
}

export default function SchedulingPage() {
  const [activeType, setActiveType] = useState<ScheduleType>(ScheduleType.OPERATION);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [labs, setLabs] = useState<any[]>([]);
  const [bookingErrors, setBookingErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== 'undefined') {
        const labsData = JSON.parse(localStorage.getItem('sl_labs') || '[]');
        setLabs(labsData);
        const saved = localStorage.getItem('sl_bookings');
        if (saved) setBookings(JSON.parse(saved));
    }
  }, []);

  const saveBookings = (updated: Booking[]) => {
    setBookings(updated);
    localStorage.setItem('sl_bookings', JSON.stringify(updated));
  };

  const handleAddBooking = () => {
    const errors: string[] = [];
    if (!selectedLab) errors.push('Lab selection is required');
    if (!selectedStartTime) errors.push('Start time is required');
    if (!selectedEndTime) errors.push('End time is required');
    
    setBookingErrors(errors);
    if (errors.length > 0) return;
    
    const startDate = new Date(`2024-01-01 ${selectedStartTime}`);
    const endDate = new Date(`2024-01-01 ${selectedEndTime}`);
    
    if (endDate <= startDate) {
      setBookingErrors(['End time must be after start time']);
      return;
    }
    
    const sessionData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('sl_session') || '{}') : {};

    const newBooking: Booking = {
      id: 'b' + Date.now(),
      labName: selectedLab,
      type: activeType,
      startTime: selectedStartTime,
      endTime: selectedEndTime,
      userName: sessionData.firstName || 'Member'
    };
    saveBookings([...bookings, newBooking]);
    setShowAdd(false);
    setSelectedLab('');
    setSelectedStartTime('');
    setSelectedEndTime('');
    setBookingErrors([]);
    setSuccessMessage(`✅ Booking confirmed! ${selectedLab} from ${selectedStartTime} to ${selectedEndTime}`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm('Cancel this booking?')) {
      saveBookings(bookings.filter(b => b.id !== id));
    }
  };

  return (
    <div className="space-y-6 md:space-y-10 pb-20 animate-in fade-in duration-700">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 md:gap-8">
        <div className="flex w-full sm:w-auto bg-white p-1.5 md:p-2 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <button
            onClick={() => setActiveType(ScheduleType.OPERATION)}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs transition-all uppercase tracking-widest ${activeType === ScheduleType.OPERATION ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <Clock size={16} className="md:w-[18px] md:h-[18px]" /> Daily
          </button>
          <button
            onClick={() => setActiveType(ScheduleType.MAINTENANCE)}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs transition-all uppercase tracking-widest ${activeType === ScheduleType.MAINTENANCE ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/20' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <Wrench size={16} className="md:w-[18px] md:h-[18px]" /> Repairs
          </button>
        </div>

        <div className="flex w-full sm:w-auto items-center justify-between gap-4 md:gap-6 bg-white px-6 md:px-8 py-3 md:py-4 border border-slate-100 rounded-[24px] md:rounded-[32px] shadow-sm">
          <button className="p-1 md:p-2 hover:bg-slate-50 rounded-xl text-slate-300 hover:text-slate-900 transition-all"><ChevronLeft size={20} /></button>
          <div className="text-center min-w-[120px] md:min-w-[150px]">
            <span className="text-base md:text-lg font-black text-slate-900">Oct 24, Thu</span>
          </div>
          <button className="p-1 md:p-2 hover:bg-slate-50 rounded-xl text-slate-300 hover:text-slate-900 transition-all"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 md:gap-10">
        <div className="xl:col-span-3 bg-white rounded-[32px] md:rounded-[48px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 md:p-10 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Daily Schedule</h3>
            <button onClick={() => setShowAdd(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-6 py-3 md:py-4 rounded-2xl font-black shadow-lg hover:bg-slate-800 transition-all uppercase tracking-widest text-[10px] md:text-xs">
              <Plus size={18} /> Book a Slot
            </button>
          </div>

          <div className="p-4 md:p-10">
            <div className="relative space-y-6 md:space-y-14">
              <div className="absolute left-[35px] md:left-[85px] top-0 bottom-0 w-0.5 md:w-1 bg-slate-50 rounded-full"></div>
              {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((time) => (
                <div key={time} className="flex gap-3 md:gap-10 group relative">
                  <div className="w-[28px] md:w-[45px] text-[9px] md:text-xs font-black text-slate-700 mt-1 md:mt-2 tracking-widest shrink-0">{time}</div>
                  <div className="flex-1 min-h-[50px] md:min-h-[80px]">
                    {bookings.filter(b => {
                      const bookingHour = b.startTime.split(':')[0];
                      const timeHour = time.split(':')[0];
                      return bookingHour === timeHour;
                    }).map(slot => (
                      <div key={slot.id} className={`p-3 md:p-6 rounded-xl md:rounded-3xl border-l-[6px] md:border-l-[12px] shadow-sm transition-all hover:shadow-lg mb-3 md:mb-4 ${slot.type === ScheduleType.OPERATION
                        ? 'bg-blue-50 border-blue-600 text-blue-900'
                        : 'bg-amber-50 border-amber-500 text-amber-900'
                        }`}>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 md:gap-3">
                          <div className="min-w-0 flex-1">
                            <h4 className="font-black text-sm md:text-xl mb-1 truncate">{slot.labName}</h4>
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[9px] md:text-[10px] font-bold opacity-80 uppercase tracking-widest">
                              <span className="flex items-center gap-1"><User size={11} className="md:w-3 md:h-3" /> {slot.userName}</span>
                              <span className="flex items-center gap-1"><Clock size={11} className="md:w-3 md:h-3" /> {slot.startTime} — {slot.endTime}</span>
                            </div>
                          </div>
                          <button onClick={() => handleDelete(slot.id)} className="p-2 md:p-3 bg-white/60 hover:bg-rose-500 hover:text-white rounded-lg md:rounded-xl transition-all shrink-0 self-end sm:self-auto"><Trash2 size={14} className="md:w-4 md:h-4" /></button>
                        </div>
                      </div>
                    ))}
                    <div className="w-full h-px bg-slate-50 mt-6 md:mt-8 group-last:hidden"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block space-y-6 md:space-y-8 animate-in slide-in-from-right duration-700">
          <div className="bg-black p-6 md:p-10 rounded-[32px] md:rounded-[48px] shadow-2xl text-white relative overflow-hidden group">
            <h4 className="text-lg md:text-xl font-black mb-4 md:mb-6 flex items-center gap-2">
              <AlertCircle size={18} className="md:w-[22px] md:h-[22px] text-blue-500" />
              Lab Monitor
            </h4>
            <div className="space-y-3 md:space-y-4 relative z-10">
              {[
                { name: 'X-Ray Lab', status: 'In Use', color: 'bg-rose-500' },
                { name: 'GPU Farm', status: 'Online', color: 'bg-emerald-500' },
                { name: 'Bio Lab 4', status: 'Online', color: 'bg-emerald-500' },
              ].map((res, i) => (
                <div key={i} className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex justify-between items-center">
                  <span className="text-xs md:text-sm font-black truncate">{res.name}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className={`w-2 h-2 rounded-full ${res.color}`}></div>
                    <span className="text-[9px] md:text-[10px] font-black uppercase text-slate-300">{res.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {successMessage && (
        <div className="fixed top-4 right-4 z-[200] animate-in slide-in-from-right duration-300">
          <div className="bg-gradient-to-r from-white/30 to-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black shadow-2xl shadow-white/20 flex items-center gap-3 border border-white/40 backdrop-blur-md">
            {successMessage}
          </div>
        </div>
      )}

      {showAdd && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
            {/* Glass Background */}
            <div className="absolute inset-0 rounded-[28px] md:rounded-[40px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
            }} />
            <div className="relative z-10 rounded-[28px] md:rounded-[40px] overflow-hidden flex flex-col p-6 md:p-10">
            <div className="flex justify-between items-center mb-6 md:mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-1 md:mb-2 text-white drop-shadow-lg">Book a Slot</h2>
                <div className="text-xs md:text-sm text-white/80 font-semibold tracking-wide flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Reserve your lab time
                </div>
              </div>
              <button onClick={() => {setShowAdd(false); setBookingErrors([]);}} className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/20 hover:bg-white/30 border border-white/40 text-white transition-all group"><X size={24} className="group-hover:rotate-90 transition-all" /></button>
            </div>
            
            {bookingErrors.length > 0 && (
              <div className="mb-6 p-4 bg-rose-500/20 border border-rose-400/40 rounded-2xl backdrop-blur-sm">
                <p className="text-rose-200 font-black text-sm mb-2">⚠️ Please check:</p>
                <ul className="space-y-1">
                  {bookingErrors.map((error, idx) => (
                    <li key={idx} className="text-rose-100 text-sm font-bold">• {error}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="space-y-4 md:space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/90 uppercase tracking-widest ml-1">Select Lab</label>
                <select
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 border border-white/30 rounded-2xl outline-none font-bold text-base md:text-lg text-white cursor-pointer backdrop-blur-sm focus:bg-white/20 focus:border-white/50 transition-all"
                  value={selectedLab}
                  onChange={(e) => {setSelectedLab(e.target.value); setBookingErrors([]);}}
                >
                  <option value="" className="bg-slate-900 text-white">Choose a lab...</option>
                  {labs.map((l: any) => <option key={l.id} value={l.name} className="bg-slate-900 text-white">{l.name}</option>)}
                </select>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/30 backdrop-blur-sm">
                  <label className="text-[10px] font-black text-white/90 uppercase tracking-widest mb-4 md:mb-5 block">Time Window</label>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span className="text-[9px] font-black text-white/80 uppercase tracking-wider">Start</span>
                      </div>
                      <select
                        className="w-full px-4 md:px-5 py-3 md:py-4 bg-white/15 border border-white/30 rounded-xl md:rounded-2xl outline-none font-bold text-sm md:text-base text-white hover:border-white/50 focus:ring-2 focus:ring-white/30 focus:bg-white/25 transition-all cursor-pointer backdrop-blur-sm"
                        value={selectedStartTime}
                        onChange={(e) => setSelectedStartTime(e.target.value)}
                      >
                        <option value="" className="bg-slate-900 text-white">Choose hour...</option>
                        {Array.from({ length: 24 }, (_, i) => {
                          const hour = i.toString().padStart(2, '0');
                          return <option key={hour} value={`${hour}:00`} className="bg-slate-900 text-white">{hour}:00</option>;
                        })}
                      </select>
                      {selectedStartTime && (
                        <div className="text-center pt-2">
                          <span className="text-2xl md:text-3xl font-black text-white">{selectedStartTime}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span className="text-[9px] font-black text-white/80 uppercase tracking-wider">End</span>
                      </div>
                      <select
                        className="w-full px-4 md:px-5 py-3 md:py-4 bg-white/15 border border-white/30 rounded-xl md:rounded-2xl outline-none font-bold text-sm md:text-base text-white hover:border-white/50 focus:ring-2 focus:ring-white/30 focus:bg-white/25 transition-all cursor-pointer backdrop-blur-sm"
                        value={selectedEndTime}
                        onChange={(e) => setSelectedEndTime(e.target.value)}
                      >
                        <option value="" className="bg-slate-900 text-white">Choose hour...</option>
                        {Array.from({ length: 24 }, (_, i) => {
                          const hour = i.toString().padStart(2, '0');
                          return <option key={hour} value={`${hour}:00`} className="bg-slate-900 text-white">{hour}:00</option>;
                        })}
                      </select>
                      {selectedEndTime && (
                        <div className="text-center pt-2">
                          <span className="text-2xl md:text-3xl font-black text-white">{selectedEndTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {selectedStartTime && selectedEndTime && (
                    <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-white/70 uppercase tracking-wider">Duration</span>
                        <span className="text-lg md:text-xl font-black text-white">
                          {Math.abs(parseInt(selectedEndTime.split(':')[0]) - parseInt(selectedStartTime.split(':')[0]))} hour{Math.abs(parseInt(selectedEndTime.split(':')[0]) - parseInt(selectedStartTime.split(':')[0])) !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button onClick={handleAddBooking} className="w-full mt-8 md:mt-10 py-4 md:py-5 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-3xl font-black shadow-xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase text-[10px] md:text-xs tracking-widest border border-white/50 backdrop-blur-sm group">
              <Check size={20} className="group-hover:rotate-12 transition-transform" /> Confirm Booking
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}