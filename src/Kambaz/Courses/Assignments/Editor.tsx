import { useParams, Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);

  return (
    <div className="p-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" value={assignment?.title || ""} />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={2}><Form.Label>Points</Form.Label></Col>
          <Col><Form.Control type="number" defaultValue={100} /></Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}><Form.Label>Assignment Group</Form.Label></Col>
          <Col>
            <Form.Select>
              <option>ASSIGNMENTS</option>
              <option>EXAMS</option>
              <option>QUIZZES</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}><Form.Label>Display Grade as</Form.Label></Col>
          <Col>
            <Form.Select>
              <option>Percent</option>
              <option>Points</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}><Form.Label>Submission Type</Form.Label></Col>
          <Col>
            <Form.Select>
              <option>Online</option>
              <option>No Submission</option>
              <option>In Person</option>
            </Form.Select>

            <Form.Label className="mt-3">Online Submission Options:</Form.Label>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}><Form.Label>Assign To</Form.Label></Col>
          <Col>
            <Form.Select>
              <option>Everyone</option>
              <option>Failing Students</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={2}><Form.Label>Due</Form.Label></Col>
          <Col md={4}><Form.Control type="date" defaultValue="2023-10-27" /></Col>
        </Row>

        <Row className="mb-4">
          <Col md={2}><Form.Label>Available From</Form.Label></Col>
          <Col md={4}><Form.Control type="date" defaultValue="2023-10-23" /></Col>
          <Col md={2}><Form.Label>Available Until</Form.Label></Col>
          <Col md={4}><Form.Control type="date" defaultValue="2023-10-30" /></Col>
        </Row>

        <div className="d-flex justify-content-end gap-2">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">
            Cancel
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}
