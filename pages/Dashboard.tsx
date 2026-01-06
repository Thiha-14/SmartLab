'use client';

import React, { useState, useEffect } from 'react';
import {
  Users, FlaskConical, AlertTriangle, ChevronRight, ShieldCheck, Activity, Clock, X, Calendar, MapPin
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dataUsage = [
  { name: 'Mon', usage: 45 },
  { name: 'Tue', usage: 52 },
  { name: 'Wed', usage: 38 },
  { name: 'Thu', usage: 65 },
  { name: 'Fri', usage: 48 },
  { name: 'Sat', usage: 20 },
  { name: 'Sun', usage: 15 },
];

const Dashboard: React.FC = () => {
  const [counts, setCounts] = useState({ users: 0, labs: 0, equipment: 0, maintenance: 0 });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    labName: '',
    startDate: '',
    startTime: '',
    endTime: '',
    purpose: '',
    attendees: ''
  });

  useEffect(() => {
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
  }, []);

  const handleSaveBooking = () => {
    if (!bookingData.labName || !bookingData.startDate || !bookingData.startTime || !bookingData.endTime) {
      alert('Please fill in all required fields');
      return;
    }
    
    const newBooking = {
      id: 'b' + Date.now(),
      labName: bookingData.labName,
      startDate: bookingData.startDate,
      startTime: bookingData.startTime,
      endTime: bookingData.endTime,
      purpose: bookingData.purpose || 'Lab Session',
      attendees: bookingData.attendees || '1',
      type: 'Booking',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('sl_bookings') || '[]');
    localStorage.setItem('sl_bookings', JSON.stringify([...existingBookings, newBooking]));
    
    setBookingData({ labName: '', startDate: '', startTime: '', endTime: '', purpose: '', attendees: '' });
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
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
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

      {/* New Booking Modal with Glass UI */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-lg animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 md:p-10 animate-in zoom-in-95 duration-300 overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">New Lab Booking</h2>
                <p className="text-slate-500 text-sm">Schedule your lab session</p>
              </div>
              <button
                onClick={() => setIsBookingOpen(false)}
                className="p-2 bg-red-50/50 hover:bg-red-100 text-red-600 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Content */}
            <div className="space-y-6">
              {/* Lab Selection */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                  <FlaskConical size={16} className="text-blue-600" /> Select Lab *
                </label>
                <select
                  value={bookingData.labName}
                  onChange={(e) => setBookingData({ ...bookingData, labName: e.target.value })}
                  className="w-full px-5 py-3 bg-white/40 border border-white/40 rounded-2xl outline-none font-semibold focus:border-blue-400 focus:bg-white/60 backdrop-blur-sm transition-all text-slate-900"
                >
                  <option value="">Choose a lab...</option>
                  <option value="Lab A">Lab A - Physics</option>
                  <option value="Lab B">Lab B - Chemistry</option>
                  <option value="Lab C">Lab C - Biology</option>
                  <option value="Lab D">Lab D - Microbiology</option>
                </select>
              </div>

              {/* Date and Time Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Date */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <Calendar size={16} className="text-emerald-600" /> Start Date *
                  </label>
                  <input
                    type="date"
                    value={bookingData.startDate}
                    onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                    className="w-full px-5 py-3 bg-white/40 border border-white/40 rounded-2xl outline-none font-semibold focus:border-blue-400 focus:bg-white/60 backdrop-blur-sm transition-all text-slate-900"
                  />
                </div>

                {/* Attendees */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <Users size={16} className="text-indigo-600" /> Number of Attendees
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={bookingData.attendees}
                    onChange={(e) => setBookingData({ ...bookingData, attendees: e.target.value })}
                    className="w-full px-5 py-3 bg-white/40 border border-white/40 rounded-2xl outline-none font-semibold focus:border-blue-400 focus:bg-white/60 backdrop-blur-sm transition-all text-slate-900"
                    placeholder="1"
                  />
                </div>
              </div>

              {/* Time Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start Time */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <Clock size={16} className="text-amber-600" /> Start Time *
                  </label>
                  <input
                    type="time"
                    value={bookingData.startTime}
                    onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })}
                    className="w-full px-5 py-3 bg-white/40 border border-white/40 rounded-2xl outline-none font-semibold focus:border-blue-400 focus:bg-white/60 backdrop-blur-sm transition-all text-slate-900"
                  />
                </div>

                {/* End Time */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <Clock size={16} className="text-red-600" /> End Time *
                  </label>
                  <input
                    type="time"
                    value={bookingData.endTime}
                    onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })}
                    className="w-full px-5 py-3 bg-white/40 border border-white/40 rounded-2xl outline-none font-semibold focus:border-blue-400 focus:bg-white/60 backdrop-blur-sm transition-all text-slate-900"
                  />
                </div>
              </div>

              {/* Purpose */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={16} className="text-rose-600" /> Purpose of Session
                </label>
                <textarea
                  value={bookingData.purpose}
                  onChange={(e) => setBookingData({ ...bookingData, purpose: e.target.value })}
                  className="w-full px-5 py-3 bg-white/40 border border-white/40 rounded-2xl outline-none font-semibold focus:border-blue-400 focus:bg-white/60 backdrop-blur-sm transition-all text-slate-900 min-h-24 resize-none"
                  placeholder="Describe your lab session purpose..."
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => setIsBookingOpen(false)}
                className="order-2 sm:order-1 flex-1 py-3.5 font-bold text-slate-600 bg-white/40 backdrop-blur-sm border border-white/40 rounded-2xl hover:bg-slate-100/50 transition-all uppercase text-sm tracking-wider"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBooking}
                className="order-1 sm:order-2 flex-1 py-3.5 font-bold text-white bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all uppercase text-sm tracking-wider"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 bg-white p-5 md:p-8 rounded-4xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-slate-900">Lab Usage History</h3>
            <p className="text-xs md:text-sm text-slate-400">Weekly activity summary</p>
          </div>
          <div className="h-50 sm:h-62.5 md:h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
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
          <div className="bg-zinc-950 p-6 md:p-8 rounded-4xl shadow-lg text-white">
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

export default React.memo(Dashboard);
