import { NavLink, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kambaz/Courses/${cid}/${link}`;
        const isActive = pathname === path;

        return (
          <NavLink
            key={link}
            to={path}
            className={`list-group-item border-0 ps-3 ${
              isActive ? "text-dark fw-bold border-start border-black" : "text-danger"
            }`}
          >
            {link}
          </NavLink>
        );
      })}
    </div>
  );
}
