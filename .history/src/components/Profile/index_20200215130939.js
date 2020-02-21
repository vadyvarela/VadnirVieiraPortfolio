import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import ImageBanner from './image'
import * as S from './styles'


const Profile = () => {
  const {
    site: { 
      siteMetadata: { 
        title, description, slogan 
      } 
    },
  } = useStaticQuery(graphql`
    query MySiteQuery {
      site {
        siteMetadata {
          title
          slogan
          description
          author
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <div class="columns">
        <div class="column is-three-quarters">
          <S.ProfileTitle> {title} </S.ProfileTitle>
          <S.ProfileSlogan> {slogan} </S.ProfileSlogan>
          <S.ProfileDesc> {description} </S.ProfileDesc>
        </div>
        <div class="column">
          <ImageBanner/>
        </div>
      </div>
        
    </S.ProfileWrapper>
  )
}


export default Profile;