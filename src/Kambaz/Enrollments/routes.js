import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  
  // Enroll user in course
  app.post("/api/enrollments", (req, res) => {
    try {
      const { userId, courseId } = req.body;
      const enrollment = dao.enrollUserInCourse(userId, courseId);
      res.json(enrollment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Unenroll user from course
  app.delete("/api/enrollments", (req, res) => {
    try {
      const { userId, courseId } = req.body;
      dao.unenrollUserFromCourse(userId, courseId);
      res.json({ message: "Unenrolled successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get enrollments for a user
  app.get("/api/enrollments/user/:userId", (req, res) => {
    try {
      const { userId } = req.params;
      const enrollments = dao.findEnrollmentsForUser(userId);
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get enrollments for a course
  app.get("/api/enrollments/course/:courseId", (req, res) => {
    try {
      const { courseId } = req.params;
      const enrollments = dao.findEnrollmentsForCourse(courseId);
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}