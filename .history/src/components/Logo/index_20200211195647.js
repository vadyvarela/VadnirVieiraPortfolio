import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Logo = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage: file(relativePath: { eq: "logopng.png" }) {
                childImageSharp {
                    fixed(width: 90, height: 70){
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
      `
  )

  return <Img fixed={logoImage.childImageSharp.fixed} />
}


export default Logo