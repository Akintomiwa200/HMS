import { NextResponse } from "next/server";
import { Patient } from "@/lib/types";

// Mock data - in a real app, this would be fetched from a database
const patients: Patient[] = [
  {
    id: "p1",
    userId: "3",
    dateOfBirth: "1980-05-15",
    gender: "male",
    bloodType: "O+",
    allergies: ["Penicillin"],
    medicalConditions: ["Hypertension"],
    emergencyContact: {
      name: "Jane Smith",
      relationship: "Spouse",
      phone: "555-123-4567"
    }
  },
  {
    id: "p2",
    userId: "4",
    dateOfBirth: "1995-08-22",
    gender: "female",
    bloodType: "A-",
    allergies: ["Latex", "Sulfa drugs"],
    medicalConditions: ["Asthma"],
    emergencyContact: {
      name: "Marco Rodriguez",
      relationship: "Brother",
      phone: "555-987-6543"
    }
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const patientId = searchParams.get("id");
  
  if (patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) {
      return NextResponse.json(
        { error: "Patient not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ patient });
  }
  
  let filteredPatients = [...patients];
  
  if (userId) {
    filteredPatients = filteredPatients.filter(
      (patient) => patient.userId === userId
    );
  }
  
  return NextResponse.json({ patients: filteredPatients });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation would be more thorough in a real app
    if (!body.userId || !body.dateOfBirth || !body.gender) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // In a real app, this would be saved to a database
    const newPatient: Patient = {
      id: `p${patients.length + 1}`,
      userId: body.userId,
      dateOfBirth: body.dateOfBirth,
      gender: body.gender,
      bloodType: body.bloodType,
      allergies: body.allergies || [],
      medicalConditions: body.medicalConditions || [],
      emergencyContact: body.emergencyContact
    };
    
    patients.push(newPatient);
    
    return NextResponse.json({ patient: newPatient }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create patient record" },
      { status: 500 }
    );
  }
}