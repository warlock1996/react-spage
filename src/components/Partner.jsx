import { React } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import content from '../content'
import '../Partners.css'

export default function Partner () {
    return (
        <div className="partners px-10 py-5">
        <h1 className="partners--heading">We've Worked With</h1>
        <Row className="partners--all  py-5 d-flex align-items-center justify-content-center">
            { content.partners.map((i, index) => (
            <Col xs={12} sm={6} md={4} lg={2} xl={1} key={index} className="text-center">
                <Image className="partners--image" src={i} />
            </Col>
            ))}
        </Row>
        </div>
    )
}