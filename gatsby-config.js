module.exports = {
  siteMetadata: {
    title: "Bookmark Landing Page",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

// "gatsby-plugin-material-ui",
//{
// resolve: `gatsby-theme-material-ui`,
//   options: {
//     webFontsConfig: {
//       fonts: {
//         google: [
//           {
//             family: `Montserrat`,
//             variants: [`300`, `400`, `500`],
//           },
//         ],
//       },
//     },
//   },
// },
