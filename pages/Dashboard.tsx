
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FlaskConical, Users, ShieldCheck, Cpu, TrendingUp, Zap, Server, ShieldAlert } from 'lucide-react';

const stats = [
  { label: 'Active Facilities', value: '18', trend: '+2', icon: FlaskConical, color: 'bg-blue-600' },
  { label: 'Auth Personnel', value: '2.4k', trend: '+142', icon: Users, color: 'bg-slate-900' },
  { label: 'Cloud Node Load', value: '42ms', trend: 'LOW', icon: Cpu, color: 'bg-blue-500' },
  { label: 'System Uptime', value: '99.9%', trend: 'MAX', icon: ShieldCheck, color: 'bg-slate-800' },
];

const teamMembers = [
  { name: 'Usman', role: 'Lead Architect', initial: 'U' },
  { name: 'Awab', role: 'Backend Engineer', initial: 'A' },
  { name: 'Lynx', role: 'Security Specialist', initial: 'L' },
  { name: 'Islam', role: 'UI/UX Designer', initial: 'I' }
];

const areaData = [
  { time: '00:00', load: 30 },
  { time: '04:00', load: 25 },
  { time: '08:00', load: 60 },
  { time: '12:00', load: 95 },
  { time: '16:00', load: 80 },
  { time: '20:00', load: 45 },
  { time: '23:59', load: 35 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">
            <Zap size={16} fill="currentColor" />
            <span>Real-time Analytics Engine</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">Control Center</h2>
          <p className="text-slate-500 font-medium max-w-xl text-lg">Overseeing SmartLab high-performance research nodes and secure workforce clusters.</p>
        </div>
        
        <div className="flex bg-slate-50 border border-slate-100 rounded-3xl p-1.5 shadow-sm">
          <div className="px-8 py-4 border-r border-slate-200 flex flex-col items-center">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Efficiency</span>
            <span className="text-2xl font-black text-slate-900">98.4%</span>
          </div>
          <div className="px-8 py-4 flex flex-col items-center">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Network</span>
            <span className="text-2xl font-black text-blue-600">STABLE</span>
          </div>
        </div>
      </div>

      {/* Stats Cluster */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-700 group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className={`p-5 rounded-3xl ${stat.color} text-white shadow-xl`}>
                <stat.icon size={28} />
              </div>
              <div className="flex items-center space-x-1.5 text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                <TrendingUp size={12} />
                <span>{stat.trend}</span>
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Utilization Matrix */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[3rem] p-12 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Throughput Matrix</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Global Resource Allocation</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Live Sync</span>
            </div>
          </div>
          
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="primaryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(0,0,0,0.04)" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '900'}} dy={15} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '900'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #f1f5f9', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#0f172a', fontWeight: '900', textTransform: 'uppercase', fontSize: '10px' }}
                />
                <Area type="monotone" dataKey="load" stroke="#2563eb" strokeWidth={5} fillOpacity={1} fill="url(#primaryGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Operational Teams Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 flex flex-col relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px]"></div>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black text-white tracking-tight">Core Units</h3>
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] px-3 py-1 bg-blue-400/10 rounded-full border border-blue-400/20">Operational</span>
          </div>
          
          <div className="space-y-6 flex-1">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex items-center justify-between group cursor-default">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-lg group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                    {member.initial}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-base font-black text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors">{member.name}</p>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{member.role}</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Status</span>
              <span className="text-[10px] font-black text-green-400 uppercase">Synchronized</span>
            </div>
            <button className="w-full py-5 bg-white text-slate-950 font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
              Protocol Governance
            </button>
          </div>
        </div>
      </div>

      {/* Transaction Log */}
      <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm">
        <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Ledger Journal</h3>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Secure Transaction Audit</p>
          </div>
          <button className="px-6 py-2.5 text-[10px] font-black text-blue-600 bg-white border border-blue-100 rounded-xl uppercase tracking-widest hover:bg-blue-50 transition-all shadow-sm">
            Export Audit
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Personnel Instance</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Group</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Directive</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Verification</th>
                <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Time-Hash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'USMAN ALI', group: 'CORE_ADMIN', dir: 'REGISTRY_MOD', status: 'VERIFIED', time: '12:04:22' },
                { name: 'SARAH CHEN', group: 'RE_UNIT_01', dir: 'NODE_RESERVE', status: 'VERIFIED', time: '11:58:14' },
                { name: 'AWAB AHMED', group: 'CONFIG_X', dir: 'PROTOCOL_UPD', status: 'VERIFIED', time: '11:42:05' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors cursor-default group">
                  <td className="px-10 py-7">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[11px] font-black text-blue-600">
                        {row.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-black text-slate-700 group-hover:text-slate-950 transition-colors uppercase tracking-tight">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-7 text-xs font-bold text-slate-400">{row.group}</td>
                  <td className="px-10 py-7 text-xs font-black text-slate-500 tracking-tight uppercase">{row.dir}</td>
                  <td className="px-10 py-7">
                    <span className="text-[9px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg tracking-widest">{row.status}</span>
                  </td>
                  <td className="px-10 py-7 text-xs font-bold text-slate-400 font-mono">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
