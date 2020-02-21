import React from "react"
import "./mystyles.scss"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import BlogPost from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Meu Blog" />
    <BlogPost/>
    
  </Layout> 
)

export default IndexPage
