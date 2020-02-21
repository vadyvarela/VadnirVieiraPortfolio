import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Logo = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage: file(relativePath: { eq: "logopng.png" }) {
                childImageSharp {
                    fixed(width: 70, height: 70){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
      `
  )

  return <Img fixed={logoImage.childImageSharp.fixed} />
}


export default Logo