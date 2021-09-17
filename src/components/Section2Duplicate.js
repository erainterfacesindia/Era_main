import React from 'react'
import { Carousel } from 'react-bootstrap'
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from './Layout'
// import { useStaticQuery } from 'gatsby'
// import Card from 'react-bootstrap/Card'
// import Row from 'react-bootstrap/Card'
// import Col from 'react-bootstrap/Card'

const Section2Duplicate = ({data}) => {
   <Layout>
        <Carousel>
            {data.SlideShow.edges.map(({node}) => {
        <Carousel.Item key={node.id}>
            <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
         </Carousel.Item>
            })}
      </Carousel>
      </Layout>
    
}
export default Section2Duplicate

export const PageQuery= graphql`
query{
 SlideShow:allFile(
    filter: {relativeDirectory: {eq: "ourservices"}}
    sort: {fields: base, order: ASC}
  ) {
    edges {
      node {
        id
        base
        relativePath
        childImageSharp {
           gatsbyImageData(
            height: 480
            width: 480
            placeholder: BLURRED
            quality: 70
            blurredOptions: {width: 100}
            transformOptions: {cropFocus: CENTER, fit: COVER}
          )
        }
      }
    }
  }
}
`