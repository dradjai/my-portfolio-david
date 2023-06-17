import { useState } from "react";
import { Col, Container, Image, Modal, Row } from "react-bootstrap";

export default function CertPanel({element: {id, image}}) {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return(

 
      <Col className="cert-col" xs={11} md={6} lg={4}>
   
        <div onClick={toggleShow}>
          <Image src={image} className="image" fluid/>
        </div>
   
 
          <Modal show={show} onHide={toggleShow} size="md" centered>
          
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    <Image src={image} className="image" fluid/>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>

        </Col>

  )
}