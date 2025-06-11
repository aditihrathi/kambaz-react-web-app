import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateProfile(profile);
      dispatch(setCurrentUser(updatedProfile));
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      navigate("/Kambaz/Account/Signin");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [currentUser]);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <Form.Control
            defaultValue={profile.username}
            id="wd-username"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            placeholder="Username"
          />
          <Form.Control
            defaultValue={profile.password}
            id="wd-password"
            className="mb-2"
            type="password"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            placeholder="Password"
          />
          <Form.Control
            defaultValue={profile.firstName}
            id="wd-firstname"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            placeholder="First Name"
          />
          <Form.Control
            defaultValue={profile.lastName}
            id="wd-lastname"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            placeholder="Last Name"
          />
          <Form.Control
            defaultValue={profile.dob}
            id="wd-dob"
            className="mb-2"
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <Form.Control
            defaultValue={profile.email}
            id="wd-email"
            className="mb-2"
            type="email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder="Email"
          />
          <Form.Select
            value={profile.role || "USER"}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="mb-2"
            id="wd-role"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
          <button
            onClick={updateProfile}
            className="btn btn-primary w-100 mb-2"
            id="wd-update-profile-btn"
          >
            Update
          </button>
          <button
            onClick={signout}
            className="btn btn-danger w-100 mb-2"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}