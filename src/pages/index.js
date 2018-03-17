import React from 'react';
import Link from 'gatsby-link';

import moment from 'moment';
import Workshop from '../components/Workshop';
import Footer from '../components/Footer';

import './index.css';

import cloudOne from '../img/cloud.png';
import cloudTwo from '../img/cloud2.png';
import boardwalk from '../img/boardwalk.png';
import rollercoaster from '../img/rollercoaster.png';
import ferriswheel from '../img/ferriswheel.png';
import plane from '../img/plane.png';
import foodcart1 from '../img/foodcarts1.png';
import foodcart2 from '../img/foodcarts2.png';
import foodcart3 from '../img/foodcarts3.png';
import gamebooths from '../img/gamebooths.png';
import swingride from '../img/swingride.png';
import circustent from '../img/circustent.png';

import clouds from '../img/clouds.png';

const filterAndSortByDay = (edges, day) => {
  return edges.filter(({ node: { frontmatter: {time} } }) => {
    return moment(time).day() === day; // Saturday
  }).sort((
    { node: { frontmatter: {time: a} } },
    { node: { frontmatter: {time: b} } }
  ) => {
    return +moment(a) - +moment(b);
  }).map((obj) => {
    return obj.node;
  });
};

const IndexPage = ({ data: { allMarkdownRemark: {edges} } }) => (<div>
  <div className="header__container">
    <div className="header__date">
      <p>March 17-18, 2018</p>
      <p>10am - 6pm, Wheeler 102</p>
    </div>
    <img src={boardwalk} id="boardwalk" />
    <img src={rollercoaster} id="rollercoaster" />
    <img src={ferriswheel} id="ferriswheel" />
    <img src={plane} id="plane" />
    {/*<img src={gamebooths} id="gamebooths" />*/}
    <img src={swingride} id="swingride" />
    <img src={circustent} id="circustent" />
    <img className="header__logo" src={clouds} />
    <div className="header__tagline">
      <h1>Hone and Explore: free creative workshops</h1>
    </div>
    {/*<img src={cloudOne} id="cloud1" />*/}
    <img src={cloudTwo} id="cloud2" />
    <div className="leader">
      <div className="leader__arrow"></div>
      <p className="leader__text">explore</p>
    </div>
  </div>
  <div className="content">
  <div className="content__container">
    <div className="content__preview">
      <img src={foodcart1} className="foodcart" />
      <img src={foodcart2} className="foodcart" />
      <img src={foodcart3} className="foodcart" />
      <h1>workshops</h1>
      <p>Workshops are taught and curated by Innovative Design’s officers and members.</p>
    </div>
    <div className="workshops__container">
      <div className="workshops__block">
        <h2>saturday, march 17</h2>
        {filterAndSortByDay(edges, 6).map((
          { frontmatter: {title, teachers, time}, excerpt, fields: { slug } }
        ) => <Workshop
              key={title}
              {...{ title, teachers, time, excerpt, slug }}
            />
        )}
      </div>
      <div className="workshops__block">
        <h2>sunday, march 18</h2>
        {filterAndSortByDay(edges, 0).map((
          { frontmatter: {title, teachers, time}, excerpt, fields: { slug } }
        ) => <Workshop
              key={title}
              {...{ title, teachers, time, excerpt, slug }}
            />
        )}
      </div>
    </div>
  </div>
  </div>
  <Footer />
</div>);

export default IndexPage;

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          teachers {
            name
          }
          time
        }
        excerpt
      }
    }
  }
}
`;
