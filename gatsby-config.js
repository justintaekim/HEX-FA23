module.exports = {
  siteMetadata: {
    title: 'HEX: Hone and Explore with Innovative Design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/workshops`,
        name: 'workshops'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/admin/admin.js`,
      },
    },
  ],
};
