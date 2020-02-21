import styled from 'styled-components'
import { Link } from "gatsby"

export const HabilityWrapper = styled.div`
    height: 80vh;
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

export const gitWrapper = styled(Link)`

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
        margin: 30px 10px;
    }
`

export const GitWrapper = styled.div `
    fill: #aaa;
    width: 40px;
    height: 40px;
    margin: 0 auto;
`

export const IconWrapper = styled.div`
   fill: #bbb;
   width: 30px;
   height: 30px; 
`

export const Company = styled.div`
    padding: 30px;
    background-color: #323232;
    text-align: left;
    border-radius: 0 0 0 0;
    transform: translateY(0);
    transition-duration: .3s;
`

export const IconCompany = styled.div`
    width: 72px;
    height: 72px;
    overflow: hidden;
    line-height: 72px;
    font-size: 20px;
    color: #00e9a5;
    background-color: #1e1e1e;
    text-align: center;
    float: left;
    margin: 0 30px 50px 0;
    padding: 0;
    border-radius: 2% 2% 2% 2%;
    transition-duration: .3s;
`

export const Desc = styled.div`
    
`