import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const LogosCompany = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage: file(relativePath: { eq: "imedia.png" }) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
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