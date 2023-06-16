import { Col, Container, Row } from 'react-bootstrap'
import Gallery from '../../components/Gallery'

export default function Portfolio () {

  return(
    <section id='portfolio'>
      <Container>
        <Row>
          <Col>
            <div className='portfolio-text'>
            <h2><strong>Portfolio</strong></h2>
            </div>
            <Gallery/>
          </Col>
        </Row>
      </Container>
    </section>
      
  )
}