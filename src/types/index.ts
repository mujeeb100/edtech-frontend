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
export interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Enrollment {
  id: number;
  user: User;
  course: Course;
  role: string;
}