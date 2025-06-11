import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Get all assignments for a course
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  // Create a new assignment in a course
  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignment = { ...req.body, course: cid };
    const newAssignment = dao.createAssignment(assignment);
    res.json(newAssignment);
  });

  // Update an assignment
  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const updates = req.body;
    const updated = dao.updateAssignment(aid, updates);
    res.json(updated);
  });

  // Delete an assignment
  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const deleted = dao.deleteAssignment(aid);
    res.json(deleted);
  });
}
