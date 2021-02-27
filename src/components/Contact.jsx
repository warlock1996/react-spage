import { React } from 'react'
import { Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Location from './Location'
import '../Contact.css'

export default function () {
    return (
        <div className="contact px-10 py-5">
            <h1 className="contact--title">Contact Us</h1>
            <Row className="align-items-center">
                <Col>
                    <ContactForm />
                </Col>
                <Col>
                   <Location />
                </Col>
            </Row> 
        </div>
    );
}