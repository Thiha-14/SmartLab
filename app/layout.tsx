'use client';

import React from 'react';
import { AuthProvider } from './AuthContext';
import './globals.css';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favi.png" type="image/png" />
            </head>
            <body className="bg-white text-slate-900">
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
