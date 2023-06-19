import { Container, Row } from 'react-bootstrap'
import data from '../../data/gallery.json'
import Panel from './Panel'

export default function List() {

  return(
    <Container>
      <Row className="d-flex justify-content-center"> 
        {data.map((element, index) => {
          return(
            <Panel element={element}/>
          )
        }
        )}
      </Row>
    </Container>
  )
}