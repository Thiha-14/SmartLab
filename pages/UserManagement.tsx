'use client';

import React, { useState, useEffect } from 'react';
import {
  Search, Filter, UserPlus, ShieldCheck, X, Check
} from 'lucide-react';
import { User, UserStatus, UserRole } from '../types';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', role: UserRole.USER });
  const [selectedTemplate, setSelectedTemplate] = useState<'empty' | 'student' | 'technician' | 'admin'>('empty');
  const [userErrors, setUserErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  const applyTemplate = (template: 'student' | 'technician' | 'admin') => {
    const templates = {
      student: { firstName: '', lastName: '', email: '', role: UserRole.USER },
      technician: { firstName: '', lastName: '', email: '', role: UserRole.CONFIGURATOR },
      admin: { firstName: '', lastName: '', email: '', role: UserRole.MASTER }
    };
    setNewUser(templates[template]);
    setSelectedTemplate(template);
  };

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('sl_users') || '[]'));
  }, []);

  const saveUsers = (updated: User[]) => {
    setUsers(updated);
    localStorage.setItem('sl_users', JSON.stringify(updated));
  };

  const handleCreateUser = () => {
    const errors: string[] = [];
    if (!newUser.firstName) errors.push('First name is required');
    if (!newUser.lastName) errors.push('Last name is required');
    if (!newUser.email) errors.push('Email address is required');
    
    setUserErrors(errors);
    if (errors.length > 0) return;
    
    const user: User = {
      id: 'u' + Date.now(),
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      studentId: 'STU-' + Math.floor(Math.random() * 9000 + 1000),
      email: newUser.email,
      phone: '+1 000 000 0000',
      registrationDate: new Date().toISOString().split('T')[0],
      effectiveFrom: new Date().toISOString().split('T')[0],
      effectiveTo: '2030-01-01',
      status: UserStatus.ACTIVE,
      role: newUser.role
    };
    saveUsers([...users, user]);
    setShowAdd(false);
    setNewUser({ firstName: '', lastName: '', email: '', role: UserRole.USER });
    setUserErrors([]);
    setSuccessMessage(`✅ User "${newUser.firstName} ${newUser.lastName}" added successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const deleteUser = (id: string) => {
    if (confirm('Permanently remove this account?')) {
      saveUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500 pb-10 md:pb-20">
      {successMessage && (
        <div className="fixed top-4 right-4 z-[200] animate-in slide-in-from-right duration-300">
          <div className="bg-emerald-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black shadow-2xl flex items-center gap-3">
            {successMessage}
          </div>
        </div>
      )}
      
      <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Institutional Registry</h2>
          <p className="text-xs md:text-sm text-slate-500 font-medium">Managing access for {users.length} active research accounts.</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl font-black shadow-lg md:shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all text-sm md:text-base">
          <UserPlus size={20} /> Deploy Account
        </button>
      </div>

      <div className="bg-white rounded-[28px] md:rounded-[48px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 md:p-8 border-b border-slate-50 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 md:gap-6">
          <div className="relative flex-1 w-full max-w-xl">
            <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input type="text" placeholder="Search..." className="w-full pl-11 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-medium text-sm" />
          </div>
          <button className="flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-4 border border-slate-100 rounded-2xl md:rounded-3xl text-xs md:text-sm font-black text-slate-500 hover:bg-slate-50 transition-all uppercase tracking-widest">
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden divide-y divide-slate-50">
          {users.map(user => (
            <div key={user.id} className="p-5 hover:bg-blue-50/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-base shadow-lg shrink-0">
                  {user.firstName[0]}{user.lastName[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-slate-900 text-base leading-tight mb-1 truncate">{user.firstName} {user.lastName}</p>
                  <p className="text-xs text-slate-400 font-bold truncate">{user.email}</p>
                </div>
                <button onClick={() => deleteUser(user.id)} className="p-2 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all shrink-0">
                  <Trash2 size={18} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">{user.studentId}</span>
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">{user.status}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-black text-slate-700">
                  <ShieldCheck size={14} className="text-blue-600" /> {user.role}
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Exp: {user.effectiveTo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] border-b border-slate-100">
                <th className="px-6 lg:px-10 py-4 lg:py-6">Researcher</th>
                <th className="px-6 lg:px-10 py-4 lg:py-6">Credentials</th>
                <th className="px-6 lg:px-10 py-4 lg:py-6">Authorization</th>
                <th className="px-6 lg:px-10 py-4 lg:py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 lg:px-10 py-6 lg:py-8">
                    <div className="flex items-center gap-3 lg:gap-5">
                      <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-2xl lg:rounded-[20px] bg-slate-900 text-white flex items-center justify-center font-black text-lg lg:text-xl shadow-xl shrink-0">
                        {user.firstName[0]}{user.lastName[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="font-black text-slate-900 text-base lg:text-lg leading-tight mb-1 truncate">{user.firstName} {user.lastName}</p>
                        <p className="text-xs text-slate-400 font-bold truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 lg:px-10 py-6 lg:py-8">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">{user.studentId}</span>
                      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{user.status} Enrollment</span>
                    </div>
                  </td>
                  <td className="px-6 lg:px-10 py-6 lg:py-8">
                    <div className="flex items-center gap-2 text-sm font-black text-slate-700 mb-1">
                      <ShieldCheck size={18} className="text-blue-600" /> {user.role}
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Expiry: {user.effectiveTo}</p>
                  </td>
                  <td className="px-6 lg:px-10 py-6 lg:py-8 text-right">
                    <button onClick={() => deleteUser(user.id)} className="p-3 lg:p-4 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-2xl lg:rounded-[20px] transition-all">
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAdd && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-xl rounded-[32px] md:rounded-[48px] shadow-2xl overflow-hidden p-6 md:p-10 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 md:mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900">Provision Account</h2>
              <button onClick={() => {setShowAdd(false); setUserErrors([]);}} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
            </div>
            
            {userErrors.length > 0 && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl">
                <p className="text-rose-900 font-black text-sm mb-2">⚠️ Please fill in the following:</p>
                <ul className="space-y-1">
                  {userErrors.map((error, idx) => (
                    <li key={idx} className="text-rose-700 text-sm font-bold">• {error}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[24px] md:rounded-[32px] p-4 md:p-6 border border-blue-200/50">
                <label className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-3 md:mb-4 block">Quick Role Selection</label>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  <button onClick={() => applyTemplate('student')} className={`py-2 md:py-3 px-3 md:px-4 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-wider transition-all ${selectedTemplate === 'student' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-600 border border-blue-200 hover:border-blue-400'}`}>
                    👤 Student
                  </button>
                  <button onClick={() => applyTemplate('technician')} className={`py-2 md:py-3 px-3 md:px-4 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-wider transition-all ${selectedTemplate === 'technician' ? 'bg-amber-500 text-white shadow-lg' : 'bg-white text-slate-600 border border-blue-200 hover:border-blue-400'}`}>
                    🔧 Tech
                  </button>
                  <button onClick={() => applyTemplate('admin')} className={`py-2 md:py-3 px-3 md:px-4 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-wider transition-all ${selectedTemplate === 'admin' ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-slate-600 border border-blue-200 hover:border-blue-400'}`}>
                    👑 Admin
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                  <input value={newUser.firstName} onChange={e => {setNewUser({ ...newUser, firstName: e.target.value }); setUserErrors([]);}} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl outline-none focus:bg-white font-bold text-sm" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                  <input value={newUser.lastName} onChange={e => {setNewUser({ ...newUser, lastName: e.target.value }); setUserErrors([]);}} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl outline-none focus:bg-white font-bold text-sm" placeholder="Smith" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input value={newUser.email} onChange={e => {setNewUser({ ...newUser, email: e.target.value }); setUserErrors([]);}} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl outline-none focus:bg-white font-bold text-sm" placeholder="john.smith@smartlab.com" />
              </div>
            </div>
            <button onClick={handleCreateUser} className="w-full mt-6 md:mt-10 py-4 md:py-5 bg-slate-900 text-white rounded-3xl md:rounded-4xl font-black shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-3 text-sm md:text-base">
              Deploy Credentials <Check size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Trash2: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 9h4m-4-4h4" /></svg>
);

export default UserManagement;
