import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  
  // Check if already enrolled
  const existingEnrollment = enrollments.find(
    (e) => e.user === userId && e.course === courseId
  );
  
  if (existingEnrollment) {
    throw new Error("User already enrolled in this course");
  }
  
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
  Database.enrollments.push(newEnrollment);
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
  return { status: "unenrolled" };
}

export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function findEnrollmentsForCourse(courseId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.course === courseId);
}