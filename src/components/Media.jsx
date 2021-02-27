import { React } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import '../Media.css'

export default function (props) {
    const reverse = props.reverse ? 'flex-row-reverse' : null;
    return (
        <Row noGutters={true} className={`align-items-center px-10 py-5 ${reverse}`}>
        <Col md={6}>
            <Image className="media--image" src={props.image} width="100%"  />
        </Col>
        <Col md={6}>    
          <h3 className="text-primary">{props.heading}</h3>
          <h5 className="text-primary">{props.paragraph}</h5>
        </Col>
    </Row>
    )
}