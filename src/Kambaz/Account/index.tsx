import { Routes, Route } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation"; 

export default function Account() {
  return (
    <div className="d-flex" id="wd-account-screen">
      <div className="d-none d-md-block">
        <AccountNavigation />
      </div>

        <Routes>
          <Route path="/"        element={<Signin />} />
          <Route path="/Signin"  element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup"  element={<Signup />} />
        </Routes>
      </div>
  );
}
