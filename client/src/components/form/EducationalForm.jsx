import { Fragment } from "react";
import {Form,Container,Button} from 'react-bootstrap'
import {useState} from 'react';
const EductaionalForm=({educationDetails,setEducationDetails})=>{
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(' ho rah ahun ',educationDetails)
        
    }
    
    
    return(
        <Fragment>
        <Container style={{width:'80%'}}>
        <Form  onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control value={educationDetails.title} onChange={(event) => setEducationDetails( {...educationDetails,title:event.target.value})} type="text" placeholder="Enter Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control value={educationDetails.subject} onChange={(event) => setEducationDetails( {...educationDetails,subject:event.target.value})} type="text" placeholder="Enter Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Date</Form.Label>
            <Form.Control value={educationDetails.date} onChange={(event) => setEducationDetails( {...educationDetails,date:event.target.value})} type="text" placeholder="Enter Date" />
          </Form.Group>
          {/*
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Description" rows={6} />
          </Form.Group>
          */}
          
          <Button variant="primary"  type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </Fragment>
    )    
    
}
export default EductaionalForm;