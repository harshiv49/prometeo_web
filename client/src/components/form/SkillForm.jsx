import { Fragment } from "react";
import {Form,Container,Button} from 'react-bootstrap'

const SkillsForm=({skillDetails,setSkillDetails})=>{
    return(
        <Fragment>
        <Container style={{width:'80%'}}>
        <Form>
          <Form.Group className="mb-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" placeholder="Enter Tags" onChange={e=>{
              setSkillDetails(e.currentTarget.value.split(' '));
              // console.log(e.currentTarget.value.split(' '))
            }} />
          </Form.Group>
        </Form>
        </Container>
        </Fragment>
    )    
    
}
export default SkillsForm;