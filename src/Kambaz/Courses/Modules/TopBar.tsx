import { Button } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";

export default function TopBar({ courseName = "Course 1234" }) {
  return (
    <div className="d-flex justify-content-between align-items-center p-2 border-bottom bg-white sticky-top">
      <Button
        variant="link"
        className="d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#wd-kambaz-navigation"
        aria-controls="wd-kambaz-navigation"
        aria-expanded="false"
        aria-label="Toggle Kambaz Navigation"
      >
        <FaBars className="fs-4 text-dark" />
      </Button>

      <h5 className="m-0">{courseName}</h5>

      <Button
        variant="link"
        className="d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#wd-course-status-panel"
        aria-controls="wd-course-status-panel"
        aria-expanded="false"
        aria-label="Toggle Course Navigation"
      >
        <FaTimes className="fs-4 text-dark" />
      </Button>
    </div>
  );
}
