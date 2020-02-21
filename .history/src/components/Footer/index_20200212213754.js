import React from "react"
import { Link } from "gatsby"
import SocialLink from '../SocialLinks'

import styled from 'styled-components'
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