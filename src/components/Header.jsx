import { React } from 'react'
import { Row, Col} from 'react-bootstrap'
import '../Header.css';
import Navbar from './Navbar'
export default function () {
    return (
        <div id="header">
            <Navbar className="px-5 py-5"/>
            <Row className="px-5 py-5">
                <Col md={6}>    
                <div className="header-column">
                  <h1>Make development easy with us.</h1>
                    <h5>
                    Doing development can never be easy, it takes time and resources, we at EasyWork have the solution.
                    </h5>
                </div>
                </Col>
                <Col md={6}>
                    <div className="header-column">
                    </div>
                </Col>
            </Row>
        </div>
    )
}