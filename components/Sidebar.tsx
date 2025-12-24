
import React from 'react';
import { 
  LayoutDashboard, 
  FlaskConical, 
  CalendarDays, 
  Users, 
  Settings, 
  Palmtree,
  MonitorCheck,
  Languages,
  LogOut,
  Atom,
  Zap,
  ChevronRight,
  HardDrive,
  UsersRound
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Control Center' },
    { id: 'labs', icon: FlaskConical, label: 'Lab Managing' },
    { id: 'scheduling', icon: CalendarDays, label: 'Lab Scheduling' },
    { id: 'equipment', icon: HardDrive, label: 'Equipment Master' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'groups', icon: UsersRound, label: 'Groups' },
    { id: 'holidays', icon: Palmtree, label: 'Off Days' },
    { id: 'allowances', icon: MonitorCheck, label: 'Machine Allowance' },
    { id: 'language', icon: Languages, label: 'Language' },
  ];

  return (
    <div className="w-72 bg-black h-full fixed left-0 top-0 flex flex-col text-slate-500 border-r border-white/5 z-40 transition-all shadow-[10px_0_30px_rgba(0,0,0,0.3)]">
      {/* Brand Header */}
      <div className="p-10 flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/30 transform -rotate-6 group hover:rotate-0 transition-transform duration-500">
          <Atom size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-black text-white tracking-tighter leading-none">SmartLab</h1>
          <p className="text-[9px] text-blue-500 font-black tracking-[0.4em] uppercase mt-1">CORE ENGINE</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        <p className="px-4 text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] mb-6">Operations Hub</p>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-4">
              <item.icon size={18} className={activeTab === item.id ? 'scale-110' : 'opacity-50 group-hover:opacity-100 transition-all'} />
              <span className="font-bold text-[13px] tracking-tight">{item.label}</span>
            </div>
            {activeTab === item.id ? (
              <div className="w-1 h-1 rounded-full bg-white shadow-sm"></div>
            ) : (
              <ChevronRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
            )}
          </button>
        ))}
      </nav>

      {/* Action Area */}
      <div className="p-8 space-y-6">
        <div className="bg-white/5 border border-white/5 p-5 rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center space-x-2 text-blue-500 mb-4">
            <Zap size={12} fill="currentColor" />
            <span className="text-[9px] font-black uppercase tracking-widest">Node Capacity</span>
          </div>
          <div className="flex items-end justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 tracking-tight uppercase">Optimal State</span>
            <span className="text-[10px] font-bold text-slate-600">74%</span>
          </div>
          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-[74%] rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)] transition-all duration-1000"></div>
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center space-x-3 px-6 py-3.5 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-400/5 transition-all group border border-transparent hover:border-red-400/10"
        >
          <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-black text-[10px] uppercase tracking-widest">Sign Out Terminal</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
