import { React } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import '../Bar.css'

export default function Bar(props) {
    return (
        <Row noGutters={true} className="bar px-10 py-2"> 
            <Col sm={12} md={1}>
                <Image className="encircled-heart" src={props.icon}/>
            </Col>
            <Col md={8}>
                <h2 className="bar--title">{props.heading}</h2>
            </Col>
            <Col sm={12} md={3} className="ml-auto d-flex align-items-start justify-content-end">
                { props.children}
            </Col>
        </Row>
    );
}