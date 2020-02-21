import React from "react"
import './m'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile/>
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>
        <div className="column is-four-fifths">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">This column is cool too!</p>
        </div>
      </div>
    </div>
  </Layout> 
)

export default IndexPage
