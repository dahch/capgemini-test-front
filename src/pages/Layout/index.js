import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from './../../assets/logo.svg';
import OriginModal from "../../components/OriginModal";

export default function Layout() {
    const [show, setShow] = useState(false);
    const [defaultValue, setDefaultValue] = useState(null);
    
    const handleClose = () => setShow(false);
    const handleShow = () => {
        const originValue = localStorage.getItem('origin');
        setDefaultValue(originValue || 'http://dummy.restapiexample.com/api/v1/');
        setShow(true);
    };

    const changeOrigin = (value) => {
        localStorage.setItem('origin', value);
        window.location = '/';
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/">Employees</Nav.Link>
                            <NavDropdown title="Config" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleShow}>Change data origin</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="content">
                <Outlet />
            </div>
            <OriginModal visible={show} handleClick={changeOrigin} handleClose={handleClose} defaultValue={defaultValue} />
        </div>
    );
}
