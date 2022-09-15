import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout pageTitle="Projects">
      <Seo title="Projects">
        <section className={styles.header}>
          <div>
            <h1>Projects</h1>
            <h2>Projects & Websites I've Created</h2>
            <div className={styles.projects}>
              {projects.map(project => (
                <Link
                  to={`/projects/${project.frontmatter.slug}`}
                  key={project.id}
                >
                  <div>
                    <Img
                      fluid={project.frontmatter.thumb.childImageSharp.fluid}
                    />
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p>Like what you see? Email me at {contact} for a quote!</p>
          </div>
        </section>
      </Seo>
    </Layout>
  )
}
// Markdown Query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___id, order: ASC }
    ) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumb {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                src
                srcSetWebp
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
