import { React } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import banner from '../assets/2-banner/banner.png'
import Navbar from './Navbar'
import '../Header.css';
export default function () {
    return (
        <div className="header">
            <Navbar/>
            <Row noGutters={true} className="px-10 py-5">
                <Col md={6}>    
                  <h1 className="header--title">Make development easy with us.</h1>
                    <h4 className="header--text">
                    Doing development can never be easy, it takes time and resources, we at EasyWork have the solution.
                    </h4>
                </Col>
                <Col md={6}>
                    <Image className="header--image" src={banner} width={400}  />
                </Col>
            </Row>
        </div>
    )
}