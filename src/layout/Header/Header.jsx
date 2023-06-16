import { Card, Col, Container, Row } from "react-bootstrap";


export default function Header() {

  const imgRoot = process.env.PUBLIC_URL + "/images/";

  return(
    <section id="home" className="hero">
      <Container>
        <Row>
          <Col>
            <section className="hero-text">
            <img className="profile-img" src={imgRoot+"portfolioPic.png"} alt="profile" />
            <h1>David Radjai</h1>
            <h3>Software Engineer</h3>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  )
}