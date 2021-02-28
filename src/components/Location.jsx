import { React } from 'react'
import { Row, Col } from 'react-bootstrap'
export default function () {
    return (
        <div className="location">
            <iframe
            style={{"border": 'none'} }
            width="100%"
            height="450"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAYkYoZadhwqrQlVCJVUQx-Q3DhcZtBfFI
                &q=Kuchai+Exchange,Kuala+Lumpur">
            </iframe>
        </div>
    );
}