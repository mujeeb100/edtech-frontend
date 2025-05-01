'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const EnrollmentConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-lg w-full border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Enrollment Confirmation
        </h1>
        <p className="text-gray-600 text-center mb-6">
          You have successfully enrolled in the course. A confirmation has been sent to your registered email.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentConfirmationPage;
