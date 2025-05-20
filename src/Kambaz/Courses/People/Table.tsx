import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Banner</span></td>
      <td className="wd-login-id">00173738</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-4-01</td>
      <td className="wd-total-activity">7:58:32</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">James</span>{" "}
          <span className="wd-last-name">Bond</span></td>
      <td className="wd-login-id">00733839</td>
      <td className="wd-section">S111</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2021-12-9</td>
      <td className="wd-total-activity">06:08:32</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Anakin</span>{" "}
          <span className="wd-last-name">Skywalker</span></td>
      <td className="wd-login-id">74940345</td>
      <td className="wd-section">S111</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2013-09-01</td>
      <td className="wd-total-activity">09:21:45</td></tr>

    </tbody>
   </Table>
  </div> );}