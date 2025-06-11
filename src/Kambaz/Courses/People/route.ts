import * as dao from "./dao.js";



export default function UserRoutes(app: { get: (arg0: string, arg1: { (req: any, res: any): Promise<void>; (req: any, res: any): Promise<void>; }) => void; post: (arg0: string, arg1: (req: any, res: any) => Promise<void>) => void; put: (arg0: string, arg1: (req: any, res: any) => Promise<void>) => void; delete: (arg0: string, arg1: (req: any, res: any) => Promise<void>) => void; }) {
  app.get("/api/users", async (req: any, res: { send: (arg0: any) => void; }) => {
    const users = await dao.findAllUsers();
    res.send(users);
  });

  app.get("/api/courses/:cid/users", async (req: { params: { cid: any; }; }, res: { send: (arg0: any) => void; }) => {
    const { cid } = req.params;
    const users = await dao.findPeopleInCourse(cid);
    res.send(users);
  });

  app.post("/api/users", async (req: { body: any; }, res: { send: (arg0: any) => void; }) => {
    const newUser = await dao.createUser(req.body);
    res.send(newUser);
  });

  app.put("/api/users/:uid", async (req: { params: { uid: any; }; body: any; }, res: { send: (arg0: any) => void; }) => {
    const { uid } = req.params;
    const updated = await dao.updateUser({ ...req.body, _id: uid });
    res.send(updated);
  });

  app.delete("/api/users/:uid", async (req: { params: { uid: any; }; }, res: { send: (arg0: any) => void; }) => {
    const { uid } = req.params;
    const status = await dao.deleteUser(uid);
    res.send(status);
  });
}
