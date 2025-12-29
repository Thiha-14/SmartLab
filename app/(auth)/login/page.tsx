'use client';

import Login from '@/pages/Login';
import { useAuth } from '@/app/AuthContext';

export default function LoginPage() {
    const { handleLogin } = useAuth();
    return <Login onLogin={handleLogin} />;
}
