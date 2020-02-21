import React from "react"
import SocialLinks from '../SocialLinks'

import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Container>
        <S.Copy> 
          © Vsolutions 2020 Todos Direitos Reservados 
        </S.Copy>
        <SocialLinks />
      </S.Container>
    </S.FooterWrapper>
  )
}

export default Footer