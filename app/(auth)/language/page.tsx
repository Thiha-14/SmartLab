'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSelectionPage() {
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const router = useRouter();

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'mm', name: 'မြန်မာ', flag: '🇲🇲' },
    ];

    const handleLanguageSelect = (code: string) => {
        setSelectedLanguage(code);
        localStorage.setItem('language', code);
        setTimeout(() => {
            router.push('/login');
        }, 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-2xl rounded-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden border border-white/20 p-12">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2">Smart Lab</h1>
                        <p className="text-white/60 text-lg">Select Your Language</p>
                    </div>

                    <div className="space-y-4">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageSelect(lang.code)}
                                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all font-semibold text-lg ${
                                    selectedLanguage === lang.code
                                        ? 'bg-slate-900 text-white shadow-lg'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                            >
                                <span>{lang.name}</span>
                                <span className="text-2xl">{lang.flag}</span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/login" className="text-white/60 hover:text-white text-sm underline">
                            Skip for now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
