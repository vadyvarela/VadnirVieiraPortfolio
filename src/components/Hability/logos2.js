import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Logos1Company = () => {
  const { logoImage1 } = useStaticQuery(
      graphql`
        query {
            logoImage1: file(relativePath: { eq: "bonako.png"}) {
                childImageSharp {
                    fluid(maxWidth: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            },
        }
      `
  )

  return <S.ProfileImgWrapper fluid={logoImage1.childImageSharp.fluid} />
}


export default Logos1Company