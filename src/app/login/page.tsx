'use client';
import React, { useState } from 'react';
import { useUserContext } from '../../context/useUserStore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import type { User } from '../../types/index';

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
      setError('Invalid email or password. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md border border-gray-200 shadow-xl rounded-lg bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">Login</CardTitle>
          <CardDescription className="text-gray-500 text-sm mt-1">
            Sign in to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="mt-1"
              />
            </div>
            {error && (
              <Alert variant="destructive" className="mt-2">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="text-sm font-bold">Login Failed</AlertTitle>
                <AlertDescription className="text-sm">{error}</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 transition"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
