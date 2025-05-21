import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-5 w-100" style={{ maxWidth: 300 }}>
      <h1 className="mb-4">Signup</h1>
      <Form.Control placeholder="username" className="mb-2" />
      <Form.Control type="password" placeholder="password" className="mb-2" />
      <Link to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2">
        Signup
      </Link>
      <Link to="/Kambaz/Account/Signin">Signin</Link>
    </div>
  );
}
