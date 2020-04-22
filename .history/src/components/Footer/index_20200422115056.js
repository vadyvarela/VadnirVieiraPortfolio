import React from "react"
import SocialLinks from '../SocialLinks'

import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Container>
        <S.Icons>
          <SocialLinks />
        </S.Icons>
        <S.Copy> 
          © Vadnir Vieira 2020 Todos Direitos Reservados 
        </S.Copy>
      </S.Container>
    </S.FooterWrapper>
  )
}

export default Footer