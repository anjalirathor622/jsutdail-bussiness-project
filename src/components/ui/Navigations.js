import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

export default function Navigations() {
    //Hooks 

    //func defination
    let Logout = ()=>{
        //alert('ok')
        window.localStorage.removeItem('jwt_token');
        window.location.href = '/login';

    }

    //return
    return (
        <>
             <Navbar bg="light" expand="lg" className='h-100'>
                <Container fluid className='h-100'>
                    <Navbar.Brand href="#" className='h-100'> 
                    <img
                        src={logo}
                        width="100"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className='btn'>Home</Link>
                            {
                                  window.localStorage.getItem('jwt_token')===null && 
                                  <>
                                    <Link to="/login" className='btn'>login</Link>
                                    <Link to="/register" className='btn'>register</Link>
                                  </>
                            }
                            {
                                window.localStorage.getItem('jwt_token')!==null && 
                                <>
                                  <Nav.Link onClick={() =>{Logout()}} className='btn'>logout</Nav.Link>
                                  <Link to='/business-register' className='btn'> Register business</Link>
                                </>
                            }
                        </Nav>
                   </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
