module.exports = {
  siteMetadata: {
    title: `rizome.io | Cardano Blockchain Solutions`,
    description: `Architecture and Infrastructure for Distributed Ledger technologies. Cardano blockchain development.`,
    keywords: 'blockchain, cardano, stake, stakepool, lucid, delegate, secure, mining, staking, bitcoin',
    author: `Andrej Novikov`,
    siteUrl: `https://www.rizome.io/`,
    social: [
      { name: 'website', url: 'https://rizome.io' },
      { name: 'github', url: 'https://github.com/rizome-io' },
      { name: 'email', url: 'mailto:id@rizome.io' },
    ]
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-web-font-loader",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
};
