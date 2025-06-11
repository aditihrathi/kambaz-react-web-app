// src/Kambaz/Courses/Modules/dao.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

// Resolve path to modules file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MODULES_FILE = path.resolve(__dirname, "../../../Database/modules.js");

// Load initial modules
import modulesData from "../../../Database/modules.js";
let modules = [...modulesData];

// Write helper
const saveModules = () => {
  const content = `export default ${JSON.stringify(modules, null, 2)};`;
  fs.writeFileSync(MODULES_FILE, content);
};

// DAO Functions
export function findModulesForCourse(courseId) {
  return modules.filter((module) => module.course === courseId);
}

export function createModule(module) {
  const newModule = { ...module, _id: uuidv4() };
  modules.push(newModule);
  saveModules();
  return newModule;
}

export function deleteModule(moduleId) {
  modules = modules.filter((module) => module._id !== moduleId);
  saveModules();
}

export function updateModule(moduleId, moduleUpdates) {
  const module = modules.find((module) => module._id === moduleId);
  if (!module) return null;
  Object.assign(module, moduleUpdates);
  saveModules();
  return module;
}
