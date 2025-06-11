import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  
  // Get assignment by ID
  app.get("/api/assignments/:assignmentId", (req, res) => {
    try {
      const { assignmentId } = req.params;
      const assignment = dao.findAssignmentById(assignmentId);
      if (assignment) {
        res.json(assignment);
      } else {
        res.status(404).json({ message: "Assignment not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Update an assignment
  app.put("/api/assignments/:assignmentId", (req, res) => {
    try {
      const { assignmentId } = req.params;
      const assignmentUpdates = req.body;
      const assignment = dao.updateAssignment(assignmentId, assignmentUpdates);
      if (assignment) {
        res.json(assignment);
      } else {
        res.status(404).json({ message: "Assignment not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Delete an assignment
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    try {
      const { assignmentId } = req.params;
      const result = dao.deleteAssignment(assignmentId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}