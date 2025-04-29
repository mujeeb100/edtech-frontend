'use client'

import React, { useState } from 'react';
import { useUserContext } from '../../context/useUserStore'; // Adjust the path if needed
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const LoginPage = () => {
  const { login, setUser } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock authentication (replace with your actual authentication logic)
    if (email === 'student@example.com' && password === 'password') {
      const mockStudentUser = {
        id: 1,
        name: 'Student User',
        email: 'student@example.com',
        role: 'student', // Add role here
      };
      login(mockStudentUser);
      setUser(mockStudentUser); // Also set in context
      // In a real app, you'd fetch user data (including role) from your backend
      // and store it here.
      // For this example, we're just using mock data.
      window.location.href = '/'; // Redirect to home page
    } else if (email === 'professor@example.com' && password === 'password') {
      const mockProfessorUser = {
        id: 2,
        name: 'Professor User',
        email: 'professor@example.com',
        role: 'professor', // Add role here
      };
      login(mockProfessorUser);
      setUser(mockProfessorUser);
      window.location.href = '/';
    } else {
      setError('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email and password to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
