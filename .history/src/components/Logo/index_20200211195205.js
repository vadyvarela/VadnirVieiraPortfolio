import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Logo = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage: file(relativePath: { eq: "logopng.png" }) {
                childImageSharp {
                    fixed(width: 60px, height: 60px){
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