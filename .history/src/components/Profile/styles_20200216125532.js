import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProfileImgWrapper = styled(Img)`
  
`
export const ProfileWrapper = styled.section`
  text-align: center;
  color: #fff;
  /*margin: 120px: 30px;**/
`

export const TextProfile = styled.div`
  margin: 100px 30px;
`

export const ProfileTitle = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin: 2rem 1.5rem;
`

export const ProfileSlogan = styled.h2`
  font-size: 2rem;
  margin: 2rem 1rem;
  font-weight: 300;
`

export const ProfileDesc = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.4;
`

export const ImageProfileWrapper = styled.div`
  margin: 100px 30px;
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: calc(100% - 36px);
  background-color: #fff;
  border-radius: 1000px;
  border: 18px solid #fff;
  overflow: hidden;
  -webkit-box-shadow: 0 0 25px 0 rgba(0,0,0,.1);
  -moz-box-shadow: 0 0 25px 0 rgba(0,0,0,.1);
  box-shadow: 0 0 25px 0 rgba(0,0,0,.1);
}
`