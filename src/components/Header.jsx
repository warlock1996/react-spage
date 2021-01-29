import { React } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import '../Header.css';
import banner from '../assets/2-banner/banner.png'
import Navbar from './Navbar'
export default function () {
    return (
        <div id="header">
            <Navbar className="px-5 py-5"/>
            <Row noGutters={true} className="px-5 py-5">
                <Col md={6}>    
                <div className="header-column1 text-white">
                  <h1>Make development easy with us.</h1>
                    <h5>
                    Doing development can never be easy, it takes time and resources, we at EasyWork have the solution.
                    </h5>
                </div>
                </Col>
                <Col md={6}>
                    <div className="header-column2">
                        <Image src={banner} width={400}  />
                    </div>
                </Col>
            </Row>
        </div>
    )
}