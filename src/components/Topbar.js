import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button, Container } from "react-bootstrap";
class Topbar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#">Steam Revenue Calculator</Navbar.Brand>
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
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default Topbar;