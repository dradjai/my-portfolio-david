import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return(
  
  <section id="contact">
    <Container>
      <h2><strong>Contact</strong></h2>
      <div className="contact-email">
      <Row><a href="dradjaidev@gmail.com" target="_blank"><p>dradjaidev@gmail.com</p></a></Row>
      </div>
      <div className="resume">
      <Row><a href="/images/DavidRadjai_Resume_.pdf" target="_blank"><p>Resume</p></a></Row>
      </div>
      <Row>
        <Col className="git-icon">
          <a href="https://github.com/dradjai" target="_blank" rel="noreferrer"><img src="/images/GitHub-Mark.png" height="150" width="150" alt="" /></a>
        </Col>
        <Col className="linkedin-icon">
          <a href="https://www.linkedin.com/in/davidradjai/" target="_blank" rel="noreferrer"><img src="/images/linkedin-logo-linkedin-icon-transparent-free-png.webp" height="150" width="150" alt="" /></a>
        </Col>
      </Row>
      <p>&copy; {currentYear} by David Radjai</p>&nbsp;
    </Container>
    </section>
  )
}