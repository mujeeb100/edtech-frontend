import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { Course } from '../../../types'; // Import your Course type
import client from '../../../services/apollo'; // Import your Apollo Client
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

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
  const { id } = router.query;
  const [courseId, setCourseId] = useState<number | null>(null);
  const { loading, error, data } = useQuery(GET_COURSE, {
    client,
    variables: { id: courseId },
  });
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (id) {
      setCourseId(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      setCourse(data.course)
    }
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {error.message}
      </AlertDescription>
    </Alert>
  )

  if (!course) return null;

  const handleEnroll = () => {
    // Implement enrollment logic here (e.g., using a mutation)
    // For the mock, just redirect to the confirmation page
    router.push('/enrollment/confirmation');
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>{course.level}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{course.description}</p>
          <Button onClick={handleEnroll} className="mt-4">Enroll</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetailsPage;