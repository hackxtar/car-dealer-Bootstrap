import React from "react";
import "./AppBar.scss";

const AppBar = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                Car <em>Dealer</em>
              </a>
              <ul className="nav">
                <li>
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="cars.html">Cars</a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="/#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </a>

                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="about.html">
                      About Us
                    </a>
                    <a className="dropdown-item" href="blog.html">
                      Blog
                    </a>
                    <a className="dropdown-item" href="team.html">
                      Team
                    </a>
                    <a className="dropdown-item" href="testimonials.html">
                      Testimonials
                    </a>
                    <a className="dropdown-item" href="faq.html">
                      FAQ
                    </a>
                    <a className="dropdown-item" href="terms.html">
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
