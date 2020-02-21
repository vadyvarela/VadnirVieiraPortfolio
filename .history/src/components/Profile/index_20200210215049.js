import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
// import { Container } from './styles';


const Profile = () => {
    const {
      site: { 
        siteMetadata: { 
          title, description, slogan 
        } 
      }
    }
}


const Profile = () => (
    <StaticQuery
        query={graphql`
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
        `}

        render={({site: { siteMetadata: { title, description, slogan } }}) => (
            <div className="Profile-wrapper">
                <h1> {title} </h1>
                <h2> {slogan} </h2>
                <p> {description} </p>
            </div>
        )}
    />
    
)

export default Profile;