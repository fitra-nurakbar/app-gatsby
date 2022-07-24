import React from "react"
import Layout from "../../components/Layout"
import { projects } from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout pageTitle="Projects">
      <section className={projects}>
        <h1>Projects</h1>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            reiciendis sed quam maxime fugit eum voluptatem distinctio impedit
            fugiat, enim sapiente veniam doloribus provident adipisci itaque.
            Nam quas ad voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            reiciendis sed quam maxime fugit eum voluptatem distinctio impedit
            fugiat, enim sapiente veniam doloribus provident adipisci itaque.
            Nam quas ad voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            reiciendis sed quam maxime fugit eum voluptatem distinctio impedit
            fugiat, enim sapiente veniam doloribus provident adipisci itaque.
            Nam quas ad voluptatem.
          </p>
      </section>
    </Layout>
  )
}
