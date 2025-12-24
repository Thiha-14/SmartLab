
import React, { useState } from 'react';
import { MOCK_USERS } from '../constants';
import { UserStatus, UserRole } from '../types';
import { Search, Filter, MoreHorizontal, UserPlus, Fingerprint, ShieldAlert, CheckCircle, X, Mail, Phone, Calendar, ShieldCheck } from 'lucide-react';

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(MOCK_USERS);
  const [showAddModal, setShowAddModal] = useState(false);

  const getStatusStyle = (status: UserStatus) => {
    switch (status) {
      case UserStatus.ACTIVE: return 'text-blue-600 bg-blue-50 border-blue-100';
      case UserStatus.INACTIVE: return 'text-slate-400 bg-slate-50 border-slate-100';
      case UserStatus.SUSPENDED: return 'text-slate-900 bg-slate-100 border-slate-200';
      default: return 'text-slate-400 bg-slate-50 border-slate-100';
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <Fingerprint size={16} fill="currentColor" />
            <span>Identity Governance</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Personnel Hub</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Orchestrating researcher credentials, clearance hierarchies and workforce logistics.</p>
        </div>
        
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-slate-900 text-white px-10 py-5 rounded-2xl flex items-center space-x-3 hover:bg-blue-600 transition-all shadow-2xl shadow-slate-900/10 font-black uppercase tracking-widest text-[11px] active:scale-95 group"
        >
          <UserPlus size={20} />
          <span>Provision Identity</span>
        </button>
      </div>

      <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row items-center gap-6 bg-slate-50/40">
          <div className="flex-1 relative w-full group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Query identifier, biometric hash or personnel name..." 
              className="w-full pl-14 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-1 focus:ring-blue-500/20 outline-none text-sm font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center space-x-3 px-8 py-4 border border-slate-200 bg-white rounded-2xl text-[11px] font-black text-slate-500 hover:text-slate-900 uppercase tracking-widest transition-all shadow-sm">
            <Filter size={18} />
            <span>Registry Filters</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/80">
              <tr>
                <th className="px-12 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Personnel Instance</th>
                <th className="px-12 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Clearance Level</th>
                <th className="px-12 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">System Status</th>
                <th className="px-12 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Validity Window</th>
                <th className="px-12 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group cursor-default">
                  <td className="px-12 py-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 font-black text-lg group-hover:scale-110 group-hover:bg-blue-50 transition-all shadow-sm">
                        {user.firstName[0]}{user.lastName[0]}
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{user.firstName} {user.lastName}</p>
                        <p className="text-[11px] font-bold text-slate-400 tracking-widest">{user.email}</p>
                        <div className="flex items-center space-x-3 mt-1.5">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2 py-1 bg-slate-100 rounded-lg border border-slate-200 shadow-sm">UID: {user.studentId}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-12 py-8">
                    <div className="flex items-center space-x-2">
                      <ShieldAlert size={14} className="text-slate-300" />
                      <span className="text-[11px] font-black text-slate-700 bg-slate-100 px-4 py-2 rounded-xl uppercase tracking-widest border border-slate-200 shadow-sm">
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-12 py-8">
                    <div className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest border inline-flex items-center space-x-2 ${getStatusStyle(user.status)}`}>
                      <CheckCircle size={12} />
                      <span>{user.status}</span>
                    </div>
                  </td>
                  <td className="px-12 py-8">
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex items-center space-x-3">
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">INIT:</span>
                        <span className="text-[11px] font-bold text-slate-600 tracking-tighter">{user.effectiveFrom}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">TERM:</span>
                        <span className="text-[11px] font-bold text-slate-600 tracking-tighter">{user.effectiveTo}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-12 py-8 text-right">
                    <button className="text-slate-300 hover:text-slate-900 transition-colors p-3 hover:bg-slate-100 rounded-2xl">
                      <MoreHorizontal size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-10 border-t border-slate-50 flex justify-between items-center text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] bg-slate-50/30">
          <p>Personnel Registry: {users.length} authenticated units</p>
          <div className="flex space-x-4">
            <button disabled className="px-6 py-3 border border-slate-200 rounded-xl opacity-30 shadow-sm">Previous Phase</button>
            <button className="px-6 py-3 border border-slate-200 rounded-xl hover:bg-white text-slate-600 hover:text-slate-900 transition-all shadow-sm">Next Phase</button>
          </div>
        </div>
      </div>

      {/* Provision Identity Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white border border-slate-100 rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-500">
            <div className="p-12 border-b border-slate-50 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-2xl z-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <UserPlus size={24} />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Provision Identity</h3>
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">SmartLab Personnel Registry</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAddModal(false)} 
                className="text-slate-400 hover:text-slate-900 p-4 bg-slate-100 rounded-3xl transition-all"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="p-12 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                  <input type="text" placeholder="e.g. Sarah" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                  <input type="text" placeholder="e.g. Chen" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Institutional ID</label>
                  <input type="text" placeholder="e.g. TVS-X881" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold placeholder:text-slate-300" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Terminal</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input type="email" placeholder="sarah.chen@smartlab.io" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Protocol</label>
                  <div className="relative group">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Clearance Level</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold appearance-none">
                    <option value={UserRole.USER}>Standard User</option>
                    <option value={UserRole.CONFIGURATOR}>Configurator</option>
                    <option value={UserRole.MASTER}>Master Admin</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Effective From</label>
                  <input type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Effective To</label>
                  <input type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Initial Status</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-bold appearance-none">
                    <option value={UserStatus.ACTIVE}>Active Node</option>
                    <option value={UserStatus.INACTIVE}>Inactive</option>
                    <option value={UserStatus.SUSPENDED}>Suspended</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-12 bg-slate-50 border-t border-slate-100 flex justify-end space-x-8">
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-10 py-5 text-slate-400 font-black uppercase tracking-widest text-[11px] hover:text-slate-900 transition-colors"
              >
                Abort Provisioning
              </button>
              <button 
                className="px-14 py-5 rounded-3xl bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-2xl active:scale-95"
              >
                Confirm Personnel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
