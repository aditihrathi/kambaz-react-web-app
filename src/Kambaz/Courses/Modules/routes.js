import * as modulesDao from "../Modules/dao.js";

export default function ModuleRoutes(app) {
  // GET all modules for a course
  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = modulesDao.findModulesForCourse(cid);
    res.json(modules);
  });

  // PUT (update) a module
  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const updated = modulesDao.updateModule(moduleId, moduleUpdates);
    res.json(updated);
  });

  // DELETE a module
  app.delete("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const deleted = modulesDao.deleteModule(moduleId);
    res.json(deleted);
  });
}