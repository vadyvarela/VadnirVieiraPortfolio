import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from "gatsby"

export const ProfileImgWrapper = styled(Img)`
  margin: 70px 30px;
  border: 18px solid #444;
  -webkit-box-shadow: 0 0 25px 0 rgba(0,0,0,.8);
  -moz-box-shadow: 0 0 25px 0 rgba(0,0,0,.8);
  box-shadow: 0 0 25px 0 rgba(0,0,0,.8);
  border-radius: 1000px;
  background-color: #444;
`
export const ProfileWrapper = styled.section`
  color: #fff;
`

export const TextProfile = styled.div`
  margin: 100px 0 30px;
`

export const ProfileTitle = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-family: 'Poppins';
  margin: 1.5rem 0;
  font-weight: 600;
  font-style: normal;
`

export const ProfileSlogan = styled.h2`
  font-size: 1.6rem;
  margin: 2rem 0;
  color: #aaa;
  font-weight: 300;
`

export const ProfileDesc = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.4;
`

export const LinkButtonProfile = styled(Link)`
  padding: .6em 2em;
  margin-bottom: .75em;
  margin-right: .25em;
  font-size: 1.1em;
  line-height: 1.2;
  outline: 0;
  border: 3px solid #0b4fb7;
  font-weight:bold;
  color: #fff;
  background-color: #545b62;
  border-radius: 30px;
  transition: 0.5s;

  &:hover {
    color: #0b4fb7;
  }
`