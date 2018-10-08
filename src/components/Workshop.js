import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

import moment from 'moment';

const Workshop = ({ title, teachers, excerpt, time, slug }) => (
  <div className="workshop__row">
    <div className="workshop__info">
      <h3>{title}</h3>
      <p>{teachers.map(t => t.name).join(' and ')}</p>
      {/*<p>{excerpt}</p>*/}
    </div>
    <p className="workshop__actions">
      <p className="workshop__time">{moment(time).format('hh:mm A')}</p>
      {/*<Link to={withPrefix(slug)}>Learn more</Link>*/}
    </p>
  </div>
);

export default Workshop;
