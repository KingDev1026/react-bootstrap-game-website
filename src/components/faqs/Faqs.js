import React from "react";
import { Container, Accordion } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Faqswave from '../../assets/img/wave-6.png';
import './Faqs.css';

function Faqs() {

  return (
    <div className="Faqs" id="Faqs">
      <div className="Faqswave"><img src={Faqswave} alt="Faqswave"/></div>
      <div className="Faqs-main">
        <Container className="Faqs-main-body pt-4 pb-4">
            <div className="Faqs-main-title">
                <h4>FREQUENTLY ASKED</h4>
                <h3 className="mt-2">QUESTIONS</h3>
            </div>
            <div className="Faqs-main-accordion mb-5">
                <Accordion defaultActiveKey="0">
                    <hr/>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>WHAT ARE HUMANIMALS?</Accordion.Header>
                        <Accordion.Body>
                        NFT stands for non-fungible token which is a unique, one of kind item that is provably rare. Think of the Mona Lisa, but digital
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>HOW TO OBTAIN A HUMANIMAL?</Accordion.Header>
                        <Accordion.Body>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div><hr className="mt-5 mb-5"/>
            <div className="Faqs-main-discord mt-5">
                <h4>THE PARTY NEVER STOPS</h4>
                <h3 className="mb-5">GET LUCKY WITH US! JOIN OUR DISCORD</h3>
                <a href="" target="_blank">Let's Start</a>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default Faqs;