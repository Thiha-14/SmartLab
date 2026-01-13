'use client';

import React, { useState, useEffect } from 'react';
import {
  Users, FlaskConical, AlertTriangle, ChevronRight, ShieldCheck, Activity, Clock, X, Check
} from 'lucide-react';
import dynamic from 'next/dynamic';

// --- Lazy Load Recharts (Performance Fix) ---
const AreaChart = dynamic(() => import('recharts').then(mod => mod.AreaChart), { ssr: false });
const Area = dynamic(() => import('recharts').then(mod => mod.Area), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });

// --- Static Data ---
const dataUsage = [
  { name: 'Mon', usage: 45 },
  { name: 'Tue', usage: 52 },
  { name: 'Wed', usage: 38 },
  { name: 'Thu', usage: 65 },
  { name: 'Fri', usage: 48 },
  { name: 'Sat', usage: 20 },
  { name: 'Sun', usage: 15 },
];

export default function DashboardPage() {
  // --- Dashboard State ---
  const [counts, setCounts] = useState({ users: 0, labs: 0, equipment: 0, maintenance: 0 });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // --- Booking Form State ---
  const [bookingData, setBookingData] = useState({
    labName: '',
    date: '',
    startTime: '',
    endTime: '',
    purpose: '',
    type: 'Research' // Default type
  });

  // --- Load Data ---
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const users = JSON.parse(localStorage.getItem('sl_users') || '[]');
        const labs = JSON.parse(localStorage.getItem('sl_labs') || '[]');
        const equip = JSON.parse(localStorage.getItem('sl_equipment') || '[]');
        const bookings = JSON.parse(localStorage.getItem('sl_bookings') || '[]');
    
        setCounts({
          users: users.length,
          labs: labs.length,
          equipment: equip.length,
          maintenance: bookings.filter((b: any) => b.type === 'Maintenance').length
        });
    }
  }, []);

  // --- Handlers ---
  const handleSaveBooking = () => {
    if (!bookingData.labName || !bookingData.date || !bookingData.startTime) {
      alert('Please fill in required fields');
      return;
    }
    
    // Logic to save to localStorage
    const newBooking = {
      id: 'b' + Date.now(),
      ...bookingData,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('sl_bookings') || '[]');
    localStorage.setItem('sl_bookings', JSON.stringify([...existingBookings, newBooking]));
    
    // Reset and Close
    setBookingData({ labName: '', date: '', startTime: '', endTime: '', purpose: '', type: 'Research' });
    setIsBookingOpen(false);
    alert('Booking created successfully!');
  };

  const stats = [
    { label: 'Total Users', value: counts.users, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Lab Rooms', value: counts.labs, icon: FlaskConical, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Equipment', value: counts.equipment, icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Maintenance', value: counts.maintenance, icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 relative">
      
      {/* --- DASHBOARD HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Main Dashboard</h2>
          <p className="text-sm md:text-base text-slate-500 font-medium">An overview of lab status and users.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-4 md:px-6 py-3 text-xs md:text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">Report</button>
          <button onClick={() => setIsBookingOpen(true)} className="flex-1 md:flex-none px-4 md:px-6 py-3 text-xs md:text-sm font-bold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition-all">New Booking</button>
        </div>
      </div>

      {/* ===================================================================================== */}
      {/* NEW BOOKING MODAL (EXACT STYLE FROM LABS PAGE) */}
      {/* ===================================================================================== */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-lg animate-in fade-in duration-300 p-0 sm:p-4">
          <div className="w-full h-full sm:h-auto sm:max-w-lg sm:max-h-[95vh] flex flex-col overflow-hidden rounded-0 sm:rounded-[32px]">
            
            {/* Glass Background with white accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
            }} />
            
            <div className="relative z-10 overflow-hidden flex flex-col h-full">
              
              {/* Enhanced Header with blue gradient */}
              <div className="relative overflow-hidden px-5 sm:px-8 py-6 sm:py-8 bg-gradient-to-br from-blue-500/80 via-blue-400/60 to-blue-600/70 border-b border-white/30 backdrop-blur-md flex-shrink-0">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse" />
                
                <div className="relative flex justify-between items-start gap-3">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2 text-white drop-shadow-lg">
                      New Booking
                    </h2>
                    <div className="text-xs sm:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Reserve a lab session
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsBookingOpen(false)} 
                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-2xl sm:rounded-3xl bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all backdrop-blur-sm group/close"
                  >
                    <X size={20} className="sm:w-6 sm:h-6 text-white group-hover/close:rotate-90 transition-all" />
                  </button>
                </div>
              </div>

              {/* Content Area - Scrollable */}
              <div className="overflow-y-auto flex-1 px-5 sm:px-8 py-6 sm:py-8 space-y-4 sm:space-y-6 bg-gradient-to-b from-white/10 via-white/5 to-white/5 backdrop-blur-md">
                
                <div className="space-y-4 sm:space-y-6">
                  
                  {/* Lab Selection */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">Select Lab</label>
                    <select 
                        value={bookingData.labName}
                        onChange={(e) => setBookingData({...bookingData, labName: e.target.value})}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white cursor-pointer"
                    >
                      <option value="" className="text-slate-800">Choose a lab...</option>
                      <option value="Physics Lab A" className="text-slate-800">Physics Lab A</option>
                      <option value="Chemistry Lab B" className="text-slate-800">Chemistry Lab B</option>
                      <option value="Biology Lab C" className="text-slate-800">Biology Lab C</option>
                    </select>
                  </div>

                  {/* Date & Time Section */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                    />
                  </div>

                  {/* Time Range */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">Start Time</label>
                      <input
                        type="time"
                        value={bookingData.startTime}
                        onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">End Time</label>
                      <input
                        type="time"
                        value={bookingData.endTime}
                        onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                      />
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">Purpose</label>
                    <textarea 
                        value={bookingData.purpose}
                        onChange={(e) => setBookingData({ ...bookingData, purpose: e.target.value })}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white min-h-20 resize-none" 
                        placeholder="Enter description..." 
                    />
                  </div>

                  {/* Classification / Type */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">Classification</label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {['Research', 'Class', 'Maintenance', 'Private'].map(type => (
                        <button
                          key={type}
                          onClick={() => setBookingData({ ...bookingData, type: type })}
                          className={`py-2 sm:py-3 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all ${
                            bookingData.type === type
                              ? type === 'Research' ? 'bg-blue-600 text-white shadow-lg' :
                                type === 'Class' ? 'bg-emerald-600 text-white shadow-lg' :
                                type === 'Maintenance' ? 'bg-amber-600 text-white shadow-lg' :
                                'bg-slate-600 text-white shadow-lg'
                              : 'bg-white/10 text-white/70 border border-white/20 hover:border-white/40 hover:bg-white/20'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer with Action Buttons - Fixed at Bottom */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-6 bg-gradient-to-t from-white/10 to-transparent border-t border-white/30 backdrop-blur-md flex-shrink-0">
                <button 
                  onClick={() => setIsBookingOpen(false)} 
                  className="order-2 sm:order-1 flex-1 py-3 sm:py-4 font-black text-white hover:text-white rounded-2xl transition-all border border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 text-sm sm:text-base backdrop-blur-sm group/cancel"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveBooking} 
                  className="order-1 sm:order-2 flex-1 py-3 sm:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl font-black shadow-xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm sm:text-base group/create backdrop-blur-sm border border-white/50"
                >
                  <Check size={16} className="sm:w-[18px] sm:h-[18px]" /> Confirm Booking
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 md:p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-none">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- CHARTS AND UPDATES --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 bg-white p-5 md:p-8 rounded-4xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-slate-900">Lab Usage History</h3>
            <p className="text-xs md:text-sm text-slate-400">Weekly activity summary</p>
          </div>
          <div className="h-50 sm:h-62.5 md:h-75 w-full">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={dataUsage}>
                <defs>
                  <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                <Area type="monotone" dataKey="usage" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-950 p-6 md:p-8 rounded-4xl shadow-lg text-white">
            <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2">
              <Activity size={20} className="text-blue-500" /> Recent Updates
            </h3>
            <div className="space-y-4">
              {[
                { text: 'Lab 1 Temp: 22°C', type: 'Status', color: 'text-emerald-400' },
                { text: 'System Running Well', type: 'Stats', color: 'text-blue-400' },
                { text: '3 New Member Requests', type: 'Alert', color: 'text-amber-400' },
              ].map((alert, idx) => (
                <div key={idx} className="p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] md:text-xs font-bold text-white mb-1">{alert.text}</p>
                    <span className={`text-[9px] md:text-[10px] font-bold uppercase ${alert.color}`}>{alert.type}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 md:mt-8 py-3 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all text-xs md:text-sm">
              View All
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-4xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Clock size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Current Time</p>
              <p className="text-lg md:text-xl font-bold text-slate-900">08:42:15 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};