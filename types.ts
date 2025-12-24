
export enum UserRole {
  MASTER = 'Master',
  CONFIGURATOR = 'Configurator',
  USER = 'User'
}

export enum UserStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  SUSPENDED = 'Suspended'
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  phone: string;
  registrationDate: string;
  effectiveFrom: string;
  effectiveTo: string;
  status: UserStatus;
  role: UserRole;
}

export interface Group {
  id: string;
  name: string;
  userIds: string[];
}

export interface Lab {
  id: string;
  name: string;
  description: string;
  location: string;
  features: string[];
  media: LabMedia[];
}

export interface LabMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  name: string;
}

export interface Equipment {
  id: string;
  name: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  procurementDate: string;
  invoiceNumber: string;
  lastCalibrationDate: string;
  nextCalibrationDate: string;
  calibrationFrequency: 'Weekly' | 'Monthly' | 'Quarterly' | 'Yearly';
}

export interface Schedule {
  id: string;
  type: 'Operation' | 'Maintenance';
  labId: string;
  start: string;
  end: string;
}

export interface Holiday {
  id: string;
  name: string;
  date: string;
  year: number;
}

export interface MachineAllowance {
  id: string;
  labId: string;
  machineId: string;
  effectiveFrom: string;
  effectiveTo: string;
  minUsers: number;
  maxUsers: number;
}
