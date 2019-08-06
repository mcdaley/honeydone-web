//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import  React from "react"

import  Layout from '../components/ui/layout'

// Import bootstrap, so it is available on all the pages
import '../scss/honeydone-bootstrap.scss'

export default () => (
  <Layout>
    <div className="row">
      <h1>HoneyDone Home Page</h1>
      <p>Lorem ipsum...</p>
    </div>
  </Layout>
)
