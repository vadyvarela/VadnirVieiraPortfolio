import React from 'react';
import { StaticQuery, graphql } from "gatsby";
// import { Container } from './styles';

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

        render={data => (
        <div className="Profile-wrapper">
            <h1> {data.site.siteMetadata.title} </h1>
            <h2> {data.site.siteMetadata.slogan} </h2>
            <p> {data.site.SiteMetadata.description} </p>
        </div>
        )}
    />
    
)

export default Profile;