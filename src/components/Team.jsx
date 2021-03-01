import { React } from 'react'
import { Row, Col} from 'react-bootstrap'
import PeopleCard from './PeopleCard'
import content from '../content'
import '../Team.css'


export default function Team () {
    return (
        <div className="team px-10 py-5">
            <Row className="team--row align-items-start justify-content-center align-content-between">
         {   content.team.map((member, index) => (
                <Col key={index} className="my-2" xs={12} sm={6} md={3}  >
                <PeopleCard  image={member.image} title={member.title} subtitle={member.subtitle} />
                </Col>
            ))}
            </Row>
        </div>
    );
}