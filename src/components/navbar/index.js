import React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.scss"
import Logo from "assets/images/logo.svg"
import ValidLink from "../ValidLink"

export default function Navbar () {
  const links = [
    {
      name: "Home",
      url: "/#home",
      anchor: true
    }
  ]

  return <div className={styles.container}>
    <Link to="/" className={styles.logo}><Logo /></Link>
    <div className={styles.items}>
      {links.map(l =>(
        <ValidLink
          anchor={l.anchor}
          key={`nav-l-${l.name}`}
          to={l.url}
          className={styles.item}>{l.name}</ValidLink>
      ))}
    </div>
    <div>

    </div>
  </div>
}
