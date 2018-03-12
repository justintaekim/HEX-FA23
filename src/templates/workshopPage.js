import React from 'react';
import Helmet from 'react-helmet'

import Footer from '../components/Footer';

import Link from 'gatsby-link';

import '../pages/index.css';
import '../pages/workshops.css';

import hex from '../img/clouds.png';

const WorkshopTemplate = (
  { data:
    { markdownRemark: 
      { html, fields: { slug }, frontmatter: { title, time, teachers }, excerpt }
    }
  }
) => (<div>
  <Helmet
    title={`${title} Workshop at HEX: Hone and Explore`}
    meta={[
      {
        name: 'description',
        content: excerpt
      }
    ]}
  >
    <meta
      property="og:url"
      content={`https://hex.innovativedesign.club${slug}`}
    />
    <meta
      property="og:title"
      content={`${title} Workshop at HEX: Hone and Explore`}
    />
  </Helmet>
  <div className="nav--mini">
    <Link to="/"><img src={hex} id="nav__logo" /></Link>
  </div>
  <div className="ws_content__container">
  <div className="workshops__container workshops__page">
    <h1>{title}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    >
    </div>
  </div>
  </div>
  <Footer />
</div>);

export default WorkshopTemplate;

export const pageQuery = graphql`
  query WorkshopQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        time
        teachers {
          name
        }
      }
      excerpt
    }
  }
`