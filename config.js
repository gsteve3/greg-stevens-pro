
const resumeRepoURL = 'https://github.com/GregSweats/jsonresume-theme-autumn';
const resumeSite = 'https://resume.stevens.pro'; // without Trailing Slash

module.exports = {
  siteTitle: 'Greg Stevens - Full-stack Web Developer, DevOps, Agile PM', // <title>
  description: 'Greg Stevens - Full-stack Web Developer, DevOps, Agile PM', // <title>
  manifestName: 'Greg Stevens',
  manifestShortName: 'GregSweats', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Greg Stevens',
  subHeading: 'A Pragmatic Full Stack Web Developer, DevOps Enthusiast, Agile PM, and Decent Leader',

  // Added CAREER_URL 2022-05-25 for `CareerLink.js`
  CAREER_URL: 'https://career.stevens.pro/?utm_campaign=career&utm_medium=website&utm_source=www.stevens.pro/career&utm_term=2022-08-25',

  RESUME_URL: resumeSite + '/?utm_campaign=career&utm_medium=website&utm_source=www.stevens.pro/resume&utm_term=2022-08-25',
  RESUME_PDF_URL: resumeSite + '/pdf?utm_campaign=career&utm_medium=website&utm_source=www.stevens.pro/resume&utm_term=2022-08-25',
  RESUME_PDF_URL_SHORT: '/resume/Greg Stevens Resume Short.pdf',
  // RESUME_PDF_URL_SHORT: '/resume/test.txt',
  // RESUME_PDF_URL_SHORT: resumeSite + '/pdf-2pager?utm_campaign=career&utm_medium=website&utm_source=www.stevens.pro/resume&utm_term=2022-08-25',

  RESUME_REPO_URL: resumeRepoURL,
  RESUME_JSON_URL: 'https://gist.githubusercontent.com/GregSweats/829870bd98a9844c3744a04699532552/raw/819e60fe23a14dcf2348688050394f8f602f98c0/resume.json',


  // Agile | Pragmatic | Full Stack Web Dev | DevOps | Agile PM
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'GitHub',
      url: 'https://github.com/GregSweats',
    },
    {
      style: 'brands',
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/DalyleDevOpsInc',
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
      url: 'mailto:hiregreg@stevens.pro',
    },
    {
      style: 'solid',
      icon: 'fa-phone',
      name: 'Phone',
      url: 'tel:+1 403.213.5644',
    },
  ],
};
