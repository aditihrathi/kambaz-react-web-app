import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function UserRoutes(app) {
  const createUser = (req, res) => {
    const newUser = dao.createUser(req.body);
    res.json(newUser);
  };

  const deleteUser = (req, res) => {
    dao.deleteUser(req.params.userId);
    res.sendStatus(200);
  };

  const findAllUsers = (req, res) => {
    const users = dao.findAllUsers();
    res.json(users);
  };

  const findUserById = (req, res) => {
    const user = dao.findUserById(req.params.userId);
    res.json(user);
  };


  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    dao.updateUser(userId, userUpdates);
    const currentUser = dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signup = (req, res) => {
    const user = dao.findUserByUsername(req.body.username);
    if (user) {
      return res.status(400).json({ message: "Username already in use" });
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
      return res.sendStatus(401);
    }
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        return res.sendStatus(401);
      }
      userId = currentUser._id;
    }
  
    const courseIds = enrollmentsDao[userId] || [];
    const allCourses = courseDao.findAllCourses();
    const userCourses = courseIds.map((cid) =>
      allCourses.find((c) => c._id === cid)
    );
    res.json(userCourses);
  };
  

  const createCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      return res.status(401).json({ message: "Not logged in" });
    }
    const newCourse = courseDao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newCourse);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);

  
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/login", signin);  // alias for frontend compatibility
  app.post("/api/users/signout", signout);
  app.get("/api/users/profile", profile);
  app.get("/api/users/current/courses", findCoursesForEnrolledUser);
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
  app.post("/api/users/current/courses", createCourse);
}
