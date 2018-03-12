import React from 'react';
import Footer from '../components/Footer';

import Link from 'gatsby-link';

import '../pages/index.css';
import '../pages/workshops.css';

import hex from '../img/clouds.png';

const WorkshopTemplate = (
  { data: { markdownRemark: { html, frontmatter: { title, time, teachers } }}}
) => (<div>
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
      frontmatter {
        title
        time
        teachers {
          name
        }
      }
    }
  }
`