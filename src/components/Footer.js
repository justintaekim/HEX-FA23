import React from 'react';
import innod from '../img/innod.png';

const Footer = () => (<div className="footer">
  <h1>RSVP on Facebook</h1>
  <p>No tickets are required: HEX is free every year.</p>
  <a
    className="header__tagline btn__rsvp"
    href=""
  >
    RSVP now
  </a>
  <img src={innod} id="innod" />
</div>);

export default Footer;
