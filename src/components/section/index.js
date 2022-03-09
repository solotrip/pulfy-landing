import React from "react"
import * as styles from "./section.module.scss"
import cn from "classnames"

export default function Section ({ children, isColored, id, className }) {
  return <div id={id} className={cn(
    styles.container, className, { [styles.colored]: isColored }
  )}>
    {children}
  </div>
}
