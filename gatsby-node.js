const path = require('path')
exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
    query MyQuery {
        allWpPost {
          nodes {
            title
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            content
          }
        }
        allWpArtist {
          nodes {
            databaseId
            title
            slug
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            artistFields {
              website
              twitter
              spotify
              soundcloud
              myspace
              lastfm
              instagram
              facebook
            }
          }
        }
        allWpRelease {
          nodes {
            databaseId
            title
            slug
            content
            releaseFields {
              buylinks {
                site
                url
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      } 
    `)
    result.data.allWpPost.nodes.forEach((node) => {
        if (node.featuredImage) {
            createPage({
                path: node.slug,
                component: path.resolve('./src/templates/post.js'),
                context: {
                    slug: node.slug,
                    title: node.title,
                    content: node.content,
                    image: node.featuredImage.node.sourceUrl,
                    alt: node.featuredImage.node.altText
                }
            })
        } else {
            createPage({
                path: node.slug,
                component: path.resolve('./src/templates/post.js'),
                context: {
                    slug: node.slug,
                    title: node.title,
                    content: node.content
                }
            })
        }
    })
    result.data.allWpArtist.nodes.forEach((node) => {
      if (node.featuredImage) {
          createPage({
              path: node.slug,
              component: path.resolve('./src/templates/artist.js'),
              context: {
                  slug: node.slug,
                  title: node.title,
                  content: node.content,
                  image: node.featuredImage.node.sourceUrl,
                  alt: node.featuredImage.node.altText,
                  fields: node.artistFields
              }
          })
      } else {
          createPage({
              path: node.slug,
              component: path.resolve('./src/templates/artist.js'),
              context: {
                  slug: node.slug,
                  title: node.title,
                  content: node.content,
                  fields: node.artistFields
              }
          })
      }
  })
  result.data.allWpRelease.nodes.forEach((node) => {
    if (node.featuredImage) {
        createPage({
            path: node.slug,
            component: path.resolve('./src/templates/release.js'),
            context: {
                slug: node.slug,
                title: node.title,
                content: node.content,
                image: node.featuredImage.node.sourceUrl,
                alt: node.featuredImage.node.altText,
                buylinks: node.releaseFields.buylinks
            }
        })
    } else {
        createPage({
            path: node.slug,
            component: path.resolve('./src/templates/release.js'),
            context: {
                slug: node.slug,
                title: node.title,
                content: node.content,
                buylinks: node.releaseFields.buylinks
            }
        })
    }
})
}