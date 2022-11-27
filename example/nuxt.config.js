module.exports = {
  rootDir: __dirname,

  buildModules: [
    { handler: require('../') },
    'bootstrap-vue/nuxt'
  ]
}
