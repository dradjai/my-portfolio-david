import { useState } from "react";
import { Col, Container, Modal, Row, Image, Card } from "react-bootstrap";

export default function Panel({element: {title, content, url, image}}) {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);


  return(
   
  
    <Col className="portfolio-col" xs={11} md={6} lg={4}>
      
    <Card className="portfolio-card">
      <div onClick={toggleShow}>
        <Image src={image} fluid/>
      </div>
      <Card.Body>
      <Card.Title className="port-title-text">
      <div className="port-title">
        <a href={url} target="_blank" rel="noreferrer"><h4>{title}</h4></a>
      </div>
      </Card.Title>
      </Card.Body>
    </Card>
    
      <Modal show={show} onHide={toggleShow} size="lg" centered>
      
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image src={image} fluid/>
              </Col>
              
              <Col xs={12} md={6}>
                <h3 className="title-modal">{title}</h3>
                <p className="content-modal">{content}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

    </Col>
   
  )
}

{/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}