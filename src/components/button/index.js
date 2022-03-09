import React from "react"
import { Link } from "gatsby"
import cn from "classnames"
import * as styles from "./button.module.scss"

export default function Button ({ title, icon, onClick, className, url, ...rest }) {
  if (onClick) {
    return <button className={cn(styles.container, className)} onClick={onClick} {...rest}>
      {icon && icon}
      <span className={styles.text}>{title}</span>
    </button>
  }
  return <Link className={cn(styles.container, className)} to={url} {...rest}>
    {icon && icon}
    <span className={styles.text}>{title}</span>
  </Link>
}
