import { useState } from "react";
import { Col, Image, Modal } from "react-bootstrap";

export default function CertPanel({element: {id, image}}) {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return(

 
      <Col className="cert-col" xs={11} md={6} lg={4}>
        <div onClick={toggleShow}>
          <Image src={image} className="image" fluid/>
        </div>
          <Modal show={show} onHide={toggleShow} className="d-flex justify-content-center" size="lg" centered>
            <Image src={image} width="500"/>
          </Modal>

        </Col>

  )
}