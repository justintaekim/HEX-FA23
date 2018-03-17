import React from 'react';
import Helmet from 'react-helmet'

import Footer from '../components/Footer';

import Link from 'gatsby-link';

import '../pages/index.css';
import '../pages/workshops.css';

import moment from 'moment';
import hex from '../img/clouds.png';

import Img from 'gatsby-image';
// import AddToCalendar from 'react-add-to-calendar';
/*    <AddToCalendar
      event={{
        title: `[HEX] ${title} Workshop`,
        description: html.replace(/<(?:.|\n)*?>/gm, ''),
        location: "Wheeler 102",
        startTime: moment(time).toISOString(),
        endTime: moment(time).add(1, 'hours').toISOString()
      }}
    />*/

const WorkshopTemplate = (
  { data:
    { markdownRemark: 
      { html, fields: { slug }, frontmatter: { title, time, teachers }, excerpt },
      speakerImage1,
      speakerImage2
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
    <div>
      {speakerImage1 ? <Img
        resolutions={speakerImage1.childImageSharp.resolutions}
        className="workshops__picture"
      /> : null}
      {speakerImage2 ? <Img
        resolutions={speakerImage2.childImageSharp.resolutions}
        className="workshops__picture"
      /> : null}
    </div>
    <p className="workshops__time">{moment(time).format('dddd, MMM. D, hh:mm A')}</p>
    <h1>{title}</h1>
    <h3>Led by {teachers.map(t => t.name).join(' and ')}</h3>
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
  query WorkshopQuery(
    $id: String!,
    $firstPicture: String!,
    $secondPicture: String!
  ) {
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
          img
        }
      }
      excerpt
    }
    speakerImage1: file(relativePath: {
      eq: $firstPicture
    }) {
      childImageSharp {
        resolutions(width: 75, height: 75) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    speakerImage2: file(relativePath: {
      eq: $secondPicture
    }) {
      childImageSharp {
        resolutions(width: 75, height: 75) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`