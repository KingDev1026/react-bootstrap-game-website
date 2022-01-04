import React from "react";
import { Container, NavLink } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Footerwave from '../../assets/img/wave-7.png';
import Footerlogo from '../../assets/img/footer-logo.png';
import './Footer.css';
import { FaTwitter, FaDiscord, FaFacebookF, FaTelegramPlane, FaInstagram} from "react-icons/fa";

function Footer() {

  return (
    <div className="Footer">
      <div className="Footerwave"><img src={Footerwave} alt="Footerwave"/></div>
      <div className="Footer-main">
        <Container className="Footer-main-body pt-4 pb-4">
            <div className="Footer-main-logo"><img src={Footerlogo} alt="Footerlogo"/></div>
            <div className="Footer-main-community mt-5">
                <NavLink href="" target="_blank"><FaInstagram/></NavLink>
                <NavLink href="" target="_blank"><FaTwitter/></NavLink>
                <NavLink href="" target="_blank"><FaFacebookF/></NavLink>
                <NavLink href="" target="_blank"><FaDiscord/></NavLink>
                <NavLink href="" target="_blank"><FaTelegramPlane/></NavLink>
            </div>
            <div className="Footer-main-infor mt-5">
                <p>Terms of Service</p>
                <p>0x516b1a7f0f30afe6722226b810cd0162c1f32828</p>
                <p>© 2021 Billionaire Club. All rights reserved</p>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;