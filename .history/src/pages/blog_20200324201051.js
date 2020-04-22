import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import "./mystyles.scss"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import BlogPost from "../components/PostItem"


const BlogPage = () => (
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
    `
  )

  const PostList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Meu Blog" />
      {PostList.map(({ node: 
          { 
            frontmatter: { background, category, date, description, title },
            timeToRead
          } 
        }))
      }
        <BlogPost
          slug="/about/"
          category="Misc"
          date="30 de Julho de 2019"
          timeToRead="5"
          title="Diga não ao Medium: tenha sua própria plataforma"
          description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
        />
      
    </Layout> 
  )
)

export default BlogPage
