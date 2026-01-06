'use client';

import React, { useState, useEffect } from 'react';
import { UsersRound, Plus, X, Check, ArrowRight, Trash2, Users, User as UserIcon, Shield } from 'lucide-react';
import { Group, User } from '../types';

const GroupManagement: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    setGroups(JSON.parse(localStorage.getItem('sl_groups') || '[]'));
    setUsers(JSON.parse(localStorage.getItem('sl_users') || '[]'));
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
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[32px] md:rounded-[48px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 md:p-8 text-white shrink-0">
              <div className="flex justify-between items-start md:items-center gap-3">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black mb-1 md:mb-2">Create New Team</h2>
                  <p className="text-xs md:text-base text-blue-100 font-medium">Build a collaborative research group</p>
                </div>
                <button 
                  onClick={() => setModalOpen(false)} 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/20 hover:bg-white/30 transition-colors shrink-0"
                >
                  <X size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            </div>

            <div className="p-5 md:p-10 space-y-6 md:space-y-8 overflow-y-auto">
              <div className="space-y-2 md:space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] md:text-xs font-black">1</div>
                  Team Name
                </label>
                <input
                  value={newGroupName}
                  onChange={e => setNewGroupName(e.target.value)}
                  className="w-full px-4 md:px-6 py-3 md:py-5 bg-slate-50 border border-slate-200 md:border-2 rounded-2xl md:rounded-3xl outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all font-bold text-base md:text-lg placeholder:text-slate-300"
                  placeholder="e.g. Quantum Physics Research Team"
                />
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] md:text-xs font-black">2</div>
                    Select Members
                  </label>
                  <span className="text-xs md:text-sm font-black text-blue-600 bg-blue-50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl">
                    {selectedUsers.length} Selected
                  </span>
                </div>
                
                <div className="max-h-60 md:max-h-80 overflow-y-auto border border-slate-100 md:border-2 rounded-2xl md:rounded-3xl bg-slate-50 p-2 md:p-3 space-y-2">
                  {users.length === 0 ? (
                    <div className="text-center py-8 md:py-12">
                      <UserIcon size={40} className="md:w-12 md:h-12 mx-auto text-slate-200 mb-2 md:mb-3" />
                      <p className="text-sm md:text-base text-slate-400 font-bold">No users available</p>
                    </div>
                  ) : (
                    users.map((user) => (
                      <label 
                        key={user.id} 
                        className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer transition-all group/item ${
                          selectedUsers.includes(user.id) 
                            ? 'bg-blue-50 border border-blue-200 md:border-2 shadow-sm' 
                            : 'bg-white border border-transparent md:border-2 hover:border-slate-200 hover:shadow-sm'
                        }`}
                      >
                        <div className={`w-6 h-6 md:w-7 md:h-7 rounded-lg md:rounded-xl border-2 md:border-3 flex items-center justify-center transition-all shrink-0 ${
                          selectedUsers.includes(user.id) 
                            ? 'bg-blue-600 border-blue-600 scale-110' 
                            : 'bg-white border-slate-300 group-hover/item:border-blue-300'
                        }`}>
                          {selectedUsers.includes(user.id) && <Check size={14} className="md:w-4 md:h-4 text-white" strokeWidth={3} />}
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => toggleUser(user.id)}
                        />
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-black text-xs md:text-sm shadow-md shrink-0">
                          {user.firstName[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs md:text-sm font-black text-slate-900 leading-tight truncate">{user.firstName} {user.lastName}</p>
                          <p className="text-[10px] md:text-xs text-slate-500 font-bold truncate">{user.role} • {user.studentId}</p>
                        </div>
                      </label>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 p-4 md:p-6 bg-slate-50 border-t border-slate-100 md:border-t-2 shrink-0">
              <button 
                onClick={() => setModalOpen(false)} 
                className="order-2 sm:order-1 flex-1 py-3 md:py-4 font-black text-slate-600 hover:bg-white rounded-2xl md:rounded-3xl transition-all border border-slate-200 md:border-2 hover:border-slate-300 text-sm md:text-base"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateGroup} 
                disabled={!newGroupName || selectedUsers.length === 0}
                className="order-1 sm:order-2 flex-1 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl md:rounded-3xl font-black shadow-lg md:shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm md:text-base"
              >
                <Check size={18} className="md:w-5 md:h-5" /> Create Team
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupManagement;
