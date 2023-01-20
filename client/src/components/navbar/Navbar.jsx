import { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function NavigationBar() {
 
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container style={{marginTop:'10px'}}>
          <Navbar.Brand href="/">ScholarPay</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
             

              <Link className="nav-link" to="/">
                RESUMES
              </Link>

              <Link className="nav-link" to="/">
                EDIT RESUMES
              </Link>
            </Nav>
          </Navbar.Collapse>
        

        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}
export default NavigationBar;