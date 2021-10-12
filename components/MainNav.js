import {
  Container,
  Navbar,
  Nav
} from "react-bootstrap";


export default function MainNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Video Meetings Assistant</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="privacy">Privacy policy</Nav.Link>
          <Nav.Link href="terms">Terms of use</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  )
}
