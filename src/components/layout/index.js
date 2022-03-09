import React from "react"
import * as styles from './layout.module.scss'
import Navbar from "../navbar"

export default function Layout ({children}) {
  return <div className={styles.container}>
    <Navbar />
    <div className={styles.content}>
      {children}
    </div>
  </div>
}
