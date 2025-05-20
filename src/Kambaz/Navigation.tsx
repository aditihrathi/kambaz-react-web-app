import { NavLink } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineCalendar,
} from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineInbox } from "react-icons/hi";
import { PiGear } from "react-icons/pi";

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        href="https://www.northeastern.edu/"
        target="_blank"
        rel="noreferrer"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU" />
      </a>

      <NavLink
        to="/Kambaz/Account"
        className={({ isActive }) =>
          `list-group-item text-center border-0 d-flex flex-column align-items-center justify-content-center ${
            isActive ? "active-link" : "bg-black text-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <FaRegCircleUser
              className={`fs-1 ${isActive ? "text-secondary" : "text-white"}`}
            />
            <div className={isActive ? "text-danger" : "text-white"}>
              Account
            </div>
          </>
        )}
      </NavLink>

      <NavLink
        to="/Kambaz/Dashboard"
        className={({ isActive }) =>
          `list-group-item text-center border-0 d-flex flex-column align-items-center justify-content-center ${
            isActive ? "active-link" : "bg-black text-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <AiOutlineDashboard className="fs-1 text-danger" />
            <div className={isActive ? "text-danger" : "text-white"}>
              Dashboard
            </div>
          </>
        )}
      </NavLink>

      <NavLink
        to="/Kambaz/Courses"
        className={({ isActive }) =>
          `list-group-item text-center border-0 d-flex flex-column align-items-center justify-content-center ${
            isActive ? "active-link" : "bg-black text-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <LiaBookSolid className="fs-1 text-danger" />
            <div className={isActive ? "text-danger" : "text-white"}>
              Courses
            </div>
          </>
        )}
      </NavLink>

      <NavLink
        to="/Kambaz/Calendar"
        className={({ isActive }) =>
          `list-group-item text-center border-0 d-flex flex-column align-items-center justify-content-center ${
            isActive ? "active-link" : "bg-black text-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <AiOutlineCalendar className="fs-1 text-danger" />
            <div className={isActive ? "text-danger" : "text-white"}>
              Calendar
            </div>
          </>
        )}
      </NavLink>

      <NavLink
        to="/Kambaz/Inbox"
        className={({ isActive }) =>
          `list-group-item text-center border-0 d-flex flex-column align-items-center justify-content-center ${
            isActive ? "active-link" : "bg-black text-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <HiOutlineInbox className="fs-1 text-danger" />
            <div className={isActive ? "text-danger" : "text-white"}>
              Inbox
            </div>
          </>
        )}
      </NavLink>

      <NavLink
        to="/Labs"
        className={({ isActive }) =>
          `list-group-item text-center border-0 d-flex flex-column align-items-center justify-content-center ${
            isActive ? "active-link" : "bg-black text-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <PiGear className="fs-1 text-danger" />
            <div className={isActive ? "text-danger" : "text-white"}>
              Labs
            </div>
          </>
        )}
      </NavLink>
    </div>
  );
}
