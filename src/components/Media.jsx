import { React } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import '../Media.css'

export default function Media(props) {
    const reverse = props.reverse ? 'flex-row-reverse' : null;
    return (
        <Row noGutters={true} className={`align-items-center px-10 py-3 ${reverse}`}>
        <Col sm={12} md={6} className="px-5">
            <Image className="media--image" src={props.image} width="100%"  />
        </Col>
        <Col sm={12} md={6} className="px-5">    
          <h3 className="media--title">{props.heading}</h3>
          <h5 className="media--text">{props.paragraph}</h5>
        </Col>
    </Row>
    )
}