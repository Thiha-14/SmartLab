
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Labs from './pages/Labs';
import Scheduling from './pages/Scheduling';
import Users from './pages/Users';
import Groups from './pages/Groups';
import Holidays from './pages/Holidays';
import Allowances from './pages/Allowances';
import Equipment from './pages/Equipment';
import Language from './pages/Language';
import { AuthPage } from './pages/AuthPages';
import { Bell, Search, Globe, ChevronDown, Settings, HelpCircle, Activity } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'forgot' | 'dashboard'>('login');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (currentPage !== 'dashboard') {
    return <AuthPage type={currentPage as any} onNavigate={setCurrentPage} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'labs': return <Labs />;
      case 'scheduling': return <Scheduling />;
      case 'equipment': return <Equipment />;
      case 'users': return <Users />;
      case 'groups': return <Groups />;
      case 'holidays': return <Holidays />;
      case 'allowances': return <Allowances />;
      case 'language': return <Language />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden relative bg-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 opacity-[0.02] grayscale"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/20" />
      </div>

      <div className="relative z-10 flex min-h-screen">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onLogout={() => setCurrentPage('login')} 
        />
        
        <main className="flex-1 ml-72 flex flex-col">
          {/* High-Resolution Dynamic Header */}
          <header className={`h-24 px-12 flex items-center justify-between sticky top-0 z-30 transition-all duration-700 ${
            scrolled ? 'bg-white/80 backdrop-blur-3xl border-b border-slate-100 shadow-xl shadow-slate-200/20' : 'bg-transparent'
          }`}>
            <div className="flex-1 max-w-2xl relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
              <input 
                type="text" 
                placeholder="Query personnel, nodes or directives..." 
                className="w-full pl-16 pr-8 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-1 focus:ring-blue-600/20 focus:bg-white outline-none text-base font-medium text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
              />
            </div>

            <div className="flex items-center space-x-8 ml-10">
              <div className="flex items-center space-x-3">
                <button className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all relative group shadow-sm bg-white border border-slate-100">
                  <Bell size={24} />
                  <span className="absolute top-3 right-3 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
                  <div className="absolute top-full mt-4 right-0 w-80 bg-white border border-slate-100 rounded-3xl p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Node Notifications</p>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
                         <p className="text-xs font-bold text-slate-900">Alpha Cluster Maintained</p>
                         <p className="text-[10px] text-slate-400 mt-1">Maintenance sequence complete for SECTOR_01</p>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all shadow-sm bg-white border border-slate-100">
                  <Settings size={24} />
                </button>
              </div>
              
              <div className="h-10 w-px bg-slate-200"></div>
              
              <div className="flex items-center space-x-5 cursor-pointer group px-4 py-2 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100">
                <div className="text-right hidden xl:block">
                  <p className="text-base font-black text-slate-900 tracking-tight leading-none">Usman Ali</p>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">MASTER_AUTH</p>
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black shadow-2xl group-hover:scale-105 transition-transform group-hover:bg-blue-600">
                    UA
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Viewport */}
          <div className="p-12 max-w-[1800px] mx-auto w-full flex-1">
             {renderContent()}
          </div>

          {/* High-Fidelity Footer */}
          <footer className="p-10 mt-auto border-t border-slate-100 bg-slate-50/50 backdrop-blur-xl">
            <div className="flex justify-between items-center text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
              <div className="flex items-center space-x-12">
                <span className="text-slate-900">SmartLab &copy; 2024</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">Core Documentation</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">Security Protocol</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">SLA Monitor</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1.5 text-blue-600">
                  <Activity size={16} />
                  <span>SYNC STATUS: 100% (STABLE)</span>
                </div>
                <div className="h-4 w-px bg-slate-200"></div>
                <span className="text-slate-300">NODE: US-EAST-01</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
