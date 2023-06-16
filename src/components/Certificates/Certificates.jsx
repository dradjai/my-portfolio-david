import { Carousel, Col, Container, Row } from "react-bootstrap";

export default function Certificates() {

  const imgRoot = process.env.PUBLIC_URL + "/images/";

  return(
    <Container className="carousel-cert">
      <Row>
        <Col>
        <Carousel>
      <Carousel.Item>
        <img className='d-block w-100'
          src={imgRoot + "FigmaEssentials.png"}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='d-block w-100'
          src={imgRoot + "FigmaUX.png"}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100'
          src={imgRoot + "HowToPlanWebsite.png"}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100'
          src={imgRoot + "ReactHooks.png"}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
      </Col>

      <Col>
        <Carousel>
      <Carousel.Item>
        <img className='d-block w-100'
          src={imgRoot + "JavaCert.png"}
          alt="First slide"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='d-block w-100'
          src={imgRoot + "SoftwareEngineeringCert.png"}
          alt="Second slide"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

    
      <Carousel.Item>
        <img className='d-block w-100'
          src={imgRoot + "JavaHackerrank.png"}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
      </Col>
    </Row>

    </Container>
  )
}