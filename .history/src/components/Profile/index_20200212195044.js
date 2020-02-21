import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

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
    <div className="Profile-wrapper">
        <S.ProfileTitle> {title} </S.ProfileTitle>
        <S.ProfileSlogan> {slogan} </S.ProfileSlogan>
        <S.ProfileDesc> {description} </S.ProfileDesc>
    </div>
  )
}


export default Profile;