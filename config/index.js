module.exports = {
  //-- SITE SETTINGS -----
  author: "@ismailhashi",
  siteTitle: "Ismail Hashi Portfolio",
  siteShortTitle: "IH.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hey there! My name is Ismail Hashi, and I'm a software developer based in Waterloo.",
  siteUrl: "https://ismailhashi101.github.io",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Ismail Hashi", // SEO title syntax
  useCookieBar: true, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    darkTheme: {
      primary: "#000000",
      secondary: "#CDF3E1",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    lightTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ismailhashi",
    },
    {
      name: "Github",
      url: "https://www.github.com/ismailhashi101",
    },
    {
      name: "Goodreads",
      url: "https://www.goodreads.com/hashi",
    },
    {
      name: "Mail",
      url: "mailto:ismail.hashi101@gmail.com",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      useFileName: false,
      name: "Contact",
      fileName: "", // the file has to be placed inside the static folder at the root level
      url: "/#contact", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
}
