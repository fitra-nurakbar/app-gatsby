module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Web dev portfolio`,
    contact: `fitranurakbar378@gmail.com`,
    copyright: `This website is copyright 2022 fitra nurakbar`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
}
