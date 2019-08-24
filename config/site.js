module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Jonathan Root', // Navigation and Site Title
  siteTitleAlt: 'Jonathan Root -  Project Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Jonathan Root', // short_name for manifest
  siteHeadline: 'Examples of my work as a UI/UX and Web Specialist', // Headline for schema.org JSONLD
  siteUrl: 'https://emilia.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Dark One-Page portfolio with cards & detailed project views',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'UA-47519312-4',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Your information
  avatar: '/logos/lekoarts.svg',
  name: 'Jonathan Root',
  location: 'Seattle',
  socialMedia: [
    {
      url: 'https://www.linkedin.com/in/jonathanroot/',
      name: 'LinkedIn',
    },
    {
      url: 'https://www.instagram.com/mrinstajonagram/',
      name: 'Instagram',
    },
    {
      url: 'https://github.com/jaroot32',
      name: 'Github',
    },
  ],
}