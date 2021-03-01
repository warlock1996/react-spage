import { React } from 'react'
import { Card, FormCheck } from 'react-bootstrap'
import '../PeopleCard.css'

export default function PeopleCard (props) {
    return (
    <Card className="people--card">
        <FormCheck className="people--card--checkbox" type="checkbox" />
        <Card.Img className="people--card--image" variant="top" src={props.image} />
        <Card.Body className="people--card--body">
            <Card.Title className="people--card--title">{props.title}</Card.Title>
            <Card.Subtitle className="people--card--subtitle">{props.subtitle}</Card.Subtitle>
        </Card.Body>
    </Card>
    );
}

