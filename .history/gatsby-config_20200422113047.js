module.exports = {
  siteMetadata: {
    title: `Vadnir Vieira`,
    age: '24 Anos',
    profession: 'Fullstack Developer',
    description: `Sou Completamente viciado e apaixonado pelo mundo Web. Trabalho com Desenvolvimento web, SEO e Divulgação. Desenvolvo projetos voltados para o posicionamento e fortalecimento do cliente na web, através da análise concorrencial e das melhores estratégias, utilizando sempre tecnologias avançadas e ideias inovadoras.`,
    author: `@vadyvarela`,
    siteUrl: `https://vadnirvieira.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vadnir Vieira`,
        short_name: `Vadnir`,
        start_url: `/`,
        background_color: `#101010`,
        theme_color: `#101010`,
        display: `minimal-ui`,
        icon: `src/images/vady.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `concert one`,
          `dosis\:300,400,600,700`,
          `poppins\:400,600,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // `gatsby-plugin-netlify-cms`,
  ],
}
