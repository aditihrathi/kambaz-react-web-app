import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { MdDelete } from "react-icons/md";
import { Button, Form, ListGroup } from "react-bootstrap";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const handleAddAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
  };

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form className="d-flex align-items-center">
          <BiSearch className="me-2 fs-4" />
          <Form.Control
            type="text"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="me-3"
            style={{ width: "250px" }}
          />
        </Form>
        {isFaculty && (
          <div>
            <Button id="wd-add-assignment-group" variant="secondary" className="me-2">
              <FaPlus className="me-2" /> Group
            </Button>
            <Button id="wd-add-assignment" variant="danger" className="me-2" onClick={handleAddAssignment}>
              <FaPlus className="me-2" /> Assignment
            </Button>
            <Button id="wd-add-quiz" variant="danger" className="me-2">
              <FaPlus className="me-2" /> Quiz
            </Button>
            <Button id="wd-add-exam" variant="danger" className="me-2">
              <FaPlus className="me-2" /> Exam
            </Button>
            <Button id="wd-add-project" variant="danger">
              <FaPlus className="me-2" /> Project
            </Button>
          </div>
        )}
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <FaAngleDown className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            {isFaculty && (
              <Button variant="secondary" size="sm" onClick={handleAddAssignment}>
                +
              </Button>
            )}
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments
              .filter((a: any) => a.course === cid)
              .map((a: any) => (
                <ListGroup.Item
                  key={a._id}
                  className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-start"
                >
                  <div>
                    <BsGripVertical className="me-2 fs-3" />
                    <TfiWrite className="me-2 fs-3" />
                    <Link to={a._id} className="fw-bold text-decoration-none text-dark">
                      {a.title}
                    </Link>
                    <div className="text-muted">
                      <strong>Due</strong> {a.due} | {a.points} Points
                    </div>
                  </div>
                  {isFaculty && (
                    <MdDelete
                      className="fs-4 text-danger"
                      role="button"
                      onClick={() => {
                        const confirmed = window.confirm(`Delete "${a.title}"?`);
                        if (confirmed) dispatch(deleteAssignment(a._id));
                      }}
                    />
                  )}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>

        {/* Static Sections */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <FaAngleDown className="me-2 fs-3" /> QUIZZES
            </div>
            {isFaculty && <Button variant="secondary" size="sm">+</Button>}
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <FaAngleDown className="me-2 fs-3" /> EXAMS
            </div>
            {isFaculty && <Button variant="secondary" size="sm">+</Button>}
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <FaAngleDown className="me-2 fs-3" /> PROJECTS
            </div>
            {isFaculty && <Button variant="secondary" size="sm">+</Button>}
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
