import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <>
    <nav>
      <div className="navbar">
        <h1>Navbar</h1>
        <div className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
    </>
  )
}
