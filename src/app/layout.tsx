// src/app/layout.tsx
import React from 'react';
import { UserProvider } from '@/context/useUserStore'; // ✅ adjust the path if different
import './globals.css';

export const metadata = {
  title: 'Your App',
  description: 'Description here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider> {/* ✅ Wrap everything inside this */}
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
