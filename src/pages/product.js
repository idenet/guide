import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function product({ data }) {
  return data.allProductsJson.nodes.map(node => (
    <div key={node.title}>
      <p>{node.title}</p>
      <p>{node.address}</p>
      <p>{node.price}</p>
      <div>
        <GatsbyImage image={getImage(node.url)}></GatsbyImage>
      </div>
    </div>
  ))
}

export const query = graphql`
  query {
    allProductsJson {
      nodes {
        title
        price
        address
        url {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
