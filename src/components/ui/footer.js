//-----------------------------------------------------------------------------
// src/layout/lfooter.js
//-----------------------------------------------------------------------------
import React    from 'react'
import { Link } from 'gatsby'

//** import BloggerInfoSocialIcons from './blogger-info-social-icons'

///////////////////////////////////////////////////////////////////////////////
// TODO: 09/27/2018
// -  CODE FOR THE FOOTER LINKS IS DUPLICATE OF THE BloggerInfoSocialIcons
//    EXCEPT FOR THE MARGINS AND THE LINK COLORS. SHOULD BE ABLE TO PASS IN
//    SOME PROPERTIES TO REFACTOR INTO A SINGLE COMPONENT.
///////////////////////////////////////////////////////////////////////////////

/**
 * Footer to add to the bottom of the Layout for all pages on the site
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid row">
        <div className="col-12">
          <nav className="nav justify-content-center">
            <Link className = "nav-link" to = "/">         Home    </Link>
            <Link className = "nav-link" to = "/privacy">  Privacy </Link>
            <Link className = "nav-link" to = "/terms">    Terms   </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}