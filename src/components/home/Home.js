import React from "react";
import { Container, Row, Badge, Col, Card, Button } from "react-bootstrap";

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
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <FeaturedCarsSingle />
        ))}
      </Row>
    </Container>
  );
};

const FeaturedCarsSingle = () => {
  return (
    <Card style={{ width: "20rem" }} className="m-4">
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80/100px180"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="bg-primary">View</Button>
      </Card.Body>
    </Card>
  );
};

const Home = () => {
  return (
    <Container fluid className="px-0">
      <Header />
      <FeaturedCars />
    </Container>
  );
};

export default Home;
