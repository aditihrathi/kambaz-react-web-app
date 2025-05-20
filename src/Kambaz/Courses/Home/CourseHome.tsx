import { Row, Col } from "react-bootstrap";
import KambazNavigation from "../../Navigation";
import CourseNavigation from "../Navigation";
import CourseStatus from "./Status";
import Modules from "../Modules";
import TopBar from "/TopBar";

export default function CourseHome() {
  return (
    <div id="wd-course-home">
      <TopBar courseName="CS5610 SUM 25" screenTitle="Home" />
      <Row className="m-0">
        <Col md={1} className="collapse d-md-block p-0" id="wd-kambaz-navigation">
          <KambazNavigation />
        </Col>

        <Col md={2} className="collapse d-md-block p-0" id="wd-course-navigation">
          <CourseNavigation />
        </Col>

        <Col xs={12} md={6} className="p-3">
          <Modules />
        </Col>

        <Col md={3} className="collapse d-md-block p-3" id="wd-course-status-panel">
          <CourseStatus />
        </Col>
      </Row>
    </div>
  );
}
