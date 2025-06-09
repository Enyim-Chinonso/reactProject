
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary navbar-color">
      <div className="container-fluid">
        {/* Navbar logo */}
        <a href="#home" className="navbar-brand">
          <img
            src="/logo img.jpg"
            alt="Logo"
            width="70"
            height="50"
            style={{ borderRadius: "10px" }}
            className="d-inline-block align-text-top"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Main Nav Links */}
            <li className="nav-item">
              <a href="#home" className="nav-link nav-link-hover">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link nav-link-hover">
                About Us
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-link-hover"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#services" className="dropdown-item nav-link-hover">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="dropdown-item nav-link-hover">
                    Contact Us
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a href="#projects" className="dropdown-item nav-link-hover">
                    Projects
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Optional Search */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
