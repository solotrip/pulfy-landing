import React from "react"
import Layout from "components/layout"
import Section from "components/section"
import "../styles/global.scss"

import * as styles from "./home.module.scss"
import Hero from "components/hero"

export default function Home () {
  return (<Layout>
    <Hero />
    <h1 className={styles.header}>Title</h1>
    <Section>
      Section 1
    </Section>
    <Section isColored>
      Section2
    </Section>
  </Layout>)
}
