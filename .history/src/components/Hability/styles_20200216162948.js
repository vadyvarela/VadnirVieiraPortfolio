import styled from 'styled-components'
import { Link } from "gatsby"

export const HabilityWrapper = styled.div`
    /*margin-top: 50px;*/
`

export const Title = styled.h2`
    padding: 20px;
    color: #fff;
    font-size: 3em;
    text-align:center;
    font-weight: 400;
    span {
        padding: 5px;
        display:block;
        color: #aaa;
        font-size: 0.3em;
        text-align:center;
        font-weight: 300;
    }
`

export const TitleHability = styled.span`
    color: #fff;
    padding: 5px 0;
    font-weight: 400;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const GithubLink = styled.div`
    text-align:center;
    span {
        color: #fff;
        display: block;
    }
`

export const IconWrapper = styled.div`
   fill: #bbb;
   width: 30px;
   height: 30px; 
`