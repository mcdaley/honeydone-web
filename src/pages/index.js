//-----------------------------------------------------------------------------
// src/pages/index.js
//-----------------------------------------------------------------------------
import  React         from "react"
import { graphql }    from 'gatsby'
import Img            from 'gatsby-image'

// Import bootstrap, so it is available on all the pages
import '../scss/honeydone-bootstrap.scss'

import  Layout        from '../components/ui/layout'

export default ({ data }) => (
  <Layout>
    <div className="row">
      <div className="col-12 green-bg">
        <div className="row">  
          <div className="col-12 col-sm-6">
            <div className="marketing-content">
              <h1 className="tagline-header">
                From "Honey Do" to HoneyDone
              </h1>
              <p className="tagline-paragraph">
                The super simple, smart ‘to do’ app that helps you get stuff done.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="marketing-img-container">
              <Img 
                className = "d-block w-100" 
                fluid     = {data.homePageImage.childImageSharp.fluid} 
                alt       = "HoneyDone home screen" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row marketing-container">
      <div className="col-12 col-sm-6">
        <div className="marketing-content">
          <h2 className="marketing-header">
            Set up in a Snap
          </h2>
          <p className="marketing-blurb">
            Regular weekly tasks, annual maintenance, or special seasonal 
            to-dos: setting up and saving HoneDone lists is super simple 
            and done in a snap.
          </p>

          <h2 className="marketing-header" style={{marginTop: '3.00rem'}}>
            Weekly Tasks on Autopilot
          </h2>
          <p className="marketing-blurb">
            We repeat 80-90% of our weekly chores.  HoneyDone lets you 
            quickly set-up and save your go-to checklists for easy access.
          </p>
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="marketing-img-container">
          <Img 
            className = "d-block w-100" 
            fluid     = {data.checklistImage.childImageSharp.fluid} 
            alt       = "Groceries checklist" 
            imgStyle  = {{width: '100%', height: '100%'}}
          />
        </div>
      </div>
    </div>

    <hr/>

    
    <div className="row marketing-container">
      <div className="col-12 col-sm-6">
        <div className="marketing-img-container" style={{paddingTop: 0}}>
          <Img 
            className = "d-block w-100" 
            fluid     = {data.contactsImage.childImageSharp.fluid} 
            alt       = "HoneyDone checklist" 
          />
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="marketing-content">
          <h2 className="marketing-header">
            Task Helpers at your Fingertips
          </h2>
          <p className="marketing-blurb">
            Can’t remember who you hired last year to trim the trees or 
            clean the gutters? With HoneyDone, contact information 
            easily integrates with your to-do tasks.  From reviewing 
            to do tasks to calling, emailing, or texting your 
            task helper – it’s now just a click away.
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12 dark-bg">
        <div className="row marketing-container">
          <div className="col-12 col-sm-6">
            <div className="marketing-content">
              <h2 className="marketing-header">
                Use HoneyDone to track and knockout:
              </h2>
              <ul className="benefits">
                <li> Grocery lists</li>
                <li> Household tasks</li>
                <li> School supply lists </li>
                <li> After school activity drop off and pickup schedules </li>
                <li> Annual household maintenance (window washing, gutter cleaning, and tree trimming)</li>
                <li> Annual doctor appointments and checkups </li>
                <li> Holiday shopping and much more...</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="marketing-img-container">
              <Img 
                className = "d-block w-100" 
                fluid     = {data.checklistsScreenImage.childImageSharp.fluid} 
                alt       = "Groceries checklist" 
                imgStyle  = {{width: '100%', height: '100%'}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
)


//
// GraphQL for home page images
//

// Fragment for thin background images
export const fluidHoneyDoneImage = graphql`
  fragment fluidHoneyDoneImage on File {
    childImageSharp {
      fluid(maxWidth:400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const homePageQuery = graphql`
  query { 
    homePageImage: file(relativePath: {eq: "honeydone-home-page.png"}) {
      ...fluidHoneyDoneImage
    },
    contactsImage: file(relativePath: {eq: "honeydone-contacts-todo.png"}) {
      ...fluidHoneyDoneImage
    },
    checklistImage: file(relativePath: {eq: "groceries-short.png"}) {
      ...fluidHoneyDoneImage
    },
    checklistsScreenImage: file(relativePath: {eq: "honeydone-checklists.png"}) {
      ...fluidHoneyDoneImage
    },
  }`