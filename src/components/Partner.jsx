import { React } from 'react'
import { Image } from 'react-bootstrap'
import content from '../content'
import '../Partners.css'

export default function () {
    return (
        <div className="partners py-5">
        <h1 className="partners--heading">We've Worked With</h1>
        <div className="partners--all px-10 py-5 d-flex align-items-center justify-content-center">
            { content.partners.map((i, index) => <Image key={index} className="partners--image" src={i} />)}
        </div>
        </div>
    )
}