'use client';

import React, { useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { gql, useQuery } from '@apollo/client';
import { Course, } from '../../../types'; // Adjust path
import client from '../../../services/apollo'; // Apollo client setup
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useUserContext } from '@/context/useUserStore';

const GET_COURSE = gql`
  query GetCourse($id: Int!) {
    course(id: $id) {
      id
      title
      description
      level
    }
  }
`;

const CourseDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const { user } = useUserContext();

  const courseId = useMemo(() => {
    const parsed = Number(id);
    return !isNaN(parsed) ? parsed : null;
  }, [id]);

  const { loading, error, data } = useQuery<{ course: Course }>(GET_COURSE, {
    client,
    skip: !courseId,
    variables: { id: courseId as number },
  });

  const handleEnroll = () => {
    router.push('/enrollment/confirmation');
  };

  if (loading) return <p className="p-4 text-gray-600">Loading course details...</p>;

  if (error) {
    return (
      <Alert variant="destructive" className="m-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error loading course</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  const course = data?.course;
  if (!course) return <p className="p-4 text-gray-600">Course not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription className="capitalize">{course.level}</CardDescription>
        </CardHeader> 
        <CardContent>
          <p className="mb-4">{course.description}</p>
          {/* Conditional Role-based rendering */}
      {user?.role === 'professor' && <Button>Edit Course</Button>}
          <Button onClick={handleEnroll}>Enroll</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetailsPage;
