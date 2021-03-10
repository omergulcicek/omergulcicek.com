module.exports = {
  siteMetadata: {
    title: `Ömer Gülçiçek`,
    author: `Ömer Gülçiçek`,
    description: `Hayallerimin ve hedeflerimin arkasından koşmaya devam edeceğim. Sevdiğim işi yapıyorum, bu sayede hayatımın sonuna kadar bir gün bile çalışmam gerekmiyor; tutkunuzu bulun ve işiniz iş olmaktan çıksın.`,
    siteUrl: "http://omergulcicek.com",
    social: {
      twitter: `omergulcicek`,
      github: `omergulcicek`,
      instagram: `omergulcicek`,
      linkedin: `omergulcicek`
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        ssr: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        plugins: [
          `gatsby-remark-images`,
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },

          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    'gatsby-remark-reading-time',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-74400269-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ömer Gülçiçek`,
        description: `Hayallerimin ve hedeflerimin arkasından koşmaya devam edeceğim. Sevdiğim işi yapıyorum, bu sayede hayatımın sonuna kadar bir gün bile çalışmam gerekmiyor; tutkunuzu bulun ve işiniz iş olmaktan çıksın.`,
        lang: `tr`,
        display: `standalone`,
        icons: [
          {
            "src": "/img/omergulcicek.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/img/omergulcicek.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#4360ff`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
