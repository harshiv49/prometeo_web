import { Fragment } from "react";
import {Form,Container,Button} from 'react-bootstrap'

const PersonalEditForm=()=>{
    return(
        <Fragment>
        <Container style={{width:'80%'}}>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profession">
            <Form.Label>Profession</Form.Label>
            <Form.Control type="text" placeholder="Enter Profession" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
          
          <Form.Group className="mb-3" controlId="introduction">
            <Form.Label>Introduction</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Introduction" rows={6} />
          </Form.Group>
          

          <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Location" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="linkedin">
        <Form.Label>Linkedin</Form.Label>
        <Form.Control type="text" placeholder="Enter Linkedin" />
      </Form.Group>
         
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </Fragment>
    )    
    
}
export default PersonalEditForm;