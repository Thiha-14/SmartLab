// 'use client';

// import React from 'react';
// import { AuthProvider } from './AuthContext';
// import './globals.css';

// interface RootLayoutProps {
//     children: React.ReactNode;
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//     return (
//         <html lang="en">
//             <head>
//                 <link rel="icon" href="/favi.png" type="image/png" />
//             </head>
//             <body className="bg-white text-slate-900">
//                 <AuthProvider>
//                     {children}
//                 </AuthProvider>
//             </body>
//         </html>
//     );
// }





// app/layout.tsx
import React from 'react';
import { Providers } from './Providers'; // Import the new wrapper
import './globals.css';

//You can now export metadata for SEO (Great feature of Server Components)
export const metadata = {
  title: 'Smart Lab - Enterprise Lab Management System',
  description: 'Managed by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favi.png" type="image/png" />
            </head>
            <body className="bg-white text-slate-900">
                {/* Wrap children with the client-side Providers */}
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
};