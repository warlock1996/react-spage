import { React } from 'react'
import { Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Location from './Location'
import '../Contact.css'

export default function () {
    return (
        <div className="contact px-10 py-5">
            <h1 className="contact--title py-4">Contact Us</h1>
            <Row noGutters={true} className="align-items-center justify-content-center">
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