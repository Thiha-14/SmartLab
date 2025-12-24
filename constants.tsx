
import React from 'react';
import { User, UserRole, UserStatus, Lab, Equipment } from './types';

export const COLORS = {
  primary: '#2563eb', // blue-600
  secondary: '#334155', // slate-700
  background: '#f8fafc', // slate-50
  text: '#0f172a', // slate-900
};

export const MOCK_USERS: User[] = [
  {
    id: '1',
    firstName: 'Usman',
    lastName: 'Ali',
    studentId: 'TVS-001',
    email: 'usman@tvs.com',
    phone: '123-456-7890',
    registrationDate: '2023-01-15',
    effectiveFrom: '2023-01-15',
    effectiveTo: '2025-01-15',
    status: UserStatus.ACTIVE,
    role: UserRole.MASTER
  },
  {
    id: '2',
    firstName: 'Awab',
    lastName: 'Ahmed',
    studentId: 'TVS-002',
    email: 'awab@tvs.com',
    phone: '234-567-8901',
    registrationDate: '2023-02-10',
    effectiveFrom: '2023-02-10',
    effectiveTo: '2024-12-31',
    status: UserStatus.ACTIVE,
    role: UserRole.CONFIGURATOR
  }
];

export const MOCK_LABS: Lab[] = [
  {
    id: 'L1',
    name: 'Materials Lab 01',
    description: 'Specialized for high-tensile material testing.',
    location: 'Building A, 2nd Floor',
    features: ['Tensile Tester', 'Scanning Electron Microscope', 'Heat Treat Oven'],
    media: [
      { id: 'm1', type: 'image', url: 'https://picsum.photos/seed/lab1/400/300', name: 'Lab Overview' }
    ]
  },
  {
    id: 'L2',
    name: 'Electronics Workshop',
    description: 'PCB design and soldering station.',
    location: 'Building B, Ground Floor',
    features: ['Oscilloscope', 'Spectrum Analyzer', 'Soldering Station'],
    media: [
      { id: 'm2', type: 'image', url: 'https://picsum.photos/seed/lab2/400/300', name: 'Soldering Bench' }
    ]
  }
];

export const MOCK_EQUIPMENT: Equipment[] = [
  {
    id: 'E1',
    name: 'Instron 3400',
    manufacturer: 'Instron',
    model: '34SC-05',
    serialNumber: 'SN-99812-A',
    procurementDate: '2022-05-20',
    invoiceNumber: 'INV-44512',
    lastCalibrationDate: '2023-11-01',
    nextCalibrationDate: '2024-11-01',
    calibrationFrequency: 'Yearly'
  }
];
