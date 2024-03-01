//  import LogoLoad from "./component/Logo.js";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// ReactDOM.render(LogoLoad, document.getElementById("root"));
function Nav() {
  return (
    <nav className="navbar navbar-expand-xl bg-black bg-gradient">
      <div className="container-fluid  justify-content-between ">
        <p className="randomLetters text-white navbar-brand">LOVE</p>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="nav flex-row mb-3 justify-content-xl-end navbar-nav ">
            <li className=" nav-item">
              <a
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link"
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className=" link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Themes
              </a>
              <ul className="dropdown-menu dropdown-menu-dark bg-black bg-gradient link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                <li>
                  <a
                    className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover dropdown-item"
                    href="#"
                  >
                    Default
                  </a>
                </li>
                <li>
                  <hr className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover dropdown-divider" />
                </li>
                <li>
                  <a
                    className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover dropdown-item"
                    href="#"
                  >
                    Light
                  </a>
                </li>
                <li>
                  <a
                    className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover dropdown-item"
                    href="#"
                  >
                    Blue
                  </a>
                </li>
                <li>
                  <a
                    className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover dropdown-item"
                    href="#"
                  >
                    Green
                  </a>
                </li>
                <li>
                  <a
                    className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover dropdown-item"
                    href="#"
                  >
                    Orange
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link"
                href="#"
              >
                {" "}
                My Mini Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link"
                href="#"
              >
                Admin Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
