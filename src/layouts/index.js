import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="HEX: Hone and Explore - March 17-18, 2018"
      meta={[
        {
          name: 'description',
          content: "Join Innovative Design for a weekend of free creative \
          workshops, open to students of all skill levels!"
        },
      ]}
    >
      <meta
        property="og:image"
        content="https://hex.innovativedesign.club/img/cover.png"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content="https://hex.innovativedesign.club"
      />
      <meta
        property="og:title"
        content="HEX: Hone and Explore - March 17-18, 2018"
      />
    </Helmet>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `navigator.serviceWorker.getRegistrations().then(function(registrations) {
          for (let registration of registrations) {
            registration.unregister();
          } 
        });`
      }}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
