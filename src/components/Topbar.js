import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button, Container, Nav, NavDropdown } from "react-bootstrap";
import Toggle from "react-toggle";
class Topbar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Steam Rev</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Form className="d-flex">
                                <FormControl
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
                                variant="pills"
                            >
                                <Nav.Link href="#action1">Calculator</Nav.Link>
                                <NavDropdown title="Sort By" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Genre</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Category</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Price Point</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Metacritic Score</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default Topbar;