import { NextResponse } from "next/server";
import { Appointment } from "@/lib/types";

// Mock data - in a real app, this would be fetched from a database
const appointments: Appointment[] = [
  {
    id: "1",
    patientId: "p1",
    doctorId: "d1",
    date: "2025-01-15",
    time: "09:00",
    status: "confirmed",
    reason: "Regular Checkup"
  },
  {
    id: "2",
    patientId: "p2",
    doctorId: "d1",
    date: "2025-01-15",
    time: "10:30",
    status: "confirmed",
    reason: "Flu Symptoms"
  },
  {
    id: "3",
    patientId: "p3",
    doctorId: "d2",
    date: "2025-01-16",
    time: "11:00",
    status: "pending",
    reason: "Back Pain"
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const patientId = searchParams.get("patientId");
  const doctorId = searchParams.get("doctorId");
  const date = searchParams.get("date");
  
  let filteredAppointments = [...appointments];
  
  if (patientId) {
    filteredAppointments = filteredAppointments.filter(
      (appointment) => appointment.patientId === patientId
    );
  }
  
  if (doctorId) {
    filteredAppointments = filteredAppointments.filter(
      (appointment) => appointment.doctorId === doctorId
    );
  }
  
  if (date) {
    filteredAppointments = filteredAppointments.filter(
      (appointment) => appointment.date === date
    );
  }
  
  return NextResponse.json({ appointments: filteredAppointments });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation in a real app would be more thorough
    if (!body.patientId || !body.doctorId || !body.date || !body.time || !body.reason) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // In a real app, this would be saved to a database
    const newAppointment: Appointment = {
      id: `${appointments.length + 1}`,
      patientId: body.patientId,
      doctorId: body.doctorId,
      date: body.date,
      time: body.time,
      status: "pending",
      reason: body.reason,
      notes: body.notes
    };
    
    appointments.push(newAppointment);
    
    return NextResponse.json({ appointment: newAppointment }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create appointment" },
      { status: 500 }
    );
  }
}