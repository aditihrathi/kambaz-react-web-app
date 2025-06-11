import * as db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

let { users, courses, enrollments } = db;

// DAO functions
const findUserByUsername = (username) => 
  users.find(user => user.username === username);

const findUserByCredentials = (username, password) => 
  users.find(user => user.username === username && user.password === password);

const createUser = (userData) => {
  const newUser = { 
    ...userData, 
    _id: uuidv4(),
    role: userData.role || "STUDENT" // Default to STUDENT if no role specified
  };
  users.push(newUser);
  return newUser;
};

const findCoursesForStudent = (studentId) => {
  const studentEnrollments = enrollments.filter(e => e.user === studentId);
  return studentEnrollments.map(e => courses.find(c => c._id === e.course)).filter(Boolean);
};

const findCoursesByFaculty = (facultyId) => 
  courses.filter(course => course.instructor === facultyId);

export default function UserRoutes(app) {
  
  // Sign up
  app.post("/api/users/signup", (req, res) => {
    try {
      const existingUser = findUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already taken" });
      }
      
      const newUser = createUser(req.body);
      req.session["currentUser"] = newUser;
      res.json(newUser);
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Signup failed" });
    }
  });

  // Sign in - CRITICAL: This returns the user with their role
  app.post("/api/users/signin", (req, res) => {
    try {
      const { username, password } = req.body;
      const user = findUserByCredentials(username, password);
      
      if (user) {
        req.session["currentUser"] = user;
        // Make sure we return the user with their role
        res.json({
          _id: user._id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role // This is KEY for frontend role-based views
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Signin error:", error);
      res.status(500).json({ message: "Signin failed" });
    }
  });

  // Get current user profile
  app.get("/api/users/profile", (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      return res.status(401).json({ message: "Not logged in" });
    }
    
    // Return user with role for frontend
    res.json({
      _id: currentUser._id,
      username: currentUser.username,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      role: currentUser.role
    });
  });

  // Sign out
  app.post("/api/users/signout", (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  });

  // Get courses based on user role
  app.get("/api/users/current/courses", (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      return res.status(401).json({ message: "Not logged in" });
    }

    try {
      if (currentUser.role === "FACULTY") {
        // Return courses this faculty teaches
        const facultyCourses = findCoursesByFaculty(currentUser._id);
        res.json(facultyCourses);
      } else if (currentUser.role === "STUDENT") {
        // Return courses this student is enrolled in
        const studentCourses = findCoursesForStudent(currentUser._id);
        res.json(studentCourses);
      } else {
        res.json([]);
      }
    } catch (error) {
      console.error("Get courses error:", error);
      res.json([]);
    }
  });

  // Create new course (faculty only)
  app.post("/api/users/current/courses", (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      return res.status(401).json({ message: "Not logged in" });
    }

    if (currentUser.role !== "FACULTY") {
      return res.status(403).json({ message: "Only faculty can create courses" });
    }

    try {
      const newCourse = {
        ...req.body,
        _id: uuidv4(),
        instructor: currentUser._id
      };
      courses.push(newCourse);
      res.json(newCourse);
    } catch (error) {
      console.error("Create course error:", error);
      res.status(500).json({ message: "Failed to create course" });
    }
  });

  // Get all users (for admin/faculty views)
  app.get("/api/users", (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser || currentUser.role === "STUDENT") {
      return res.status(403).json({ message: "Access denied" });
    }
    
    res.json(users.map(user => ({
      _id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    })));
  });

  console.log("✓ UserRoutes with role-based functionality loaded");
}