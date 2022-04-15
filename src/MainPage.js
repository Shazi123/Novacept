import React from "react";
import "./App.css";
import logo from "./images/logo.webp";
import Products from "./Modules/Products/Products";
import Blogs from "./Modules/Blogs/Blogs";
import Footer from "./Modules/Footer/Footer";
import AboveFooter from "./Modules/AboveFooter/AboveFooter";
import FirstModule from "./Modules/FirstModule/FirstModule";
import Navbar from "./Modules/Navbar/Navbar";

function MainPage() {
  return (
    <div>
      {/* <!--Navbar-->
      <div class="page-wrap">
        <div class="nav-style">
          <div class="mobile-view">
            <div class="mobile-view-header">
              <div class="mobile-view-close">
                <i class="fa fa-times js-toggle"></i>
              </div>
            </div>
            <div class="mobile-view-body"></div>
          </div>
          <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container">
              <a class="navbar-brand pl-0" href="#">
                <img
                  className="logo"
                  src={logo}
                  alt="Novacept"
                  title="Novacept"
                />
              </a>
              <div class="d-inline-block d-lg-none ml-md-0 ml-auto py-3">
                <i class="fa fa-bars js-toggle" aria-hidden="true"></i>
              </div>
              <div class="d-none d-lg-block">
                <ul class="navbar-nav ml-auto js-clone-nav">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      HOME
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        About Us
                      </a>
                      <a class="dropdown-item" href="#">
                        Our Team
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      PRODUCTS
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        NovaGenie
                      </a>
                      <a class="dropdown-item" href="#">
                        Change Facilitator
                      </a>
                      <a class="dropdown-item" href="#">
                        Personal Facilitator
                      </a>
                      <a class="dropdown-item" href="#">
                        PROJECT Z
                      </a>
                      <a class="dropdown-item" href="#">
                        Talent 360
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      SERVICES
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        Workforce Enablement
                      </a>
                      <a class="dropdown-item" href="#">
                        Enterprise Agility
                      </a>
                      <a class="dropdown-item" href="#">
                        Actionable Analytics
                      </a>
                      <a class="dropdown-item" href="#">
                        Disruptive Innovation
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      RESOURCES
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">
                        Blog
                      </a>
                      <a class="dropdown-item" href="#">
                        Business Use Cases
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div> */}
      <Navbar/>
      <FirstModule />
      <Products />
      <Blogs />
      <AboveFooter />
      <Footer />
    </div>
  );
}

export default MainPage;
