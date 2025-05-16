import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you would typically check against your database
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Mock user data for demonstration
        // In a real application, you'd validate against your database
        const users = [
          { id: "1", name: "Dr. Sarah Johnson", email: "doctor@example.com", role: "doctor" },
          { id: "2", name: "John Smith", email: "patient@example.com", role: "patient" },
          { id: "3", name: "Nurse Chen", email: "nurse@example.com", role: "nurse" }
        ];

        const user = users.find(user => user.email === credentials.email);

        // In a real application, you would verify the password here
        // For this demo, we'll just check if the email exists
        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          };
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "YOUR_SECRET_HERE",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };