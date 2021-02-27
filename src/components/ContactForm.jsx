import { React } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../ContactForm.css'

export default function () {
    return (
        <div className="contact--form">
            <Form>
                <Form.Group>
                    <Form.Label className="contact--form--label">Name</Form.Label>
                    <Form.Control className="contact--form--control"  type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="contact--form--label">Email</Form.Label>
                    <Form.Control className="contact--form--control" type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="contact--form--label">Subject</Form.Label>
                    <Form.Control className="contact--form--control" as="select">
                        <option>Order</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="contact--form--label">Message</Form.Label>
                    <Form.Control className="contact--form--control" as="textarea" rows={6} />
                </Form.Group>
                <Button className="d-block ml-auto" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>    
        </div>
    );
}