import { React } from 'react'
import { Image } from 'react-bootstrap'
import '../Quote.css'

export default function ({image, title, subtitle, body}) {
    return (
        <div className="quote">
            <div className="quote--head">
                <Image className="quote--head--image" src={image} />
                <div className="quote--head--text">
                    <p className="quote--head--text--title">{title}</p>    
                    <p className="quote--head--text--subtitle">{subtitle}</p>    
                </div>    
            </div>
            <div className="quote--body">
                <p className="quote--body--text">{body}</p>   
            </div>  
        </div>
    );
}