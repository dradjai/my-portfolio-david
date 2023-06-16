import { Button, Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Header() {

  const imgRoot = process.env.PUBLIC_URL + "/images/";

  return(
    <section id="home" className="hero">
      <Container>
        <Row>
          <Col>
            <section className="hero-text">
            <img className="profile-img" src={imgRoot+"portfolioPic.png"} alt="profile" />
            <h1><strong>Hi, I'm David Radjai</strong></h1>
            <h3><strong>Software Engineer</strong></h3>
            <button className="btn-about"><Nav.Link href="#about">About Me</Nav.Link></button>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  )
}