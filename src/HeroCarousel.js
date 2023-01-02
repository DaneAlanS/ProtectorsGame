import {Image, Container, Carousel} from 'react-bootstrap';
import knight from './assets/images/knight.png';
import archer from './assets/images/archer.png';
import soon from './assets/images/comingsoon.png';


function HeroCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <Image          
          src={knight}
          alt="knight"
          fluid="true"
        />
        <Carousel.Caption>
          <h5>The Knight</h5>
          <p>Fierce and Brave.</p>
        </Carousel.Caption>
      </Carousel.Item>    

      <Carousel.Item>
        <Image          
          src={archer}
          alt="archer"
          fluid="true"
        />
        <Carousel.Caption>
          <h5>The Archer</h5>
          <p>Quick. A Great Shot.</p>
        </Carousel.Caption>
      </Carousel.Item>    


      <Carousel.Item>
        <Image
          className="Carousel-Image"
          src={soon}
          alt="coming soon"
          fluid="true"
        />
      </Carousel.Item>    

    </Carousel>
  );
}

export default HeroCarousel;