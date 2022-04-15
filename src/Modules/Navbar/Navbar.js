import React from "react";
import logo from "../../images/logo.webp";
import "../../App.css";

function Navbar() {
  return (
    <div className="page-wrap">
      <div className="nav-style">
        <div className="mobile-view">
          <div className="mobile-view-header">
            <div className="mobile-view-close">
              <i className="fa fa-times js-toggle"></i>
            </div>
          </div>
          <div className="mobile-view-body"></div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top "
          style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 8%)" }}
        >
          <div className="container">
            <a className="navbar-brand pl-0" href="#">
              <img
                className="logo"
                src={logo}
                alt="Novacept"
                title="Novacept"
              />
            </a>
            <div className="d-inline-block d-lg-none ml-md-0 ml-auto py-3">
              <i className="fa fa-bars js-toggle" aria-hidden="true"></i>
            </div>
            <div className="d-none d-lg-block">
              <ul className="navbar-nav ml-auto js-clone-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                    <a className="dropdown-item" href="#">
                      Our Team
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      NovaGenie
                    </a>
                    <a className="dropdown-item" href="#">
                      Change Facilitator
                    </a>
                    <a className="dropdown-item" href="#">
                      Personal Facilitator
                    </a>
                    <a className="dropdown-item" href="#">
                      Project Z
                    </a>
                    <a className="dropdown-item" href="#">
                      Talent 360
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Workforce Enablement
                    </a>
                    <a className="dropdown-item" href="#">
                      Enterprise Agility
                    </a>
                    <a className="dropdown-item" href="#">
                      Actionable Analytics
                    </a>
                    <a className="dropdown-item" href="#">
                      Disruptive Innovation
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Blog
                    </a>
                    <a className="dropdown-item" href="#">
                      Business Use Cases
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
