import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import "./mystyles.scss"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import BlogPost from "../components/PostItem"


const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                background
                category
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                dexcription
                title
              }
              timeToRead
            }
          }
        }
      }
    `)
  

  const PostList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Meu Blog" />
      <S.Title>Meus Posts
            <span> Uma longa caminhada começa com o primeiro passo "Lao Tsé" </span>
      </S.Title>
      {PostList.map(({ 
        node: { 
            frontmatter: { background, category, date, description, title },
            timeToRead
          } 
        }) => (
          <BlogPost
            slug="/about/"
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        ))}
      
    </Layout> 
  )
}

export default BlogPage
