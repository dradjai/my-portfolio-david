import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return(

    <section id="about">
      <Container>
        <Container className="three-items">
          <Row>
            <Col>
              <h3><strong>Family</strong></h3>
              <h5>My wife and kids are everything. I have a son and daughter that bring me all the joy in the world</h5>
            </Col>
            <Col>
              <h3><strong>Interests</strong></h3>
              <h5>In addition to spending time with my family I enjoy coding, playing golf and watching football</h5>
            </Col>
            <Col>
              <h3><strong>Goals</strong></h3>
              <h5>Always continue learning, building and meeting people.  To work on innovative projects </h5>
            </Col>
          </Row>
          </Container>
          
        <Container className="about-section">
        <Row>
          <Col>
            <div className="about-text">
            <h2><strong>About</strong></h2>
            </div>
            <h5 className="about-text-info">Born in New York and grew up in South Florida.  Passionate about coding and application development. I have a Masters in IT, MBA and BS in Economics.  Former mortgage professional with over 15 years experience. Skilled in problem solving and driven to find innovative solutions. Eager to explore technology, learn new skills, and contribute to the world of software development. Excited about the potential of technology to shape lives and improve the world. Ready for new coding adventures!</h5>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  )
}