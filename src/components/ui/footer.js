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
        <div className="col-5">
          <h5 className="footer-header">Navigation</h5>
          <nav className="nav flex-column">
            <Link to = "/">         Home    </Link>
            <Link to = "/about">    About   </Link>
            <Link to = "/privacy">  Privacy </Link>
            <Link to = "/terms">    Terms   </Link>
          </nav>
        </div>
        <div className="col-7">
          <h5 className="footer-header">HoneyDone</h5>
        </div>
      </div>
    </footer>
  )
}