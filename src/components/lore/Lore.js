import React from "react";
import { Container, Row } from "react-bootstrap";
import Lorewave from '../../assets/img/wave-1.png';
import Avatar1 from '../../assets/img/lore1.png';
import Avatar2 from '../../assets/img/lore3.png';
import Avatar3 from '../../assets/img/lore2.png';
import Avatar4 from '../../assets/img/lore4.png';
import './Lore.css';

function Lore() {
  return (
    <div className="Lore" id="Lore">
      <div className="Lorewave"><img src={Lorewave} alt="Lorewave"/></div>
      <div className="Lore-main">
          <Container className="Lore-main-body">
                <div className="Lore-main-text">
                    <h4>LORE</h4>
                    <h3 className="mt-2">LEPRECONS</h3>
                    <p className="mt-2">

                    The Lying LepreCons  (not to be confused with their friendly cousins the LepreCHAUNS) were the worst scammers, in the Emerald. And their leader was Shameless the LepreCon.  <br/><br/>

                    
                    One day when Shameless was Tweeting about like a little blue bird (get it, “blue bird” and “Tweeting) with his evil, “Iconic” friends who were “Baller Apes,” he stumbled into the Emerald City. <br/><br/>

                    Rubbing his grubby little hands together Shameless just knew he would make a shcilling (‘er killing). When the citizens of the Emerald City saw all the prizes Shameless had they rushed to buy! Some even traveled long distances, following a confusing Road Map, and spent 1,000’s in “Gas” just to get there. Shameless happily took all their Clover Coin, while promising them treasure “yielding” prizes. 
                    </p>
                </div>
                <div className="Lore-main-images">
                  <Row>
                    <div className="Lore-main-image"><img src={Avatar1} alt="Avatar1"/></div>
                    <div className="Lore-main-image"><img src={Avatar2} alt="Avatar2"/></div>
                  </Row>
                  <Row>
                    <div className="Lore-main-image"><img src={Avatar3} alt="Avatar3"/></div>
                    <div className="Lore-main-image"><img src={Avatar4} alt="Avatar4"/></div>
                  </Row>                     
                </div>
            </Container>
      </div>
    </div>
  );
}

export default Lore;