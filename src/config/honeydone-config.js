//-----------------------------------------------------------------------------
// src/config/honeydone-config.js
//-----------------------------------------------------------------------------

const SITE_URL    = `https://www.honeydone.fyi`
const SITE_TITLE  = `HoneyDone`

const Config = {
  title:        `${SITE_TITLE}: Personal Organizer`,
  siteUrl:      SITE_URL,
  baseUrl:      SITE_TITLE,
  description:  `From honey-do to HoneyDone`,
  logo:         `${SITE_URL}/icons/favicon-32x32.png`,
  brand:        `HoneyDone`,

  pages: {
    app: {
      title:        `${SITE_TITLE}: Personal Organizer`,
      description:  `HoneyDone app helps you get organized`,
      url:          `${SITE_URL}/app`,
    },
    about: {
      title:        `${SITE_TITLE}: About Mike Daley - Product Manager and Developer`,
      description:  `About HoneyDone`,
      url:          `${SITE_URL}/about`,
    },
    contact: {
      title:        `${SITE_TITLE}: Contact Mike Daley - Product Manager and Developer`,
      description:  `Contact Mike Daley - Product Manager and Developer`,
      url:          `${SITE_URL}/contact`,
    },
  }
}

// Export the Config object
export default Config