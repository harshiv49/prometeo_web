import { Fragment } from "react";
import {Form,Container,Button} from 'react-bootstrap'

const ProjectForm=()=>{
return(
<Container style={{width:'80%'}}>
        <Form>
          <Form.Group className="mb-3" controlId="work-heading">
            <Form.Label>Heading</Form.Label>
            <Form.Control type="text" placeholder="Enter heading" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="work-sub-heading">
            <Form.Label>Sub heading</Form.Label>
            <Form.Control type="text" placeholder="Enter Sub Heading" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Enter Date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description1">
            <Form.Label>Description1</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Description1" rows={6} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="description2">
            <Form.Label>Description2</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Description2" rows={6} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="description3">
          <Form.Label>Description3</Form.Label>
          <Form.Control as="textarea" placeholder="Enter Description3" rows={6} />
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
      </Container>)
    }

export default ProjectForm;