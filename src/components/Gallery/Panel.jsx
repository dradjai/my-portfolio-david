import { useState } from "react";
import { Col, Container, Modal, Row, Image } from "react-bootstrap";

export default function Panel({element: {title, content, url, image}}) {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);


  return(
   
  
    <Col className="portfolio-col" xs={11} md={6} lg={4}>
   
      <div onClick={toggleShow}>
        <Image src={image} fluid/>
        </div>
      <div className="port-title">
        <a href={url} target="_blank" rel="noreferrer"><h4>{title}</h4></a>
      </div>
      
    
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