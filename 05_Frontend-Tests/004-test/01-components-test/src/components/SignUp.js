import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/authContext'

function SignUp() {

    // Auth Part
    const emailRef = useRef();
    const passwordRef = useRef();
    const confPasswordRef = useRef();
    const checkboxRef = useRef();

    const [ error, setError ] = useState('');
    const { signup, currentUser } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confPasswordRef.current.value) {
            return setError('Passwords are not the same!');
        }

        try {
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)
            console.log('user has been created');
            console.log(currentUser);
        } catch (error) {
            setError('Error signing up: ' + error.message)
            console.log('ERROR: ' + error.message);
        }

    }

    return (
        <>
            <Form className='signupForm' onSubmit={ handleSubmit }>
                <h1>Sign Up</h1>
                { error && <Alert variant='danger'> { error } </Alert> }
                { currentUser && <Alert variant='success'> { currentUser.email } </Alert> }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required autoComplete='off' />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required autoComplete='off' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confPasswordRef} type="password" placeholder="Confirm Password" required autoComplete='off' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check ref={checkboxRef} type="checkbox" label="Check me out" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default SignUp
