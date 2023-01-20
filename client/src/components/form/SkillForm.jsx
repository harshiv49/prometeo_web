import { Fragment } from "react";
import {Form,Container,Button} from 'react-bootstrap'

const SkillsForm=()=>{
    return(
        <Fragment>
        <Container style={{width:'80%'}}>
        <Form>
          <Form.Group className="mb-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" placeholder="Enter Tags" />
          </Form.Group>
        </Form>
        </Container>
        </Fragment>
    )    
    
}
export default SkillsForm;