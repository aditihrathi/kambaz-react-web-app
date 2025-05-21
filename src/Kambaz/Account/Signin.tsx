import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="p-5 w-100" style={{ maxWidth: 300 }}>
      <h1 className="mb-4">Sign in</h1>
      <Form.Control placeholder="username" className="mb-2" />
      <Form.Control type="password" placeholder="password" className="mb-2" />
      <Link to="/Kambaz/Dashboard
      " className="btn btn-primary w-100 mb-2">
        Signin
      </Link>
      <Link to="/Kambaz/Account/Signup">Signup</Link>
    </div>
  );
}