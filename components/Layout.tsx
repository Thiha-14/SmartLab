'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FlaskConical,
  CalendarClock,
  Users,
  CalendarDays,
  UsersRound,
  LogOut,
  Menu,
  Bell,
  X,
} from 'lucide-react';
import { User, UserRole } from '../types';

interface LayoutProps {
  user: User;
  onLogout: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ user, onLogout, children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Lab Rooms', icon: FlaskConical, path: '/labs' },
    { label: 'Booking', icon: CalendarClock, path: '/scheduling' },
    { label: 'Users', icon: Users, path: '/users', role: [UserRole.MASTER, UserRole.CONFIGURATOR] },
    { label: 'Groups', icon: UsersRound, path: '/groups', role: [UserRole.MASTER, UserRole.CONFIGURATOR] },
    { label: 'Holidays', icon: CalendarDays, path: '/off-days' },
  ];

  const closeSidebar = () => setSidebarOpen(false);
  const isActive = (path: string) => pathname === path;

  const handleSignOutClick = () => {
    setShowSignOutConfirm(true);
  };

  const handleNavigation = () => {
    closeSidebar();
  };

  const handleConfirmSignOut = () => {
    setShowSignOutConfirm(false);
    onLogout();
  };

  return (
    <div className="min-h-screen flex bg-slate-50 relative">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={closeSidebar}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-zinc-950 text-white border-r border-zinc-900 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-4 group">
              <img src="/sm.png" alt="Smart Lab" className="w-10 h-10 rounded-xl shadow-lg group-hover:scale-105 transition-all" />
              <span className="text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">Smart Lab</span>
            </Link>
            <button onClick={closeSidebar} className="md:hidden p-2 text-zinc-500 hover:text-white transition-all">
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1">
            {navItems.filter(item => !item.role || item.role.includes(user.role)).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={handleNavigation}
                prefetch={true}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group ${isActive(item.path)
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                  }`}
              >
                <item.icon size={20} className={isActive(item.path) ? 'text-white' : 'text-zinc-400 group-hover:text-white'} />
                <span className="font-semibold text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-zinc-900">
            <button
              onClick={handleSignOutClick}
              className="flex items-center gap-4 w-full px-4 py-3 text-zinc-500 hover:bg-rose-500/10 hover:text-rose-500 rounded-xl transition-all duration-200"
            >
              <LogOut size={20} />
              <span className="font-semibold text-sm">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 md:px-10 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-all"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-base md:text-lg font-bold text-slate-900 tracking-tight line-clamp-1">
              {navItems.find(item => item.path === pathname)?.label || 'Overview'}
            </h1>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:flex items-center gap-1">
              <button className="p-2 text-slate-400 hover:text-blue-600 transition-all relative">
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
              </button>
            </div>
            <div className="hidden sm:block h-6 w-px bg-slate-200 mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden lg:block">
                <p className="text-sm font-bold text-slate-900 leading-none">{user.firstName}</p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase">{user.role}</p>
              </div>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-bold text-sm shadow-md">
                {user.firstName[0]}{user.lastName[0]}
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8 flex-1 overflow-y-auto bg-slate-50">
          {children}
        </main>

        {/* Sign Out Confirmation Modal */}
        {showSignOutConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl animate-in fade-in duration-300">
            <div className="w-full max-w-sm max-h-[90vh] flex flex-col overflow-hidden">
              {/* Glass Background with white accent */}
              <div className="absolute inset-0 rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
              }} />
              
              <div className="relative z-10 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col">
                {/* Enhanced Header with red/warning gradient */}
                <div className="relative overflow-hidden p-5 md:p-8 bg-gradient-to-br from-rose-500/80 via-rose-400/60 to-rose-600/70 border-b border-white/30 backdrop-blur-md">
                  {/* Subtle gradient background */}
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-rose-300 via-white to-rose-300 animate-pulse" />
                  
                  <div className="relative flex justify-between items-start md:items-center gap-3">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black mb-1 md:mb-3 text-white drop-shadow-lg">
                        Sign Out?
                      </h2>
                      <div className="text-xs md:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Confirm your session termination
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowSignOutConfirm(false)} 
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl md:rounded-3xl bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all backdrop-blur-sm group/close"
                    >
                      <X size={22} className="md:w-6 md:h-6 text-white group-hover/close:rotate-90 transition-all" />
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 md:p-10 space-y-6 md:space-y-8 overflow-y-auto bg-gradient-to-b from-white/10 via-white/5 to-white/5 backdrop-blur-md">
                  <p className="text-center text-white/90 text-base md:text-lg leading-relaxed font-semibold">
                    Are you sure you want to sign out? You'll need to log in again to access your account.
                  </p>
                </div>

                {/* Footer with Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-t from-white/10 to-transparent border-t border-white/30 backdrop-blur-md shrink-0">
                  <button
                    onClick={() => setShowSignOutConfirm(false)}
                    className="order-2 sm:order-1 flex-1 py-3 md:py-4 font-black text-white hover:text-white rounded-2xl md:rounded-3xl transition-all border border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 text-sm md:text-base backdrop-blur-sm group/cancel"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmSignOut}
                    className="order-1 sm:order-2 flex-1 py-3 md:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl md:rounded-3xl font-black shadow-xl md:shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm md:text-base group/create backdrop-blur-sm border border-white/50"
                  >
                    <LogOut size={18} className="md:w-5 md:h-5 group-hover/create:rotate-12 transition-transform" />
                    Yes, Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Layout);
