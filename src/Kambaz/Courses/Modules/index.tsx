import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findModules, createModule, deleteModule } from "./client";
import { addModule, setModules } from "./reducer";
import { removeModule } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import { Button, ListGroup, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const state = useSelector((state: any) => state);
console.log("💡 FULL REDUX STATE:", state);


export default function Modules() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const [newModule, setNewModule] = useState({ name: "", description: "" });

  const loadModules = async () => {
    if (!courseId) return;
    const data = await findModules(courseId);
    dispatch(setModules(data));
  };
  

  const handleCreate = async () => {
    const module = { ...newModule, _id: uuidv4() };
    await createModule(courseId!, module);
    dispatch(addModule(module));
    setNewModule({ name: "", description: "" });
  };

  const handleDelete = async (id: string) => {
    await deleteModule(courseId!, id);
    dispatch(removeModule(id));
  };

  useEffect(() => {
    loadModules();
  }, [courseId]);

  return (
    <div>
      <h3>Modules</h3>
      <Form.Control
        placeholder="Module Name"
        value={newModule.name}
        onChange={(e) => setNewModule({ ...newModule, name: e.target.value })}
        className="mb-2"
      />
      <Form.Control
        placeholder="Module Description"
        value={newModule.description}
        onChange={(e) => setNewModule({ ...newModule, description: e.target.value })}
        className="mb-2"
      />
      <Button onClick={handleCreate}>Add Module</Button>
      <ListGroup className="mt-3">
        {modules.map((mod: any) => (
          <ListGroup.Item key={mod._id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{mod.name}</strong>: {mod.description}
            </div>
            <Button size="sm" variant="danger" onClick={() => handleDelete(mod._id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
