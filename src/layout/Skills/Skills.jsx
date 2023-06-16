import { Container, Row, Col } from "react-bootstrap";
import SkillsComponent from '../../components/SkillsComponent'

export default function Skills() {
  return(
    <section id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-text">
            <h2><strong>Skills</strong></h2>
            </div>
            <SkillsComponent/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}