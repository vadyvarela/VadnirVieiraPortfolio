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
                description
                author
              }
            }
          }
        `}

        render={data => (
        <div className="Profile-wrapper">
            <h1> {data.siste.siteMetadata.title} </h1>
            <h2> {data.siste.siteMetadata.title} </h2>
            <p> { data.siste.SiteMetadata.description } </p>
        </div>
        )}
    />
    
)

export default Profile;