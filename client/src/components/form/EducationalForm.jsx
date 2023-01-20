import { Fragment } from "react";
import {Form,Container,Button} from 'react-bootstrap'

const EductaionalForm=()=>{
    return(
        <Fragment>
        <Container style={{width:'80%'}}>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Enter Date" />
          </Form.Group>
          {/*
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Description" rows={6} />
          </Form.Group>
          */}
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </Fragment>
    )    
    
}
export default EductaionalForm;