'use client';

import React, { useState, useEffect } from 'react';
import {
  Plus, Search, Trash2, X, MapPin, FlaskConical, Cpu, ShieldCheck, AlertTriangle, Info, AlertCircle, Check
} from 'lucide-react';
import { useAuth } from '@/app/AuthContext';
import { Lab, UserRole, Equipment, LabRule } from '@/types';

export default function LabsPage() {
  const { user } = useAuth();
  // distinct role variable to control UI elements
  const role = user?.role || UserRole.USER;

  const [activeTab, setActiveTab] = useState<'details' | 'equipment' | 'allowances'>('details');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEqModalOpen, setEqModalOpen] = useState(false);
  const [isRuleModalOpen, setRuleModalOpen] = useState(false);
  const [labs, setLabs] = useState<Lab[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [rules, setRules] = useState<LabRule[]>([]);

  const [newLab, setNewLab] = useState({ name: '', description: '', location: '', photoUrl: '', photoFile: null as File | null });
  const [newEq, setNewEq] = useState({ name: '', manufacturer: '', model: '', serialNumber: '', nextCalibrationDate: '' });
  const [newRule, setNewRule] = useState({ title: '', description: '', category: 'General' as 'Safety' | 'Conduct' | 'Equipment' | 'General', severity: 'Mandatory' as 'Mandatory' | 'Warning' | 'Info' });
  
  const [labErrors, setLabErrors] = useState<string[]>([]);
  const [eqErrors, setEqErrors] = useState<string[]>([]);
  const [ruleErrors, setRuleErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  
  const labTemplates = [
    { label: '🧬 Biology Lab', location: 'Building A, Floor 2' },
    { label: '🖥️ Computer Lab', location: 'Building B, Floor 1' },
    { label: '⚗️ Chemistry Lab', location: 'Building A, Floor 3' },
    { label: '📊 Data Lab', location: 'Building C, Floor 1' },
  ];
  
  const equipmentTemplates = [
    { label: 'Microscope', manufacturer: 'Zeiss', model: 'AxioLab A1' },
    { label: 'Centrifuge', manufacturer: 'Eppendorf', model: '5424R' },
    { label: 'Spectrophotometer', manufacturer: 'PerkinElmer', model: 'Lambda 25' },
    { label: 'PCR Machine', manufacturer: 'Bio-Rad', model: 'T100' },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
        setLabs(JSON.parse(localStorage.getItem('sl_labs') || '[]'));
        setEquipment(JSON.parse(localStorage.getItem('sl_equipment') || '[]'));
        
        const savedRules = localStorage.getItem('sl_lab_rules');
        if (!savedRules) {
        // Initialize with static default rules
        const defaultRules: LabRule[] = [
            {
            id: 'r1',
            title: 'Wear Personal Protective Equipment',
            description: 'Lab coats, safety goggles, and closed-toe shoes must be worn at all times in the laboratory.',
            category: 'Safety',
            severity: 'Mandatory'
            },
            {
            id: 'r2',
            title: 'No Food or Drinks',
            description: 'Consumption of food and beverages is strictly prohibited in all laboratory areas to prevent contamination.',
            category: 'Safety',
            severity: 'Mandatory'
            },
            {
            id: 'r3',
            title: 'Report Equipment Malfunctions',
            description: 'Immediately report any damaged or malfunctioning equipment to lab supervisors. Do not attempt repairs.',
            category: 'Equipment',
            severity: 'Warning'
            },
            {
            id: 'r4',
            title: 'Clean Workstation After Use',
            description: 'All work areas must be cleaned and sanitized after each use. Return equipment to designated storage areas.',
            category: 'Conduct',
            severity: 'Mandatory'
            },
            {
            id: 'r5',
            title: 'Proper Waste Disposal',
            description: 'Dispose of chemical, biological, and sharp waste in designated containers according to safety protocols.',
            category: 'Safety',
            severity: 'Mandatory'
            },
            {
            id: 'r6',
            title: 'Authorized Personnel Only',
            description: 'Lab access is restricted to authorized personnel. Visitors must be accompanied by staff members.',
            category: 'General',
            severity: 'Mandatory'
            },
            {
            id: 'r7',
            title: 'Emergency Procedures',
            description: 'Familiarize yourself with emergency exits, eyewash stations, fire extinguishers, and emergency shutdown procedures.',
            category: 'Safety',
            severity: 'Info'
            },
            {
            id: 'r8',
            title: 'Handle Equipment with Care',
            description: 'Use laboratory equipment only for its intended purpose. Follow manufacturer guidelines and standard operating procedures.',
            category: 'Equipment',
            severity: 'Warning'
            },
            {
            id: 'r9',
            title: 'Maintain Quiet Environment',
            description: 'Keep noise levels to a minimum to ensure a productive working environment. Use headphones for audio content.',
            category: 'Conduct',
            severity: 'Info'
            },
            {
            id: 'r10',
            title: 'Document Your Work',
            description: 'Maintain accurate records of experiments, equipment usage, and observations in lab notebooks or digital systems.',
            category: 'General',
            severity: 'Warning'
            }
        ];
        setRules(defaultRules);
        localStorage.setItem('sl_lab_rules', JSON.stringify(defaultRules));
        } else {
        setRules(JSON.parse(savedRules));
        }
    }
  }, []);

  const saveLabs = (updated: Lab[]) => {
    setLabs(updated);
    localStorage.setItem('sl_labs', JSON.stringify(updated));
  };
  const saveEquipment = (updated: Equipment[]) => {
    setEquipment(updated);
    localStorage.setItem('sl_equipment', JSON.stringify(updated));
  };
  const saveRules = (updated: LabRule[]) => {
    setRules(updated);
    localStorage.setItem('sl_lab_rules', JSON.stringify(updated));
  };

  const handleAddLab = async () => {
    const errors: string[] = [];
    if (!newLab.name || newLab.name === 'custom') errors.push('Lab name is required');
    if (!newLab.description) errors.push('Lab description is required');
    if (!newLab.location) errors.push('Lab location is required');
    
    setLabErrors(errors);
    if (errors.length > 0) return;
    
    let photoUrl = 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800';
    
    // If a photo file was selected, convert to base64
    if (newLab.photoFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        const item: Lab = {
          id: 'l' + Date.now(),
          name: newLab.name,
          description: newLab.description || 'Standard lab facility.',
          location: newLab.location || 'Main Building',
          features: ['Basic Equipment'],
          media: [{
            id: 'm-new',
            url: base64,
            type: 'image',
            name: 'New Lab',
            uploadProgress: 100
          }]
        };
        saveLabs([...labs, item]);
        setNewLab({ name: '', description: '', location: '', photoUrl: '', photoFile: null });
        setLabErrors([]);
        setSuccessMessage(`✅ Lab "${newLab.name}" added successfully!`);
        setTimeout(() => setSuccessMessage(''), 3000);
        setModalOpen(false);
      };
      reader.readAsDataURL(newLab.photoFile);
    } else {
      const item: Lab = {
        id: 'l' + Date.now(),
        name: newLab.name,
        description: newLab.description || 'Standard lab facility.',
        location: newLab.location || 'Main Building',
        features: ['Basic Equipment'],
        media: [{
          id: 'm-new',
          url: photoUrl,
          type: 'image',
          name: 'New Lab',
          uploadProgress: 100
        }]
      };
      saveLabs([...labs, item]);
      setNewLab({ name: '', description: '', location: '', photoUrl: '', photoFile: null });
      setModalOpen(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewLab({ ...newLab, photoFile: file });
      // Generate preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewLab(prev => ({ ...prev, photoUrl: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddEquipment = () => {
    const errors: string[] = [];
    if (!newEq.name) errors.push('Equipment name is required');
    if (!newEq.manufacturer) errors.push('Manufacturer is required');
    if (!newEq.nextCalibrationDate) errors.push('Calibration date is required');
    
    setEqErrors(errors);
    if (errors.length > 0) return;
    
    const item: Equipment = {
      id: 'e' + Date.now(),
      name: newEq.name,
      manufacturer: newEq.manufacturer || 'General',
      model: newEq.model || 'Standard',
      serialNumber: newEq.serialNumber || 'N/A',
      procurementDate: new Date().toISOString().split('T')[0],
      invoiceNumber: 'INV-' + Math.floor(Math.random() * 1000),
      lastCalibrationDate: new Date().toISOString().split('T')[0],
      nextCalibrationDate: newEq.nextCalibrationDate || '2025-12-31',
      calibrationFrequency: 'Yearly'
    };
    saveEquipment([...equipment, item]);
    setNewEq({ name: '', manufacturer: '', model: '', serialNumber: '', nextCalibrationDate: '' });
    setEqErrors([]);
    setSuccessMessage(`✅ Equipment "${newEq.name}" added successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
    setEqModalOpen(false);
  };

  const deleteLab = (id: string) => {
    if (confirm('Delete this lab room?')) saveLabs(labs.filter(l => l.id !== id));
  };

  const deleteEq = (id: string) => {
    if (confirm('Delete this equipment?')) saveEquipment(equipment.filter(e => e.id !== id));
  };

  const handleAddRule = () => {
    const errors: string[] = [];
    if (!newRule.title) errors.push('Rule title is required');
    if (!newRule.description) errors.push('Rule description is required');
    
    setRuleErrors(errors);
    if (errors.length > 0) return;
    
    const item: LabRule = {
      id: 'r' + Date.now(),
      title: newRule.title,
      description: newRule.description,
      category: newRule.category,
      severity: newRule.severity
    };
    saveRules([...rules, item]);
    setNewRule({ title: '', description: '', category: 'General', severity: 'Mandatory' });
    setRuleErrors([]);
    setSuccessMessage(`✅ Rule "${newRule.title}" added successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
    setRuleModalOpen(false);
  };

  const deleteRule = (id: string) => {
    if (confirm('Delete this rule?')) saveRules(rules.filter(r => r.id !== id));
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      {successMessage && (
        <div className="fixed top-4 right-4 z-[200] animate-in slide-in-from-right duration-300">
          <div className="bg-emerald-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black shadow-2xl flex items-center gap-3">
            {successMessage}
          </div>
        </div>
      )}
      
      <div className="flex border-b border-slate-200 gap-6 md:gap-8 mb-4 overflow-x-auto no-scrollbar scroll-smooth">
        {[
          { id: 'details', label: 'Labs', icon: FlaskConical },
          { id: 'equipment', label: 'Equipment', icon: Cpu },
          { id: 'allowances', label: 'Rules', icon: ShieldCheck }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 pb-4 text-xs md:text-sm font-bold transition-all relative whitespace-nowrap ${activeTab === tab.id ? 'text-blue-600' : 'text-slate-400'
              }`}
          >
            <tab.icon size={16} className="md:w-4.5 md:h-4.5" />
            {tab.label}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-blue-600 rounded-full"></div>}
          </button>
        ))}
      </div>

      {activeTab === 'details' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="relative flex-1 sm:max-w-[320px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input type="text" placeholder="Search labs..." className="w-full pl-12 pr-4 py-2.5 md:py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:border-blue-400 font-bold text-sm" />
            </div>
            {role !== UserRole.USER && (
              <button onClick={() => setModalOpen(true)} className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 md:py-3 rounded-2xl font-bold shadow-md hover:bg-blue-700 transition-all text-xs md:text-sm">
                <Plus size={18} /> Add Lab
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {labs.map(lab => (
              <div key={lab.id} className="bg-white rounded-[28px] md:rounded-4xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="h-44 md:h-52 bg-slate-50 relative overflow-hidden">
                  {lab.media[0] ? (
                    <img src={lab.media[0].url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={lab.name} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-200"><FlaskConical size={48} /></div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2 sm:opacity-0 group-hover:opacity-100 transition-all">
                    <button onClick={() => deleteLab(lab.id)} className="p-2 md:p-3 bg-white/90 text-rose-600 rounded-xl shadow-md"><Trash2 size={16} /></button>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 line-clamp-1">{lab.name}</h3>
                  <p className="text-xs md:text-sm text-slate-500 mb-4 md:mb-6 leading-relaxed line-clamp-2">{lab.description}</p>
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-400 bg-slate-50 px-3 md:px-4 py-2 md:py-3 rounded-xl line-clamp-1">
                    <MapPin size={14} className="text-blue-600 shrink-0" /> {lab.location}
                  </div>
                  <button className="w-full mt-4 md:mt-6 py-2.5 md:py-3 bg-slate-50 text-slate-900 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'equipment' && (
        <div className="bg-white rounded-[28px] md:rounded-4xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">Equipment List</h3>
              <p className="text-slate-400 text-[10px] md:text-xs mt-1 uppercase tracking-tight font-semibold">{equipment.length} items total</p>
            </div>
            <button onClick={() => setEqModalOpen(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-950 text-white px-5 py-2.5 md:py-3 rounded-2xl font-bold shadow-md hover:bg-zinc-800 transition-all text-[10px] md:text-xs uppercase tracking-widest">
              <Plus size={16} /> Add Equipment
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-150">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100">
                  <th className="px-6 md:px-8 py-4 md:py-5 tracking-widest">Name</th>
                  <th className="px-6 md:px-8 py-4 md:py-5 tracking-widest">Serial</th>
                  <th className="px-6 md:px-8 py-4 md:py-5 tracking-widest">Calibration</th>
                  <th className="px-6 md:px-8 py-4 md:py-5 text-right tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {equipment.map(item => (
                  <tr key={item.id} className="hover:bg-blue-50/20 transition-colors">
                    <td className="px-6 md:px-8 py-4 md:py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-sm">{item.name[0]}</div>
                        <div>
                          <p className="font-bold text-slate-900 text-xs md:text-sm">{item.name}</p>
                          <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">{item.manufacturer}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 md:px-8 py-4 md:py-6">
                      <span className="font-mono text-[10px] md:text-xs font-bold text-blue-600 bg-blue-50 px-2 md:px-3 py-1 rounded-full">{item.serialNumber}</span>
                    </td>
                    <td className="px-6 md:px-8 py-4 md:py-6">
                      <span className="text-xs md:text-sm font-bold text-slate-700">{item.nextCalibrationDate}</span>
                    </td>
                    <td className="px-6 md:px-8 py-4 md:py-6 text-right">
                      <button onClick={() => deleteEq(item.id)} className="p-2 text-slate-300 hover:text-rose-600 transition-all"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'allowances' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">Lab Rules & Regulations</h3>
              <p className="text-slate-400 text-[10px] md:text-xs mt-1 uppercase tracking-tight font-semibold">{rules.length} rules defined</p>
            </div>
            {role !== UserRole.USER && (
              <button onClick={() => setRuleModalOpen(true)} className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 md:py-3 rounded-2xl font-bold shadow-md hover:bg-blue-700 transition-all text-xs md:text-sm">
                <Plus size={18} /> Add Rule
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {rules.map(rule => {
              const getCategoryColor = () => {
                switch(rule.category) {
                  case 'Safety': return 'bg-red-50 border-red-200 text-red-600';
                  case 'Conduct': return 'bg-blue-50 border-blue-200 text-blue-600';
                  case 'Equipment': return 'bg-amber-50 border-amber-200 text-amber-600';
                  default: return 'bg-slate-50 border-slate-200 text-slate-600';
                }
              };
              
              const getSeverityIcon = () => {
                switch(rule.severity) {
                  case 'Mandatory': return <AlertCircle size={20} className="text-red-500" />;
                  case 'Warning': return <AlertTriangle size={20} className="text-amber-500" />;
                  case 'Info': return <Info size={20} className="text-blue-500" />;
                }
              };

              return (
                <div key={rule.id} className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {getSeverityIcon()}
                      <span className={`text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest ${getCategoryColor()}`}>
                        {rule.category}
                      </span>
                    </div>
                    {role !== UserRole.USER && (
                      <button onClick={() => deleteRule(rule.id)} className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-rose-600 transition-all">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  <h4 className="font-black text-slate-900 text-lg mb-3">{rule.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>

          {rules.length === 0 && (
            <div className="bg-white p-20 rounded-[28px] border border-slate-100 text-center">
              <ShieldCheck size={64} className="mx-auto text-slate-100 mb-4" />
              <p className="text-slate-300 font-black uppercase tracking-widest text-sm">No rules defined yet</p>
            </div>
          )}
        </div>
      )}

      {/* Add Lab Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
            {/* Glass Background with white accent */}
            <div className="absolute inset-0 rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
            }} />
            
            <div className="relative z-10 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col">
              {/* Enhanced Header with blue gradient */}
              <div className="relative overflow-hidden p-5 md:p-8 bg-gradient-to-br from-blue-500/80 via-blue-400/60 to-blue-600/70 border-b border-white/30 backdrop-blur-md">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse" />
                
                <div className="relative flex justify-between items-start md:items-center gap-3">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-1 md:mb-3 text-white drop-shadow-lg">
                      Add New Lab Room
                    </h2>
                    <div className="text-xs md:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Create laboratory facilities
                    </div>
                  </div>
                  <button 
                    onClick={() => {setModalOpen(false); setLabErrors([]);}} 
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl md:rounded-3xl bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all backdrop-blur-sm group/close"
                  >
                    <X size={22} className="md:w-6 md:h-6 text-white group-hover/close:rotate-90 transition-all" />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 md:p-10 space-y-6 md:space-y-8 overflow-y-auto bg-gradient-to-b from-white/10 via-white/5 to-white/5 backdrop-blur-md">
                {labErrors.length > 0 && (
                  <div className="mb-6 p-4 bg-rose-500/20 border border-rose-400/40 rounded-2xl backdrop-blur-sm">
                    <p className="text-rose-200 font-black text-sm mb-2">⚠️ Please fill in the following:</p>
                    <ul className="space-y-1">
                      {labErrors.map((error, idx) => (
                        <li key={idx} className="text-rose-100 text-sm font-bold">• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
            
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Lab Name</label>
                    <select value={newLab.name} onChange={(e) => {
                      const selected = labTemplates.find(t => t.label === e.target.value);
                      setNewLab({ ...newLab, name: e.target.value, location: selected?.location || newLab.location });
                      setLabErrors([]);
                    }} className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base md:text-lg placeholder:text-white/50 backdrop-blur-sm text-white cursor-pointer">
                      <option value="">e.g. Physics Lab 1</option>
                      {labTemplates.map((template) => (
                        <option key={template.label} value={template.label}>{template.label}</option>
                      ))}
                      <option value="custom">+ Custom Lab Name</option>
                    </select>
                    {newLab.name && !labTemplates.some(t => t.label === newLab.name) && (
                      <input type="text" value={newLab.name} onChange={(e) => setNewLab({ ...newLab, name: e.target.value })} className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white mt-2" placeholder="Enter custom lab name..." />
                    )}
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">About the Lab</label>
                    <textarea value={newLab.description} onChange={(e) => setNewLab({ ...newLab, description: e.target.value })} className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold placeholder:text-white/50 backdrop-blur-sm text-white min-h-20 md:min-h-25" placeholder="Enter details..." />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Lab Photo</label>
                    <div className="flex flex-col gap-3">
                      {newLab.photoUrl && (
                        <div className="relative w-full h-40 rounded-2xl md:rounded-3xl overflow-hidden border border-white/40">
                          <img src={newLab.photoUrl} alt="Lab preview" className="w-full h-full object-cover" />
                          <button
                            onClick={() => setNewLab({ ...newLab, photoUrl: '', photoFile: null })}
                            className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-lg hover:bg-rose-500 hover:text-white transition-all"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                      <label className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 border-dashed rounded-2xl md:rounded-3xl outline-none font-bold text-sm text-white cursor-pointer hover:border-white/60 hover:bg-white/25 transition-all text-center backdrop-blur-sm">
                        {newLab.photoFile ? `📷 ${newLab.photoFile.name}` : '📷 Click to upload or select image'}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest flex items-center gap-1">
                      <MapPin size={12} /> Lab Location
                    </label>
                    <input
                      type="text"
                      value={newLab.location}
                      onChange={(e) => setNewLab({ ...newLab, location: e.target.value })}
                      className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                      placeholder="e.g. Building A, Room 101"
                    />
                  </div>
                </div>
              </div>

              {/* Footer with Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-t from-white/10 to-transparent border-t border-white/30 backdrop-blur-md shrink-0">
                <button 
                  onClick={() => { setNewLab({ name: '', description: '', location: '', photoUrl: '', photoFile: null }); setModalOpen(false); }} 
                  className="order-2 sm:order-1 flex-1 py-3 md:py-4 font-black text-white hover:text-white rounded-2xl md:rounded-3xl transition-all border border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 text-sm md:text-base backdrop-blur-sm group/cancel"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddLab} 
                  className="order-1 sm:order-2 flex-1 py-3 md:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl md:rounded-3xl font-black shadow-xl md:shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm md:text-base group/create backdrop-blur-sm border border-white/50"
                >
                  <Check size={18} className="md:w-5 md:h-5 group-hover/create:rotate-12 transition-transform" /> Save Lab
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Equipment Modal */}
      {isEqModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
            {/* Glass Background with white accent */}
            <div className="absolute inset-0 rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
            }} />
            
            <div className="relative z-10 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col">
              {/* Enhanced Header with blue gradient */}
              <div className="relative overflow-hidden p-5 md:p-8 bg-gradient-to-br from-blue-500/80 via-blue-400/60 to-blue-600/70 border-b border-white/30 backdrop-blur-md">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse" />
                
                <div className="relative flex justify-between items-start md:items-center gap-3">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-1 md:mb-3 text-white drop-shadow-lg">
                      Add Equipment
                    </h2>
                    <div className="text-xs md:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Manage lab inventory
                    </div>
                  </div>
                  <button 
                    onClick={() => {setEqModalOpen(false); setEqErrors([]);}} 
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl md:rounded-3xl bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all backdrop-blur-sm group/close"
                  >
                    <X size={22} className="md:w-6 md:h-6 text-white group-hover/close:rotate-90 transition-all" />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 md:p-10 space-y-6 md:space-y-8 overflow-y-auto bg-gradient-to-b from-white/10 via-white/5 to-white/5 backdrop-blur-md">
                {eqErrors.length > 0 && (
                  <div className="mb-6 p-4 bg-rose-500/20 border border-rose-400/40 rounded-2xl backdrop-blur-sm">
                    <p className="text-rose-200 font-black text-sm mb-2">⚠️ Please fill in the following:</p>
                    <ul className="space-y-1">
                      {eqErrors.map((error, idx) => (
                        <li key={idx} className="text-rose-100 text-sm font-bold">• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
            
                <div className="space-y-4 md:space-y-5">
                  <div className="bg-white/15 rounded-[24px] md:rounded-[32px] p-4 md:p-6 border border-white/40">
                    <label className="text-[10px] font-black text-white/90 uppercase tracking-widest mb-3 md:mb-4 block">Quick Equipment Template</label>
                    <div className="space-y-2">
                      {equipmentTemplates.map((template) => (
                        <button
                          key={template.label}
                          onClick={() => setNewEq({ ...newEq, name: template.label, manufacturer: template.manufacturer, model: template.model })}
                          className="w-full py-2 md:py-3 px-3 md:px-4 rounded-xl font-black text-[9px] md:text-[10px] bg-white/20 text-white border border-white/40 hover:border-white/60 hover:bg-white/30 transition-all text-left"
                        >
                          {template.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Name</label>
                    <input value={newEq.name} onChange={e => setNewEq({ ...newEq, name: e.target.value })} className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white" placeholder="e.g. Microscope A1" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Serial</label>
                      <input value={newEq.serialNumber} onChange={e => setNewEq({ ...newEq, serialNumber: e.target.value })} className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white" placeholder="SN-XXXX" />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Calibration Date</label>
                      <input type="date" value={newEq.nextCalibrationDate} onChange={e => setNewEq({ ...newEq, nextCalibrationDate: e.target.value })} className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer with Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-t from-white/10 to-transparent border-t border-white/30 backdrop-blur-md shrink-0">
                <button 
                  onClick={() => {setEqModalOpen(false); setEqErrors([]);}} 
                  className="order-2 sm:order-1 flex-1 py-3 md:py-4 font-black text-white hover:text-white rounded-2xl md:rounded-3xl transition-all border border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 text-sm md:text-base backdrop-blur-sm group/cancel"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddEquipment} 
                  className="order-1 sm:order-2 flex-1 py-3 md:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl md:rounded-3xl font-black shadow-xl md:shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm md:text-base group/create backdrop-blur-sm border border-white/50"
                >
                  <Check size={18} className="md:w-5 md:h-5 group-hover/create:rotate-12 transition-transform" /> Add to Inventory
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Rule Modal */}
      {isRuleModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
            {/* Glass Background with white accent */}
            <div className="absolute inset-0 rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
            }} />
            
            <div className="relative z-10 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col">
              {/* Enhanced Header with blue gradient */}
              <div className="relative overflow-hidden p-5 md:p-8 bg-gradient-to-br from-blue-500/80 via-blue-400/60 to-blue-600/70 border-b border-white/30 backdrop-blur-md">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse" />
                
                <div className="relative flex justify-between items-start md:items-center gap-3">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-1 md:mb-3 text-white drop-shadow-lg">
                      Add Lab Rule
                    </h2>
                    <div className="text-xs md:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Define safety and conduct guidelines
                    </div>
                  </div>
                  <button 
                    onClick={() => {setRuleModalOpen(false); setRuleErrors([]);}} 
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl md:rounded-3xl bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all backdrop-blur-sm group/close"
                  >
                    <X size={22} className="md:w-6 md:h-6 text-white group-hover/close:rotate-90 transition-all" />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 md:p-10 space-y-6 md:space-y-8 overflow-y-auto bg-gradient-to-b from-white/10 via-white/5 to-white/5 backdrop-blur-md">
                {ruleErrors.length > 0 && (
                  <div className="mb-6 p-4 bg-rose-500/20 border border-rose-400/40 rounded-2xl backdrop-blur-sm">
                    <p className="text-rose-200 font-black text-sm mb-2">⚠️ Please fill in the following:</p>
                    <ul className="space-y-1">
                      {ruleErrors.map((error, idx) => (
                        <li key={idx} className="text-rose-100 text-sm font-bold">• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
            
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Rule Title</label>
                    <input value={newRule.title} onChange={e => {setNewRule({ ...newRule, title: e.target.value }); setRuleErrors([]);}} className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white" placeholder="e.g. Wear Safety Goggles" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Description</label>
                    <textarea value={newRule.description} onChange={e => setNewRule({ ...newRule, description: e.target.value })} className="w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold placeholder:text-white/50 backdrop-blur-sm text-white min-h-24" placeholder="Describe the rule details..." />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Category</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['Safety', 'Conduct', 'Equipment', 'General'] as const).map(cat => (
                        <button
                          key={cat}
                          onClick={() => setNewRule({ ...newRule, category: cat })}
                          className={`py-3 rounded-2xl md:rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${
                            newRule.category === cat
                              ? cat === 'Safety' ? 'bg-red-600 text-white shadow-lg' :
                                cat === 'Conduct' ? 'bg-blue-600 text-white shadow-lg' :
                                cat === 'Equipment' ? 'bg-amber-600 text-white shadow-lg' :
                                'bg-slate-600 text-white shadow-lg'
                              : 'bg-white/10 text-white/70 border border-white/20 hover:border-white/40 hover:bg-white/20'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Severity</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Mandatory', 'Warning', 'Info'] as const).map(sev => (
                        <button
                          key={sev}
                          onClick={() => setNewRule({ ...newRule, severity: sev })}
                          className={`py-3 rounded-2xl md:rounded-3xl font-black text-xs uppercase tracking-widest transition-all ${
                            newRule.severity === sev
                              ? sev === 'Mandatory' ? 'bg-red-600 text-white shadow-lg' :
                                sev === 'Warning' ? 'bg-amber-600 text-white shadow-lg' :
                                'bg-blue-600 text-white shadow-lg'
                              : 'bg-white/10 text-white/70 border border-white/20 hover:border-white/40 hover:bg-white/20'
                          }`}
                        >
                          {sev}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer with Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-t from-white/10 to-transparent border-t border-white/30 backdrop-blur-md shrink-0">
                <button 
                  onClick={() => {setRuleModalOpen(false); setRuleErrors([]);}} 
                  className="order-2 sm:order-1 flex-1 py-3 md:py-4 font-black text-white hover:text-white rounded-2xl md:rounded-3xl transition-all border border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 text-sm md:text-base backdrop-blur-sm group/cancel"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddRule} 
                  className="order-1 sm:order-2 flex-1 py-3 md:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl md:rounded-3xl font-black shadow-xl md:shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm md:text-base group/create backdrop-blur-sm border border-white/50"
                >
                  <Check size={18} className="md:w-5 md:h-5 group-hover/create:rotate-12 transition-transform" /> Add Rule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}