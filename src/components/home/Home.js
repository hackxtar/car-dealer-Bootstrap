/**
 * @format
 */
import React from "react";
import video from "../../assets/images/video.mp4";
import { Container, Row } from "react-bootstrap/";
import "./Home.scss";

const Header = () => {
  return (
    <div className="home">
      <div id="intro" className="bg-image shadow-2-strong">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="mask">
          <div className="container d-flex align-items-center justify-content-center text-center h-100">
            <div className="caption">
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
      </div>
    </div>
  );
};

const FeaturedCars = () => {
  return (
    <section className="section" id="trainers">
      <Row>
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>
              Featured <em>Cars</em>
            </h2>
            <img src="assets/images/line-dec.png" alt="" />
            <p>
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra ipsum dolor, ultricies fermentum massa consequat eu.
            </p>
          </div>
        </div>
      </Row>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <FeaturedCars />
      </Container>
    </>
  );
};

export default Home;
