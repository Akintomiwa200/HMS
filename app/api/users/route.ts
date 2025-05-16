import { NextResponse } from "next/server";
import { User } from "@/lib/types";

// Mock data - in a real app, this would be fetched from a database
const users: User[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    email: "dr.johnson@medicare.com",
    role: "doctor"
  },
  {
    id: "2",
    name: "Nurse Chen",
    email: "nurse.chen@medicare.com",
    role: "nurse"
  },
  {
    id: "3",
    name: "John Smith",
    email: "john.smith@example.com",
    role: "patient"
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    role: "patient"
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const role = searchParams.get("role");
  
  let filteredUsers = [...users];
  
  if (role) {
    filteredUsers = filteredUsers.filter(
      (user) => user.role === role
    );
  }
  
  // In a real app, you would sanitize sensitive data before returning
  return NextResponse.json({ users: filteredUsers });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation would be more thorough in a real app
    if (!body.name || !body.email || !body.role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    const existingUser = users.find(user => user.email === body.email);
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 }
      );
    }
    
    // In a real app, this would be saved to a database
    const newUser: User = {
      id: `${users.length + 1}`,
      name: body.name,
      email: body.email,
      role: body.role,
      image: body.image
    };
    
    users.push(newUser);
    
    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}