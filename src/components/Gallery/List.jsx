import { Container, Row } from 'react-bootstrap'
import data from '../../data/gallery.json'
import Panel from './Panel'

export default function List() {

  return(
    <Container>
      <Row>
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