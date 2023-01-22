import { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

function NavigationBar() {

  const {currentUser,logOut}  = useAuth();
  const navigate  = useNavigate();
  const handleLogOut =async (e) =>{
    e.preventDefault();
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" style={{height:"10vh"}}>
        <Container style={{marginTop:'10px'}}>
          <Navbar.Brand href="/">Rizzume</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
             

              <Link className="nav-link" to="/resumes">
                RESUMES
              </Link>

              <Link className="nav-link" to="/Login">
                LOGIN
              </Link>

              <Link className="nav-link" to="/SignUp">
                SIGN UP 
              </Link>
              {currentUser && <Button rounded={true} onClick={handleLogOut}>Log Out</Button>}
            </Nav>
          </Navbar.Collapse>
        

        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}
export default NavigationBar;
