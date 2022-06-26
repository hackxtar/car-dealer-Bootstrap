import React from "react";

export const Navbar = () => {
  return (
    <>
      {/* Header */}
      <header id="header" className="alt">
        <a href="index.html" className="logo">
          <strong>Car Dealer</strong> <span>Website</span>
        </a>
        <nav>
          <a href="#menu">Menu</a>
        </nav>
      </header>

      {/* Menu */}
      <nav id="menu">
        <ul className="links">
          <li className="active">
            <a href="index.html">Home </a>
          </li>

          <li>
            <a href="cars.html">Cars</a>
          </li>

          <li>
            <a href="about-us.html">About Us</a>
          </li>

          <li>
            <a href="blog.html">Blog</a>
          </li>

          <li>
            <a href="contact.html">Contact Us</a>
          </li>

          <li className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </a>

            <ul className="dropdown-menu">
              <li>
                <a href="team.html">Team</a>
              </li>
              <li>
                <a href="testimonials.html">Testimonials</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="terms.html">Terms</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};
