import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavMenu() {

  return (
     <Navbar className="nav-menu" sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#certificate">Certificates</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <button className="resume-btn">
            <Nav.Link href="/images/DavidRadjai_Resume_.pdf" target="_blank">Resume</Nav.Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}