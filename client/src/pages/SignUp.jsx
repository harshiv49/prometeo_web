import React, { useRef } from 'react'
import {Button, Card, Form} from "react-bootstrap";
const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

  return (
    <>
    <Card >
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="PasswordConfirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button className="w-10" type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div>
        Already have a account log In!
    </div>
    </>
  )
}

export default SignUp