import { Component } from "react"
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import {Nav, Container, Offcanvas, Form, FormControl, Button} from 'react-bootstrap'
import { AiFillHome,  AiOutlineLogout } from 'react-icons/ai';
import {FaTruckMoving, FaTrailer, FaCar, FaUser} from 'react-icons/fa';
import {ImUsers} from 'react-icons/im';
import {RiCalendarEventFill} from 'react-icons/ri';
import {FiLogOut} from 'react-icons/fi';
import '../App.css'
import AuthentificationService from "./AuthentificationService";


class AuthLinks extends Component{
    navItems = {
        color: "#206a5d",
        backgroundColor: "#f4f4f4",
        margin: "10px",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "left",
        fontWeight: "bold"
    };
    profile = {
        color: "#fff",
        backgroundColor: "#206a5d",
        marginTop: "10px",
        margin: "10px",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "left",
        fontWeight: "bold"
    };
    logo = {
        color: "#fff",
    };
    logoExpand = {
        color: "#206a5d",
        fontWeight: "bold"
    };
    render(){
        return(
            <Navbar expand={false} bg="navbar" style={{backgroundColor: "#206a5d"}}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Container fluid >
                <Navbar.Toggle aria-controls="offcanvasNavbar" style={this.logo} />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                style={this.logo}
                >
                <Offcanvas.Header bg="navbar" closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel" style={this.logoExpand} >C&E Information</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body bg="navbar" >
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                    <Nav.Link href="/employees" style={this.profile}> <FaUser /> My profile </Nav.Link>
                    <Nav.Link href="/" style={this.navItems}>  <AiFillHome/> Home</Nav.Link>
                    <Nav.Link href="/employees"  style={this.navItems}> <ImUsers /> Employees Information </Nav.Link>
                    <Nav.Link href="/cars" style={this.navItems}> <FaCar /> Cars Information </Nav.Link>
                    <Nav.Link href="/trucks" style={this.navItems}> <FaTruckMoving /> Trucks Information </Nav.Link>
                    <Nav.Link href="/trails" style={this.navItems}> <FaTrailer /> Trails Information </Nav.Link>
                    <Nav.Link href="/calendar" style={this.navItems}> <RiCalendarEventFill /> Calendar </Nav.Link>
                    
                    </Nav>
            
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                
                <Link to="/index" style={{textDecoration: 'none'}} onClick = {AuthentificationService.logout} ><FiLogOut /> Log out</Link>
                    
                    
            
            </Container>
            </Navbar>
        )
    }
}

export default AuthLinks;
