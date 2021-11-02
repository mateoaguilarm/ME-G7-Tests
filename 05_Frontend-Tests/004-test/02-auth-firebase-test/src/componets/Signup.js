import React from 'react'
import { Form, Button, Card } from 'react-bootstrap' 

function Signup() {
    return (
        <Card className='mx-auto m-5 p-3'>
            <Form>
                <h1>Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                
                <Button className='w-100' variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </Card>
    )
}

export default Signup
