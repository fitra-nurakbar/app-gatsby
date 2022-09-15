import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  const [activeLink, setActiveLink] = useState('')
  const onUpdateAciveLink = (value) => {
    setActiveLink(value)
  }

  console.log(activeLink)
  return (
    <nav>
      <h1>{title}</h1>
      <div className="nav-menu">
        <Link to="/" className={activeLink === 'Home' ? 'active' : ''} onClick={() => onUpdateAciveLink('Home')} >Home</Link>
        <Link to="/about" className={activeLink === 'About' ? 'active' : ''} onClick={() => onUpdateAciveLink('About')}>About</Link>
        <Link to="/projects" className={activeLink === 'Projects' ? 'active' : ''} onClick={() => onUpdateAciveLink('Projects')}>Projects</Link>
      </div>
    </nav>
  )
}
