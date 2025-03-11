import { Link } from "react-router-dom";

function Header() {
  return <>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="#">E-shop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sign-in">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sign-up">Sign up</Link>
          </li>
        </ul>

      </div>
    </nav>

  </>
}
export default Header;