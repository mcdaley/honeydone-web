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
      <div className="col-12 bg">
        <div className="row">  
          <div className="col-12 col-sm-6">
            <div className="marketing-content">
              <h1 className="tagline-header">
                From honey-do to HoneyDone
              </h1>
              <p className="tagline-paragraph">
                HoneyDone is a simple to-do and checklist application that 
                helps you get stuff done.
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
            Checklists and To-Dos
          </h2>
          <p className="marketing-blurb">
            Create checklists for your weekly errands, such as groceries
            or weekly chores.Since we repeat 80% - 90% of our weekly chores,
            HoneyDone lets you reuse checklists every week by marking the
            completed items as incomplete instead of creating a new list
            with the same items every week.
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
            Actionable To-Dos
          </h2>
          <p className="marketing-blurb">
            Create checklists for seasonal to-dos such as all of your Fall
            or Spring house cleaning or maintenance. Can't remember who you
            hired last year to clean your windows or trim your trees last
            Fall? With HoneyDone just add the window cleaner, tree trimmer,
            or handyman as a contact to your to-do. HoneyDone to-dos are 
            fully integrated with your phone contacts. You can even call,
            email, or text them from HoneyDone.
          </p>
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
  }`