import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
import Slogan from '../../assets/img/slogan.png';
import './Topbanner.css';

function Topbanner() {
  return (
    <div className="Topbanner">
      <Container>
        <img src={Slogan}/>
        <div>
          <Button className="mint-button">MINT</Button>
        </div>
      </Container>
    </div>
  );
}

export default Topbanner;