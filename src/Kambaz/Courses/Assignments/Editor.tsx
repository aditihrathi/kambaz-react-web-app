import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignments = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const isEdit = Boolean(aid);
  const existing = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(
    existing || {
      _id: uuidv4(),
      course: cid,
      title: "",
      description: "",
      points: 100,
      due: "2023-10-27",
      availableFrom: "2023-10-23",
      availableUntil: "2023-10-30",
    }
  );

  useEffect(() => {
    if (isEdit && existing) {
      setAssignment(existing);
    }
  }, [isEdit, existing]);

  const handleSave = () => {
    if (isEdit) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div className="p-4">
      <h3>{isEdit ? "Assignment Details" : "Create Assignment"}</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            disabled={!isFaculty}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
            disabled={!isFaculty}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={2}><Form.Label>Points</Form.Label></Col>
          <Col>
            <Form.Control
              type="number"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: parseInt(e.target.value),
                })
              }
              disabled={!isFaculty}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}><Form.Label>Due</Form.Label></Col>
          <Col md={4}>
            <Form.Control
              type="date"
              value={assignment.due}
              onChange={(e) =>
                setAssignment({ ...assignment, due: e.target.value })
              }
              disabled={!isFaculty}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={2}><Form.Label>Available From</Form.Label></Col>
          <Col md={4}>
            <Form.Control
              type="date"
              value={assignment.availableFrom}
              onChange={(e) =>
                setAssignment({ ...assignment, availableFrom: e.target.value })
              }
              disabled={!isFaculty}
            />
          </Col>
          <Col md={2}><Form.Label>Available Until</Form.Label></Col>
          <Col md={4}>
            <Form.Control
              type="date"
              value={assignment.availableUntil}
              onChange={(e) =>
                setAssignment({ ...assignment, availableUntil: e.target.value })
              }
              disabled={!isFaculty}
            />
          </Col>
        </Row>

        {isFaculty && (
          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={() =>
                navigate(`/Kambaz/Courses/${cid}/Assignments`)
              }
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleSave}>
              Save
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
}
