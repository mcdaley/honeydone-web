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
    <div className="row marketing-container">
      <div className="col-12 col-sm-6">
        <div className="marketing-content">
          <h1 className="marketing-header">
            From honey-do to HoneyDone
          </h1>
          <p className="marketing-blurb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim as minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit incididunt
            voluptate velit esse cillum
          </p>
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="marketing-img-container">
          <Img 
            className = "d-block w-100" 
            fluid     = {data.homeScreenImage.childImageSharp.fluid} 
            alt       = "HoneyDone home screen" 
          />
        </div>
      </div>
    </div>

    <hr/>

    <div className="row marketing-container">
      <div className="col-12 col-sm-6">
        <div className="marketing-img-container">
          <Img 
            className = "d-block w-100" 
            fluid     = {data.checklistImage.childImageSharp.fluid} 
            alt       = "HoneyDone checklist" 
          />
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="marketing-content">
          <h1 className="marketing-header">
            HoneyDone To-Dos
          </h1>
          <p className="marketing-blurb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim as minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit incididunt
            voluptate velit esse cillum
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
    homeScreenImage: file(relativePath: {eq: "home-screen-01.png"}) {
      ...fluidHoneyDoneImage
    },
    checklistImage: file(relativePath: {eq: "groceries-checklist-01.png"}) {
      ...fluidHoneyDoneImage
    },
  }`