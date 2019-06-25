module.exports = {
  siteMetadata: {
    title: `HELLO`,
    description: `HELLO CODING GAME.`,
    author: `@flornt`,
    siteUrl: "https://PLOP324523462346234.COM",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerMode: "static",
        production: true,
        openAnalyzer: false,
        logLevel: "silent",
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
