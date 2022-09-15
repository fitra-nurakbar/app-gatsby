import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const [input, setInput] = useState("Max Length 200 Character...")
  return (
    <Layout>
      <Seo title="Home">
        <section className={styles.header}>
          <div>
            <h1>Home</h1>
            <h2>This is home page</h2>
            <p>{input}</p>
            <form action="">
              <input
                type="text" maxLength="200"
                onChange={typing => setInput(typing.target.value)}
              />
            </form>
            <Link className={styles.btn} to="/projects">
              My Portfolio Projects
            </Link>
          </div>
          <Img fluid={data.file.childImageSharp.fluid}/>
        </section>
      </Seo>
    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: {eq: "headerImage.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
        srcSetWebp
      }
    }
  }
}
`