import React from 'react';
import lemonpin from '../img/lemonpin.png';
import hexfacts from '../img/hexfacts.png';

const Footer = () => (<div className="footer">
  <img src={lemonpin} width={200} id="logo" />
  <h1>RSVP on Facebook</h1>
  <p>No tickets are required: HEX is free every year.</p>
  <a
    className="btn__rsvp"
    href="https://www.facebook.com/events/560397307659186/"
  >
    RSVP now
  </a>
  {/*<img src={hexfacts} width={300} />*/}
</div>);

export default Footer;
