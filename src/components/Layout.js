import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ pageTitle, children }) {
  return (
    <main>
      <title>{pageTitle}</title>
      <Navbar />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </main>
  )
}
