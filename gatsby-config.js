require("dotenv").config();
module.exports = {
    siteMetadata: {
        title: "dc-jam",
    },
    flags: {
        PARALLEL_QUERY_RUNNING: false,
    },
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-netlify",
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
                url: `https://www.dcjamrecords.com/blog/graphql`,
                debug: {
                    graphql: {
                        showQueryOnError: true,
                    },
                },
            },
        },
    ],
};
