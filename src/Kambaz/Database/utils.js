import { readFileSync, writeFileSync, existsSync } from "fs";
const ENROLLMENTS_PATH = "./src/Database/enrollments.json";

export function loadEnrollments() {
  if (!existsSync(ENROLLMENTS_PATH)) return [];
  return JSON.parse(readFileSync(ENROLLMENTS_PATH, "utf-8"));
}

export function saveEnrollments(data) {
  writeFileSync(ENROLLMENTS_PATH, JSON.stringify(data, null, 2));
}

import fs from "fs";
import path from "path";

const coursesPath = path.resolve("src/Database/courses.json");

export function loadCourses() {
  if (!fs.existsSync(coursesPath)) return [];
  const fileData = fs.readFileSync(coursesPath, "utf-8");
  return JSON.parse(fileData);
}

export function saveCourses(courses) {
  fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
}
