
import React, { useState } from 'react';
import { MOCK_USERS } from '../constants';
import { Plus, Edit2, Trash2, Shield, Search, UsersRound, CircleCheck } from 'lucide-react';

const Groups: React.FC = () => {
  const [groups, setGroups] = useState([
    { id: 'G1', name: 'Advanced Materials Team', userIds: ['1', '2'] },
    { id: 'G2', name: 'Electronics Research', userIds: ['1'] }
  ]);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <Shield size={16} fill="currentColor" />
            <span>Collaboration Governance</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Logic Groups</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Managing collaborative clusters and shared resource permissions.</p>
        </div>
        
        <button 
          onClick={() => setShowAdd(true)}
          className="bg-slate-900 text-white px-10 py-5 rounded-2xl flex items-center space-x-3 hover:bg-blue-600 transition-all shadow-2xl font-black uppercase tracking-widest text-[11px] active:scale-95 group"
        >
          <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
          <span>Create Cluster</span>
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {groups.map(group => (
          <div key={group.id} className="bg-white border border-slate-100 rounded-[3rem] p-10 hover:border-blue-300 transition-all duration-500 shadow-sm relative group">
            <div className="flex items-start justify-between mb-8">
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{group.name}</h3>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">GID: {group.id} • {group.userIds.length} Units Active</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">
                  <Edit2 size={18} />
                </button>
                <button className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Personnel Allocation</p>
              <div className="flex flex-wrap gap-3">
                {group.userIds.map(uid => {
                  const user = MOCK_USERS.find(u => u.id === uid);
                  return (
                    <div key={uid} className="flex items-center space-x-3 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-[10px]">
                        {user?.firstName[0]}{user?.lastName[0]}
                      </div>
                      <span className="text-xs font-black text-slate-700 uppercase">{user?.firstName} {user?.lastName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={() => setShowAdd(true)}
          className="border-2 border-dashed border-slate-200 rounded-[3rem] p-12 flex flex-col items-center justify-center space-y-6 group hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-700 min-h-[300px]"
        >
          <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:scale-110 transition-all shadow-sm">
            <Plus size={32} />
          </div>
          <p className="text-xl font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-tight transition-colors">New Collaborative Cluster</p>
        </button>
      </div>

      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-slate-900/40 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white border border-slate-100 rounded-[4rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-500">
            <div className="p-10 border-b border-slate-50 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-2xl z-10">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Cluster Initialization</h3>
              <button onClick={() => setShowAdd(false)} className="text-slate-400 hover:text-slate-900 p-4 bg-slate-100 rounded-3xl transition-all">
                <Plus size={24} className="rotate-45" />
              </button>
            </div>
            
            <div className="p-10 space-y-10">
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Group Designation</label>
                <input type="text" placeholder="e.g. QUANTUM_DYNAMICS_HUB" className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 focus:ring-1 focus:ring-blue-500/20 focus:bg-white outline-none transition-all font-bold" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between px-1">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Personnel Selection</label>
                  <div className="relative group/search">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                    <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold outline-none" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {MOCK_USERS.map(user => (
                    <label key={user.id} className="flex items-center space-x-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl cursor-pointer hover:bg-white hover:border-blue-200 transition-all group">
                      <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-200 text-blue-600 focus:ring-blue-500" />
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-slate-900 uppercase">{user.firstName} {user.lastName}</span>
                        <span className="text-[9px] font-bold text-slate-400 tracking-widest">{user.studentId}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-6 pt-10 border-t border-slate-50">
                <button 
                  onClick={() => setShowAdd(false)}
                  className="px-8 py-4 text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-slate-900 transition-colors"
                >
                  Discard Proposal
                </button>
                <button 
                  className="px-12 py-4 rounded-3xl bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all shadow-xl active:scale-95"
                >
                  Commit Cluster
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Groups;
