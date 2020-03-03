import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import { Link } from "gatsby"

export const ProfileImgWrapper = styled(Img)`
  margin: 70px 30px;
  border: 18px solid var(--backgroundDivs);
  -webkit-box-shadow: 0 0 25px 0 var(--black);
  -moz-box-shadow: 0 0 25px 0 var(--black);
  box-shadow: 0 0 25px 0 var(--black);
  border-radius: 1000px;
  background-color: var(--backgroundDivs);

  ${media.lessThan("large")`
    margin: 0px 60px;
    border: 15px solid var(--backgroundDivs);
  `}
`
export const ProfileWrapper = styled.section`
  color: var(--white);
  height: 80vh;
`

export const TextProfile = styled.div`
  margin: 100px 0 30px;
  ${media.lessThan("large")`
    margin: 2px 10px;
  `}
`

export const ProfileTitle = styled.h1`
  color: var(--white);
  font-size: 4rem;
  font-family: 'Poppins';
  margin: 1.5rem 0;
  font-weight: 600;
  font-style: normal;
  ${media.lessThan("large")`
    text-align:center;
    font-size: 1.8rem;
    margin: 0.5rem 0;
  `}
`

export const ProfileSlogan = styled.h2`
  font-size: 1.6rem;
  margin: 2rem 0;
  color: var(--small);
  font-weight: 300;
  ${media.lessThan("large")`
    text-align:center;
    font-size: 1.2rem;
    margin: 0.5rem 0;
  `}
`

export const ProfileDesc = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.4;
  text-align: justify;
  ${media.lessThan("large")`
    font-size: 1rem;
  `}
`

export const LinkButtonProfile = styled(Link)`
  padding: .6em 2em;
  margin-bottom: .75em;
  margin-right: .25em;
  font-size: 1.1em;
  line-height: 1.2;
  outline: 0;
  border: 2px solid var(--borders);
  font-weight:bold;
  color: var(--white);
  background-color: var(--backgroundDivs);
  border-radius: 30px;
  transition: 0.5s;

  ${media.lessThan("large")`
  padding: .4em 1em;
  font-size: 1em;
  `}

  &:hover {
    color: var(--borders);
  }
`