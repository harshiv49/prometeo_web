import { Fragment } from "react";
import {Form,Container,Button} from 'react-bootstrap'

const PersonalEditForm=({personalDetails,setPersonalDetails})=>{
    const submitHandler=(e)=>{
        e.preventDefault()

    }
    return(
        <Fragment>
        <Container style={{width:'80%'}}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={personalDetails.name}  onChange={(event)=>setPersonalDetails({...personalDetails,name:event.target.value}) } placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profession">
            <Form.Label>Profession</Form.Label>
            <Form.Control type="text"  value={personalDetails.profession} onChange={(event)=>setPersonalDetails({...personalDetails,profession:event.target.value})} placeholder="Enter Profession" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" value={personalDetails.phone} onChange={(event)=>setPersonalDetails({...personalDetails,phone:event.target.value})} placeholder="Enter Phone" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={personalDetails.email} onChange={(event)=>setPersonalDetails({...personalDetails,email:event.target.value})} placeholder="Enter Email" />
        </Form.Group>
          
          <Form.Group className="mb-3" controlId="introduction">
            <Form.Label>Introduction</Form.Label>
            <Form.Control as="textarea"  value={personalDetails.introduction}  onChange={(event)=>setPersonalDetails({...personalDetails,introduction:event.target.value})}placeholder="Enter Introduction" rows={6} />
          </Form.Group>
          

          <Form.Group className="mb-3" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" value={personalDetails.country} onChange={(event)=>setPersonalDetails({...personalDetails,country:event.target.value})}  placeholder="Enter Country" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="linkedin">
        <Form.Label>Linkedin</Form.Label>
        <Form.Control type="text" value={personalDetails.linkedin} onChange={(event)=>setPersonalDetails({...personalDetails,linkedin:event.target.value})} placeholder="Enter Linkedin" />
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