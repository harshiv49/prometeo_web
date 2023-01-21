import { Fragment } from "react";
import {Form,Container,Button} from 'react-bootstrap'

const ProjectForm=({projectDetails,setProjectDetails})=>{
  console.log(projectDetails)
  const submitHandler=(e)=>{
    e.preventDefault();
  }
return(

<Container style={{width:'80%'}}>
        <Form onSubmit={submitHandler}>
        
          <Form.Group className="mb-3" controlId="project-heading">
            <Form.Label>Heading</Form.Label>
            <Form.Control type="text"  value={projectDetails.heading} onChange={(event)=>setProjectDetails({...projectDetails,heading:event.target.price})} placeholder="Enter heading" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="project-sub-heading">
            <Form.Label>Sub heading</Form.Label>
            <Form.Control type="text" value={projectDetails.subheading} onChange={(event)=>setProjectDetails({...projectDetails,subheading:event.target.price})} placeholder="Enter Sub Heading" />
          </Form.Group>
       
          <Form.Group className="mb-3" controlId="description1">
            <Form.Label>Description1</Form.Label>
            <Form.Control as="textarea" value={projectDetails.description1} onChange={(event)=>setProjectDetails({...projectDetails,description1:event.target.price})} placeholder="Enter Description1" rows={6} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="description2">
            <Form.Label>Description2</Form.Label>
            <Form.Control as="textarea" value={projectDetails.description2} onChange={(event)=>setProjectDetails({...projectDetails,description2:event.target.price})} placeholder="Enter Description2" rows={6} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="description3">
          <Form.Label>Description3</Form.Label>
          <Form.Control as="textarea" value={projectDetails.description3} onChange={(event)=>setProjectDetails({...projectDetails,description3:event.target.price})} placeholder="Enter Description3" rows={6} />
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