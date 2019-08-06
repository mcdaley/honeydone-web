//-----------------------------------------------------------------------------
// src/templates/page-layout.js
//-----------------------------------------------------------------------------
import React    from 'react'

import Layout   from '../components/ui/layout'

export default ({children}) => (
  <Layout>
    <div className="row">
      <div className="col-12">
        {children}
      </div>
    </div>
  </Layout>
)