import { Outlet ,NavLink} from "react-router";

function Technologies() {
  return (
    <div>
      <div className="navbar navbar-expand-sm">
        <ul className="navbar-nav mx-auto ">
          <li className="nav-item">
            <NavLink to="java" className="nav-link">
              Java
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="node" className="nav-link">
              Nodejs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="vue" className="nav-link">
              Vue
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Technologies;
