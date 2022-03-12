import React from "react"
import * as styles from './layout.module.scss'

export default function Layout ({children}) {
  return <div className={styles.container}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
}
