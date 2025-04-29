import React from 'react';
import Link from 'next/link'; // ✅ Import Link from next/link
import { Button } from "@/components/ui/button";

const EnrollmentConfirmationPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Enrollment Confirmation</h1>
      <p>You have successfully enrolled in the course!</p>
      <Button asChild className="mt-4">
        <Link href="/">Go to Home</Link> {/* ✅ Use Link instead of <a> */}
      </Button>
    </div>
  );
};

export default EnrollmentConfirmationPage;
