'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Course } from '../types/index'; // adjust path if needed

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  // Mock data - replace with API call if needed
  useEffect(() => {
    const mockCourses: Course[] = [
      {
        id: 1,
        title: 'React Basics',
        description: 'Learn React from scratch.',
        level: '1',
        professor: 'Dr. Smith',
      },
      {
        id: 2,
        title: 'Next.js Advanced',
        description: 'Advanced features of Next.js.',
        level: '2',
        professor: 'Prof. Jane',
      },
    ];
    setCourses(mockCourses);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          📘 Explore Our Courses
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-700 mb-3">{course.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                👨‍🏫 Instructor: <span className="font-medium">{course.professor}</span>
              </p>
              <Link
               href={`/courses/${course.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
