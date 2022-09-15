import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Seo({ title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle} ` : title}</title>
      {children}
    </>
  )
}
