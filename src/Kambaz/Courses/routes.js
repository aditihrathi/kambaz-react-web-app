import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function UserRoutes(app) {
  
  // Get courses for enrolled user (different logic for faculty vs students)
  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
      
      // Different behavior based on user role
      let courses;
      if (currentUser.role === "FACULTY") {
        // Faculty see all courses they're enrolled in (as instructors)
        // You could also modify this to show ALL courses for faculty
        courses = courseDao.findCoursesForEnrolledUser(userId);
        // OR for faculty to see all courses:
        // courses = courseDao.findAllCourses();
      } else {
        // Students see only courses they're enrolled in
        courses = courseDao.findCoursesForEnrolledUser(userId);
      }
      
      res.json(courses);
      return;
    }
    
    // For specific user ID requests
    const courses = courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };

  // Create course for current user (only faculty should be able to do this)
  const createCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    
    // Check if user is faculty
    if (currentUser.role !== "FACULTY") {
      res.status(403).json({ message: "Only faculty can create courses" });
      return;
    }
    
    const newCourse = courseDao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newCourse);
  };

  // ... other route handlers (signup, signin, profile, etc.) ...
  
  const signup = (req, res) => {
    const user = dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const currentUser = dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signin = (req, res) => {
    const { username, password } = req.body;
    const currentUser = dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } else {
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };

  const profile = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    const updatedUser = dao.updateUser(userId, userUpdates);
    req.session["currentUser"] = updatedUser;
    res.json(updatedUser);
  };

  const findAllUsers = (req, res) => {
    const users = dao.findAllUsers();
    res.json(users);
  };

  const findUserById = (req, res) => {
    const { userId } = req.params;
    const user = dao.findUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  };

  const deleteUser = (req, res) => {
    const { userId } = req.params;
    const result = dao.deleteUser(userId);
    res.json(result);
  };

  const createUser = (req, res) => {
    const newUser = dao.createUser(req.body);
    res.json(newUser);
  };

  // Register routes
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/profile", profile);
  app.post("/api/users/signout", signout);
  app.put("/api/users/:userId", updateUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users", createUser);
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
  app.post("/api/users/current/courses", createCourse);
}