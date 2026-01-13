'use client';

import React, { useState, useEffect } from 'react';
import { UsersRound, Plus, X, Check, ArrowRight, Trash2, Users, User as UserIcon, Shield } from 'lucide-react';
// Make sure this path points to your actual types definition file
import { Group, User } from '@/types'; 

export default function GroupsPage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    // Check for window to avoid server-side errors
    if (typeof window !== 'undefined') {
        setGroups(JSON.parse(localStorage.getItem('sl_groups') || '[]'));
        setUsers(JSON.parse(localStorage.getItem('sl_users') || '[]'));
    }
  }, []);

  const saveGroups = (updated: Group[]) => {
    setGroups(updated);
    localStorage.setItem('sl_groups', JSON.stringify(updated));
  };

  const toggleUser = (id: string) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
    );
  };

  const handleCreateGroup = () => {
    if (!newGroupName) return;
    const newGroup: Group = {
      id: 'g' + Date.now(),
      name: newGroupName,
      userIds: selectedUsers
    };
    saveGroups([...groups, newGroup]);
    setModalOpen(false);
    setNewGroupName('');
    setSelectedUsers([]);
  };

  const deleteGroup = (id: string) => {
    if (confirm('Remove this group permanently?')) {
      saveGroups(groups.filter(g => g.id !== id));
    }
  };

  const getGroupStats = (group: Group) => {
    const groupUsers = users.filter(u => group.userIds.includes(u.id));
    const roles = groupUsers.reduce((acc, u) => {
      acc[u.role] = (acc[u.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return roles;
  };

  return (
    <div className="space-y-6 md:space-y-10 pb-10 md:pb-20 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
        <div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mb-1 md:mb-2">Research Teams</h2>
          <p className="text-sm md:text-lg text-slate-500 font-bold">Organize researchers into collaborative groups • {groups.length} active teams</p>
        </div>
        <button 
          onClick={() => setModalOpen(true)} 
          className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl font-black shadow-lg md:shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2 md:gap-3 group text-sm md:text-base"
        >
          <Plus size={20} className="group-hover:rotate-90 transition-transform" /> Create Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
        {groups.map((group) => {
          const stats = getGroupStats(group);
          const isExpanded = expandedGroup === group.id;
          
          return (
            <div 
              key={group.id} 
              className="bg-white rounded-[28px] md:rounded-[40px] border border-slate-100 md:border-2 shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl hover:border-blue-200 transition-all overflow-hidden group/card"
            >
              <div className="p-5 md:p-8">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg md:shadow-xl shadow-blue-500/20 group-hover/card:scale-110 transition-transform">
                    <UsersRound size={24} className="md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <button 
                    onClick={() => deleteGroup(group.id)} 
                    className="p-2 md:p-3 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-xl md:rounded-2xl transition-all opacity-0 group-hover/card:opacity-100"
                  >
                    <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
                  </button>
                </div>

                <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-2 md:mb-3 leading-tight group-hover/card:text-blue-600 transition-colors line-clamp-2">
                  {group.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-4 md:mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs md:text-sm font-bold text-slate-600">{group.userIds.length} Members</span>
                  </div>
                  {Object.keys(stats).length > 0 && (
                    <div className="flex items-center gap-2">
                      <Shield size={12} className="md:w-[14px] md:h-[14px] text-blue-500" />
                      <span className="text-xs md:text-sm font-bold text-slate-600">{Object.keys(stats).length} Roles</span>
                    </div>
                  )}
                </div>

                {/* Member Avatars */}
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {group.userIds.slice(0, 5).map((uid, i) => {
                      const u = users.find(u => u.id === uid);
                      return (
                        <div 
                          key={i} 
                          className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 text-white border-2 md:border-3 border-white flex items-center justify-center text-xs md:text-sm font-black shadow-md md:shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer"
                          title={u ? `${u.firstName} ${u.lastName}` : 'Unknown'}
                        >
                          {u ? u.firstName[0] : '?'}
                        </div>
                      );
                    })}
                    {group.userIds.length > 5 && (
                      <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-2 md:border-3 border-white flex items-center justify-center text-[10px] md:text-xs font-black shadow-md md:shadow-lg">
                        +{group.userIds.length - 5}
                      </div>
                    )}
                  </div>
                </div>

                {/* Role Distribution */}
                {Object.keys(stats).length > 0 && (
                  <div className="space-y-2 mb-4 md:mb-6 p-3 md:p-4 bg-slate-50 rounded-xl md:rounded-2xl">
                    {Object.entries(stats).map(([role, count]) => (
                      <div key={role} className="flex justify-between items-center">
                        <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-wider">{role}</span>
                        <span className="text-[10px] md:text-xs font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{count}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Expand/View Members */}
                <button
                  onClick={() => setExpandedGroup(isExpanded ? null : group.id)}
                  className="w-full py-2.5 md:py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl md:rounded-2xl font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Users size={14} className="md:w-4 md:h-4" />
                  {isExpanded ? 'Hide Members' : 'View All Members'}
                  <ArrowRight size={14} className={`md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {/* Expanded Member List */}
              {isExpanded && (
                <div className="border-t border-slate-100 md:border-t-2 bg-slate-50 p-4 md:p-6 animate-in slide-in-from-top duration-300">
                  <div className="space-y-2 md:space-y-3 max-h-48 md:max-h-64 overflow-y-auto">
                    {group.userIds.map((uid) => {
                      const u = users.find(user => user.id === uid);
                      if (!u) return null;
                      return (
                        <div key={uid} className="flex items-center gap-3 p-3 bg-white rounded-xl md:rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-black text-xs md:text-sm shadow-md shrink-0">
                            {u.firstName[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-black text-slate-900 text-xs md:text-sm truncate">{u.firstName} {u.lastName}</p>
                            <p className="text-[10px] md:text-xs text-slate-500 font-bold truncate">{u.role} • {u.studentId}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {groups.length === 0 && (
          <div className="col-span-full py-16 md:py-32 text-center">
            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl md:rounded-full flex items-center justify-center">
              <UsersRound size={36} className="md:w-12 md:h-12 text-blue-300" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-300 mb-2">No Teams Yet</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium mb-4 md:mb-6 px-4">Create your first research team to get started</p>
            <button 
              onClick={() => setModalOpen(true)}
              className="bg-blue-600 text-white px-5 md:px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all inline-flex items-center gap-2 text-sm md:text-base"
            >
              <Plus size={16} className="md:w-[18px] md:h-[18px]" /> Create First Team
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Glass Background with white accent */}
            <div className="absolute inset-0 rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
            }} />
            
            <div className="relative z-10 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col">
              {/* Enhanced Header with white glass */}
              <div className="relative overflow-hidden p-5 md:p-8 bg-gradient-to-br from-white/20 via-blue-400/10 to-white/5 border-b border-white/30 backdrop-blur-md">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse" />
                
                <div className="relative flex justify-between items-start md:items-center gap-3">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-1 md:mb-3 text-white drop-shadow-lg">
                      Create Team
                    </h2>
                    <div className="text-xs md:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Build collaborative research groups
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
                {/* Step 1: Team Name */}
                <div className="space-y-2 md:space-y-3">
                  <label className="text-xs md:text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-xl md:rounded-2xl bg-white/30 text-white flex items-center justify-center text-[11px] md:text-xs font-black shadow-lg border border-white/40">1</div>
                    Team Name
                  </label>
                  <div className="relative group">
                    <input
                      value={newGroupName}
                      onChange={e => setNewGroupName(e.target.value)}
                      className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base md:text-lg placeholder:text-white/50 backdrop-blur-sm text-white"
                      placeholder="e.g. Quantum Physics Research Team"
                    />
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-focus-within:from-white/10 group-focus-within:to-white/10 pointer-events-none transition-all" />
                  </div>
                </div>

                {/* Step 2: Select Members */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <label className="text-xs md:text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-xl md:rounded-2xl bg-white/30 text-white flex items-center justify-center text-[11px] md:text-xs font-black shadow-lg border border-white/40">2</div>
                      Select Members
                    </label>
                    <span className="text-xs md:text-sm font-black text-white bg-white/20 border border-white/40 px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl backdrop-blur-sm">
                      {selectedUsers.length} Selected
                    </span>
                  </div>
                  
                  {/* Members List Container */}
                  <div className="relative group/list">
                    <div className="max-h-64 md:max-h-80 overflow-y-auto rounded-2xl md:rounded-3xl bg-white/10 border border-white/30 backdrop-blur-sm p-2 md:p-3 space-y-2 transition-all">
                      {users.length === 0 ? (
                        <div className="text-center py-8 md:py-12">
                          <UserIcon size={40} className="md:w-12 md:h-12 mx-auto text-white/40 mb-2 md:mb-3" />
                          <p className="text-sm md:text-base text-white/50 font-semibold">No users available</p>
                        </div>
                      ) : (
                        users.map((user) => (
                          <label 
                            key={user.id} 
                            className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer transition-all group/item backdrop-blur-sm ${
                              selectedUsers.includes(user.id) 
                                ? 'bg-white/25 border border-white/50 shadow-lg shadow-white/20' 
                                : 'bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/40'
                            }`}
                          >
                            {/* Checkbox */}
                            <div className={`w-6 h-6 md:w-7 md:h-7 rounded-lg md:rounded-xl border-2 md:border-3 flex items-center justify-center transition-all shrink-0 ${
                              selectedUsers.includes(user.id) 
                                ? 'bg-white/40 border-white/60 scale-110 shadow-lg shadow-white/30' 
                                : 'bg-white/10 border-white/40 group-hover/item:border-white/60 group-hover/item:bg-white/20'
                            }`}>
                              {selectedUsers.includes(user.id) && <Check size={14} className="md:w-4 md:h-4 text-white" strokeWidth={3} />}
                            </div>
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={selectedUsers.includes(user.id)}
                              onChange={() => toggleUser(user.id)}
                            />
                            {/* Avatar */}
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-white/40 to-white/20 text-white flex items-center justify-center font-black text-xs md:text-sm shadow-lg shrink-0 border border-white/30">
                              {user.firstName[0]}
                            </div>
                            {/* User Info */}
                            <div className="flex-1 min-w-0">
                              <p className="text-xs md:text-sm font-black text-white leading-tight truncate">{user.firstName} {user.lastName}</p>
                              <p className="text-[10px] md:text-xs text-white/70 font-semibold truncate">{user.role} • {user.studentId}</p>
                            </div>
                          </label>
                        ))
                      )}
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-white/0 to-white/0 group-focus-within:from-white/20 group-focus-within:to-white/20 pointer-events-none transition-all blur-lg" />
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
                  onClick={handleCreateGroup} 
                  disabled={!newGroupName || selectedUsers.length === 0}
                  className="order-1 sm:order-2 flex-1 py-3 md:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl md:rounded-3xl font-black shadow-xl md:shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm md:text-base group/create backdrop-blur-sm border border-white/50"
                >
                  <Check size={18} className="md:w-5 md:h-5 group-hover/create:rotate-12 transition-transform" /> Create Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}