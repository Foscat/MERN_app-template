import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "rsuite";
import { Link, useLocation } from "react-router-dom";

/**
 * @component NavBar
 * @description A navigation bar component that provides links to different routes in the application.
 *              It uses the Navbar and Nav components from rsuite for styling and layout.
 * @returns {JSX.Element} The rendered NavBar component.
 */
function NavBar() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const themeClass = `theme-${theme}`;

    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.remove("theme-light", "theme-dark", "theme-high-contrast");
    document.body.classList.add(themeClass);

    const root = document.getElementById("root");
    if (root) {
      root.classList.remove("theme-light", "theme-dark", "theme-high-contrast");
      root.classList.add(themeClass);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app-nav-wrap">
      <Navbar className="app-nav">
        <Navbar.Brand as={Link} to="/" className="app-nav-brand">
          MERN Template
        </Navbar.Brand>
        <Nav activeKey={location.pathname} className="app-nav-links">
          <Nav.Item as={Link} to="/" eventKey="/" className="app-nav-link">
            Home
          </Nav.Item>
          <Nav.Item
            as={Link}
            to="/workbench"
            eventKey="/workbench"
            className="app-nav-link"
          >
            Workbench
          </Nav.Item>
        </Nav>

        <div className="theme-toggle" role="group" aria-label="Change color theme">
          <button
            type="button"
            className={`btn btn-ghost theme-toggle-btn ${theme === "light" ? "is-active" : ""}`}
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            type="button"
            className={`btn btn-ghost theme-toggle-btn ${theme === "dark" ? "is-active" : ""}`}
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
          <button
            type="button"
            className={`btn btn-ghost theme-toggle-btn ${theme === "high-contrast" ? "is-active" : ""}`}
            onClick={() => setTheme("high-contrast")}
          >
            Contrast
          </button>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
