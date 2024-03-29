//-----------------------------------------------------------------------------
// src/components/ui/navbar.js
//-----------------------------------------------------------------------------
import React    from 'react'
import { Link } from 'gatsby'

import Config   from '../../config/honeydone-config'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light navbar-background-color navbar-font">
      <Link to="/" className="navbar-brand">
        {Config.brand}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link 
            to              ="/" 
            className       = "nav-item nav-link" 
            activeClassName ="active"
          >
            Home
          </Link>
          <Link 
            to              = "/support" 
            className       = "nav-item nav-link"  
            activeClassName = "active"
          >
            Support
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
