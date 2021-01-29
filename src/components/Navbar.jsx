import { React } from 'react'
import {Navbar , Nav,Image,  Form, FormControl , Button} from 'react-bootstrap'
import logo from '../assets/1-header/logo.png'
export default function () {
    return (
        <Navbar  bg="light" expand="lg">
        <Navbar.Brand href="#home">
        <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="bas./ic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="px-4" href="#home">Home</Nav.Link>
            <Nav.Link className="px-4" href="#link">About Us</Nav.Link>
            <Nav.Link className="px-4" href="#link">Services</Nav.Link>
            <Nav.Link className="px-4" href="#link">Pricing</Nav.Link>
            <Nav.Link className="px-4" href="#link">Careers</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}