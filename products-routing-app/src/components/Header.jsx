import { NavLink } from "react-router";

function Header() {
  return (
    <div >
      <ul className="nav justify-content-center bg-light py-3">
        <li className="nav-item">
          <NavLink to="" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="product" className="nav-link">
            CreateProduct
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="products" className="nav-link">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
