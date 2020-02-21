import React from "react"
import SocialLinks from '../SocialLinks'

import * as S from './styles'

const Footer = () => {
  
  return (
    <S.FooterWrapper>
      <SocialLinks />
      <div>
        <span> © Vsolutions 2020 Todos Direitos Reservados </span>
      </div>
      
    </S.FooterWrapper>
  )
}

export default Footer