import { NavLink, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();

  const links = [
    { name: "Home", path: "Home" },
    { name: "Modules", path: "Modules" },
    { name: "Piazza", path: "Piazza" },
    { name: "Zoom Meetings", path: "Zoom" },
    { name: "Assignments", path: "Assignments" },
    { name: "Quizzes", path: "Quizzes" },
    { name: "Grades", path: "Grades" },
    { name: "People", path: "People" }
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={`/Kambaz/Courses/${cid}/${link.path}`}
          className={({ isActive }) =>
            `list-group-item border-0 ps-3 ${
              isActive ? "text-dark fw-bold border-start border-black" : "text-danger"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
        }