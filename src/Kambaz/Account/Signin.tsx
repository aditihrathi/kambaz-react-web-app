import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input className="wd-username" placeholder="username" /> <br />
      <input className="wd-password" placeholder="password" type="password" /> <br />

      <Link id="wd-signin-btn" to="/Kambaz/Dashboard">
          Sign in
      </Link>
<div> </div>
      <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link"> Sign up </Link>
      <div> </div>
      <Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br/>

    </div>
);}
