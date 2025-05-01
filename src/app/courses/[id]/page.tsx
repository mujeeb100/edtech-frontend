'use client';

import React, { useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { gql, useQuery } from '@apollo/client';
import { Course } from '../../../types'; 
import client from '../../../services/apollo';
import { useUserContext } from '@/context/useUserStore';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

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

const CourseDetailsPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const { user } = useUserContext();

  // Check the course id from the URL parameters and ensure it's valid
  const courseId = useMemo(() => {
    const parsedId = Number(params?.id);
    return !isNaN(parsedId) ? parsedId : null;
  }, [params]);

  // Fetch course data using Apollo Client and the courseId
  const { data, loading, error } = useQuery<{ course: Course }>(GET_COURSE, {
    client,
    skip: !courseId,
    variables: { id: courseId as number },
  });

  const handleEnroll = () => {
    router.push('/enrollment/confirmation');
  };

  const handleEditCourse = () => {
    router.push(`/courses/edit/${courseId}`);
  };
  // useEffect(() => {
  //   if (user) {
  //     if (user.role === 'student') {
  //       router.push(`/student-dashboard`);
  //     } else if (user.role === 'professor') {
  //       router.push(`/professor-dashboard`);
  //     }
  //   }
  // }, [user, router]);

  // If the data is still loading, show loading message
  if (loading) {
    return <p className="p-4 text-muted-foreground">Loading course details...</p>;
  }

 
  
  if (error) {
    return (
      <Alert variant="destructive" className="m-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }
  
  const course = data?.course;
  if (!course) {
    return <p className="p-4 text-muted-foreground">Course not found.</p>;
  }



  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <Card>
        <CardHeader className="bg-blue-500 text-white">
          <CardTitle className="text-xl font-semibold">{course.title}</CardTitle>
          <CardDescription className="capitalize text-sm">{course.level}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700">{course.description}</p>

          {/* Conditional rendering based on user role */}
          {user?.role === 'professor' ? (
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                onClick={handleEditCourse}
              >
                Edit Course
              </Button>
              <Button
                className="bg-blue-500 text-white hover:bg-blue-600"
                onClick={handleEnroll}
              >
                Enroll
              </Button>
            </div>
          ) : user?.role === 'student' ? (
            <div className="flex space-x-4">
              <Button
                className="bg-blue-500 text-white hover:bg-blue-600"
                onClick={handleEnroll}
              >
                Enroll
              </Button>
            </div>
          ) : (
            <p className="text-gray-700">Please log in to see course options.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetailsPage;
