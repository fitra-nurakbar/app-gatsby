import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { header } from "../styles/home.module.css"

export default function Home() {
  const [input, setInput] = useState("")

  return (
    <Layout pageTitle="Home">
      <section className={header}>
        <div>
          <h1>Home Page</h1>
          <h3>Ini halaman HOME</h3>
        </div>
        <div>
          <p>{input}</p>
          <input
            type="text"
            onChange={typing => setInput(typing.target.value)}
          />
        </div>
      </section>
    </Layout>
  )
}
