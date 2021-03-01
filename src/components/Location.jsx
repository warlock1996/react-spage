import { React } from 'react'
export default function Location () {
    return (
        <div className="location">
            <iframe
            title="map"
            style={{"border": 'none'} }
            width="100%"
            height="450"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAYkYoZadhwqrQlVCJVUQx-Q3DhcZtBfFI
                &q=Kuchai+Exchange,Kuala+Lumpur">
            </iframe>
        </div>
    );
}