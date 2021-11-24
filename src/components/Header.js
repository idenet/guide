import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <div>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.description}</p>
    </div>
  )
}

export default Header
