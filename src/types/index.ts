// export interface Course {
//     id: number;
//     title: string;
//     description: string;
//     level: string;
//   }
  
//   export interface User {
//     id: number;
//     name: string;
//     email: string;
//     role: "student" | "professor";
//   }
export type Course = {
  id: number;
  title: string;
  description: string;
  level: string;
  professor: string;
}

export type User = {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'professor'; // Add this if not present
}

export interface Enrollment {
  id: number;
  user: User;
  course: Course;
  role: string;
}