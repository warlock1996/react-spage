import { React } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import '../Bar.css'

export default function (props) {
    return (
        <Row noGutters={true} className="px-10 py-2"> 
            <Col md={1}>
                <Image className="encircled-heart" src={props.icon}/>
            </Col>
            <Col md={5}>
                <h2>{props.heading}</h2>
            </Col>
            <Col md={1} className="ml-auto d-flex align-items-start justify-content-end">
                { props.children}
            </Col>
        </Row>
    );
}