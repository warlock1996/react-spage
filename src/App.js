import Header from './components/Header'
import Media from './components/Media'
import Bar from './components/Bar'
import Team from './components/Team'
import QuoteCarousel from './components/QuoteCarousel'
import Partner from './components/Partner'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Image, Button } from 'react-bootstrap'
import content from './content.js'
import image1 from './assets/3-content/content-001.png'
import image2 from './assets/3-content/content-002.png'
import heart from './assets/7-icons/heart.svg'
import happyFace from './assets/7-icons/happy-face.svg'
import arrowRight from './assets/7-icons/arrow-right.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Media reverse={false} image={image1} heading={content.heading1} paragraph={content.paragraph1} />
      <Media reverse={true} image={image2} heading={content.heading2} paragraph={content.paragraph2} />
      <Bar icon={heart} heading={content.bar1} >
          <Image className="bar1--icon" src={arrowRight} />
      </Bar>
      <QuoteCarousel />
      <Bar icon={happyFace} heading={content.bar2} >
        <Button className="bar--btn--edit">Edit</Button>
        <Button className="bar--btn--add">Add</Button>
      </Bar>
      <Team />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
