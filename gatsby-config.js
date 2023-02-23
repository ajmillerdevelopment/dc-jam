require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: "dc-jam",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    }, 
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `https://dcjamrecords.com/blog/?graphql`,
        debug: {
          graphql: {
            showQueryOnError: true
          }
        }
      }
    }
  ],
};
