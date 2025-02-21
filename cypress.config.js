const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://emoji-mart-one.vercel.app',
    experimentalStudio: true,
    fixturesFolder: false,
    supportFile: false,
  },
})
