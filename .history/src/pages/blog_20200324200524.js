import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import "./mystyles.scss"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import BlogPost from "../components/PostItem"


const BlogPage = () => (
  return (
    <Layout>
      <SEO title="Meu Blog" />
      
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
