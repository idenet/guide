import React from "react"
import { Link, graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <div>
      <Link to="/person/zhangsan">zhansan</Link>
      <Link to="/person/lisi">李思</Link>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.description}</p>
      <p></p>
    </div>
  )
}

export const query = graphql`
  query {
    site(siteMetadata: {}) {
      siteMetadata {
        title
        description
      }
    }
  }
`
