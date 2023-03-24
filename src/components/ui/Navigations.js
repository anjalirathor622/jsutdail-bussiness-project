import React from 'react'
import { Button, Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
//import Geocode from "react-geocode";

export default function Navigations() {
    //Hooks 

    //func defination
    let Logout = ()=>{
        //alert('ok')
        window.localStorage.removeItem('jwt_token');
        window.location.href = '/login';

    }

    let x = document.getElementById("demo");
    let getLocation = ()=>{
        if (navigator.geolocation) {
            //alert('ok')
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.value = "Geolocation is not supported by this browser.";
        }
      }
      
    let showPosition=(position)=>{
        console.log(x)
        console.log(position)
        x.value= "Teacher Colony,Neemuch"
       // x.value = "Latitude: " + position.coords.latitude +
        //"<br>Longitude: " + position.coords.longitude;
      }
    //return
    return (
        <>
             <Navbar bg="light" expand="lg" className='h-100'>
                <Container fluid className='h-100'>
                    <Link to="/" className='h-100'> 
                    <img
                        src={logo}
                        width="100"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Link>
                    <InputGroup className="mb-1 me-5 ps-5 " size="sm">
                    <Button variant="outline-success" onClick={()=>{getLocation()}}>your location</Button>
                        <Form className="d-flex" >
                            <Form.Control
                                id="demo"
                                type="text"
                                readOnly
                                placeholder="location"
                                className=" me-2 "
                                aria-label="location"
                            />
                        </Form>
                    </InputGroup>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Link to="/" className='btn'>Home</Link>
                            {
                                window.localStorage.getItem('jwt_token')===null && 
                                <>
                                    <Link to="/register" className='btn'>Register</Link>
                                    <Link to="/login" className='btn'>login</Link>
                                </>
                            }
                            {
                                window.localStorage.getItem('jwt_token')!==null && 
                                <>
                                  <Link to='/business-register' className='btn'> Register business</Link>
                                  <Nav.Link onClick={() =>{Logout()}} className='btn'>logout</Nav.Link>
                                </>
                            }
                        </Nav>
                        <Form className="d-flex " >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="mb-1 me-2 ps-5 pe-5 "
                                aria-label="Search"
                            />
                            <Button className='btn'>Search</Button>
                        </Form>
                   </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
