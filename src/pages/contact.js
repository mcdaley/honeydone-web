//-----------------------------------------------------------------------------
// src/pages/contact.js
//-----------------------------------------------------------------------------
import  React         from "react"

import  Layout        from '../components/ui/layout'

// Import bootstrap, so it is available on all the pages
import '../scss/honeydone-bootstrap.scss'

export default ({ data }) => (
  <Layout>
    <h1>Contact</h1>
    <div className="email-div">
      <a  
        href  = "mailto:support@mcdaley.com"
        rel   = "noopener noreferrer"
      >
        Email Us
      </a>
    </div>
  </Layout>
)