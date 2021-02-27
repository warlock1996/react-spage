
import { React } from 'react'
import Quote from './Quote'
import { Carousel } from 'react-bootstrap'
import content from '../content.js'
import quote1 from '../assets/4-people/david-campion.jpg'
import quote2 from '../assets/4-people/vincent-joignie.jpg'
import quote3 from '../assets/4-people/jerome-boudot.jpg'
import quote4 from '../assets/4-people/darlene-chabrat.jpg'
import quote5 from '../assets/4-people/gaetan-houssin.jpg'
import quote6 from '../assets/4-people/manuela-faveri.jpg'
import "../QuoteCarousel.css"

export default function () {
    return (
        // activeIndex={index} onSelect={handleSelect}
        <Carousel controls={false} className="quote--carousel">
            <Carousel.Item className="px-10 py-5 quote--carousel--item">
                <Quote image={quote1} title={content.title1} subtitle={content.subtitle1} body={content.body1} />
                <Quote image={quote2} title={content.title2} subtitle={content.subtitle2} body={content.body2} />
                <Quote image={quote3} title={content.title3} subtitle={content.subtitle3} body={content.body3} />
            </Carousel.Item>
            <Carousel.Item className="px-10 py-5 quote--carousel--item">
                <Quote image={quote4} title={content.title1} subtitle={content.subtitle1} body={content.body1} />
                <Quote image={quote5} title={content.title2} subtitle={content.subtitle2} body={content.body2} />
                <Quote image={quote6} title={content.title3} subtitle={content.subtitle3} body={content.body3} />
            </Carousel.Item>
        </Carousel>
      )
}