import { useState, useEffect } from "react";
import "../styling/Nav.css";
import Logo from "./Logo";

// Define a type for the themee names- why? beacuse TYPESCRIPT! kingina
type Theme =
  | "Cerulean"
  | "Darkly"
  | "Simplex"
  | "Solar"
  | "Vapor"
  | "United"
  | "Superhero"
  | "Cyborg"
  | "Quartz"
  | "Pulse"
  | "Fire"
  | "Yeti"
  | "Flatly";

function Nav() {
  // get the value on local storage or default to "Cerulean"
  const storedTheme: Theme =
    (localStorage.getItem("selectedTheme") as Theme) || "Cerulean";

  // states
  const [selectedTheme, setSelectedTheme] = useState<Theme>(storedTheme);

  const themeColors: Theme[] = [
    "Cerulean",
    "Darkly",
    "Simplex",
    "Solar",
    "Vapor",
    "United",
    "Superhero",
    "Cyborg",
    "Quartz",
    "Pulse",
    "Fire",
    "Yeti",
    "Flatly",
  ];

  const handleThemeChange = (theme: Theme) => {
    // reload CSS file para safe (remove)
    const oldLink = document.getElementById("theme-stylesheet");
    if (oldLink) {
      oldLink.remove();
    }

    // reload CSS file para safe (regenerate)
    const newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.id = "theme-stylesheet";
    newLink.href = `../../node_modules/bootswatch/dist/${theme.toLowerCase()}/bootstrap.min.css`;

    document.head.appendChild(newLink);

    // Update the selected theme state
    setSelectedTheme(theme);

    // Save sa local storage
    localStorage.setItem("selectedTheme", theme);
  };

  useEffect(() => {
    // onmount
    handleThemeChange(storedTheme);
  }, []);

  const themeHandler = themeColors.map((theme) => (
    <li key={theme} id={theme} onClick={() => handleThemeChange(theme)}>
      <a className="dropdown-item" href="#">
        {theme}
      </a>
    </li>
  ));

  return (
    <nav
      className="navbar navbar-expand-md bg-primary bg-gradient"
      data-bs-theme="light"
    >
      <div className="container-fluid justify-content-between navbar-left">
        <Logo />
        <div className=" flex-row mb-1 justify-content-md-end collapse navbar-collapse navbar-right">
          <ul className="nav navbar-nav ">
            <li className=" nav-item ">
              <a
                className="nav-link text-body-emphasis active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-body-emphasis" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown-center">
              <a
                className="nav-link text-body-emphasis dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Themes
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark bg-black bg-gradient link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                {themeHandler}
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-body-emphasis"
                href="#contact"
                data-bs-target="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body-emphasis" href="#">
                {" "}
                My Mini Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body-emphasis" href="#">
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
