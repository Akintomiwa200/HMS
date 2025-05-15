export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'patient' | 'nurse' | 'admin';
  image?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  reason: string;
  notes?: string;
}

import { Server as NetServer } from 'http';
import { NextApiResponse } from 'next';
import { Server as ServerIO } from 'socket.io';

export interface NextApiResponseServerIO extends NextApiResponse {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO;
    };
  };
}

export interface Patient {
  id: string;
  userId: string;
  dateOfBirth: string;
  gender: string;
  bloodType?: string;
  allergies?: string[];
  medicalConditions?: string[];
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface Doctor {
  id: string;
  userId: string;
  specialization: string;
  department: string;
  licenseNumber: string;
  education?: string[];
  schedule?: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
}

export interface Nurse {
  id: string;
  userId: string;
  department: string;
  licenseNumber: string;
  shift?: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  title: string;
  description: string;
  attachments?: string[];
  type: 'diagnosis' | 'test' | 'procedure' | 'note';
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  medications: {
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    notes?: string;
  }[];
  status: 'active' | 'completed' | 'cancelled';
}

export interface Task {
  id: string;
  assignedToId: string;
  assignedById: string;
  patientId?: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  dueDate?: string;
  completedDate?: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: string;
  linkTo?: string;
}

export interface VitalSigns {
  id: string;
  patientId: string;
  recordedById: string;
  timestamp: string;
  temperature?: number;
  bloodPressureSystolic?: number;
  bloodPressureDiastolic?: number;
  heartRate?: number;
  respiratoryRate?: number;
  oxygenSaturation?: number;
  painLevel?: number;
  notes?: string;
}