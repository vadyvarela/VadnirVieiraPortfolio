import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile/>
    <h1>Home</h1>
  </Layout> 
)

export default IndexPage
