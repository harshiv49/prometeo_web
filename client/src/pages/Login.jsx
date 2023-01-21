import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import {Alert, Button, Card, Form} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login } = useAuth();
    const [error, seterror] = useState("");
    const [loading, setloading] = useState("false")
    const history = useNavigate();
    async function handleSubmit(e){
        e.preventDefault()
        setloading("true")
       
        try {
            seterror('')
            await login(emailRef.current.value,passwordRef.current.value)
            setloading("false")
            history("/")
        } catch (error) {
            seterror("Failed to sign in");
            console.log(error);
        }
    }

  return (
    <>
    <Card >
        <Card.Body>
            <h2 className='text-center mb-4'>Login</h2>
            
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
                <Button className="w-10" disable={loading} type="submit" >Login</Button>
            </Form>
        </Card.Body>
    </Card>
    <div>
        Don't have an account? Log In!
    </div>
    </>
  )
}

export default Login