import React from "react"
import "./mystyles.scss"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import Hability from "../components/Hability"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile/>
    <Hability/>
    {/* <Projects/> */}
    
  </Layout> 
)

export default IndexPage
