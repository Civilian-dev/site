/**
 * Eleventy User Config
 * @param {import('@11ty/eleventy/src/UserConfig')} config
 */
module.exports = (config) => {
  config.addGlobalData({
    titlePrefix: 'Civilian.dev Articles'
  })
  return {
    dir: {
      // relative to root
      input: 'markdown',
      output: 'html',
      // relative to input
      includes: '../includes',
      layouts: '../layouts',
      data: '../data'
    },
    markdownTemplateEngine: 'njk'
  }
}
