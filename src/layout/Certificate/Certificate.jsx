import { Container, Row, Col } from "react-bootstrap";
import Certificates from "../../components/Certificates/Certificates";


export default function Certificate() {

  return(
  <section id="certificate">
    <Container>
      <Row>
        <Col>
          <div className="cert-text">
          <h2><strong>Certificates</strong></h2>
          </div>
          <Certificates/>
        </Col>
      </Row>
    </Container>
    </section>
  )
}