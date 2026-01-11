// 'use client';

// import dynamic from 'next/dynamic';

// const Auth = dynamic(() => import('@/pages/auth'), {
//     ssr: false
// });

// export default function SignupPage() {
//     return <Auth />;
// }


import AuthScreen from '@/components/AuthScreen';

export default function SignupPage() {
    return <AuthScreen />;
};