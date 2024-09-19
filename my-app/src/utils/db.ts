export interface Student {
  id: number;
  name: string;
  age: number;
  courseId: number;
}

export interface Course {
  id: number;
  title: string;
  credits: number;
}

export const students: Student[] = [
  { id: 1, name: "John Doe", age: 20, courseId: 1 },
  { id: 2, name: "Jane Smith", age: 22, courseId: 2 },
  { id: 3, name: "Alice Johnson", age: 21, courseId: 1 },
];

export const courses: Course[] = [
  { id: 1, title: "Computer Science", credits: 3 },
  { id: 2, title: "Mathematics", credits: 4 },
];