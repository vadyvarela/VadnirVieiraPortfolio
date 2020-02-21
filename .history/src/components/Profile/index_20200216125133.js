import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import ImageBanner from './image'
import * as S from './styles'


const Profile = () => {
  const {
    site: { 
      siteMetadata: { 
        title, description, profession, age 
      } 
    },
  } = useStaticQuery(graphql`
    query MySiteQuery {
      site {
        siteMetadata {
          title
          age
          profession
          description
          author
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div class="column">
          
        </div>
      
        <div class="column">
          <S.TextProfile>
            <S.ProfileSlogan> {profession} </S.ProfileSlogan>
            <S.ProfileTitle> {title} </S.ProfileTitle>
            <S.ProfileSlogan> {age} </S.ProfileSlogan>
            <S.ProfileDesc> {description} </S.ProfileDesc>
          </S.TextProfile>
        </div>
        {/* <div class="column">
          <ImageBanner/>
        </div> */}
      </div>
        
    </S.ProfileWrapper>
  )
}


export default Profile;