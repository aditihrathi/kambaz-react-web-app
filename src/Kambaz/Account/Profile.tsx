import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div className="p-5 w-100" style={{ maxWidth: 300 }}>
      <h1 className="mb-4">Profile</h1>
      <Form.Control defaultValue="alice" className="mb-2" />
      <Form.Control defaultValue="123" className="mb-2" />
      <Form.Control defaultValue="Alice" className="mb-2" />
      <Form.Control defaultValue="Wonderland" className="mb-2" />
      <Form.Control type="date" className="mb-2" />
      <Form.Control defaultValue="alice@wonderland.com" className="mb-2" />
      <Form.Control defaultValue="User" className="mb-3" />
      <Button variant="danger" className="w-100">Signout</Button>
    </div>
  );
}
