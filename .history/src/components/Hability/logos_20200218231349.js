import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const LogosCompany = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage: file(relativePath: { eq: "imediaa.png", eq: "bonako.png" }) {
                childImageSharp {
                    fixed(width: 70, height: 70) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
      `
  )

  return <S.ProfileImgWrapper fixed={logoImage.childImageSharp.fixed} />
}


export default LogosCompany