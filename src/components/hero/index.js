import React from "react"
import * as styles from "./hero.module.scss"
import Logo from "assets/images/logo.svg"

import Button from "../button"
import cn from "classnames"

export default function Hero () {
  return <div className={styles.container}>
    <h1>Hero Title</h1>
    <Logo className={styles.logo} />
    <Button title="Call To action" url="#" className={cn(styles.action, styles.callToAction)} />
  </div>
}
