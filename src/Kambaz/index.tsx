import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";


export default function Kambaz() {
  return (
    <div> <div
  id="wd-kambaz-navigation"
  className="collapse d-md-block position-fixed bottom-0 top-0 bg-black z-2"
  style={{ width: 110 }}
>

</div>
    <div id="wd-kambaz">
            <KambazNavigation />
      <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Courses" element={<Dashboard />} />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
    </div>
    </div>
);}
