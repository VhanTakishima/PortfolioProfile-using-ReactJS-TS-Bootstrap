import { useState, useEffect } from "react";
import "../styling/Nav.css";
import Logo from "./Logo";

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
  const storedTheme: Theme =
    (localStorage.getItem("selectedTheme") as Theme) || "Cerulean";

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
    "Pulse",
    "Fire",
    "Yeti",
    "Flatly",
  ];

  const handleThemeChange = (theme: Theme) => {
    const oldLink = document.getElementById("theme-stylesheet");
    if (oldLink) {
      oldLink.remove();
    }

    const newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.id = "theme-stylesheet";
    newLink.href = `../../node_modules/bootswatch/dist/${theme.toLowerCase()}/bootstrap.min.css`;

    document.head.appendChild(newLink);

    setSelectedTheme(theme);
    localStorage.setItem("selectedTheme", theme);
  };

  useEffect(() => {
    handleThemeChange(storedTheme);
    console.log(selectedTheme);
  }, []);

  const themeHandler = themeColors.map((theme) => (
    <a
      key={theme}
      className="dropdown-item"
      href="#"
      onClick={() => handleThemeChange(theme)}
    >
      {theme}
    </a>
  ));

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Themes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {themeHandler}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Mini Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
