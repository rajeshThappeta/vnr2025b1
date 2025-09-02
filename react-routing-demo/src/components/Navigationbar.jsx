import { NavLink } from "react-router";

function Navigationbar() {
  return (
    <div className="navbar navbar-expand-sm">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <NavLink to="" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="register" className="nav-link">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="login" className="nav-link">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="technologies" className="nav-link">Technologies</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigationbar;
