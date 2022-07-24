import React from "react"
import Layout from "../components/Layout"
import { about } from "../styles/about.module.css"

export default function About() {
  return (
    <Layout pageTitle="About">
      <section className={about}>
        <h1>About Page</h1>
        <h3>Name : fitra nurakbar</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          reiciendis sed quam maxime fugit eum voluptatem distinctio impedit
          fugiat, enim sapiente veniam doloribus provident adipisci itaque. Nam
          quas ad voluptatem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          reiciendis sed quam maxime fugit eum voluptatem distinctio impedit
          fugiat, enim sapiente veniam doloribus provident adipisci itaque. Nam
          quas ad voluptatem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          reiciendis sed quam maxime fugit eum voluptatem distinctio impedit
          fugiat, enim sapiente veniam doloribus provident adipisci itaque. Nam
          quas ad voluptatem.
        </p>
      </section>
    </Layout>
  )
}
