import { React } from 'react'
import {Navbar , Nav,Image, Form} from 'react-bootstrap'
import logo from '../assets/1-header/logo.png'
import search from '../assets/7-icons/search.svg'
import '../Navbar.css'

export default function Navigation() {
    return (
        <Navbar className="navbar bg-transparent px-10 py-3" expand="lg">
        <Navbar.Brand href="#home">
        <Image src={logo} width={80}/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar--nav--container mx-auto">
            <Nav.Link className="px-4 nav--link">Home</Nav.Link>
            <Nav.Link className="px-4 nav--link">About Us</Nav.Link>
            <Nav.Link className="px-4 nav--link">Services</Nav.Link>
            <Nav.Link className="px-4 nav--link">Pricing</Nav.Link>
            <Nav.Link className="px-4 nav--link">Careers</Nav.Link>
          </Nav>
          <Form inline>
            <Image className="nav--search" src={search} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}