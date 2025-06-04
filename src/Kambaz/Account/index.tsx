import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation"; 

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex" id="wd-account-screen">
      <div className="d-none d-md-block">
        <AccountNavigation />
      </div>

        <Routes>
        <Route path="/" element={<Navigate to={ currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin" }/>}/>
          <Route path="/Signin"  element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup"  element={<Signup />} />
        </Routes>
      </div>
  );
}
