import React from "react";
import { Container, Row, Badge, Col } from "react-bootstrap";

import "./Home.scss";

const Header = () => {
  return (
    <div className="main-banner">
      <div className="overlay header-text">
        <div>
          <h6>Lorem ipsum dolor sit amet</h6>
          <h2>
            Best <em>car dealer</em> in town!
          </h2>
          <div className="main-button">
            <a href="contact.html">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedCars = () => {
  return (
    <Container className="text-center my-6">
      <Row>
        <h1>
          Featured Cars <Badge className="bg-primary">New</Badge>
        </h1>
      </Row>
      <Row className="my-5 justify-content-center">
        {[1, 2, 3].map((e) => (
          <FeaturedCarsSingle />
        ))}
      </Row>
    </Container>
  );
};

const FeaturedCarsSingle = () => {
  return (
    <Col className="lg-4">
      <div class="trainer-item">
        <div class="image-thumb">
          <img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80/100px180"
            alt=""
          />
        </div>
        <div class="down-content">
          <span>
            <del>
              <sup>$</sup>11999
            </del>
            &nbsp; <sup>$</sup>11779
          </span>

          <h4>Lorem ipsum dolor sit amet, consectetur</h4>

          <p>
            <i class="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
            <i class="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
            <i class="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
          </p>

          <ul class="social-icons list-style-none">
            <li>
              <a href="car-details.html">+ View Car</a>
            </li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

const ReadAboutUs = () => {
  return (
    <div className="text-white mx-21">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
      dolorum repellat ipsa, iure laudantium perspiciatis libero repudiandae
      vero quisquam nulla itaque odit recusandae asperiores debitis tenetur.
      Accusantium optio quibusdam laborum asperiores inventore qui quos ducimus
      vel fugiat placeat vero adipisci, neque expedita ullam in! Veniam
      cupiditate deleniti provident praesentium aut!
    </div>
  );
};
const Home = () => {
  return (
    <Container fluid className="px-0">
      <Header />
      <FeaturedCars />

      <section className="section section-bg">
        <Container fluid className="pos-r up-10 text-center px-0">
          <div className="py-6 up-1">
            <h1 className="text-white">
              READ <Badge className="bg-primary">ABOUT US</Badge>
            </h1>

            <div className="mt-5 justify-content-center">
              <ReadAboutUs />
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default Home;
