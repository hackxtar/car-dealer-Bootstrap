import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./AppBar.scss";

const AppBar = () => {
  return (
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <a href="index.html" class="logo">
                Car Dealer<em> Website</em>
              </a>
              <ul class="nav">
                <li>
                  <a href="index.html" class="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="cars.html">Cars</a>
                </li>
                <li class="dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </a>

                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="about.html">
                      About Us
                    </a>
                    <a class="dropdown-item" href="blog.html">
                      Blog
                    </a>
                    <a class="dropdown-item" href="team.html">
                      Team
                    </a>
                    <a class="dropdown-item" href="testimonials.html">
                      Testimonials
                    </a>
                    <a class="dropdown-item" href="faq.html">
                      FAQ
                    </a>
                    <a class="dropdown-item" href="terms.html">
                      Terms
                    </a>
                  </div>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
