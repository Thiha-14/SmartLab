'use client';

import LabManagement from '@/pages/LabManagement';
import { useAuth } from '@/app/AuthContext';
import { UserRole } from '@/types';

export default function LabsPage() {
    const { user } = useAuth();
    return <LabManagement role={user?.role || UserRole.USER} />;
}
