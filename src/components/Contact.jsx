import { React } from 'react'
import { Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Location from './Location'
import '../Contact.css'

export default function Contact () {
    return (
        <div className="contact px-10 py-5">
            <h1 className="contact--title py-4">Contact Us</h1>
            <Row noGutters={true} className="align-items-center justify-content-center">
                <Col sm={12} md={6} lg={4} xl={4}>
                    <ContactForm />
                </Col>
                <Col sm={12} md={6} lg={4} xl={4}>
                   <Location />
                </Col>
            </Row> 
        </div>
    );
}