import React, { Component} from 'react';
import { Button, Navbar, Nav, NavDropdown, Container, Offcanvas, Form, FormControl } from 'react-bootstrap';
import AuthentificationService from './AuthentificationService';
import VisitorsLinks from './VisitorsLinks';
import AuthLinks from './AuthLinks';
import { Link } from 'react-router-dom';
import { AiOutlineLogin,  AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineAccountBox } from 'react-icons/md';
import {FaTruckMoving, FaTrailer, FaCar, FaUser} from 'react-icons/fa';
import {ImUsers} from 'react-icons/im';
import {RiCalendarEventFill} from 'react-icons/ri';
import {HiOutlineLogout} from 'react-icons/hi';

class CustomNavbar extends Component {
    constructor(props){
        super(props)
    }
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
    navItems = {
        color: "#fff",
        flex: 'end',
        textDecoration: 'none'
    };
    logo = {
        color: "#fff",
    };
    dropdownItems = {
        color: "#206a5d",
    };
    render(){
        const isUserLoggedId = AuthentificationService.isUserLoggedId();
        console.log(" Navbar : " + isUserLoggedId );
        return(
            <>
              <Navbar expand='lg' bg="navbar" style={{backgroundColor: "#206a5d"}}  variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#"style={this.logo} >C&E Information</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-6 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        
                        
                    >
                    
                            <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-6"
                                aria-label="Search"
                                />
                            </Form>
                       </Nav>
                        <Nav>
                    
                            {/* {isUserLoggedId && <Nav.Link placement="end" style={this.navItems} href="#action1"> <FaUser /> My profile</Nav.Link>} */}
                            {isUserLoggedId && <Nav.Link  href="/calendar"  style={this.navItems}> <RiCalendarEventFill /> Calendar</Nav.Link>}
                            {isUserLoggedId && <NavDropdown  title={<span style={this.navItems} >Information</span>} id="dropdownItems"  >
                                <NavDropdown.Item  style={this.dropdownItems} href="/employees"> <ImUsers /> Employees</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item  style={this.dropdownItems} href="/cars">  <FaCar /> Cars</NavDropdown.Item>
                                <NavDropdown.Item style={this.dropdownItems}  href="/trucks"> <FaTruckMoving /> Trucks </NavDropdown.Item>
                                <NavDropdown.Item style={this.dropdownItems}  href="/trails"> <FaTrailer /> Trails </NavDropdown.Item>                              
                            </NavDropdown>}

                            {!isUserLoggedId && <Nav.Link  href = "/login" style={this.navItems}><AiOutlineLogin /> Log in</Nav.Link>}
                            {!isUserLoggedId && <Nav.Link  href = "/registerCompany" style={this.navItems} ><MdOutlineAccountBox /> Sign up </Nav.Link>}
                            {isUserLoggedId && <Nav.Link href="/login"  style={{color:"#fff", fontWeight: "bold"}} onClick = {AuthentificationService.logout}> <HiOutlineLogout size='30' /> </Nav.Link>}
                    
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
          </>
        )
    }

}

export default CustomNavbar;