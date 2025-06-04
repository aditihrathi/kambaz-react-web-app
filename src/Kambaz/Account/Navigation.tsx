import { NavLink } from "react-router-dom";


export default function AccountNavigation() {
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  // const { pathname } = useLocation();

  return (
    <div
      id="wd-account-navigation"
      className="pt-5 px-3 d-flex flex-column gap-3"
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        width: "120px",
        borderRight: "1px solid lightgray"
      }}
    >
      {[
        { to: "/Kambaz/Account/Signin", label: "Signin" },
        { to: "/Kambaz/Account/Signup", label: "Signup" },
        { to: "/Kambaz/Account/Profile", label: "Profile" },
      ].map((link, i) => (
        <NavLink
          key={i}
          to={link.to}
          className={({ isActive }) =>
            `ps-2 fs-5 fw-normal border-start ${
              isActive
                ? "border-4 border-dark text-dark"
                : "border-0 text-danger"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
