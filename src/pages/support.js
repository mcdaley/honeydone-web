//-----------------------------------------------------------------------------
// src/pages/support.js
//-----------------------------------------------------------------------------
import  React         from "react"

import  Layout        from '../components/ui/layout'

// Import bootstrap, so it is available on all the pages
import '../scss/honeydone-bootstrap.scss'

/**
 * Render the support page
 */
export default ({ data }) => (
  <Layout>
    <div className="row">
      <div className="col-12">
        <h1>HoneyDone Support</h1>
        
        <h2 className="support-question">
          How do I create a checklist?
        </h2>
        <p className="support-answer">
          To create a checklist, click on the <strong>"Create a List" </strong> 
           button on the home screen. Next, enter the checklist name and click 
          <strong> “Create” </strong> in the upper right corner. The app will 
          create the checklist and you are ready to start entering to-dos.
        </p>

        <h2 className="support-question">
          How do I edit a checklist?
        </h2>
        <p className="support-answer">
          To edit a checklist, navigate to the Home screen and 
          <strong> “Left Swipe” </strong> the checklist and click on the gear 
          icon. Currently, you can only edit the checklist name. After editing 
          the checklist name then click <strong>"Done"</strong> to save the changes 
          or <strong>"Cancel"</strong> to ignore the changes.
        </p>
        <p className="support-answer">
          In the future we will add the ability to share the list with other people and to organize checklists into folders.
        </p>

        <h2 className="support-question">
          How do I delete a checklist?
        </h2>
        <p className="support-answer">
          To edit a checklist, navigate to the Home screen and 
          <strong> “Left Swipe” </strong> the checklist and click on the gear icon. 
          Click on the <strong>"Delete Checklist"</strong> button at the bottom of the 
          settings page. <strong>Warning, this will delete the checklists and all to-dos in 
          the list and the checklist and to-dos cannot be restored!</strong>
        </p>

        <h2 className="support-question">
          How do I add to-dos to a checklist?
        </h2>
        <p className="support-answer">
          To add to-dos, click on the checklist name and enter the to-do in the 
          form input on the top of the screen and hit <strong> "return" </strong> 
          when done. The to-do will appear as the first incomplete to-do in the 
          checklist.
        </p>

        <h2 className="support-question">
          How do I view completed to-dos?
        </h2>
        <p className="support-answer">
          To see the completed to-dos, click on the <strong> "Show Completed To Dos" </strong> 
          button. This will toggle the display and show all the complete to-dos. 
          To hide the completed to-dos click on the <strong> "Hide Completed To Dos" </strong> 
          button.
        </p>

        <h2 className="support-question">
          How do I edit a to-do?
        </h2>
        <p className="support-answer">
          To edit a to-do, <strong> "Left Swipe" </strong> on the to-do and click 
          the view icon. On the to-do details screen you can change the 
          description, add a due date, add a contact, schedule an appointment, 
          and add a photograph from your library.
        </p>
        <p className="support-answer">
          The changes to the to-do are automatically saved when you click on 
          the back arrow icon at the top left of the screen
        </p>

        <h2 className="support-question">
          How do I delete a to-do?
        </h2>
        <p className="support-answer">
          To delete a to-do, <strong> "Left Swipe" </strong> on the to-do and 
          click on the trashcan icon. This will delete the to-do and all 
          the fields in the to-do. <strong>Warning, this operation cannot be 
          reversed!</strong>
        </p>
      </div>
    </div>
  </Layout>
)