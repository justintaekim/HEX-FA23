const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return graphql(`
    query WorkshopPageCreateQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              teachers {
                img
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(err => console.error(err.toString()));
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({
      node: { id, fields, frontmatter: { teachers } }
    }) => {
      createPage({
        path: fields.slug,
        component: path.resolve('src/templates/workshopPage.js'),
        context: {
          id: id,
          slug: fields.slug,
          firstPicture: teachers[0] && teachers[0].img
            ? teachers[0].img.split('/').pop() : "",
          secondPicture: teachers[1] && teachers[1].img
            ? teachers[1].img.split('/').pop() : "",
        }
      })
    });
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `/workshops${value}`,
    });
  }
};
