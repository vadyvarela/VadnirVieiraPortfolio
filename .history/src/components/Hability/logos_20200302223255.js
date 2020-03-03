import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const LogosCompany = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage: file(relativePath: { eq: "imediaa.png"}) {
                childImageSharp {
                    fluid(width: 70, height: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            },
        }
      `
  )

  return <S.ProfileImgWrapper fluid={logoImage.childImageSharp.fluid} />
}


export default LogosCompany