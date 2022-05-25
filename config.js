module.exports = {
  siteTitle: 'Greg Stevens - Full-stack Web Developer, DevOps, Agile PM', // <title>
  manifestName: 'Spectral',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-spectral/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Greg Stevens',
  subHeading: 'A Pragmatic Full Stack Web Developer, DevOps Enthusiast, Agile PM, and Decent Leader',

  // Added CAREER_URL 2022-05-25 for `CareerLink.js`
  CAREER_URL: "https://career.stevens.pro/?utm_campaign=career&utm_medium=website&utm_source=www.stevens.pro/career&utm_term=test-term",

  // Agile | Pragmatic | Full Stack Web Dev | DevOps | Agile PM
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/sqrl-ca',
    },
    {
      style: 'brands',
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/greg403',
    },
    {
      style: 'brands',
      icon: 'fa-instagram',
      name: 'Instagram',
      url: 'https://instagram.com/diabefit',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:greg@stevens.pro',
    },
    {
      style: 'solid',
      icon: 'fa-phone',
      name: 'Phone',
      url: 'tel:+1 403.710.8455',
    },
  ],
};
