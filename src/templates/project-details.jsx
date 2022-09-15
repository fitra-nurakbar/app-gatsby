import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import * as styles from "../styles/details.module.css"

export default function projectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featureImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1>{title}</h1>
      <h2>{stack}</h2>
      <div className={styles.image}>
        <Img fluid={featureImg.childImageSharp.fluid} alt={title}/>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link className={styles.btn} to="/projects">
        Back See All projects
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        featureImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`
