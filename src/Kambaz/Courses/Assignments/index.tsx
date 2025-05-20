import { BsGripVertical } from "react-icons/bs";
import { Button, Form, ListGroup } from "react-bootstrap";
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

export default function Assignments() {
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
        <div>
          <Button id="wd-add-assignment-group" variant="secondary" className="me-2">
            <FaPlus className="me-2" /> Group
          </Button>
          <Button id="wd-add-assignment" variant="danger" className="me-2">
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
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        {/* Assignments Section */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div><BsGripVertical className="me-2 fs-3" /> <FaAngleDown className="me-2 fs-3" /> ASSIGNMENTS - 40% of Total</div>
            <Button variant="secondary" size="sm">+</Button>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <TfiWrite className="me-2 fs-3" />

              <Link to="1234A1" className="fw-bold text-decoration-none text-dark">A1 - ENV + HTML</Link>
              <div className="text-muted">
                Multiple Modules | <strong>Not available until</strong> May 6 @ 12:00 AM<br />
                <strong>Due</strong> May 13 @ 11:59 PM | 100 Points
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <TfiWrite className="me-2 fs-3" />

              <Link to="1234A2" className="fw-bold text-decoration-none text-dark">A2 - CSS + BOOTSTRAP</Link>
              <div className="text-muted">
                Multiple Modules | <strong>Not available until</strong> May 13 @ 12:00 AM<br />
                <strong>Due</strong> May 20 @ 11:59 PM | 100 Points
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <TfiWrite className="me-2 fs-3" />

              <Link to="1234A3" className="fw-bold text-decoration-none text-dark">A3 - JAVASCRIPT + REACT</Link>
              <div className="text-muted">
                Multiple Modules | <strong>Not available until</strong> May 20 @ 12:00 AM<br />
                <strong>Due</strong> May 27 @ 11:59 PM | 100 Points
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* Quizzes */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div><BsGripVertical className="me-2 fs-3" /><FaAngleDown className="me-2 fs-3" /> QUIZZES - 10% of Total</div>
            <Button variant="secondary" size="sm">+</Button>
          </div>
        </ListGroup.Item>

        {/* Exams */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div><BsGripVertical className="me-2 fs-3" /> <FaAngleDown className="me-2 fs-3" />EXAMS - 20% of Total</div>
            <Button variant="secondary" size="sm">+</Button>
          </div>
        </ListGroup.Item>

        {/* Project */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div><BsGripVertical className="me-2 fs-3" /> <FaAngleDown className="me-2 fs-3" /> PROJECT- 30% of Total</div>
            <Button variant="secondary" size="sm">+</Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}