import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Clubwave from '../../assets/img/wave-3.png';
import Avatar1 from '../../assets/img/club1.png';
import Avatar2 from '../../assets/img/club2.png';
import Avatar3 from '../../assets/img/club3.png';
import Avatar4 from '../../assets/img/club4.png';
import Avatar5 from '../../assets/img/club5.png';
import Avatar6 from '../../assets/img/club6.png';
import './Club.css';

function Club() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="Club" id="Club">
      <div className="Clubwave"><img src={Clubwave} alt="Clubwave"/></div>
      <div className="Club-main">
          <Container className="con">
            <div className="Club-main-title">
                <h4>THE 24K GOLD</h4>
                <h3 className="mt-2">CLUB</h3>
                <p>The 24k Gold edition by the Lying LepreCons are the rarest NFTs <br/>They are all hand drawn and have no element in common with the regular collection.</p>
            </div>
            <Carousel responsive={responsive} autoPlay="true">
              <div><img src={Avatar1} alt="Avatar1"/></div>
              <div><img src={Avatar2} alt="Avatar2"/></div>
              <div><img src={Avatar3} alt="Avatar3"/></div>
              <div><img src={Avatar4} alt="Avatar4"/></div>
              <div><img src={Avatar5} alt="Avatar5"/></div>
              <div><img src={Avatar6} alt="Avatar6"/></div>
            </Carousel>   
          </Container>
      </div>
    </div>
  );
}

export default Club;