import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      console.log("Session: User found in session:", currentUser);
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.log("Session: No active session found (this is normal if not logged in)");
      dispatch(setCurrentUser(null));
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (pending) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return children;
}

