import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { enroll, unenroll } from "./Courses/People/reducer";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  const dispatch = useDispatch();
  const courses = useSelector((state: any) => state.coursesReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [course, setCourse] = useState<any>({
    _id: uuidv4(),
    name: "",
    description: "",
    image: "https://picsum.photos/300/200",
  });

  const [showAllCourses, setShowAllCourses] = useState(false);
  const isFaculty = currentUser?.role === "FACULTY";

  const handleAdd = () => {
    dispatch(addCourse({ ...course, _id: uuidv4() }));
    resetForm();
  };

  const handleUpdate = () => {
    dispatch(updateCourse(course));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteCourse(id));
  };

  const toggleEnrollment = (courseId: string) => {
    const isEnrolled = enrollments[currentUser._id]?.includes(courseId);
    if (isEnrolled) {
      dispatch(unenroll({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enroll({ userId: currentUser._id, courseId }));
    }
  };

  const resetForm = () => {
    setCourse({
      _id: uuidv4(),
      name: "",
      description: "",
      image: "https://picsum.photos/300/200",
    });
  };

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((c: any) => enrollments[currentUser._id]?.includes(c._id));

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <Button
              variant="primary"
              className="float-end"
              onClick={handleAdd}
              id="wd-add-new-course-click"
            >
              Add
            </Button>
            <Button
              variant="warning"
              className="float-end me-2"
              onClick={handleUpdate}
              id="wd-update-course-click"
            >
              Update
            </Button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <FormControl
            as="textarea"
            rows={3}
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2>
        <Button
          variant="info"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Only" : "Show All Courses"}
        </Button>
      </div>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((c: any) => {
            const isEnrolled = enrollments[currentUser._id]?.includes(c._id);
            const canAccessCourse = isFaculty || isEnrolled;
            return (
              <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link
                    to={canAccessCourse ? `/Kambaz/Courses/${c._id}/Home` : "#"}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    onClick={(e) => {
                      if (!canAccessCourse) e.preventDefault();
                    }}
                  >
                    <Card.Img src={c.image} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {c.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {c.description}
                      </Card.Text>
                      <Button variant="primary">Go</Button>

                      {isFaculty && (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setCourse(c);
                            }}
                            className="btn btn-warning me-2 float-end"
                            id="wd-edit-course-click"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDelete(c._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                        </>
                      )}

                      {!isFaculty && (
                        <Button
                          variant={isEnrolled ? "danger" : "success"}
                          className="mt-2 w-100"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleEnrollment(c._id);
                          }}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
