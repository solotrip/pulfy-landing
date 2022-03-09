import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"
import React from "react"

export default function ValidLink ({ anchor, ...rest }) {
  return (anchor ? <AnchorLink {...rest} /> : <Link {...rest} />)
}
