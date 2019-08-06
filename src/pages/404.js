//-----------------------------------------------------------------------------
// src/pages/404.js
//-----------------------------------------------------------------------------
import React              from 'react'
import { Link }           from 'gatsby'

import Layout             from '../components/ui/layout'
import errorImg           from '../images/vintage-robot-404-error.jpg'

export default () => (
  <Layout>
    <div className="row">
      <div className="col-12">
        <div className="error-404-container">
          <Link to = "/" className="text-center">
            <img className  = "img-fluid"
             width          = "100%" 
             src            = {errorImg} 
            />
          </Link>  
        </div>
      </div>
    </div>
  </Layout>
)
