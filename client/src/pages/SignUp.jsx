import React, { useRef, useState } from 'react'
import {Alert, Button, Card, Form} from "react-bootstrap";
import { useAuth } from '../context/AuthContext';
const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup,currentUser } = useAuth();
    const [error, seterror] = useState("");
    const [loading, setloading] = useState("false")
    async function handleSubmit(e){
        e.preventDefault()
        setloading("true")
        if(passwordRef.current.value!== passwordConfirmRef.current.value)
        return seterror('Passwords Do Not Match')

        try {
            seterror('')
            signup(emailRef.current.value,passwordRef.current.value)
            setloading("false")
        } catch (error) {
            seterror("Failed to create an account");
            console.log(error);
        }
    }

  return (
    <>
    <Card >
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>

            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit} >
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
                <Button className="w-10" disable={loading} type="submit" >Sign Up</Button>
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