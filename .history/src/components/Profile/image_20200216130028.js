import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Logo = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage: file(relativePath: { eq: "vady.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
      `
  )

  return <S.ProfileImgWrapper fluid={logoImage.childImageSharp.fluid} />
}


export default Logo