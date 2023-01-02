import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'

import EnemyCarousel from './EnemyCarousel';
import HeroCarousel from './HeroCarousel';
import MailChimp from './assets/mailchimp';

import Image from 'react-bootstrap/Image';
import banner from './assets/images/banner.jpg';


AOS.init({
  delay:0,
  offset:400,
  once:true});

function HomePage() {
  return (        
   <div className="Page-Wrapper">
    <div className="Twitter">
      <a href="https://twitter.com/Protectors_Game" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter-square"></i></a>
    </div>
      <Image className="Page-Banner" src={banner}>        
      </Image>
            
      
      <div className="About-Protectors">
        <h1>What is Protectors?</h1>
        <h3>Protectors is an Online Co-op Action Defense Game that supports up to 4 players! Protect the Crystal from Goblins, Dragons and more!</h3>
        <MailChimp></MailChimp>
      </div>
      <div data-aos="fade-up" className="Meet Heroes" >
        <Image></Image><h1>Meet The Heroes</h1>
        <HeroCarousel></HeroCarousel>
      </div>
      <div data-aos="fade-up" className="Meet Baddies" >
        <h1>Meet a Few Baddies</h1>
        <EnemyCarousel></EnemyCarousel>
      </div>

      <div className="footer"><span>Developed and Designed by Dane Simoneau. "Tech Guy Dane"</span></div>
   </div>
  );
}

export default HomePage;
