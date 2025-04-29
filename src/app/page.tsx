'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Course } from '../types/index'; // adjust path if needed

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  // Mock data - replace with API call if needed
  useEffect(() => {
    const mockCourses: Course[] = [
      { id: 1,
         title: 'React Basics',
          description: 'Learn React from scratch.',
          level:'1',
           professor: 'Dr. Smith' },
      { id: 2,
         title: 'Next.js Advanced',
          description: 'Advanced features of Next.js.', 
          level:'2',
          professor: 'Prof. Jane' },
    ];
    setCourses(mockCourses);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <div className="space-y-4">
        {courses.map(course => (
          <div key={course.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{course.description}</p>
            <p className="text-sm text-gray-500">Instructor: {course.professor}</p>
            <Link href={`/courses/${course.id}`} className="text-blue-500 underline mt-2 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
