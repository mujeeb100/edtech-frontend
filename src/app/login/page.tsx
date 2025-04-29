'use client'
import React, { useState } from 'react';
import { useUserContext } from '../../context/useUserStore';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import type { User } from '../../types/index'; // Adjust the import path as needed

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
      const mockStudentUser: User = {
        id: 1,
        name: 'Student User',
        email: 'student@example.com',
        role: 'student',
      };
      login(mockStudentUser);
      setUser(mockStudentUser);
      localStorage.setItem('user', JSON.stringify(mockStudentUser));
      window.location.href = '/';
    } else if (email === 'professor@example.com' && password === 'password') {
      const mockProfessorUser: User = {
        id: 2,
        name: 'Professor User',
        email: 'professor@example.com', 
        role: 'professor',
      };
      login(mockProfessorUser);
      setUser(mockProfessorUser);
      localStorage.setItem('user', JSON.stringify(mockProfessorUser));
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
