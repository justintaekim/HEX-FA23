import React from 'react';
import Link from 'gatsby-link';

import moment from 'moment';
import Workshop from '../components/Workshop';
import Footer from '../components/Footer';

import './index.css';

import supermarket from '../img/supermarket.png';
import pop from '../img/pop.png';
import bread from '../img/bread.png';

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
    <h1>HEX</h1>
    <h2>Free creative workshops</h2>
    <h3>October 13-14, 2018</h3>
    <div className="leader">
      <div className="leader__arrow"></div>
      <p className="leader__text">explore</p>
    </div>
  </div>
  <div className="content">
  <div className="content__container">
    <div className="workshops__container">
      <div className="workshops__block workshops__block--peaches">
        <img class="workshops__icon" src={pop} height={100} />
        <h2>Saturday, October 13</h2>
        <div className="receipt">
          {filterAndSortByDay(edges, 6).map((
            { frontmatter: {title, teachers, time}, excerpt, fields: { slug } }
          ) => <Workshop
                key={title}
                {...{ title, teachers, time, excerpt, slug }}
              />
          )}
        </div>
      </div>
      <div className="workshops__block workshops__block--lemons">
        <img class="workshops__icon" src={bread} height={100} />
        <h2>Sunday, October 14</h2>
        <div className="receipt">
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
