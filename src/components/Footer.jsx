import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)

  const { copyright } = data.site.siteMetadata

  return (
    <footer className="container">
      <p>{copyright}</p>
    </footer>
  )
}
