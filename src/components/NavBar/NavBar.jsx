import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyButton from '../MyButton/MyButton';

export default function NavBar({logo, items}) {
  const [isfixed, setIsfixed] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsfixed(true);
    } else {
      setIsfixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary ${isfixed ? 'fixed fixed-top' : ''} `}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo?.img} alt={logo?.text} className='w-50'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {items?.map((element, index)=> {
              return (
                <Nav.Link key={index} href={`#${element.id}`} className='text-uppercase'>{element.name}</Nav.Link>
              )
            })}
            <NavDropdown title="DROPDOWN" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dropdown1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dropdown2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dropdown3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Dropdown4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact" className='text-uppercase'>Contact</Nav.Link>
          </Nav>
          <MyButton text={"Make an Appointment"} border={false}/>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  )
}