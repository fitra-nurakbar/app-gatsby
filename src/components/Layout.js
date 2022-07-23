import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{ children }</div>
      <Footer />
    </div>
  )
}
