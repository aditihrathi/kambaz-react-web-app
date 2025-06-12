import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./reducer";

export default function PeopleTable() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.usersReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer);

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  const enrolledUsers = users.filter((usr: any) =>
    enrollments.some(
      (enroll: any) => enroll.userId === usr._id && enroll.courseId === cid
    )
  );

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
