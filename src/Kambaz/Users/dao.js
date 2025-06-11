import * as db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

let { users, courses, enrollments } = db;

export const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4() };
  users.push(newUser);
  return newUser;
};

export const findUserByUsername = (username) => 
  users.find(user => user.username === username);

export const findUserByCredentials = (username, password) => 
  users.find(user => user.username === username && user.password === password);

export const findUserById = (id) => 
  users.find(user => user._id === id);

export const findCoursesByFaculty = (facultyId) => 
  courses.filter(course => course.instructor === facultyId);

export const findCoursesForStudent = (studentId) => {
  const studentEnrollments = enrollments.filter(e => e.user === studentId);
  return studentEnrollments.map(e => courses.find(c => c._id === e.course));
};