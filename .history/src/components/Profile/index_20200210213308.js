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
    />
    <div className="Profile-wrapper">
        <h1> Vsolutions</h1>
        <h2> Solução Inteligente para o seu negocio </h2>
        <p> A Vsolutions é uma Empresa de Desenvolvimento Web Caboverdiana, que desenvolve soluções criativas , inovadoras e profissionais para os seus clientes. </p>
    </div>
)

export default Profile;