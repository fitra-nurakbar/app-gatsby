const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      project: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.project.nodes.forEach(node => {
     actions.createPage({
          path: '/projects/' + node.frontmatter.slug,
          component: path.resolve('./src/templates/project-details.jsx'),
          context: { slug: node.frontmatter.slug },
     })
  })
}
