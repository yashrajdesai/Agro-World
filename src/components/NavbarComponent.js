import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../logo.png'
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase';

function NavbarComponent()
    {
        const [{user},dispatch] = useStateValue();
    
        const handleLogin = () => {
            console.log(user);
            if(user) {
                auth.signOut();
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
                console.log(user);
            }
        }

        return (
            <Navbar expand="lg" className="navbar-color" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand >
                        <img
                            src= { Logo }
                            width="50"
                            height="50"
                            className="d-inline-block align-top logo"
                            alt="Agriculure Logo"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navbar-content">    
                                
                        <NavDropdown className="ml-4 mr-4" title={<span className="dropdown-text">Categories</span>} id="basic-nav-dropdown">
                            <LinkContainer to='/CerealsAndPulses'>  
                                <NavDropdown.Item >Cereals & Pulses</NavDropdown.Item>
                            </LinkContainer>   
                            <NavDropdown.Divider />
                            <LinkContainer to='/vegetables'>   
                                <NavDropdown.Item >Vegetables</NavDropdown.Item>
                            </LinkContainer>   
                            <NavDropdown.Divider />
                            <LinkContainer to='/fruits'>  
                                <NavDropdown.Item>Fruits</NavDropdown.Item>
                            </LinkContainer>     
                        </NavDropdown>
    
                        <LinkContainer to="/orders">
                            {/*<Nav.Link  className="ml-4 mr-4">Orders</Nav.Link>*/}
                            <Nav.Link  className="ml-4 mr-4"><span className="linkText">Orders</span></Nav.Link>
                        </LinkContainer>  
    
                        <LinkContainer to="/sell">
                            {/*<Nav.Link className="ml-4 mr-4">Sell</Nav.Link>*/}
                            <Nav.Link className="ml-4 mr-4"><span className="linkText">Sell</span></Nav.Link>
                        </LinkContainer>  
    
                        <LinkContainer to="/adds">
                            {/*<Nav.Link className="ml-4 mr-4">My Wallet</Nav.Link>*/}
                            <Nav.Link className="ml-4 mr-4"><span className="linkText">My Ads</span></Nav.Link>
                        </LinkContainer>  
    
                        <LinkContainer to="/statistics">
                            {/*<Nav.Link className="ml-4 mr-4">Statistics</Nav.Link>*/}
                            <Nav.Link className="ml-4 mr-4"><span className="linkText">Statistics</span></Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login" onClick = {handleLogin}>
                            {user ? 
                                <Nav.Link className="ml-4 mr-4"><span className="linkText">Sign out</span></Nav.Link> :
                                <Nav.Link className="ml-4 mr-4"><span className="linkText">Login</span></Nav.Link>
                            }
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}
 
export default NavbarComponent;