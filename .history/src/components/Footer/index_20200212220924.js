import React from "react"
import SocialLinks from '../SocialLinks'

import * as S from './styles'

const Footer = () => {
  
  return (
    <S.FooterWrapper>
      <div>
        <span> © Vsolutions 2020 Todos Direitos Reservados </span>
      </div>
      <div>
        <SocialLinks/>
      </div>
    </S.FooterWrapper>
  )
}

export default Footer