import {Image, Container, Carousel} from 'react-bootstrap';
import orc from './assets/images/orc.png';
import goblin from './assets/images/goblin.png';
import undead from './assets/images/undead.png';
import dragon from './assets/images/dragon.png';

function EnemyCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <Image          
          src={orc}
          alt="orc"
          fluid="true"
        />
        <Carousel.Caption>
          <h5>The Orcs</h5>
          <p>They're Green and Mean.</p>
        </Carousel.Caption>
      </Carousel.Item>    

      <Carousel.Item>
        <Image          
          src={goblin}
          alt="goblin"
          fluid="true"
        />
        <Carousel.Caption>
          <h5>The Goblins</h5>
          <p>They're like Orcs, but small.</p>
        </Carousel.Caption>
      </Carousel.Item>    

      <Carousel.Item>
        <Image          
          src={undead}
          alt="a skeleton and a zombie"
          fluid="true"
        />
        <Carousel.Caption>
          <h5>The Undead</h5>
          <p>Always Dangerous. Always Dead.</p>
        </Carousel.Caption>
      </Carousel.Item> 

      <Carousel.Item>
        <Image          
          src={dragon}
          alt="dragon"
          fluid="true"
        />
        <Carousel.Caption>
          <h5>The Dragon</h5>
          <p>Powerful and Intelligent.</p>
        </Carousel.Caption>
      </Carousel.Item> 

    </Carousel>
  );
}

export default EnemyCarousel;