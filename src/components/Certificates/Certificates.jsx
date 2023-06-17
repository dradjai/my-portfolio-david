import { Container, Row } from "react-bootstrap";
import data from "../../data/certificateData.json";
import CertPanel from "./CertPanel";

export default function Certificates() {

  return(
    
    <Container>
      <Row className="d-flex justify-content-center">
        {
          data.map((element, index) => {

            return(
              <CertPanel element={element}/>
            )
          })
        }
      </Row>
    </Container>

  )
}