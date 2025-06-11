import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  });

  // Get all users enrolled in a course
  app.get("/api/courses/:cid/enrollments", (req, res) => {
    const { cid } = req.params;
    const users = dao.findPeopleInCourse(cid);
    res.json(users);
  });

  // Enroll a user in a course
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const status = dao.enrollUserInCourse(userId, courseId);
    res.json(status);
  });

  // Remove a user's enrollment from a course
  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const status = dao.unenrollUserFromCourse(userId, courseId);
    res.json(status);
  });
}
