module.exports = {
  siteMetadata: {
    title: `Ömer Gülçiçek`,
    siteUrl: "http://omergulcicek.com",
    description: `Hayallerimin ve hedeflerimin arkasından koşmaya devam edeceğim. Sevdiğim işi yapıyorum, bu sayede hayatımın sonuna kadar bir gün bile çalışmam gerekmiyor; tutkunuzu bulun ve işiniz iş olmaktan çıksın.`,
    author: `@omergulcicek`,
  },
  plugins: [{
    resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-74400269-2",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        ssr: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`limelight`, `Rubik\:300,400,700,900`],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ömer Gülçiçek`,
        short_name: `omergulcicek`,
        description: `Hayallerimin ve hedeflerimin arkasından koşmaya devam edeceğim. Sevdiğim işi yapıyorum, bu sayede hayatımın sonuna kadar bir gün bile çalışmam gerekmiyor; tutkunuzu bulun ve işiniz iş olmaktan çıksın.`,
        lang: `tr`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        start_url: `/`,
        background_color: `#1b1b1b`,
        theme_color: `#2196f3`
      },
    },
  ],
}
