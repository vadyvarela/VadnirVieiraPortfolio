import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Logo = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage: file(relativePath: { eq: "vs.png" }) {
                childImageSharp {
                    fluid(max-width: 600){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
      `
  )

  return <S.LogoWrapper fluid={logoImage.childImageSharp.fluid} />
}


export default Logo