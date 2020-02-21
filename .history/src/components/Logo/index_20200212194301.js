import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

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

  return <S.LogoWrapper fixed={logoImage.childImageSharp.fixed} />
}


export default Logo