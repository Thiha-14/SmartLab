'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, UserStatus, ScheduleType } from '@/types';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    handleLogin: (userData: User) => void;
    handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            initStorage();
            // Clear session on app load for demo purposes - always show login page
            localStorage.removeItem('sl_session');
            setLoading(false);
        }
    }, []);

    const handleLogin = (userData: User) => {
        setUser(userData);
        localStorage.setItem('sl_session', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('sl_session');
    };

    return (
        <AuthContext.Provider value={{ user, loading, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

// Storage initialization
const initStorage = () => {
    const defaultLabs = [
        {
            id: 'l1',
            name: 'Quantum Physics Hub',
            description: 'A dedicated space for studying modern particles and physics experiments.',
            location: 'Building A, Room 101',
            features: ['Vacuum Chamber', 'Cryogenics'],
            media: [{
                id: 'm1',
                url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
                type: 'image',
                name: 'Quantum Lab',
                uploadProgress: 100
            }]
        },
        {
            id: 'l2',
            name: 'Biology Discovery Center',
            description: 'A lab focused on DNA testing and general biology research.',
            location: 'Building B, Room 202',
            features: ['Centrifuge', 'Microscopes'],
            media: [{
                id: 'm2',
                url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
                type: 'image',
                name: 'Biology Lab',
                uploadProgress: 100
            }]
        }
    ];

    if (!localStorage.getItem('sl_labs')) {
        localStorage.setItem('sl_labs', JSON.stringify(defaultLabs));
    }

    if (!localStorage.getItem('sl_users')) {
        localStorage.setItem('sl_users', JSON.stringify([
            {
                id: 'u1',
                firstName: 'Usman',
                lastName: 'Ali',
                studentId: 'STU-1001',
                email: 'usman@smartlab.com',
                phone: '+1 234 567 8901',
                registrationDate: '2023-10-01',
                effectiveFrom: '2023-10-01',
                effectiveTo: '2025-10-01',
                status: UserStatus.ACTIVE,
                role: UserRole.MASTER
            },
            {
                id: 'u2',
                firstName: 'Awab',
                lastName: 'Khan',
                studentId: 'STU-1002',
                email: 'awab@smartlab.com',
                phone: '+1 234 567 8902',
                registrationDate: '2023-10-05',
                effectiveFrom: '2023-10-05',
                effectiveTo: '2024-10-05',
                status: UserStatus.ACTIVE,
                role: UserRole.CONFIGURATOR
            }
        ]));
    }

    if (!localStorage.getItem('sl_equipment')) {
        localStorage.setItem('sl_equipment', JSON.stringify([
            {
                id: 'e1',
                name: 'Digital Microscope',
                manufacturer: 'Zeiss',
                model: 'Sigma 500',
                serialNumber: 'Z-SEM-9921',
                procurementDate: '2023-01-10',
                invoiceNumber: 'INV-001',
                lastCalibrationDate: '2023-06-15',
                nextCalibrationDate: '2025-06-15',
                calibrationFrequency: 'Yearly'
            }
        ]));
    }

    if (!localStorage.getItem('sl_holidays')) {
        localStorage.setItem('sl_holidays', JSON.stringify([
            { id: '1', name: 'New Year', date: '2024-01-01', type: 'Public' },
            { id: '2', name: 'National Holiday', date: '2024-05-01', type: 'Public' }
        ]));
    }

    if (!localStorage.getItem('sl_bookings')) {
        localStorage.setItem('sl_bookings', JSON.stringify([
            { id: 'b1', labName: 'Quantum Physics Hub', type: ScheduleType.OPERATION, startTime: '09:00', endTime: '11:00', userName: 'Usman Ali' }
        ]));
    }
};
