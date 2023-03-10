// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run gridsome develop

module.exports = {
  siteName: "ZServices",
  siteUrl: 'https://www.zservices.tech',
  plugins: [
    {
      // Use the dangerous-html package as a plugin
      use: 'dangerous-html',
      options: {
        // Set any options for the plugin here
      }
    },
    {
      // Use the gridsome package as a plugin
      use: 'gridsome',
      options: {
        // Set any options for the plugin here
      }
    }
  ]
};