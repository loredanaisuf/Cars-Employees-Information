import { Component } from "react"
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Container, Offcanvas, Form, FormControl, Button} from 'react-bootstrap'
import { AiFillHome,  AiOutlineEdit } from 'react-icons/ai';
import {FaTruckMoving, FaTrailer, FaCar, FaUser} from 'react-icons/fa';
import {ImUsers} from 'react-icons/im';
import {RiCalendarEventFill} from 'react-icons/ri';
import '../App.css'

const navbar = {
    
    color : '#fff',
}
class NewNavbar extends Component{
    
    render(){
        return(
            <Navbar expand={false} bg="navbar" >
            <Container fluid>
                <Navbar.Brand href="/" className="navbarText">C&E Information</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header bg="navbar" closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">C&E Information</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body bg="navbar" >
                    <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                    <Nav.Link href="/"> <AiFillHome/> Home</Nav.Link>
                    <Nav.Link href="/employees" className="navbarText"> <ImUsers /> Employees Information </Nav.Link>
                    <Nav.Link href="/cars" className="navbarText"> <FaCar /> Cars Information </Nav.Link>
                    <Nav.Link href="/employees" className="navbarText"> <FaTruckMoving /> Trucks Information </Nav.Link>
                    <Nav.Link href="/employees" className="navbarText"> <FaTrailer /> Trails Information </Nav.Link>
                    <Nav.Link href="/employees" className="navbarText"> <RiCalendarEventFill /> Calendar </Nav.Link>
                    <Nav.Link href="/employees" className="navbarText"> <FaUser /> My profile </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        )
    }
}

export default NewNavbar;
