import { React } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import logo from '../assets/1-header/logo.png'
import '../Footer.css'

export default function () {
    return (
        <div className="footer px-10 py-4">
            <Row className="align-items-center">
                <Col md={4}>
                    <Image src={logo} width={80} />
                    <h1 className="d-inline footer--title">Easy Work</h1>
                </Col>
                <Col md={3}>
                    <address>
                        <p className="m-0 footer--primary--text">Address</p>
                        <p className="m-0 footer--secondary--text">B.No 12, Street 2, Islamabad</p>
                    </address>
                </Col>
                <Col md={3}>
                    <p className="m-0 footer--primary--text">Contact</p>
                    <p className="footer--secondary--text">0340-9563083</p>
                    <p className="m-0 footer--primary--text">Fax</p>
                    <p className="m-0 footer--secondary--text">923-72971-23</p>
                </Col>
            </Row>
        </div>
    );
}