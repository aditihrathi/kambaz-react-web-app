import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer"; 
import * as client from "./client";


export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    const user =  await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };


  return (
    <div className="p-5 w-100" style={{ maxWidth: 300 }}>
      <h1 className="mb-4">Sign in</h1>
      <Form.Control
        placeholder="username"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <Form.Control
        type="password"
        placeholder="password"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <Button onClick={signin} className="w-100 mb-2">Sign In</Button>
      <Link to="/Kambaz/Account/Signup">Signup</Link>
    </div>
  );
}
