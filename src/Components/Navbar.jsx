import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

    {/* Navbar logo styling         */}
    <Link to="/" className="navbar-brand">
  <img
    src="/logo img.jpg"
    alt="Logo"
    width="50"
    height="50"
    style={{ borderRadius: '10px' }}
    className="d-inline-block align-text-top"
   />
   {/* End of Navbar logo styling */}



   </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

     {/* Start of Navbar links styling */}
    <li className="nav-item">
    <Link to="/home" className="nav-link nav-link-hover ">Home</Link>
    </li>

    <li className="nav-item">
    <Link to="/about" className="nav-link nav-link-hover  ">About Us</Link>
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
        <Link to="/services" className="dropdown-item nav-link-hover">Services</Link>
    </li>

    <li>
        <Link to="/contact" className="dropdown-item nav-link-hover">Contact us</Link>
    </li>

     <li><hr className="dropdown-divider" /></li>

    <li>
        <Link to="/projects" className="dropdown-item nav-link-hover">Projects</Link>
    </li>

  </ul>
</li>
      </ul>
      {/* End of Navbar links styling */}


           {/* Navbar buttons styling     */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            {/* End of Navbar buttons styling */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;