import { React } from 'react'
import { Row, Col} from 'react-bootstrap'
import PeopleCard from './PeopleCard'
import content from '../content'
import '../Team.css'


export default function  () {
    return (
        <div className="team px-10 py-5">
            <Row className="team--row align-items-start justify-content-center align-content-between">
         {   content.team.map((member, index) => (
                <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                <PeopleCard  image={member.image} title={member.title} subtitle={member.subtitle} />
                </Col>
            ))}
            </Row>
        </div>
    );
}