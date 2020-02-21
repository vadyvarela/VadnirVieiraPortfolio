import React from "react"
import SocialLinks from '../SocialLinks'

import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Container>
        <S.Copiright> 
          © Vsolutions 2020 Todos Direitos Reservados 
        </S.Copiright>
        <SocialLinks />
      </S.Container>
    </S.FooterWrapper>
  )
}

export default Footer