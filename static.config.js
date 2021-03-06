// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org

export default {
  plugins: ['react-static-plugin-react-router'],
  silent: true,
  getSiteData: async ({ dev }) => ({
    siteTitle: 'Travis Neufeld',
  }),
}
