import { Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";

import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account"; 
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";


export default function Kambaz() {
  return (
    <Session>
    <div>
      <div
        id="wd-kambaz-navigation"
        className="collapse d-md-block position-fixed bottom-0 top-0 bg-black z-2"
        style={{ width: 110 }}
      ></div>

      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />

            <Route path="Account/*" element={<Account />} />

            <Route
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={[]} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
    </Session>
);
}
