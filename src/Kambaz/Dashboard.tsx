import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  console.log("Dashboard component rendered");

  const courses = [
    {
      id: "1234",
      title: "CS1234 React JS",
      description: "Full Stack software developer",
      image: "/images/computerscience.jpg",
    },
    {
      id: "1800",
      title: "CS1800 Algorithms",
      description: "Learn how to use algorithms to solve problems!",
      image: "/images/Algorithm.jpg",
    },
    {
      id: "3600",
      title: "Math3600 Linear Algebra",
      description: "Basics of Machine Learning",
      image: "/images/math.jpg",
    },
    {
      id: "2410",
      title: "CS2410 Programming Languages",
      description: "Understand how to create your own language!",
      image: "/images/proglang.jpg",
    },
    {
      id: "7126",
      title: "ENG7126 Media & Politics",
      description: "How does media and stakeholders shape public views?",
      image: "/images/ling.jpg",
    },
    {
      id: "6230",
      title: "CHEM6230 Organic Chemistry",
      description: "Further understanding of organic chemistry",
      image: "/images/orgo.jpg",
    },
    {
      id: "3245",
      title: "PHIL3245 Tech & Human Values",
      description: "How does technology impact human evolution?",
      image: "/images/phil.jpg",
    },
  ];

  return (
    <div id="wd-dashboard" className="ps-md-5 ms-md-5">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {courses.map((course) => (
            <Col
              key={course.id}
              className="wd-dashboard-course"
              style={{ width: "270px" }}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course.id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
